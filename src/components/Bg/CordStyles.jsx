import styled from "styled-components"
import * as styleVars from "../variable"

export const CordStyles = styled.img`
  width: 100vw;
  max-width: 100vw;
  position: relative;
  top: 30px;

  @media only screen and (max-width: ${styleVars.smUp}) {
    top: 20px;
  }
`

export default CordStyles
