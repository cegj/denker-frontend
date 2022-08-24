import React from 'react'
import Header from '../Header'
import Timeline from './Timeline'
import {Routes, Route} from 'react-router-dom'
import Profile from './Profile'
import UserSearch from './UserSearch'
import ProtectedRoute from '../ProtectedRoute'

const User = () => {

  return (
    <>
      <Header />    
      <div className="mainContainer">
        <Routes>
          <Route path="/timeline" element={<ProtectedRoute component = {<Timeline />} />} />
          <Route path="/:id/*" element={<Profile />} />
          <Route path="/search" element={<UserSearch />} />
        </Routes>
      </div>
    </>
  )
}

export default User