import styled from "styled-components"
import * as styleVars from "../variable"

export const Links = styled.div`
  padding: 1.2rem 2.4rem;
  align-items: center;
  position: fixed;
  top: 1.3rem;
  right: 20px;
  display: none;

  @media only screen and (min-width: ${styleVars.smUp}) {
    display: flex;
  }
`

export default Links
