import React from 'react'
import DenkesList from '../Denke/DenkesList'
import DenkeForm from '../Denke/DenkeForm'
// import styles from './Timeline.module.css'

const Timeline = () => {

  return (
    <div className="anime">
      <DenkeForm placeholder={"No que você está pensando?"}/>
      <DenkesList />
    </div>
  )
}

export default Timeline