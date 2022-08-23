import React from 'react'
import DenkeForm from '../Denke/DenkeForm'
import { GET_DENKES } from '../../API'
import useFetch from '../../Hooks/useFetch'
import Error from '../Elements/Error'
import DenkeBox from '../Denke/DenkeBox'

const Timeline = () => {

  const token = window.localStorage.getItem('token');
  const [formSent, setFormSent] = React.useState(false);
  const [denkes, setDenkes] = React.useState(null);
  const {loading, error, request} = useFetch();

  React.useEffect(() => {
    async function fetchDenkes(){
      const {url, options} = GET_DENKES(token);
      const {response, json} = await request(url, options);
      if (response.ok) setDenkes(json.denkes)
    }
    fetchDenkes()
  }, [request, token, formSent])

  return (
    <div className="anime">
      <DenkeForm setFormSent={setFormSent}/>
      {error && <Error error={error} />}
      {loading && <div className="loading"></div>}
      {denkes && denkes.length !== 0 && denkes.map((denke) => {
        return <DenkeBox key={denke.id} denke={denke} type="main" />
      })}
    </div>
  )
}

export default Timeline