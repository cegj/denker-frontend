import React from 'react'
import { UserContext } from '../Context/UserContext'
import { Navigate } from 'react-router-dom'

const ProtectedRoute = ({component}) => {

  const {loggedIn} = React.useContext(UserContext)

  return loggedIn ? component : <Navigate to="/" />
}

export default ProtectedRoute