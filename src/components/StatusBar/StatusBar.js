import React from 'react'
import {FaSignal, FaWifi, FaBatteryFull} from 'react-icons/fa'
import classes from './StatusBar.module.css'
const StatusBar = () => {
  return (
    <section>
        <div className={classes.statusbar}>
            <div className={classes.statusbar__time}>
                <p>9.41</p>
            </div>
            <div className={classes.statusbar__icons}>
                <div className={classes.statusbar__icon}>
                    <FaSignal />
                </div>
                <div className={classes.statusbar__icon}>
                    <FaWifi />
                </div>
                <div className={classes.statusbar__icon}>
                    <FaBatteryFull />
                </div>
            </div>
        </div>
    </section>
  )
}

export default StatusBar