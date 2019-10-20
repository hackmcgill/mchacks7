import React from "react"

import AboutImg from "../images/about.svg"
import * as Styles from "../styles/components/index.js"

const About = () => (
    <Styles.About>
        <Styles.AboutContent>
            <Styles.AboutText>
                <h2>Behind Canada’s original collegiate hackathon</h2> 
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse purus metus, tincidunt at finibus quis,
                    <br />
                    <br />
                    Quisque nisl eros, convallis ut pulvinar euismod, accumsan sit amet tortor. Aliquam ligula mi, interdum in tempor at, semper in tellus. Aenean pellentesque urna tempus dolor scelerisque, id porttitor mi dictum. Vestibulum convallis odio et magna aliquam, sed sollicitudin dui tempus. 
                    <br />
                    <br />
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                </p>
            </Styles.AboutText>
            <Styles.AboutImg src={AboutImg} />
        </Styles.AboutContent>
    </Styles.About>
  )
  
export default About