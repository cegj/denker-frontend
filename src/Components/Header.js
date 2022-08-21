import React from 'react'
import styles from './Header.module.css'
import { Link } from 'react-router-dom'
import { UserContext } from '../Context/UserContext'

const Header = () => {

  const {userData, userLogout} = React.useContext(UserContext)
  const {user} = userData;

  return (

    <header className={styles.header}>
      <img className={styles.logo} src="/denker_logo.svg" alt="Denker" />
      <nav className={styles.nav}>
        <Link to="/user/timeline">Linha do tempo</Link>
        <Link to="/user/search">Buscar usuários</Link>
        <Link to="/user/">@{user.username}</Link>
        <span onClick={userLogout}>Sair</span>
      </nav>
    </header>
  )
}

export default Header