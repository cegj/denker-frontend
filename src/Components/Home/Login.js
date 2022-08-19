import React from 'react'
import useForm from '../../Hooks/useForm'
import Input from '../Elements/Input'
import Button from '../Elements/Button'
import styles from './Login.module.css'

const Login = () => {

  const email = useForm('email');
  const password = useForm();

  function handleSubmit(event){
    event.preventDefault();
    if (email.validate() && password.validate()){
      console.log('login')
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
      <Button>Entrar</Button>
    </form>
  )
}

export default Login