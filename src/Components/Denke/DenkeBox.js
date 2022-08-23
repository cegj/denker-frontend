import React from 'react'
import { API_DENKE_IMAGE_URL } from '../../API'
import styles from './DenkeBox.module.css'
import useDate from '../../Hooks/useDate'
import UserAvatar from '../Elements/UserAvatar'
import { Link } from 'react-router-dom'
import LikeBtn from '../Elements/LikeBtn'

const DenkeBox = ({denke, type = 'main', showAvatar = true}) => {

  const {convertDate} = useDate();

  return (
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
        <LikeBtn denkeId={denke.id} />
      </div>
    </article>
  )
}

export default DenkeBox