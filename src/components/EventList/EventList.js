import React from "react";
import classes from "./EventList.module.css";
import {BsCalendar3} from 'react-icons/bs'
import {HiOutlineLocationMarker} from 'react-icons/hi'
const EventList = () => {
  return (
    <section className={classes.event__list__main}>
      <div className={classes.event__list}>
        <div className={classes.event__list__container}>
          <div className={classes.event__list__item}>
            <div className={classes.icon}>
                <BsCalendar3    />
            </div>
            <div className={classes.event__list__text__container}>
              <h2 className={classes.data}>18 August 6:00PM</h2>
              <p className={classes.semi_data}>Event Name</p>
            </div>
          </div>

          <div className={classes.event__list__item}>
            <div className={classes.icon}>
                <HiOutlineLocationMarker />
            </div>
            <div className={classes.event__list__text__container}>
              <h2 className={classes.data}>18 August 6:00PM</h2>
              <p className={classes.semi_data}>Event Name</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventList;
