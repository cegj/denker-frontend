import React from 'react'
import Button from '../Elements/Button'
import styles from './HomePresentation.module.css'

const HomePresentation = () => {
  return (
    <section className="anime">
      <h2>Compartilhe seus pensamentos</h2>
      <p className={styles.presentationText}>Denker é uma rede social para dividir seus pensamentos com amigos, ler o que eles andam compartilhando e, ainda, comentar e curtir!</p>
      <div className={styles.buttonContainer}>
        <Button to="/signin">Entrar</Button>
        <Button unfilled to="/signup">Cadastrar-se</Button>
      </div>
    </section>
)
}

export default HomePresentation