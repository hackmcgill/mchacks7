import React from "react"

import Container from "./Container"
import Content from "./Content"
import Image from "./Image"
import NavLink from "./NavLink"

import stickerMule from "../../assets/images/sponsor/stickermule.png"

const Logos = ({ scrollRef }) => (
  <Container ref={scrollRef}>
    <Content>
      <center>
        <NavLink
          href="http://hackp.ac/mlh-stickermule-hackathons"
          target="_blank"
        >
          <Image src={stickerMule} width="40%" />
        </NavLink>
      </center>
    </Content>
  </Container>
)

export default Logos
