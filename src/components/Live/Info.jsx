import React from "react"

import Container from "../FAQ/Container"
import Question from "../FAQ/Question"

const Info = ({ scrollRef }) => (
  <Container ref={scrollRef}>
    <h2>Welcome to McHacks! 👋</h2>
    <Question
      question="Wifi"
      answer="To access the wifi network, you need to create an account on guest.mcgill.ca wifi network."
    />
    <Question
      question="HackPass"
      answer="Your HackPass is the QR code found on your McHacks badge. Make sure your wearing your HackPass at all times during McHacks. Sponsors can access your digital resume by scanning your HackPass.
      "
    />
    <Question
      question="Help Desk"
      answer="The help desk is on the first floor of Trottier near the entrances to the building."
    />
    <Question
      question="Bathroom"
      answer="There are bathrooms located on every floor of Trottier. A gender neutral bathroom is located on the ground floor at the end of the hallway next to 0060."
    />
    <Question
      question="Prizes + judges"
      answer="Check out the McHacks 7 Devpost for information on judging and prizes."
    />
  </Container>
)

export default Info
