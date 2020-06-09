import React from "react"

import Container from "./Container"
import Question from "./Question"

const FAQ = ({ scrollRef }) => (
  <Container ref={scrollRef}>
    <h2>Frequently Asked Questions</h2>

    <Question question="What is a hackathon?">
      A hackathon is social coding event where programmers, designers and
      developers collaborate to solve a problem.
    </Question>

    <Question question="Who can participate? Are there any prerequisites or required skills?">
      Anyone is welcome to participate in this event. While experience coding
      and programming is a huge plus, teams will also need people with strong
      presentation skills and brilliant ideas.
    </Question>

    <Question question="Do I need a team?">
      While you do have the option of working alone, McHacks is a team event so
      working with others is encouraged. There are a few ways to find teammates:
      You can pick your team from people you already know, or meet them at group
      formation session during the hackathon.
    </Question>

    <Question question="Is there anything that I need to prep?">
      Other than finding fellow brilliant minds with complementary skills to
      team up with, there is nothing that you need to prepare in advance.
    </Question>

    <Question question="How much does it cost?">
      Nothing! Thanks to our amazing sponsors, McHacks is completely free for
      our hackers.
    </Question>

    <Question question="Will there be prizes?">
      Absolutely. Prizes will be announced closer to McHacks, usually on the day
      of.
    </Question>

    <Question question="How can I get to McHacks?">
      We will be sending buses to nearby universities and cities. To reserve a
      seat on a bus or to find out if a bus will be stopping near you, check out
      the travel page on our hacker dashboard. Travel reimbursements will be
      reviewed on a case-by-case basis and decisions for reimbursement amount
      will be released on our hacker dashboard.
    </Question>

    <Question question="Where will I sleep?">
      There will be a spot for you to catch some ZZZ’s, but we recommend that
      you bring a sleeping bag or anything else you need in order to sleep well!
    </Question>
  </Container>
)

export default FAQ
