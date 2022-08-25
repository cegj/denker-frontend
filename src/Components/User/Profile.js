import React from 'react'
import { useParams } from 'react-router-dom'
import UserBox from './UserBox';
import { Routes, Route } from 'react-router-dom';
import UserDenkes from './UserDenkes';
import UserFollowers from './UserFollowers';
import UserFollowings from './UserFollowings';
import { GET_USER_BY_ID } from '../../API';
import useFetch from '../../Hooks/useFetch';
import Loading from '../Elements/Loading';
import Error from '../Elements/Error';

const Profile = () => {

  const params = useParams();
  const id = params.id;
  const {request, loading, error} = useFetch();
  const [user, setUser] = React.useState(null);
  // const [updateFollowers, setUpdateFollowers] = React.useState(false);

  React.useEffect(() => {
    async function fetchUser(){
        const {url, options} = GET_USER_BY_ID(id);
        const {response, json} = await request(url, options);
        if (response.ok) setUser(json.user)
      };
      fetchUser()
  }, [request, id])

  if (error) return <Error error={error} />
  if (loading) return <Loading />
  if (user)
  return (
    <div className="anime">
      <UserBox user={user} />
      <Routes>
        <Route path="/" end element={<UserDenkes userId={id}/>}></Route>
        <Route path="/followers" element={<UserFollowers userId={id} />}></Route>
        <Route path="/following" element={<UserFollowings userId={id} />}></Route>
      </Routes>
    </div>
  )
  else return null;
}

export default Profile