import styled from "styled-components"
import * as styleVars from "../variable"

export const HeroStyles = styled.section`
  height: 100%;
  position: relative;
  padding: 0 2rem;
  margin-bottom: 400px;
  padding-top: 50px;

  @media only screen and (min-width: ${styleVars.mdUp}) {
    padding: 50px 10rem;
  }

  @media only screen and (max-width: ${styleVars.smUp}) {
    margin-bottom: 80px;
  }

  .hero__heading {
    text-align: left;
    margin: auto;
    font-size: 3.875em;
    font-weight: normal;
    color: ${styleVars.colorHackRed};

    @media only screen and (max-width: ${styleVars.smUp}) {
      text-align: center;
      font-size: 4.8rem;
    }
  }

  .hero__topsubheading {
    font-size: 1.5em;
    font-weight: 400;
    text-align: left;
    color: ${styleVars.colorHackRed};
    margin-top: 0;
    margin-bottom: 0;

    @media only screen and (max-width: ${styleVars.smUp}) {
      text-align: center;
      padding-bottom: 0;
    }
  }

  .hero__subheading {
    font-size: 1.5em;
    font-weight: 400;
    text-align: left;
    color: ${styleVars.hackBlack60};
    margin-top: 0;
    margin-bottom: 0;

    @media only screen and (max-width: ${styleVars.smUp}) {
      text-align: center;
      padding-bottom: 0;
    }
  }

  .hero__cta {
    font-size: 1.4rem;
    font-weight: 400;
    text-align: center;

    @media only screen and (min-width: ${styleVars.smUp}) {
      font-size: 1.8rem;
      text-align: left;
    }
  }

  .hero__email {
    font-weight: 400;
    text-align: left;
    margin-bottom: 1rem;
    display: block;

    @media only screen and (max-width: ${styleVars.smUp}) {
      text-align: center;
    }
  }

  .hero__images {
    position: absolute;
    top: 290px;
    right: 0;
    display: inline;

    @media only screen and (max-width: ${styleVars.smUp}) {
      max-width: 90%;
      max-height: 80%;
      margin-top: 120px;
      padding: 0;
      padding-top: 3rem;
    }
  }
`

export default HeroStyles
