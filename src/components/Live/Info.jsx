import React from "react"

import Container from "../FAQ/Container"
import Question from "../FAQ/Question"

const Info = ({ visible }) => (
  <Container className={!visible ? "hidden" : ""}>
    <h2>Welcome to McHacks! 👋</h2>
    <Question question="Wifi">
      To access the wifi network, you need to create an account on guest.mcgill.ca wifi network. If you are a university student, you can also connect to the eduroam network with your school credentials.
    </Question>
    <Question question="HackPass">
      Your HackPass is the QR code found on your McHacks badge. Make sure your wearing your HackPass at all times during McHacks. Sponsors can access your digital resume by scanning your HackPass.
    </Question>
    <Question question="Help Desk">
      The help desk is on the first floor of Trottier near the entrances to the building.
    </Question>
    <Question question="Bathroom">
      There are bathrooms located on every floor of Trottier. A gender neutral bathroom is located on the ground floor at the end of the hallway next to 0060.
    </Question>
    <Question question="Water">
      Water fountains are located on each floor next to the restrooms and bottle filling stations are on floor 0 and 1.
    </Question>
    <Question question="Prizes + judges">
      Check out the <a href="https://mchacks7.devpost.com/" target="_blank">McHacks 7 Devpost</a> for information on judging and prizes.
    </Question>
  </Container>
)

export default Info
