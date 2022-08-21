import React from 'react'
import { GET_DENKES, GET_USER_DENKES } from '../../API';
import useFetch from '../../Hooks/useFetch'
import DenkeBox from './DenkeBox';
import Error from '../Elements/Error';

const DenkesList = ({userId, showAvatar = true}) => {

  let id = null;
  let token = null;
  if (userId) id = userId;
  else token = window.localStorage.getItem('token');

  console.log('Id', id)

  const {data, loading, error, request} = useFetch();

  React.useEffect(() => {
    async function fetchDenkes(){
      if (id){
        const {url, options} = GET_USER_DENKES(id);
        await request(url, options);
        console.log('aqui')
      } else if(token) {
        const {url, options} = GET_DENKES(token);
        await request(url, options);
        console.log('embaixo')
      }
    }
    fetchDenkes()
  }, [request, id, token])
  
  if (error) return <Error error={error} />
  if (loading) return <div className="loading"></div>
  if (data && Object.keys(data.denkes).length !== 0)
  return (
    <section>
      {data.denkes.map((denke) => {
        return <DenkeBox key={denke.id} denke={denke} showAvatar={showAvatar}/>
      })}
    </section>
  )
  else return null;
}

export default DenkesList