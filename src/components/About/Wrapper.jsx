import styled from "styled-components"
import * as styleVars from "../variable"
 
export const Wrapper = styled.section`
  display: flex;
  align-items: center;
  padding: 2rem 1rem;

  @media only screen and (max-width: ${styleVars.smUp}) {
    display: block;
  }
`

export default Wrapper
