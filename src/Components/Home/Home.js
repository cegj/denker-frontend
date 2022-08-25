import React from 'react'
import styles from './Home.module.css'
import HomePresentation from './HomePresentation'
import {Routes, Route} from 'react-router-dom'
import Login from './Login'
import Register from './Register'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../../Context/UserContext'

const Home = () => {

  const {loggedIn, userData} = React.useContext(UserContext)
  const navigate = useNavigate();

  React.useEffect(() => {
    if (loggedIn && userData){
      navigate('/user/timeline')
    }}, [loggedIn, userData, navigate])

  return (
    <main className={styles.home}>
      <div className={styles.img}></div>
      <div className={styles.contentBackground}>
          <div className={styles.titleContainer}>
            <img src="denker_logo.svg" alt="Denker"/>
            <h1>Denker</h1>
          </div>
          <Routes>
            <Route path="/" element={<HomePresentation />} />
            <Route path="/signin" element={<Login />}/>
            <Route path="/signup" element={<Register />}/>
          </Routes>
        </div>
    </main>
  )
}

export default Home