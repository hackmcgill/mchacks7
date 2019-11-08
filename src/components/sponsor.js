import React from "react"

import SponsImg from "../assets/images/spons.svg"
import * as Styles from "../styles/components/index.js"

const mailTo = () => {
  window.location = "mailto:sponsorship@mchacks.ca"
}

const Sponsor = ({ scrollRef }) => (
  <Styles.Sponsor ref={scrollRef}>
    <Styles.SponsContent>
      <Styles.SponsImg src={SponsImg} />
      <Styles.SponsText>
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
        <Styles.SponsButton onClick={mailTo}>
          Become a Sponsor
        </Styles.SponsButton>
        {/* <a class="button" href="mailto:sponsorship@mchacks.ca">Become a sponsor</a> */}
      </Styles.SponsText>
    </Styles.SponsContent>
  </Styles.Sponsor>
)

export default Sponsor
