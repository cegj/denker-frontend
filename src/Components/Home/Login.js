import React from 'react'
import useForm from '../../Hooks/useForm'
import Input from '../Elements/Input'
import Button from '../Elements/Button'
import styles from './Login.module.css'
import { POST_LOGIN } from '../../API'
import useFetch from '../../Hooks/useFetch'
import Error from '../Elements/Error'

const Login = () => {

  const email = useForm('email');
  const password = useForm();
  const {data, loading, error, request} = useFetch();

  React.useEffect(() => {
    if (data && data.token) {
      window.localStorage.setItem('token', data.token)
    }}, [data])

  async function handleSubmit(event){
    event.preventDefault();
    if (email.validate() && password.validate()){
      
      const {url, options} = POST_LOGIN({email: email.value, password: password.value});

      await request(url, options);
      
    } else {
      console.log('Não login')
    }
  }

  return (
    <form className={styles.loginForm} onSubmit={handleSubmit}>
      <Input
        label="E-mail"
        id="email"
        type="text"
        placeholder="exemplo@exemplo.com"
        {...email} 
      />
      <Input label="Senha" id="password" type="password" {...password} />
      <div className={styles.buttonContainer}>
        {loading ? <Button disabled>Entrando...</Button> : <Button>Entrar</Button>}
        <Button unfilled to="/">Voltar</Button>
      </div>
      {error && <Error error={error}/>}
    </form>
  )
}

export default Login