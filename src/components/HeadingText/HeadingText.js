import React from 'react'
import classes from './HeadingText.module.css'
const HeadingText = () => {
  return (
    <section className={classes.heading_main}>
        <div className={classes.heading_text}>
            <h1>Imagine if</h1>
            <h1 className={classes.snapchat}>Snapchat</h1>
            <h1>had events.</h1>
        </div>

        <div className={classes.heading_text}>
            <p>Easily host and share events with your friends across any social media.</p>
        </div>       
    </section>
  )
}

export default HeadingText