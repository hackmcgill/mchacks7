import styled from "styled-components"
import * as styleVars from "../variable"

export const Image = styled.img`
  max-width: 100%;
  height: auto;
  object-fit: contain;
  padding-top: 2rem;
  padding-bottom: 2rem;

  @media only screen and (max-width: ${styleVars.smUp}) {
    max-width: 100%;
    margin: 0 auto;
    padding: 0;
  }
`

export default Image
