import React from 'react'
import styles from './UserFollows.module.css';
import FollowBox from '../Elements/FollowBox';
import { GET_FOLLOWERS } from '../../API';
import useFetch from '../../Hooks/useFetch';

const UserFollowers = ({userId}) => {

  const [followers, setFollowers] = React.useState(null)
  const {request} = useFetch()

  React.useEffect(() => {
    async function getFollowers(){
        const {url, options} = GET_FOLLOWERS(userId);
        const {response, json} = await request(url, options);
        if (response.ok) setFollowers(json.followers)
      };
      getFollowers()
  }, [request, userId])

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