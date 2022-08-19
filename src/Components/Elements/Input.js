import React from 'react'
import Error from './Error'
import styles from './Input.module.css'

const Input = ({id, type, label, placeholder, error, onChange, onBlur}) => {
  return (
    <div className={styles.formControl}>
      <label htmlFor={id}>{label}</label>
      <input className={styles.input} id={id} name={id} type={type} placeholder={placeholder} onChange={onChange} onBlur={onBlur}/>
      <Error error={error} />
    </div>
  )
}

export default Input