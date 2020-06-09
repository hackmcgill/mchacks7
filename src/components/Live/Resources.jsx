import React from "react"

import Container from "../FAQ/Container"
import Question from "../FAQ/Question"

const Resources = ({ visible }) => (
  <Container className={!visible ? "hidden" : ""}>
    <h2>Sponsor Resources</h2>
    <Question question="Wolfram API">
      30-day complimentary access to the Wolfram development platform and the
      Wolfram API, just click{" "}
      <a
        href="https://account.wolfram.com/redeem/McHacks7Montreal2020"
        target="_blank"
        rel="noopener noreferrer"
      >
        here
      </a>
      .<br></br>
      For more information check out{" "}
      <a
        href="https://www.wolfram.com/hackathons/"
        target="_blank"
        rel="noopener noreferrer"
      >
        https://www.wolfram.com/hackathons/
      </a>
      .
    </Question>

    <Question question="Cisco API">
      Accelerating your DevOps with the Cisco API found{" "}
      <a
        href="https://developer.cisco.com/pyats/"
        target="_blank"
        rel="noopener noreferrer"
      >
        here
      </a>
      .
    </Question>

    <Question question="Google API">
      <a
        href="https://codelabs.developers.google.com/codelabs/flutter-firebase/#0"
        target="_blank"
        rel="noopener noreferrer"
      >
        Flutter
      </a>
      , an open-source mobile application development SDK created by Google, as
      well as Firebase, a mobile and web application development platform.
    </Question>

    <Question question="IBM API">
      Natural Language Understanding API found{" "}
      <a
        href="https://cloud.ibm.com/apidocs/natural-language-understanding/natural-language-understanding"
        target="_blank"
        rel="noopener noreferrer"
      >
        here
      </a>
      .
    </Question>

    <Question question="Voiceflow Pro">
      Easily design, prototype, and launch voice apps for Alexa and Google with{" "}
      <a
        href="https://www.voiceflow.com/hackathon/mchacks"
        target="_blank"
        rel="noopener noreferrer"
      >
        Voiceflow Pro
      </a>
      .
    </Question>

    <Question question="Ivey Business School">
      Create a business model that supports your hack with the Ivey Business
      Model Canvas found{" "}
      <a
        href="https://apps.ivey.ca/FileUpload/eLink/130d8f79-115e-4724-85e6-9b555dc79486_Ivey-business-model-canvas-1.pdf"
        target="_blank"
        rel="noopener noreferrer"
      >
        here
      </a>
      ! Prepare a 5 min pitch describing your business.
    </Question>
  </Container>
)

export default Resources
