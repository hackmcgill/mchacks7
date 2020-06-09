import styled from "styled-components"
import * as styleVars from "../variable"

export const Buildings = styled.img`
  max-width: 100%;
  margin-top: 0;
  margin-left: 0;

  @media only screen and (min-width: ${styleVars.lgUp}) {
    max-width: 200%;
    margin-top: 100px;
    margin-left: -120px;
  }
`

export default Buildings
