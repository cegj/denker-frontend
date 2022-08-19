import React from 'react'
import useForm from '../../Hooks/useForm'
import Input from '../Elements/Input'
import Button from '../Elements/Button'
import styles from './Register.module.css'

const Register = () => {

  const name = useForm();
  const username = useForm();
  const email = useForm('email');
  const password = useForm();
  const confirmPassword = useForm();

  
  function handleSubmit(event){
    event.preventDefault();
    if (name.validate() && username.validate() && email.validate() && password.validate() && confirmPassword.validate()){
      console.log('login')
    } else {
      console.log('Não login')
    }
  }

  return (
    <form className={styles.registerForm} onSubmit={handleSubmit}>
      <Input
        label="Nome"
        id="name"
        type="text"
        {...name} 
      />
      <Input
        label="Nome de usuário"
        id="username"
        type="text"
        {...username} 
      />
      <Input
        label="E-mail"
        id="email"
        type="email"
        {...email} 
      />
      <Input
        label="Senha"
        id="password"
        type="password"
        {...password} 
      />
      <Input
        label="Confirmação de senha"
        id="confirmpassword"
        type="password"
        {...confirmPassword} 
      />
      <div>
        <label htmlFor="image">Foto do usuário:</label>
        <input 
          type="file"
          id="image"
          accept='image/png, image/jpeg'
          />
      </div>
      <Button>Cadastrar</Button>
    </form>
  )
}

export default Register