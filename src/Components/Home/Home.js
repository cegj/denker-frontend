import React from 'react'
import styles from './Home.module.css'
import HomePresentation from './HomePresentation'
import {Routes, Route} from 'react-router-dom'
import Login from './Login'
import Register from './Register'

const Home = () => {
  return (
    <main className={styles.home}>
      <div className={styles.img}></div>
      <div className={styles.contentBackground}>
        <div className={styles.content}>
          <div className={styles.titleContainer}>
            <img src="denker_logo.svg" alt="Denker"/>
            <h1>Denker</h1>
          </div>
          <h2>Compartilhe seus pensamentos</h2>
          <Routes>
            <Route path="/" element={<HomePresentation />} />
            <Route path="/signin" element={<Login />}/>
            <Route path="/signup" element={<Register />}/>
          </Routes>
        </div>
        </div>
    </main>
  )
}

export default Home