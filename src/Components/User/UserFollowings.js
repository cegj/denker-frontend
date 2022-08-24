import React from 'react'
import styles from './UserFollows.module.css';
import FollowBox from '../Elements/FollowBox';

const UserFollowings = ({followings}) => {

  if (followings)
  return (
    <section className={`anime ${styles.follows}`}>
    <h2>Seguindo</h2>
    <div>
      {followings.map((following) => {
        return (
          <FollowBox key={following.id} type="following" id={following.id} follow={following} />
        )})}
    </div>
    </section>
  )
  else return null;
}

export default UserFollowings