import React from "react"

import BgStyles, { BgImgStyles } from "./BgStyles"
import BgImg from "../../assets/images/designs/bg.svg"


const Bg = ({ children }) => (
  <BgStyles>
    {children}
    <BgImgStyles src={BgImg} />
  </BgStyles>
)

export default Bg
