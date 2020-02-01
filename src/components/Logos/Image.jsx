import styled from "styled-components"
import * as styleVars from "../variable"

export const Image = styled.img`
  max-width: 50%;
  height: auto;
  object-fit: contain;
  padding-right: 2rem;

  @media only screen and (max-width: ${styleVars.smUp}) {
    margin: 0;
    padding: 0;
    order: 2;
  }
`

export default Image
