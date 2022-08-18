import React from 'react'
import { Link } from 'react-router-dom';
import styles from './Button.module.css'

const Button = ({to, unfilled, children}) => {

  console.log(unfilled);

  let styleType = 'filled';
  if (unfilled) {
    styleType = 'unfilled';
  }

  if (to)
  return (
    <Link to={to}>
      <button className={styles[styleType]}>{children}</button>
    </Link>
  )
  else return <button className={styles[styleType]}>{children}</button>
}

export default Button