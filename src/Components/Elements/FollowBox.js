import React from 'react'
import UserAvatar from './UserAvatar';
import useDate from '../../Hooks/useDate';
import styles from './FollowBox.module.css';

const FollowBox = ({ follow, type }) => {

  let verb;
  if (type === "follower") {
    verb = "Segue"
  } else if (type === "following"){
    verb = "Seguido"
  }

  const { convertDate } = useDate();

  return (
    <div className={styles.followBox}>
      <UserAvatar image={follow.image} username={follow.username} id={follow.id} />
      <span>{verb} desde<br />{convertDate(follow.createdAt)}</span>
    </div>
  )
}

export default FollowBox