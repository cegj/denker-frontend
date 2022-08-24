import React from 'react'
import styles from './LikesBox.module.css'
import { Link } from 'react-router-dom'

const LikesBox = ({likes}) => {

  return (
    <section className={`anime ${styles.LikesBox}`}>
      <span>Pessoas que curtiram:</span>
      {likes.map((like, i) => {
        return <div key={like.user_id}><Link to={`/user/${like.user_id}`}>@{like.user_username}</Link></div>
      })}
    </section>
  )
}

export default LikesBox