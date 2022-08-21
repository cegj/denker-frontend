import React from 'react'
import { GET_USER, POST_LOGIN } from '../API';
import { useNavigate } from 'react-router-dom';

export const UserContext = React.createContext();

export const UserContextData = ({children}) => {
  
  const [userData, setUserData] = React.useState(null)
  const [loggedIn, setLoggedIn] = React.useState(false)
  const [loading, setLoading] = React.useState(false)
  const [error, setError] = React.useState(null)
  const navigate = useNavigate();

  const userLogout = React.useCallback(() => {
    setUserData(null)
    setLoggedIn(false)
    setError(null)
    setLoading(false)
    window.localStorage.removeItem('token')
    navigate('/')
  }, [navigate])

  const getUser = React.useCallback(async (token) => {
    let response;
    let json;
    try {
      const {url, options} = GET_USER(token);
      setError(null);
      setLoading(true);
      response = await fetch(url, options);
      json = await response.json();
      if (response.ok === false) throw new Error(json.message);
      setUserData(json);
      setLoggedIn(true)
    } catch (err) {
      setError(err.message);
      console.log(err.message)
      userLogout();
    } finally {
      setLoading(false);
    }
  }, [userLogout]);


  React.useEffect(() => {
    async function autoLogin(token){
      await getUser(token);
    }
    const token = window.localStorage.getItem('token');
    if (!loggedIn && token) autoLogin(token)
    }, [loggedIn, getUser])

  async function userLogin(email, password) {
    try {
      setError(null)
      setLoading(true)
      const {url, options} = POST_LOGIN({email, password});
      const response = await fetch(url, options);
      const json = await response.json();
      if (response.ok === false) throw new Error(json.message);
      const {token} = json;
      window.localStorage.setItem('token', token);
      await getUser(token)
    } catch (error) {
      setError(error.message);
      setLoggedIn(false)
    } finally {
      setLoading(false)
    }
  }
  
  return (
    <UserContext.Provider value={{userLogin, userLogout, userData, loading, error, loggedIn}}>
      {children}
    </UserContext.Provider>
  )
}