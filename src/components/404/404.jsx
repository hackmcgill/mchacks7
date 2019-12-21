import React from "react"

import Container from "./Container"
import Wrapper from "./Wrapper"
import Image from "./Image"
import Text from "./Text"
import Button from "./Button"

import NotFoundImg from "../../assets/images/designs/not-found.svg"

const home = () => {
  window.location = "/"
}

const NotFound = () => (
  <Wrapper>
    <Container>
      <Image src={NotFoundImg} />
      <Text>
        <h2>Sorry! It looks like this page doesn't exist.</h2>
      </Text>
      <Button onClick={home}>Back to Home</Button>
    </Container>
  </Wrapper>
)

export default NotFound
