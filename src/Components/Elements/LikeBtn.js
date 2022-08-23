import React from 'react'
import {ReactComponent as Heart} from '../../Assets/icons/heart-fill.svg'
import { UserContext } from '../../Context/UserContext'
import { DELETE_LIKE, GET_DENKE_LIKES, POST_LIKE } from '../../API'
import useFetch from '../../Hooks/useFetch'
import styles from './LikeBtn.module.css'

const LikeBtn = ({denkeId}) => {

  const {loggedIn} = React.useContext(UserContext)

  let token;
  if (loggedIn) token = window.localStorage.getItem('token')

  const {userData} = React.useContext(UserContext)
  const {request} = useFetch();
  const likeNumber = React.useRef(null)
  const [likes, setLikes] = React.useState(null)
  const [userLikes, setUserLikes] = React.useState(false);

  // Get and set denke likes
  React.useEffect(() => {
    async function getDenkeLikes(){
      const {url, options} = GET_DENKE_LIKES(denkeId);
      const {json, response} = await request(url, options);
      if (response.ok) setLikes(json.denkeLikes)
    }
    getDenkeLikes();
  }, [denkeId, request, userLikes])

  // Put total denke likes at DOM
  React.useEffect(() => {
    if(likes) likeNumber.current.innerText = likes.length;
  }, [likes, userLikes])

  // Check and set if user likes the denke
  React.useEffect(() => {
    if (likes && userData){
      likes.forEach((like) => {
        if (like.user_id === userData.user.id) {
          setUserLikes(true)
          return
        }
      })
    } 
  }, [likes, userData])

  async function handleClick(){
    if (userLikes){
      async function deleteLike(){
        const {url, options} = DELETE_LIKE(denkeId, token)
        const {response} = await request(url, options)
        if (response.ok) setUserLikes(false)
      }
      deleteLike()
    } else {
      async function postLike(){
        const {url, options} = POST_LIKE(denkeId, token)
        const {response} = await request(url, options)
        if (response.ok) setUserLikes(true)
      }
      postLike()
    }
  }

  return (
    <span onClick={handleClick} className={`${styles.likeBtn} ${userLikes ? styles.liked : ''}`}>
      <Heart />
      <span ref={likeNumber}></span>
    </span>
)
}

export default LikeBtn