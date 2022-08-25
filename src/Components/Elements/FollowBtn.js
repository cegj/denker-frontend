import React from 'react'
import styles from './FollowBtn.module.css'
import Button from './Button'
import { UserContext } from '../../Context/UserContext'
import { DELETE_FOLLOW, POST_FOLLOW } from '../../API'
import useFetch from '../../Hooks/useFetch'

const FollowBtn = ({id, followers, getFollowers}) => {

  const {loggedIn, userData} = React.useContext(UserContext);
  const {request} = useFetch();
  const token = window.localStorage.getItem('token')
  const [userFollows, setUserFollows] = React.useState(false);
  const [isCurrentUser, setIsCurrentUser] = React.useState(false)
  const buttonText = React.useRef(null);

  React.useEffect(() => {
    setUserFollows(false)
    setIsCurrentUser(false)
  }, [id])

  React.useEffect(()=> {
    if (loggedIn && id === userData.user.id) setIsCurrentUser(true)
    else setIsCurrentUser(false)
  }, [id, loggedIn, userData])

  React.useEffect(() => {
    if (loggedIn && !isCurrentUser){
      if (followers && followers.length !== 0)
      followers.forEach((follow) => {
        if (follow.id === userData.user.id){
          setUserFollows(true)
          return
        }
      })}}, [followers, isCurrentUser, loggedIn, userData])

    React.useEffect(() => {
      console.log(userFollows)
      if (buttonText.current){
        if (userFollows === true) buttonText.current.innerText = 'Deixar de seguir'
        if (userFollows === false) buttonText.current.innerText = 'Seguir'  
      }
      }, [userFollows, buttonText])
  
  async function handleClick(){
    if (userFollows){
      async function unfollowUser(){
        const {url, options} = DELETE_FOLLOW(id, token)
        const {response} = await request(url, options)
        if (response.ok){
          setUserFollows(false)
          getFollowers(id)
        }
      }
      unfollowUser()
    } else {
      async function followUser(){
        const {url, options} = POST_FOLLOW(id, token)
        const {response} = await request(url, options)
        if (response.ok) {
          setUserFollows(true)
          getFollowers(id);
        }
      }
      followUser()
    }  
  }

  if (!isCurrentUser && loggedIn)
  return (
  <div className={styles.buttonContainer}>
    <Button onClick={handleClick} unfilled><span ref={buttonText}></span></Button>
  </div>
)
else return null;
}

export default FollowBtn