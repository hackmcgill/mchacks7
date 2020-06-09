import styled from "styled-components"
import * as styleVars from "../variable"

export const HotAirStyles = styled.img`
  position: absolute;
  top: -250px;
  right: 600px;
  width: 110px;

  @media only screen and (max-width: ${styleVars.lgUp}) {
    right: 370px;
    top: -300px;
  }

  @media only screen and (max-width: ${styleVars.mdUp}) {
    right: 370px;
    top: -270px;
    width: 90px;
  }

  @media only screen and (max-width: ${styleVars.smUp}) {
    right: 60%;
    top: -250px;
    width: 80px;
  }
`

export const UFOStyles = styled.img`
  position: absolute;
  top: -140px;
  right: 250px;
  width: 120px;
  z-index: -10;

  @media only screen and (max-width: ${styleVars.lgUp}) {
    right: 200px;
  }

  @media only screen and (max-width: ${styleVars.mdUp}) {
    right: 200px;
    top: -180px;
    width: 100px;
  }

  @media only screen and (max-width: ${styleVars.smUp}) {
    right: 100px;
    top: -130px;
    width: 60px;
  }
`

export const PlanetStyles = styled.img`
  position: absolute;
  width: 70px;
  top: -240px;
  right: 50px;

  @media only screen and (max-width: ${styleVars.lgUp}) {
    top: -350px;
    right: 50px;
  }

  @media only screen and (max-width: ${styleVars.mdUp}) {
    top: -280px;
    right: 50px;
  }

  @media only screen and (max-width: ${styleVars.smUp}) {
    top: -640px;
    right: 30px;
    width: 50px;
  }
`
