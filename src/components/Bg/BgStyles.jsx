import styled from "styled-components"
import * as styleVars from "../variable"

export const BgStyles = styled.section`
  height: 100%;
  position: relative;
  margin-bottom: 400px;
  margin-top: 100px;

  @media only screen and (max-width: ${styleVars.smUp}) {
    margin-bottom: 80px;
  }
`

export const BgImgStyles = styled.img`
  position: absolute;
  top: 0;
  left: 0; 
  width: 100vw;
  z-index: -8;
`

export default BgStyles

