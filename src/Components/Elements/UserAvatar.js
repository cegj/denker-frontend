import React from 'react'
import { Link } from 'react-router-dom'
import { API_USER_IMAGE_URL } from '../../API'
import styles from './UserAvatar.module.css'

const UserAvatar = ({image, username, id}) => {
  return (
  <Link className={styles.userContainer} to={`/user/${id}`}>
    <img src={API_USER_IMAGE_URL + image} alt={username}/>
    <div>@{username}</div>
  </Link> 
  )
}

export default UserAvatar