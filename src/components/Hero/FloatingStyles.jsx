import styled from "styled-components"
import * as styleVars from "../variable"

export const HotAirStyles = styled.img`
  position: absolute;
  top: 0;
  width: 140px;

  @media only screen and (max-width: ${styleVars.smUp}) {
    
  }
`

export const UFOStyles = styled.img`
  position: absolute;
  top: 0;
  right: 300px;
  width: 130px;
  z-index: -7;
  @media only screen and (max-width: ${styleVars.smUp}) {
    
  }
`

export const PlanetStyles = styled.img`
  position: absolute;
  width: 100px;
  top: -250px;
  right: 50px;
  @media only screen and (max-width: ${styleVars.smUp}) {
    
  }
`

