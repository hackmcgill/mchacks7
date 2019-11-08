import React from "react"

import AboutImg from "../assets/images/about.svg"
import * as Styles from "../styles/components/index.js"

const About = ({ scrollRef }) => (
  <Styles.About ref={scrollRef}>
    <Styles.AboutContent>
      <Styles.AboutText>
        <h2>Behind Canada’s original collegiate hackathon</h2>
        <p>
          McHacks isn't your typical hackathon, and our hackers aren't either!
          For 24 hours, over 500 of the boldest young minds in North America
          come together for a weekend of beginner-to-pro workshops, decked-out
          hardware, delicious food, and some epic hacking.
          <br />
          <br />
          Whether you're writing your first line of code, playing around with
          APIs, or building the next blockchain, McHacks has everything setup
          for your next big hack. We hope you'll join us this winter as we jump
          into another round of Canada's favourite hackathon!
        </p>
      </Styles.AboutText>
      <Styles.AboutImg src={AboutImg} />
    </Styles.AboutContent>
  </Styles.About>
)

export default About
