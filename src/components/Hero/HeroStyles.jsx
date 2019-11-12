import styled from "styled-components"
import * as styleVars from "../variable"

export const HeroStyles = styled.section`
  height: 100%;
  position: relative;
  padding: 0 2rem;
  margin-bottom: 400px;

  @media only screen and (min-width: ${styleVars.mdUp}) {
    padding: 0 10rem;
  }

  @media only screen and (max-width: ${styleVars.smUp}) {
    margin-bottom: 80px;
  }

  .hero__copy {
    padding-top: 14rem;
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
`

export default HeroStyles
