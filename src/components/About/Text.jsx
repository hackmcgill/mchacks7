import styled from "styled-components"
import * as styleVars from "../variable"

export const Text = styled.div`
  padding-left: 2rem;
  margin-right: 10rem;
  width: 50%;
  margin-bottom: 1rem;

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
