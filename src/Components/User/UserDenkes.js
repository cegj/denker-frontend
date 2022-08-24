import React from 'react'
import { GET_USER_DENKES } from '../../API';
import useFetch from '../../Hooks/useFetch';
import DenkeBox from '../Denke/DenkeBox';
import Error from '../Elements/Error';
import styles from './UserDenkes.module.css'

const UserDenkes = ({userId}) => {

  const [denkes, setDenkes] = React.useState(null);
  const {loading, error, request} = useFetch();

  React.useEffect(() => {
    async function fetchDenkes(){
      const {url, options} = GET_USER_DENKES(userId);
      const {response, json} = await request(url, options);
      if (response.ok) setDenkes(json.denkes)
    }
    fetchDenkes()
  }, [request, userId])

  if (error) return <Error error={error} /> 
  if (loading) return <div className="loading"></div> 
  if (denkes && denkes.length !== 0)
  return (
    <section className={styles.userDenkes}>
      <h2>Denkes</h2>
      {denkes.map((denke) => {
        return <DenkeBox key={denke.id} denke={denke} type="main" showAvatar={false} />
      })}
    </section>
  )
}

export default UserDenkes