import React from "react"

import Container from "./Container"
import LinksWrapper from "./LinksWrapper"
// import PageLink from "./PageLink"
import SocialLink from "./SocialLink"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import {
  faTwitter,
  faFacebookSquare,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons"

const Footer = () => (
  <Container>
    <LinksWrapper>
      {/* TODO
            <PageLink>
                Code of Conduct
            </PageLink>
            <PageLink>
                Press Kit
            </PageLink>
            <PageLink>
                Privacy Policy
            </PageLink>
              */}
    </LinksWrapper>

    <LinksWrapper>
      <SocialLink href="mailto:contact@mchacks.ca?Subject=Hello!" target="_blank" >
        <FontAwesomeIcon icon={faEnvelope} />
      </SocialLink>
      <SocialLink href="https://fb.com/mcgillhacks">
        <FontAwesomeIcon icon={faFacebookSquare} />
      </SocialLink>
      <SocialLink href="https://twitter.com/mcgillhacks">
        <FontAwesomeIcon icon={faTwitter} />
      </SocialLink>
      <SocialLink href="https://instagram.com/mcgillhacks">
        <FontAwesomeIcon icon={faInstagram} />
      </SocialLink>
    </LinksWrapper>
  </Container>
)

export default Footer
