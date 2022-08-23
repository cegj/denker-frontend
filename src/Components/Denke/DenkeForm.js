import React from 'react'
import styles from './DenkeForm.module.css'
import useForm from '../../Hooks/useForm';
import { POST_DENKE } from '../../API';
import useFetch from '../../Hooks/useFetch';
import Error from '../Elements/Error';

const DenkeForm = ({setFormSent, replyTo = null, setDenketSent}) => {

  const {loading, error, setError, request} = useFetch();
  const {value, setValue, onChange} = useForm();
  const [image, setImage] = React.useState(null);

  async function handleSubmit(event){
    event.preventDefault();
    const token = window.localStorage.getItem('token');

    // Refactor: implement valitadion on backend and useForm
    if (value.length !== 0 && value.length <= 280){
      const formData = new FormData();
      formData.append('content', value);
      formData.append('image', image);
      replyTo && formData.append('reply_to', replyTo);
      const {url, options} = POST_DENKE(token, formData);
      const {response} = await request(url, options);
      if (response.ok) {
        setValue('');
        setImage(null);
        setFormSent(true);
      }
    } else {
      setError('O Denke deve conter entre 1 e 280 caracteres')
    }
  }

  function handleImageBtn(){
    const imageInput = document.querySelector("#image")
    if (image){
      setImage(null);
      imageInput.value = null;
    } else {
      imageInput.click();  
    }
  }

  React.useEffect(() => {
    const imagePreview = document.querySelector("#imagePreview")
    if (image) {
      const url = URL.createObjectURL(image);
      imagePreview.style.backgroundImage = `url(${url})`
      imagePreview.style.display = 'block';
    } else {
      imagePreview.style.display = `none`  
    }
  }, [image])

  function handleImageChange(event){
    setImage(event.target.files[0]);
  }

  return (
    <>
      {error && <Error error={error} />}
      <form className={`anime ${styles.denkeForm}`} onSubmit={handleSubmit}>
        <textarea
          value={value}
          onChange={onChange}
          placeholder={replyTo ? 'Qual é a sua opinião sobre esse denke?' : 'No que você está pensando agora?'}
          maxLength="280"
        />
        <div className={styles.btnsContainer}>
          <span onClick={handleImageBtn}>{!image ? "Incluir imagem" : "Remover imagem"}</span>
          {loading ? <button disabled>Publicando denke...</button> : <button>Publicar denke</button>}
        </div>
        <input style={{display: 'none'}}type="file" id="image" accept="image/png, image/jpeg" onChange={handleImageChange}></input>
      </form>
      <div className={styles.imagePreview} id="imagePreview"></div>
    </>
  )
}

export default DenkeForm