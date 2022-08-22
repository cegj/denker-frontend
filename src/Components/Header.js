import React from 'react'
import styles from './Header.module.css'
import { Link } from 'react-router-dom'
import { UserContext } from '../Context/UserContext'

const Header = () => {

  const {loggedIn, userData, userLogout} = React.useContext(UserContext)
  let user = null;
  if (userData) user = userData.user;

  return (

    <header className={styles.header}>
      <img className={styles.logo} src="/denker_logo.svg" alt="Denker" />
      <nav className={styles.nav}>
        {loggedIn && <Link to="/user/timeline">Linha do tempo</Link>}
        {loggedIn && <Link to="/user/search">Buscar usuários</Link>}
        {loggedIn && <Link to={`/user/${user.id}`}>@{user.username}</Link>}
        {loggedIn ? <span onClick={userLogout}>Sair</span> : <Link to="/">Entre / Cadastre-se</Link>}
      </nav>
    </header>
  )
}

export default Header