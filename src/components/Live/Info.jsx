import React from "react"

import Container from "../FAQ/Container"
import Question from "../FAQ/Question"

const Info = ({ scrollRef }) => (
  <Container ref={scrollRef}>
    <h2>Welcome to McHacks! 👋</h2>

    <Question question="Wifi" answer="Something about logging in to wifi" />

    <Question question="Slack" answer="Somehing about Slack" />

    <Question
      question="HackPass"
      answer="Something about QR code/hackpass, security to enter, always wearing it"
    />

    <Question question="Help Desk" answer="where is it? when to go here" />

    <Question question="Judging" answer="something about judging" />

    <Question question="Sleeping" answer="something about sleeping" />

    <Question question="Food" answer="something about food" />

    <Question question="bathrooms" answer="where to find gender neutral" />
  </Container>
)

export default Info
