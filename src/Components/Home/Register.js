import React from 'react'
import useForm from '../../Hooks/useForm'
import Input from '../Elements/Input'
import Button from '../Elements/Button'
import styles from './Register.module.css'
import useFetch from '../../Hooks/useFetch'
import { POST_CREATE_USER } from '../../API'
import Error from '../Elements/Error'

const Register = () => {

  const name = useForm();
  const username = useForm();
  const email = useForm('email');
  const password = useForm();
  const confirmPassword = useForm();
  const [image, setImage] = React.useState(null);
  const {data, loading, error, request} = useFetch();

  function handleInputImage({target}){
    setImage(target.files[0])
  }

  React.useEffect(() => {
    if (data && data.token) {
      window.localStorage.setItem('token', data.token)
    }}, [data])

    React.useEffect(() => {},
    [window.localStorage['token']])
    
  async function handleSubmit(event){
    event.preventDefault();
    if (name.validate() && username.validate() && email.validate() && password.validate() && confirmPassword.validate() && image){
      const formData = new FormData();
      formData.append('name', name.value)
      formData.append('username', username.value)
      formData.append('email', email.value)
      formData.append('password', password.value)
      formData.append('confirmpassword', confirmPassword.value)
      formData.append('image', image)

      const {url, options} = POST_CREATE_USER(formData);

      await request(url, options);

    } else {
      console.log('Não cadastrar')
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
        type="text"
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
      <div className={styles.inputFileControl}>
        <label className={styles.inputFilelabel} htmlFor="image">Foto do usuário:</label>
        <input 
          className={styles.inputFile}
          type="file"
          id="image"
          accept='image/png, image/jpeg'
          onChange={handleInputImage}
          required
          />
      </div>
      <div className={styles.buttonContainer}>
        {loading ? <Button disabled>Cadastrando...</Button> : <Button>Cadastrar</Button>}
        <Button unfilled to="/">Voltar</Button>
      </div>
      {error && <Error error={error}/>}
    </form>
  )
}

export default Register