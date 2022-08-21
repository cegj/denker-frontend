import React from 'react'
import useForm from '../../Hooks/useForm'
import Input from '../Elements/Input'
import Button from '../Elements/Button'
import styles from './Login.module.css'
import Error from '../Elements/Error'
import { UserContext } from '../../Context/UserContext'

const Login = () => {

  const {userLogin, loading, error} = React.useContext(UserContext)

  const email = useForm('email');
  const password = useForm();

  async function handleSubmit(event){
    event.preventDefault();
    if (email.validate() && password.validate()){
      userLogin(email.value, password.value);
    }
  }

  return (
    <>
      <h2>Entre e comece a compartilhar</h2>
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
    </>
  )
}

export default Login