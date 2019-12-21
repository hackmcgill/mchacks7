import styled from "styled-components"
import * as styleVars from "../variable"

export const MLHContainer = styled.a`
  display: flex;
  max-width: 100px;
  min-width: 60px;
  position: absolute;
  margin-left: 2.2rem;
  margin-top: -30px;
  width: 10%;
  z-index: 1;

  @media only screen and (min-width: ${styleVars.mdUp}) {
    margin-left: 1.2rem;
  }
`

export default MLHContainer
