import styled from "styled-components"
import * as styleVars from "../variable"
import BgImg from "../../assets/images/designs/bg.svg"

export const BgStyles = styled.section`
  height: 100%;
  position: relative;
  margin-bottom: 400px;
  margin-top: 100px;
  background: url(${BgImg});
  background-size: cover;
  background-position: right;
  background-repeat: no-repeat;
  z-index: -8;

  @media only screen and (max-width: ${styleVars.smUp}) {
    margin-bottom: 80px;
    background-position: 95% 350px;
  }
`

export default BgStyles

