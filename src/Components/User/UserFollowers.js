import React from 'react'
import styles from './UserFollows.module.css';
import FollowBox from '../Elements/FollowBox';

const UserFollowers = ({followers}) => {

  if (followers)
  return (
    <section className={`anime ${styles.follows}`}>
    <h2>Seguidores</h2>
    <div>
      {followers.map((follower) => {
        return (
          <FollowBox key={follower.id} type="follower" id={follower.id} follow={follower} />
        )})}
    </div>
    </section>
  )
  else return null;
}

export default UserFollowers