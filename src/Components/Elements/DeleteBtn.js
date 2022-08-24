import React from 'react'
import styles from './DeleteBtn.module.css'
import {ReactComponent as Trash} from '../../Assets/icons/trash-fill.svg'
import { UserContext } from '../../Context/UserContext'
import useFetch from '../../Hooks/useFetch'
import { DELETE_DENKE } from '../../API'
import { useNavigate } from 'react-router-dom'

const DeleteBtn = ({denkeId, denkeUserId}) => {

  const {loggedIn, userData} = React.useContext(UserContext)
  const {request} = useFetch()
  const token = window.localStorage.getItem('token')
  const navigate = useNavigate();

  async function handleClick(){
    const {url, options} = DELETE_DENKE(denkeId, token)
    const {response} = await request(url, options)
    if (response.ok) navigate ('/') 
  }
  
  if (loggedIn && userData.user.id === denkeUserId)
  return (
    <span onClick={handleClick} className={styles.deleteBtn}>
      <Trash />
      <span>Apagar</span>
    </span>)
}

export default DeleteBtn