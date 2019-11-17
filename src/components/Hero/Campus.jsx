import styled from "styled-components"
import * as styleVars from "../variable"

export const Campus = styled.img`
  height: auto;
  object-fit: contain;
  z-index: 0;

  @media only screen and (max-width: ${styleVars.smUp}) {
    max-width: 90%;
    max-height: 80%;
    margin-top: 120px;
    padding: 0;
    padding-top: 3rem;
  }
`

export default Campus
