import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import {
  faTwitter,
  faFacebookSquare,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons"

import * as Styles from "../styles/components/nav.js"

const Footer = () => (
  <Styles.Footer>
    <Styles.FooterLinks>
      {/* TODO
            <Styles.FooterLink>
                Code of Conduct
            </Styles.FooterLink>
            <Styles.FooterLink>
                Press Kit
            </Styles.FooterLink>
            <Styles.FooterLink>
                Privacy Policy
            </Styles.FooterLink>
              */}
    </Styles.FooterLinks>

    <Styles.FooterLinksSocial>
      <Styles.FooterLinkSocial></Styles.FooterLinkSocial>
      <Styles.FooterLinkSocial
        href="mailto:contact@mchacks.ca?Subject=Hello!"
        target="_blank"
      >
        <FontAwesomeIcon icon={faEnvelope} />
      </Styles.FooterLinkSocial>
      <Styles.FooterLinkSocial href="https://fb.com/mcgillhacks">
        <FontAwesomeIcon icon={faFacebookSquare} />
      </Styles.FooterLinkSocial>
      <Styles.FooterLinkSocial href="https://twitter.com/mcgillhacks">
        <FontAwesomeIcon icon={faTwitter} />
      </Styles.FooterLinkSocial>
      <Styles.FooterLinkSocial href="https://instagram.com/mcgillhacks">
        <FontAwesomeIcon icon={faInstagram} />
      </Styles.FooterLinkSocial>
    </Styles.FooterLinksSocial>
  </Styles.Footer>
)

export default Footer
