import React from 'react'
import EventButton from '../components/EventButton/EventButton'
import HeadingImage from '../components/HeadingImage/HeadingImage'
import HeadingText from '../components/HeadingText/HeadingText'
import StatusBar from '../components/StatusBar/StatusBar'
import Toolbar from '../components/Toolbar/Toolbar'
import URLbar from '../components/URLbar/URLbar'

const Home = () => {
  return (
    <>
    <main className='main-page'>
        <StatusBar  />
        <HeadingText  />
        <HeadingImage />
        
        <EventButton    />
        </main>
        <div style={{
            "backgroundColor": "#f9f9f9",
            "borderTop": "1px rgba(0,0,0,0.3) solid",
            
        }}>
        <URLbar />
        <Toolbar />
        </div>
        </>
  )
}

export default Home