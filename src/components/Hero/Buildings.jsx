import styled from "styled-components"
import * as styleVars from "../variable"

export const Buildings = styled.img`
  position: absolute;
  top: 230px;
  right: 0;
  width: 1000px;
  max-width: 100%;
  z-index: -2;

  @media only screen and (max-width: ${styleVars.lgUp}) {
    top: 320px;
  }

  @media only screen and (max-width: ${styleVars.smUp}) {
    top: 0;
    right: 0;
    left: 0;
    margin-top: 280px;
    position: relative;
  }
`

export default Buildings
