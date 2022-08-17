import React from 'react'
import styles from './Header.module.css'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className={styles.header}>
      <img className={styles.logo} src="denker_logo.svg" alt="Denker" />
      <nav className={styles.nav}>
        <Link to="/signin">Entrar</Link>
        <Link to="/signup">Cadastre-se</Link>
      </nav>
    </header>
  )
}

export default Header