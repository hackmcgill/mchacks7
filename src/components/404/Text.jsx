import styled from "styled-components"
import * as styleVars from "../variable"

export const Text = styled.div`
  padding: 0 1rem;
  margin: 0 auto;
  text-align: center;

  h2 {
    color: ${styleVars.colorHackRed};
    font-size: 3rem;
    font-weight: 400;
  }

  @media only screen and (max-width: ${styleVars.smUp}) {
    width: 100%;

    h2 {
      font-size: 2rem;
    }
  }
`

export default Text
