import React from 'react'

export const UserContext = React.createContext();

export const UserContextData = ({children}) => {
  return (
    <UserContext.Provider>
      {children}
    </UserContext.Provider>
  )
}