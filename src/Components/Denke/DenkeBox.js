import React from 'react'
import { API_DENKE_IMAGE_URL } from '../../API'
import styles from './DenkeBox.module.css'
import useDate from '../../Hooks/useDate'
import UserAvatar from '../Elements/UserAvatar'
import { Link } from 'react-router-dom'

const DenkeBox = ({denke, showAvatar = true}) => {

  const {convertDate} = useDate(); 

  return (
    <article className={`anime ${styles.denkeBox} ${!showAvatar ? styles.noAvatar : ''}`}>
      {showAvatar && 
        <div className={styles.userContainer}>
          <UserAvatar image={denke.user_image} username={denke.user_username} id={denke.user_id}/>
        </div>
      }
      <Link className={styles.denkeContainer} to={`/denke/${denke.id}`}>
        <p className={styles.denkeContent}>
          {denke.content}
        </p>
        {denke.image &&
        denke.image !== "NULL" &&
        <img src={API_DENKE_IMAGE_URL + denke.image} alt="Imagem do Denke" />}
      </Link>
      <div className={styles.dateContainer}>
        <span>{convertDate(denke.updatedAt)}</span>
      </div>
    </article>
  )
}

export default DenkeBox