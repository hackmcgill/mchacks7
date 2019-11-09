import React from "react"

import Container from "./Container"
import Content from "./Content"
import Text from "./Text"
import Image from "./Image"

import AboutImg from "../../assets/images/designs/about.svg"

const About = ({ scrollRef }) => (
  <Container ref={scrollRef}>
    <Content>
      <Text>
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
      </Text>
      <Image src={AboutImg} />
    </Content>
  </Container>
)

export default About
