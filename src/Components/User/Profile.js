import React from 'react'
import { useParams } from 'react-router-dom'
import DenkesList from '../Denke/DenkesList';
import UserBox from './UserBox';
import { UserContext } from '../../Context/UserContext';

const Profile = () => {

  const {userData} = React.useContext(UserContext)
  const params = useParams();
  const id = params.id;

  return (
    <div className="anime">
      <UserBox userId={id ? id : userData.user.id}/>
      <DenkesList userId={id ? id : userData.user.id} showAvatar={false}/>
    </div>
  )
}

export default Profile