import React from "react"

import Container from "./Container"
import Content from "./Content"
import Image from "./Image"

import stickerMule from "../../assets/images/sponsor/stickermule.png"

const Logos = ({ scrollRef }) => (
  <Container ref={scrollRef}>
    <Content>
      <center><Image src={stickerMule} width='40%'/></center>
    </Content>
  </Container>
)

export default Logos
