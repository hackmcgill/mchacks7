import styled from "styled-components"
import * as styleVars from "../variable"

export const Container = styled.section`
  display: flex;
  align-items: center;
  padding: 2rem 1rem 0 1rem;

  &.hidden {
    display: none !important;
  }

  @media only screen and (max-width: ${styleVars.smUp}) {
    display: block;
  }
`

export default Container
