import React from 'react'
import SearchForm from '../Elements/SearchForm'
import UserBox from './UserBox'

const UserSearch = () => {

  const [results, setResults] = React.useState(null);

  React.useEffect(() => {}, [results])

  return (
    <section className="anime"><h2>Buscar pessoas</h2>
    <SearchForm setResults={setResults}/>
    {results && results.map((user) => {
      return <UserBox user={user}/>
    })}
    </section>
  )
}

export default UserSearch