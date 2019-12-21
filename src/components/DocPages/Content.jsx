import styled from "styled-components"
import * as styleVars from "../variable"

export const Content = styled.div`
  display: flex;
  max-width: 1000px;
  padding: 3000px;

  @media only screen and (max-width: ${styleVars.smUp}) {
    display: block;
    padding: 10%;
  }

  @media only screen and (max-width: ${styleVars.lgUp}) and (min-width: ${styleVars.smUp}) {
    display: block;
    padding: 25%;
  }
`

export default Content
