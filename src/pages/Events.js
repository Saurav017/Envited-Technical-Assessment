import React from 'react'
import EventImage from '../components/EventImage/EventImage'
import EventList from '../components/EventList/EventList'
import URLbar from '../components/URLbar/URLbar'
import Toolbar from '../components/Toolbar/Toolbar'
const Events = () => {
  return (
    <>
        <EventImage />
        <EventList  />
        <div style={{
            "marginTop": "140px",
            "backgroundColor": "#f9f9f9",
            "borderTop": "1px rgba(0,0,0,0.3) solid",
        }}>
        <URLbar />
        <Toolbar />
        </div>
    </>
  )
}


export default Events