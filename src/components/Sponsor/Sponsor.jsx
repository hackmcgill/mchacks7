import React from "react"

import Container from "./Container"
import Content from "./Content"
import Image from "./Image"
import Text from "./Text"
import Button from "./Button"

import SponsorImg from "../../assets/images/designs/sponsor.svg"

const mailTo = () => {
  window.location = "mailto:sponsorship@mchacks.ca?Subject=Hello!"
}

const Sponsor = ({ scrollRef }) => (
  <Container ref={scrollRef}>
    <Content>
      <Image src={SponsorImg} />
      <Text>
        <h2>Interested in Sponsoring?</h2>
        <p>
          Hosting Canada’s favourite hackathon isn't easy, and our generous
          sponsors help bring it to life! Spend a weekend at McHacks to witness
          tomorrow’s leaders as they experiment with your technologies and solve
          problems from the ground up.
          <br></br>
          <br></br>
          Join us as we shake the world of technology for 24 hours. We've got a
          table with your name on it!
        </p>
        <Button onClick={mailTo}>Become a Sponsor</Button>
      </Text>
    </Content>
  </Container>
)

export default Sponsor
