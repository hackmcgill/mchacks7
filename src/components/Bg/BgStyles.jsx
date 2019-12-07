import styled from "styled-components"
import * as styleVars from "../variable"
import BgImg from "../../assets/images/designs/bg.svg"

export const BgStyles = styled.section`
  height: 100%;
  position: relative;
  margin-bottom: 60px;
  margin-top: 100px;
  background: url(${BgImg});
  background-size: cover;
  background-position: right 80px;
  background-repeat: no-repeat;

  @media only screen and (max-width: ${styleVars.smUp}) {
    background-position: 95% 400px;
  }
`

export default BgStyles
