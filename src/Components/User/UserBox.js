import React from 'react'
import { Link } from 'react-router-dom';
import { GET_USER_BY_ID } from '../../API';
import useDate from '../../Hooks/useDate';
import useFetch from '../../Hooks/useFetch'
import Error from '../Elements/Error';
import UserAvatar from '../Elements/UserAvatar';
import styles from './UserBox.module.css'

const UserBox = ({userId}) => {

  const {convertDate} = useDate();

  const {data, loading, error, request} = useFetch();

  React.useEffect(() => {
    async function fetchUser(){
        const {url, options} = GET_USER_BY_ID(userId);
        await request(url, options);
      };
      fetchUser()
  }, [request, userId])

  if (error) return <Error error={error} />
  if (loading) return <div className="loading"></div>
  if (data)
  return (
    <section className={`${styles.userBox} 'anime'`}>
      <UserAvatar image={data.user.image} username={data.user.username} id={data.user.id} />
      <div className={styles.userInfoContent}>
        <h1>{data.user.name}</h1>
        <span>{data.user.email}</span>
        <span>Entrou em {convertDate(data.user.createdAt)}</span>
        <span><Link to="followers">0 seguidores</Link> | <Link to='following'>0 seguindo</Link></span>
      </div>
      <div>
        <button>Seguir</button>
      </div>
    </section>
  )
  else return null;
}

export default UserBox