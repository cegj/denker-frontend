import React from 'react'
import styles from './UserFollows.module.css';
import FollowBox from '../Elements/FollowBox';
import { GET_FOLLOWINGS } from '../../API';
import useFetch from '../../Hooks/useFetch';

const UserFollowings = ({userId}) => {

  const [following, setFollowing] = React.useState(null)
  const {request} = useFetch()

  React.useEffect(() => {
    async function getFollowings(){
        const {url, options} = GET_FOLLOWINGS(userId);
        const {response, json} = await request(url, options);
        if (response.ok) setFollowing(json.followings)
      };
      getFollowings()
  }, [request, userId])

  if (following)
  return (
    <section className={`anime ${styles.follows}`}>
    <h2>Seguindo</h2>
    <div>
      {following.map((following) => {
        return (
          <FollowBox key={following.id} type="following" id={following.id} follow={following} />
        )})}
    </div>
    </section>
  )
  else return null;
}

export default UserFollowings