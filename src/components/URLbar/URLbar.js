import React from 'react'
import classes from './URLbar.module.css'
import {AiOutlineReload} from 'react-icons/ai'
import {AiFillLock} from 'react-icons/ai'

const URLbar = () => {
  return (
    <section className={classes.url__section}>
        <div className={classes.url__container}>
           <div className={classes.url__text__style}>
                <p>aA</p>
           </div>
            <div className={classes.url__input}>
            <AiFillLock /><p>domain.com</p>
            </div>
            <div className={classes.url__icon}>
                <AiOutlineReload />
            </div>
        </div>

    </section>
  )
}

export default URLbar