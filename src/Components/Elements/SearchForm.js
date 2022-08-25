import React from 'react'
import useForm from '../../Hooks/useForm'
import styles from './SearchForm.module.css'
import Error from '../Elements/Error'
import Button from '../Elements/Button'
import useFetch from '../../Hooks/useFetch'
import { USER_SEARCH } from '../../API'

const SearchForm = ({setResults}) => {

  const {value, error, setError, onChange} = useForm();
  const fetch = useFetch();

  async function handleSubmit(event){
    event.preventDefault();
    if (value.length !== 0){
      const {url, options} = USER_SEARCH(value)
      const {response, json} = await fetch.request(url, options)
      if (response.ok) setResults(json.result)  
    } else {
      setError('Preencha um valor para buscar')
    }
  }

  return (
    <section className={styles.searchFormContainer}>
      <form onSubmit={handleSubmit} className={styles.searchForm}>
          <input value={value} onChange={onChange} type="text" placeholder="Digite para buscar pelo nome, nome de usuário e e-mail"/>
          <span className={styles.btnContainer}>
            <Button unfilled>Buscar</Button>
          </span>
      </form>
      {(error || fetch.error) && <Error error={error}/>}
    </section>
  )
}

export default SearchForm