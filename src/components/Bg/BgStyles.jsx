import styled from "styled-components"
import * as styleVars from "../variable"

export const BgStyles = styled.section`
  height: 100%;
  position: relative;
  margin-bottom: 60px;
  margin-top: 100px;
  background: ${styleVars.hackBlack5};
  background-size: cover;
  background-position: right 80px;
  background-repeat: no-repeat;

  @media only screen and (max-width: ${styleVars.smUp}) {
    background-position: 95% 400px;
  }
`

export default BgStyles
