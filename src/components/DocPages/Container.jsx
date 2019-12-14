import styled from "styled-components"
import * as styleVars from "../variable"

export const Container = styled.section`
  display: flex;
  align-items: center;
  padding: 10rem 38rem 0 38rem;

  @media only screen and (max-width: ${styleVars.smUp}) {
    display: block;
    padding: 25%;
  }
`

export default Container
