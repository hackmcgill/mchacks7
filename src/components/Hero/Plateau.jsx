import styled from "styled-components"
import * as styleVars from "../variable"

export const Plateau = styled.img`
  position: absolute;
  height: auto;
  object-fit: contain;
  z-index: -5;
  top: 350px;
  right: 0px;

  @media only screen and (max-width: ${styleVars.smUp}) {
    max-width: 90%;
    margin: 0;
    padding: 0 2rem;
    padding-top: 7.3rem;
    position: unset;
    z-index: -1;
  }
`

export default Plateau
