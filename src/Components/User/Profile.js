import React from 'react'
import { useParams } from 'react-router-dom'
import UserBox from './UserBox';
import { UserContext } from '../../Context/UserContext';
import { GET_USER_DENKES } from '../../API';
import useFetch from '../../Hooks/useFetch';
import Error from '../Elements/Error';
import DenkeBox from '../Denke/DenkeBox';

const Profile = () => {

  const {userData} = React.useContext(UserContext);
  const params = useParams();
  const id = params.id;
  const [denkes, setDenkes] = React.useState(null);
  const {loading, error, request} = useFetch();

  React.useEffect(() => {
    async function fetchDenkes(){
      const {url, options} = GET_USER_DENKES(id);
      const {response, json} = await request(url, options);
      if (response.ok) setDenkes(json.denkes)
    }
    fetchDenkes()
  }, [request, id])

  return (
    <div className="anime">
      <UserBox userId={id ? id : userData.user.id}/>
      {error && <Error error={error} />}
      {loading && <div className="loading"></div>}
      {denkes && denkes.length !== 0 && denkes.map((denke) => {
        return <DenkeBox key={denke.id} denke={denke} type="main" showAvatar={false} />
      })}
    </div>
  )
}

export default Profile