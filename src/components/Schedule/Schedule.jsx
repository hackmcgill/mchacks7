import React, { useState } from "react"

import Sticky from 'react-stickynode'

import Container from "./Container"
import Event from "./Event"

import events from './events'


const Schedule = ({ visible }) => {
  const [day, _setDay] = useState(1)
  const setDay = (newDay) => {
    if (newDay !== day) {
      _setDay(newDay);
      window.scrollTo(0, 0);
    }
  }

  return (
    <Container className={!visible ? "hidden" : ""}>
      <h2>McHacks Schedule</h2>

      <Sticky enabled={true} top={80}>
        <div className="DayTabNav">
          <div
            className={"DayTab " + (day === 1 ? "active" : "")}
            onClick={() => setDay(1)}
          >
            February 1st
          </div>
          <div
            className={"DayTab " + (day === 2 ? "active" : "")}
            onClick={() => setDay(2)}
          >
            February 2nd
          </div>
        </div>
      </Sticky>

      <div className="Events">
        {events
          .filter(e => e.day === day)
          .map((e, i) => (
            <Event key={i} {...e} />
          ))}
      </div>
    </Container>
  )
}

export default Schedule
