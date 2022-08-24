import React from 'react'
import { useParams } from 'react-router-dom'
import UserBox from './UserBox';
// import { UserContext } from '../../Context/UserContext';
import { Routes, Route } from 'react-router-dom';
import UserDenkes from './UserDenkes';
import UserFollowers from './UserFollowers';
import UserFollowings from './UserFollowings';
import { GET_USER_BY_ID, GET_FOLLOWERS, GET_FOLLOWINGS } from '../../API';
import useFetch from '../../Hooks/useFetch';
import Loading from '../Elements/Loading';
import Error from '../Elements/Error';

const Profile = () => {

  // const {userData} = React.useContext(UserContext);
  const params = useParams();
  const id = params.id;
  const {request, loading, error} = useFetch();
  const [user, setUser] = React.useState(null);
  const [followers, setFollowers] = React.useState(null);
  const [following, setFollowing] = React.useState(null);
  const [updateFollowers, setUpdateFollowers] = React.useState(false);

  React.useEffect(() => {
    async function fetchUser(){
        const {url, options} = GET_USER_BY_ID(id);
        const {response, json} = await request(url, options);
        if (response.ok) setUser(json.user)
      };
      fetchUser()
  }, [request, id])

  React.useEffect(() => {
    async function getFollowers(){
        const {url, options} = GET_FOLLOWERS(id);
        const {response, json} = await request(url, options);
        if (response.ok) setFollowers(json.followers)
      };
      getFollowers()
  }, [request, id])

  React.useEffect(() => {
    async function getFollowings(){
        const {url, options} = GET_FOLLOWINGS(id);
        const {response, json} = await request(url, options);
        if (response.ok) setFollowing(json.followings)
      };
      getFollowings()
  }, [request, id])

  React.useEffect(() => {
    if (updateFollowers){
      async function getFollowers(){
        const {url, options} = GET_FOLLOWERS(id);
        const {response, json} = await request(url, options);
        if (response.ok) setFollowers(json.followers)
      };
      getFollowers()
      setUpdateFollowers(false)    
    }
  }, [id, request, updateFollowers])

  if (error) return <Error error={error} />
  if (loading) return <Loading />
  if (user)
  return (
    <div className="anime">
      <UserBox user={user} following={following} followers={followers} setUpdateFollowers={setUpdateFollowers}/>
      <Routes>
        <Route path="/" end element={<UserDenkes userId={id}/>}></Route>
        <Route path="/followers" element={<UserFollowers followers={followers} />}></Route>
        <Route path="/following" element={<UserFollowings followings={following} />}></Route>
      </Routes>
    </div>
  )
  else return null;
}

export default Profile