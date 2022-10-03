import React from 'react'
import {VscChevronLeft, VscChevronRight} from 'react-icons/vsc'
import  {BsBook} from 'react-icons/bs'
import {TiUploadOutline} from 'react-icons/ti'
import {RiCheckboxMultipleBlankLine} from 'react-icons/ri'
import classes from  './Toolbar.module.css'


const Toolbar = () => {
  return (
    <section className={classes.toolbar__section}>
    
    <div className={classes.toolbar__container}>
        <div className={classes.toolbar__icon}>
            <VscChevronLeft />
        </div>
        <div className={classes.toolbar__icon}>
            <VscChevronRight />
        </div>
        <div className={classes.toolbar__icon}>
        <TiUploadOutline />
        </div>
        <div className={classes.toolbar__icon}>
        <BsBook />
        </div>
        <div className={classes.toolbar__icon}>
        <RiCheckboxMultipleBlankLine    />
        </div>
    </div>

    <div className={classes.homebar}>
        
    </div>
    </section>
  )
}

export default Toolbar