import styled from "styled-components"
import * as styleVars from "../variable"

export const Text = styled.div`
	margin-bottom: 1rem;

  h1 {
    color: ${styleVars.colorHackRed};
    font-size: 5rem;
    font-weight: 400;
  }

  h2 {
    color: ${styleVars.colorHackRed};
    font-size: 3rem;
    font-weight: 400;
  }

  @media only screen and (max-width: ${styleVars.smUp}) {
    width: 100%;
    margin: 0;
    padding: 0;
    margin-bottom: 1rem;
  }
`

export default Text
