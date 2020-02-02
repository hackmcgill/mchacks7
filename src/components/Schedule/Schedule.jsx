import React, { useState } from "react"

import Container from "./Container"
import Event from "./Event"

import events from './events'


const Schedule = ({ visible }) => {
  const [day, setDay] = useState(1)

  return (
    <Container className={!visible ? "hidden" : ""}>
      <h2>McHacks Schedule</h2>

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
