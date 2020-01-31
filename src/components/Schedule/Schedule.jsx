import React, { useState } from "react"

import Container from "./Container"

import Event from "./Event"

const events = [
  {
    day: 1,
    name: 'Opening Ceremonies',
    type: 'Main Event',
    location: 'McMed [Room Number]',
    startTime: '10:30am',
    endTime: '12:00pm',
  },
  {
    day: 1,
    name: 'Hacking Begins',
    type: 'Main Event',
    location: 'Trottier/Rutherford',
    startTime: '12:00pm',
    endTime: null
  },
  {
    day: 1,
    name: 'Team Formation',
    type: 'Main Event',
    location: 'Trottier/Rutherford',
    startTime: '12:00pm',
    endTime: '1:00pm'
  },
  {
    day: 1,
    name: 'Intro to Python',
    type: 'Workshop',
    location: 'Rutherford [Room Number]',
    startTime: '12:45pm',
    endTime: '1:45pm'
  },
  {
    day: 1,
    name: 'Lunch - Joe\'s Paninis',
    type: 'Food',
    location: 'Trottier Cafe',
    startTime: '1:00pm',
    endTime: '2:30pm'
  },
  {
    day: 1,
    name: 'Google [Need more details?]',
    type: 'Workshop',
    location: 'Trottier 3120',
    startTime: '2:00pm',
    endTime: '3:00pm'
  },
  {
    day: 1,
    name: 'Smash Tournament',
    type: 'Activity',
    location: 'Trottier First Floor',
    startTime: '3:00pm',
    endTime: null
  },
  {
    day: 2,
    name: 'Breakfast - [Something]',
    type: 'Food',
    location: 'Trottier Cafe',
    startTime: '10:00am',
    endTime: '11:00am'
  },
]

const Schedule = ({ visible }) => {
  const [day, setDay] = useState(1);

  return (
    <Container className={!visible ? 'hidden' : ''}>
      <h2>McHacks Schedule</h2>

      <div className="DayTabNav">
        <div className={"DayTab " + (day === 1 ? 'active' : '')} onClick={() => setDay(1)}>February 1st</div>
        <div className={"DayTab " + (day === 2 ? 'active' : '')} onClick={() => setDay(2)}>February 2nd</div>
      </div>

      <div className="Events">
        {
          events.filter(e => e.day === day).map((e, i) => <Event key={i} {...e}/>)
        }
      </div>
    </Container>
  );
};

export default Schedule