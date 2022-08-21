import React from 'react'
import DenkesList from '../Denke/DenkesList'
import DenkeForm from '../Denke/DenkeForm'
// import styles from './Timeline.module.css'

const Timeline = () => {

  return (
    <div className="anime">
      <DenkeForm />
      <DenkesList />
    </div>
  )
}

export default Timeline