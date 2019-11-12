import styled from "styled-components"
import * as styleVars from "../variable"

export const Campus = styled.img`
  position: absolute;
  height: auto;
  object-fit: contain;
  z-index: -4;
  top: 290px;
  right: 0px;

  @media only screen and (max-width: ${styleVars.smUp}) {
    max-width: 90%;
    max-height: 80%;
    margin-top: 120px;
    padding: 0;
    padding-top: 3rem;
    z-index: 0;
  }
`

export default Campus
