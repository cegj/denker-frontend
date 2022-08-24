import React from 'react'
import { API_DENKE_IMAGE_URL } from '../../API'
import styles from './DenkeBox.module.css'
import useDate from '../../Hooks/useDate'
import UserAvatar from '../Elements/UserAvatar'
import { Link } from 'react-router-dom'
import LikeBtn from '../Elements/LikeBtn'
import { GET_DENKE_LIKES } from '../../API'
import useFetch from '../../Hooks/useFetch'
import LikesBox from './LikesBox'
import DeleteBtn from '../Elements/DeleteBtn'

const DenkeBox = ({denke, type = 'main', showLikeBox = false, showAvatar = true}) => {

  const [likes, setLikes] = React.useState(null)
  const [userLikes, setUserLikes] = React.useState(false);
  const {request} = useFetch();

  // Get and set denke likes
  React.useEffect(() => {
    async function getDenkeLikes(){
      const {url, options} = GET_DENKE_LIKES(denke.id);
      const {json, response} = await request(url, options);
      if (response.ok) setLikes(json.denkeLikes)
    }
    getDenkeLikes();
  }, [denke.id, request, userLikes])

  const {convertDate} = useDate();

  return (
    <>
      <article className={`anime ${styles.denkeBox} ${styles[type]} ${!showAvatar ? styles.noAvatar : ''}`}>
        {showAvatar && 
          <div className={styles.userContainer}>
            <UserAvatar image={denke.user_image} username={denke.user_username} id={denke.user_id}/>
          </div>
        }
        <Link className={`${styles.denkeContainer} ${styles[type]}`} to={`/denke/${denke.id}`}>
          <p className={`${styles.denkeContent} ${styles[type]}`}>
            {denke.content}
          </p>
          {denke.image &&
          denke.image !== "NULL" &&
          <img src={API_DENKE_IMAGE_URL + denke.image} alt="Imagem do Denke" />}
        </Link>
        <div className={`${styles.infoContainer} ${styles[type]}`}>
          <span>{convertDate(denke.updatedAt)}</span>
          <LikeBtn likes={likes} setLikes={setLikes} denkeId={denke.id} userLikes={userLikes} setUserLikes={setUserLikes} />
          <DeleteBtn denkeId={denke.id} denkeUserId={denke.user_id}/>
        </div>
      </article>
      {showLikeBox && likes && likes.length !==0 && <LikesBox likes={likes} />}
    </>
  )
}

export default DenkeBox