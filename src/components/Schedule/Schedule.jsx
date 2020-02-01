import React, { useState } from "react"

import Container from "./Container"

import Event from "./Event"

const events = [
  {
    day: 1,
    name: "Breakfast",
    type: "Food",
    location: "Trottier Cafe",
    startTime: "6:30am",
    endTime: null,
  },
  {
    day: 1,
    name: "Check-in Begins",
    type: "Main Event",
    location: "Trottier First Floor",
    startTime: "7:00am",
    endTime: null
  },
  {
    day: 1,
    name: "Opening Ceremonies",
    type: "Main Event",
    location: "McMed 522",
    startTime: "10:30am",
    endTime: "12:00pm",
  },
  {
    day: 1,
    name: "Hacking Begins",
    type: "Main Event",
    location: "Trottier/Rutherford",
    startTime: "12:00pm",
    endTime: null,
  },
  {
    day: 1,
    name: "Team Formation",
    type: "Main Event",
    location: "Trottier 2120",
    startTime: "12:00pm",
    endTime: "1:00pm",
  },
  {
    day: 1,
    name: "Intro to Python",
    type: "Workshop",
    location: "Rutherford 112",
    startTime: "12:45pm",
    endTime: "1:45pm",
    description: "This ground-up workshop that will teach you all the basics you need to code in Python 🐍🤟🏼 A data analysis challenge will also be presented at the end!  All experience levels are welcome, but the workshop will be tailored to those with more limited programming experience 🥰"
  },
  {
    day: 1,
    name: "Lunch - Joe's Paninis",
    type: "Food",
    location: "Trottier Cafe",
    startTime: "1:00pm",
    endTime: "2:30pm",
  },
  {
    day: 1,
    name: "Google",
    type: "Workshop",
    location: "Trottier 3120",
    startTime: "2:00pm",
    endTime: "3:00pm",
    description: "Google will be running a workshop where they’ll introduce Flutter 🦋, an open-source mobile application SDK and Firebase 🔥, a mobile and web application development platform."
  },
  {
    day: 1,
    name: "McWiCS p5.js",
    type: "Workshop",
    location: "Trottier 3120",
    startTime: "3:00pm",
    endTime: "4:00pm",
    description: "Join McWiCS for a workshop using the JavaScript library p5.js 👩‍💻 Learn to create an animation such as  rain 🌧 or a ball bouncing ⚽️!  We'll also get you started on a game like Snake, Flappy Bird or Pong! 🤓"
  },
  {
    day: 1,
    name: "RBC",
    type: "Workshop",
    location: "Trottier 3120",
    startTime: "3:00pm",
    endTime: "4:00pm",
    description: "RBC 🦁 is running a workshop where they'll introduce and demo containerization, specifically Docker and Kubernetes as a platform 🐳"
  },
  {
    day: 1,
    name: "Intro to Git",
    type: "Workshop",
    location: "Trottier 3120",
    startTime: "4:00pm",
    endTime: "5:00pm",
    description: "Get started with Git and Github, the easiest way to contribute to a group project whether it's for McHacks, school or for your future job! 👩🏾‍💻⚡👨🏻‍💻"
  },
  {
    day: 1,
    name: "Compete McGill:",
    subtitle: " Technical Interview Challenges",
    type: "Workshop",
    location: "Trottier 3120",
    startTime: "5:00pm",
    endTime: "6:00pm",
    description: "Looking to land a job or internship in tech? 💼 Learn how to efficiently solve interview-style problems and rock your future interviews! 🌟"
  },
  {
    day: 1,
    name: "Design",
    type: "Workshop",
    location: "Trottier 3120",
    startTime: "6:00pm",
    endTime: "7:00pm",
    description: "Learn how to prototype an app using Figma! 🖥️🖌️ In this workshop, you will have a chance to learn about the tools that Figma has to offer and about how to prototype an app, create icons and buttons, and so on. We recommend creating a Figma account before the workshop, it will only take a minute: www.figma.com"
  },
  {
    day: 1,
    name: "Dinner - Monza",
    type: "Food",
    location: "Trottier Cafe",
    startTime: "6:30pm",
    endTime: "8:00pm",
  },
  {
    day: 1,
    name: "Cup Stacking",
    type: "Activity",
    location: "TBA",
    startTime: "7:00pm",
    endTime: "7:30pm",
  },
  {
    day: 1,
    name: "Hot Ones",
    type: "Activity",
    location: "TBA",
    startTime: "7:30pm",
    endTime: null,
    description: "Want to see how much spice you can handle? Come compete against other hackers in our Hot Ones challenge 🌶️🔥 At each step the hot sauce will get spicier... let's see how far you can get!"
  },
  {
    day: 1,
    name: "Smash Tournament",
    type: "Activity",
    location: "Trottier First Floor",
    startTime: "8:00pm",
    endTime: null,
    description: "Wanna smash? 😏 We're having a Super Smash 👊 tournament! You will be able to compete against other hackers and maybe win a fun prize!"
  },
  {
    day: 1,
    name: "Carnival Games",
    type: "Activity",
    location: "Trottier First Floor",
    startTime: "9:00pm",
    endTime: "10:30pm",
    description: "Take a break and play some carnival games with us! 🥳🎉 The player with the highest score will have a chance to win a Google Home Mini👀"
  },
  {
    day: 1,
    name: "Highschool Hacker Meetup",
    type: "Activity",
    location: "TBA",
    startTime: "9:00pm",
    endTime: "10:00pm",
    description: "Calling all high school students! 👨‍🎓👩‍🎓 At this event, you will be able to meet and network with some like-minded high school students."
  },
  {
    day: 1,
    name: "Sleep Area Opens",
    type: "Main Event",
    location: "Trottier Fourth Floor",
    startTime: "11:30pm",
    endTime: null,
  },
  {
    day: 2,
    name: "Midnight Snack",
    subtitle: " - Sponsored by TandemLaunch",
    type: "Food",
    location: "Trottier Cafe",
    startTime: "12:30am",
    endTime: null,
  },
  {
    day: 2,
    name: "Carnival Games",
    type: "Activity",
    location: "Chill Space (Trottier First Floor)",
    startTime: "1:00am",
    endTime: "2:00am",
    description: "Take a break and play some carnival games with us! 🥳🎉 The player with the highest score will have a chance to win a Google Home Mini👀"
    
  },
  {
    day: 2,
    name: "Breakfast",
    type: "Food",
    location: "Trottier First Floor",
    startTime: "6:30am",
    endTime: null,
  },
  {
    day: 2,
    name: "Sleep Area Closes",
    type: "Main Event",
    location: "Trottier Fourth Floor",
    startTime: "9:30am",
    endTime: null,
  },
  {
    day: 2,
    name: "Lunch - Boustan",
    type: "Food",
    location: "Trottier Cafe",
    startTime: "11:30am",
    endTime: null,
  },
  {
    day: 2,
    name: "Judging Info Session",
    type: "Main Event",
    location: "Trottier 3120",
    startTime: "11:30am",
    endTime: null,
  },
  {
    day: 2,
    name: "Hacking Ends",
    type: "Main Event",
    location: "Trottier/Rutherford",
    startTime: "12:00pm",
    endTime: null,
  },
  {
    day: 2,
    name: "Demo",
    type: "Main Event",
    location: "Trottier/Rutherford",
    startTime: "12:30pm",
    endTime: null,
  },
  {
    day: 2,
    name: "Closing Ceremonies",
    type: "Main Event",
    location: "Leacock",
    startTime: "3:00pm",
    endTime: "4:30pm",
  },
  {
    day: 2,
    name: "Bus People Leave Leacock",
    type: "Main Event",
    location: "Trottier",
    startTime: "4:30pm",
    endTime: null,
  },
  {
    day: 2,
    name: "Bus Leaves",
    type: "Main Event",
    location: "Trottier",
    startTime: "5:00pm",
    endTime: null,
  },
]

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
