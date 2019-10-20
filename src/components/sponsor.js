import React from "react"

import SponsImg from "../images/spons.svg"
import * as Styles from "../styles/components/index.js"

const Sponsor = () => (
    <Styles.Sponsor>
        <Styles.SponsContent>
            <Styles.SponsImg src={SponsImg} />
            <Styles.SponsText>
                <h2>Interested in Sponsoring?</h2>
                <p>
                    Hosting Canada’s favourite hackathon isn't easy, and our generous sponsors help bring it to life! 
                    Spend a weekend at McHacks to witness tomorrow’s leaders as they experiment with your technologies and 
                    solve problems from the ground up. Join us as we shake the world of technology for 24 hours. 
                    We've got a table with your name on it!
                </p>
            </Styles.SponsText>
        </Styles.SponsContent>   
    </Styles.Sponsor>
)
    
export default Sponsor