import React from 'react'
import image from './Event image.png'
import classes from './EventImage.module.css'
const EventImage = () => {
  return (
    <div className={classes.image__section}>
        <img src={image} alt="event" className={classes.event__img}/>
    </div>
  )
}

export default EventImage