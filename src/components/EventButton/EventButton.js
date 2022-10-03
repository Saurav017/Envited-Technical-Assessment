import React from 'react'
import classes from './EventButton.module.css'
import { Link } from 'react-router-dom'
const EventButton = () => {
  return (
    <div className={classes.button__section}>
      <Link to='/create'>

      <button className={classes.event__button}>
        🎉 Create my event
        </button>
      </Link>
        
    </div>
  )
}

export default EventButton