import React from 'react'
import { useParams } from 'react-router-dom';
import useFetch from '../../Hooks/useFetch';
import { GET_DENKE } from '../../API';
import Error from '../Elements/Error';
import DenkeBox from './DenkeBox';

const DenkePage = () => {

  const params = useParams();

  const {data, loading, error, request} = useFetch();

  const id = params.id;

  React.useEffect(() => {
    async function getDenke(){
      const {url, options} = GET_DENKE(id);
      await request(url, options);
    }
    getDenke();
  }, [id, request])

  if (loading) return <div className="loading"></div>
  if (error) return <Error error={error} />
  if (data)
  return (
    <DenkeBox denkeData={data} fullLayout={true}/>
  )
  else return null
}

export default DenkePage