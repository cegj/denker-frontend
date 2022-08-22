import React from 'react'
import { API_DENKE_IMAGE_URL } from '../../API'
import styles from './DenkeBox.module.css'
import useDate from '../../Hooks/useDate'
import UserAvatar from '../Elements/UserAvatar'
import { Link } from 'react-router-dom'
import DenkeForm from './DenkeForm'
import { UserContext } from '../../Context/UserContext'

const DenkeBox = ({denkeData, showAvatar = true, fullLayout = false}) => {

  const {loggedIn} = React.useContext(UserContext);

  const {convertDate} = useDate(); 

  let denke = null;
  let replies = null;
  let replied = null;

  if (denkeData.denke){
    denke = denkeData.denke;
    replies = denkeData.replies;
    replied = denkeData.replyTo[0]; 
  } else {
    denke = denkeData;
  }

  return (
    <>
      {/* Replied denke */}

      {replied && 
      <article className={`anime ${styles.denkeBox} ${styles.replied} ${!showAvatar ? styles.noAvatar : ''}`}>
        {showAvatar && 
          <div className={`${styles.userContainer} ${styles.replied}`}>
            <UserAvatar image={replied.user_image} username={replied.user_username} id={replied.user_id}/>
          </div>
        }
        <Link className={`${styles.denkeContainer} ${styles.replied}`} to={`/denke/${replied.id}`}>
          <p className={`${styles.denkeContent} ${styles.replied}`}>
            {replied.content}
          </p>
          {replied.image &&
          replied.image !== "NULL" &&
          <img src={API_DENKE_IMAGE_URL + replied.image} alt="Imagem do Denke" />}
        </Link>
        <div className={`${styles.dateContainer} ${styles.replied}`}>
          <span>{convertDate(replied.updatedAt)}</span>
        </div>
      </article>
      }

      {/* Main denke */}
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

      {/* Reply form */}
      {fullLayout && loggedIn && <DenkeForm />}

      {/* Replies */}
      {fullLayout && replies && replies.map((reply) => {
        return (
          <article className={`anime ${styles.denkeBox} ${styles.reply} ${!showAvatar ? styles.noAvatar : ''}`}>
          {showAvatar && 
            <div className={`${styles.userContainer} ${styles.reply}`}>
              <UserAvatar image={reply.user_image} username={reply.user_username} id={reply.user_id}/>
            </div>
          }
          <Link className={`${styles.denkeContainer} ${styles.reply}`} to={`/denke/${reply.id}`}>
            <p className={`${styles.denkeContent} ${styles.reply}`}>
              {reply.content}
            </p>
            {reply.image &&
            reply.image !== "NULL" &&
            <img src={API_DENKE_IMAGE_URL + reply.image} alt="Imagem do Denke" />}
          </Link>
          <div className={`${styles.dateContainer} ${styles.reply}`}>
            <span>{convertDate(reply.updatedAt)}</span>
          </div>
          </article>
        )
      })}
    </>
  )
}

export default DenkeBox