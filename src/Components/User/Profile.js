import React from 'react'
import { useParams } from 'react-router-dom'
import UserBox from './UserBox';
import { UserContext } from '../../Context/UserContext';
import { Routes, Route } from 'react-router-dom';
import UserDenkes from './UserDenkes';
import UserFollowers from './UserFollowers';
import UserFollowings from './UserFollowings';

const Profile = () => {

  const {userData} = React.useContext(UserContext);
  const params = useParams();
  const id = params.id;

  return (
    <div className="anime">
      <UserBox userId={id ? id : userData.user.id}/>
      <Routes>
        <Route path="/" end element={<UserDenkes userId={id ? id : userData.user.id}/>}></Route>
        <Route path="/followers" element={<UserFollowers />}></Route>
        <Route path="/following" element={<UserFollowings />}></Route>
      </Routes>
    </div>
  )
}

export default Profile