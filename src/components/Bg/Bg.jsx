import React from "react"

import BgStyles from "./BgStyles"
import CordStyles from "./CordStyles"

import CordImg from "../../assets/images/designs/cord.svg"

const Bg = ({ children }) => (
  <BgStyles>
    {children}
    <CordStyles src={CordImg} />
  </BgStyles>
)

export default Bg
