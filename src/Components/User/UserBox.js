import React from 'react'
import { NavLink } from 'react-router-dom';
import useDate from '../../Hooks/useDate';
import FollowBtn from '../Elements/FollowBtn';
import UserAvatar from '../Elements/UserAvatar';
import styles from './UserBox.module.css'

const UserBox = ({user, following, followers, setUpdateFollowers}) => {

  const {convertDate} = useDate();
  const totalFollowers = React.useRef(null);
  const totalFollowing = React.useRef(null);

  React.useEffect(() =>{
    totalFollowers.current.innerText = followers.length;
    totalFollowing.current.innerText = following.length;
  },[following, followers])

  if (user)
  return (
    <section className={`${styles.userBox} 'anime'`}>
      <UserAvatar image={user.image} username={user.username} id={user.id} />
      <div className={styles.userInfoContent}>
        <h1>{user.name}</h1>
        <span>{user.email}</span>
        <span>Denker desde {convertDate(user.createdAt)}</span>
        <div className={styles.userNav}>
          <NavLink to={`/user/${user.id}`} end>Denkes</NavLink>
          <NavLink to="followers"><span ref={totalFollowers}>0</span> seguidores</NavLink>
          <NavLink to='following'><span ref={totalFollowing}>0</span> seguindo</NavLink>
        </div>
      </div>
      <div className={styles.buttonContainer}>
        <FollowBtn followers={followers} setUpdateFollowers={setUpdateFollowers} id={user.id}/>
      </div>
    </section>
  )
  else return null;
}

export default UserBox