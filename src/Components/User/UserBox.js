import React from 'react'
import { NavLink } from 'react-router-dom';
import useDate from '../../Hooks/useDate';
import FollowBtn from '../Elements/FollowBtn';
import UserAvatar from '../Elements/UserAvatar';
import styles from './UserBox.module.css'
import { Link } from 'react-router-dom';
import { GET_FOLLOWERS, GET_FOLLOWINGS } from '../../API';
import useFetch from '../../Hooks/useFetch';

const UserBox = ({user}) => {

  const {request} = useFetch()
  const {convertDate} = useDate();
  const totalFollowers = React.useRef(null);
  const totalFollowing = React.useRef(null);
  const [followers, setFollowers] = React.useState(null);
  const [following, setFollowing] = React.useState(null);

  const getFollowers = React.useCallback(async(userId) => {
    const {url, options} = GET_FOLLOWERS(userId);
    const {response, json} = await request(url, options);
    if (response.ok) setFollowers(json.followers)
  }, [request])

  const getFollowing = React.useCallback(async(userId) => {
    const {url, options} = GET_FOLLOWINGS(userId);
    const {response, json} = await request(url, options);
    if (response.ok) setFollowing(json.followings)
  }, [request])

  React.useEffect(() => {
      getFollowers(user.id)
  }, [request, user.id, getFollowers])

  React.useEffect(() => {
      getFollowing(user.id)
  }, [request, user.id, getFollowing])

  React.useEffect(() =>{
    if (followers && following){
      totalFollowers.current.innerText = followers.length;
      totalFollowing.current.innerText = following.length;
    }
  },[following, followers])

  if (user)
  return (
    <section className={`${styles.userBox} 'anime'`}>
      <UserAvatar image={user.image} username={user.username} id={user.id} />
      <div className={styles.userInfoContent}>
        <h1><Link to={`/user/${user.id}`}>{user.name}</Link></h1>
        <span>{user.email}</span>
        <span>Denker desde {convertDate(user.createdAt)}</span>
        <div className={styles.userNav}>
          <NavLink to={`/user/${user.id}`} end>Denkes</NavLink>
          <NavLink to={`/user/${user.id}/followers`}><span ref={totalFollowers}>0</span> seguidores</NavLink>
          <NavLink to={`/user/${user.id}/following`}><span ref={totalFollowing}>0</span> seguindo</NavLink>
        </div>
      </div>
      <div className={styles.buttonContainer}>
        <FollowBtn followers={followers} id={user.id} getFollowers={getFollowers}/>
      </div>
    </section>
  )
  else return null;
}

export default UserBox