import styled from "styled-components"
import * as styleVars from "../variable"

export const Content = styled.div`
  display: flex;
  padding: 2rem 1rem;
  max-width: 1000px;
  margin: auto;
  margin-bottom: 5rem;

  @media only screen and (max-width: ${styleVars.smUp}) {
    flex-direction: row;
    padding: 4rem 2rem;
  }
`

export default Content
