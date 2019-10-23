import styled from "styled-components"
import * as styleVars from "./variable"

const landingColorPrimary = styleVars.colorHackRed
const landingColorBorder = styleVars.hackBlack5
const landingColorDarkBg = styleVars.hackBlack5

export const Hero = styled.section `
  min-height: 100vh;
  position: relative;
  overflow: hidden;
  padding: 0 2rem;

  @media only screen and (min-width: ${styleVars.mdUp}){
    padding: 0 10rem;
  }
  }

  .hero__copy {
  padding-top: 14rem;
  }

  .hero__heading {
  text-align: left;
  margin: auto;
  padding-bottom: 2rem;
  font-size: 1.875em; 
  font-weight: bold;
  color: ${styleVars.colorHackRed};

  @media only screen and (max-width: ${styleVars.smUp}) {
    text-align: center;
    font-size: 4.8rem;
    padding-bottom: 0;
  }
  }

  .hero__subheading {
  font-size: 1.5em;
  font-weight: 400;
  text-align: left;
  padding-bottom: 1rem;
  color: ${styleVars.hackBlack50};

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

    .hero__email {
      font-size: 1.6rem;
      font-weight: 400;
      text-align: center;
      margin-bottom: 1rem;
  
      @media only screen and (min-width: ${styleVars.smUp}) {
        font-size: 1.4rem;
        text-align: center;
      }
    }
`

export const HeroButton = styled.button`
  //   font-family: Brown, sans-serif;
  font-weight: 600;
  font-size: 16px;
  text-transform: none;
  color: ${styleVars.colorHackRed};
  border-radius: 0.5em;
  border: 2px solid ${styleVars.colorHackRed};
  transition: all 0.15s ease-in-out;
  padding: 10px 32px;

  &:hover {
    background-color: ${styleVars.colorHackRed};
    color: white;
  }

  @media only screen and (min-width: ${styleVars.smUp}) {
    text-align: center;
  }
`

export const ArrowButton = styled.button`
    background-color: ${styleVars.colorHackRed};
        color: #fff;
        border-radius: 2em;
        border: none;
        transition: all 0.15s ease-in-out;
        top: 1px;
        right: 0;
        height: 36px;
        padding: 0 14px;
        margin-left: -8px;

        &:hover {
        background-color: $color-hack-red-med;
        }
`

export const HeroBackground = styled.img`
    position: absolute;
    height: auto;
    object-fit: contain;
    top: 100px;
    z-index: -6;
    width: 100%;

    @media only screen and (max-width: ${styleVars.smUp}) {
        position: relative;
        max-width: 100%;
        margin: 0;
        padding: 0 2rem;
    }
`

export const HeroForeground = styled.img`
    position: absolute;
    height: auto;
    object-fit: contain;
    z-index: -5;
    top: 350px; 
    right: 0px;

    @media only screen and (max-width: ${styleVars.smUp}) {
        max-width: 90%;
        margin: 0;
        padding: 0 2rem;
        padding-top: 7rem; 
        position: unset; 
        z-index: -1
    }
`

export const HeroBuildings = styled.img`
    position: absolute;
    height: auto;
    object-fit: contain;
    z-index: -4;
    top: 290px; 
    right: 0px;

    @media only screen and (max-width: ${styleVars.smUp}) {
        max-width: 90%;
        max-height: 80%;
        margin-top: 10%;
        padding: 0rem 2rem; 
        padding-top: 3rem;
        top: 450px; 
        z-index: 0;
    }
`

export const HeroCord = styled.img`
    position: absolute;
    height: auto;
    object-fit: contain;
    z-index: -3;
    top: 350px; 
    right: 0px;

    @media only screen and (max-width: ${styleVars.smUp}) {
        max-width: 100%;
        margin: 0;
        padding: 0 2rem;
    }
`

export const About = styled.section`
  display: flex;
  align-items: center;
  padding: 2rem 1rem;

  @media only screen and (max-width: ${styleVars.smUp}) {
    display: block;
  }
`

export const AboutContent = styled.div`
  display: flex;
  padding: 2rem 1rem;
  max-width: 1000px;
  margin: auto;
  margin-bottom: 5rem;

  @media only screen and (max-width: ${styleVars.smUp}) {
    display: block;
  }
`

export const AboutText = styled.div`
  padding-left: 2rem;
  margin-right: 10rem;
  width: 50%;
  margin-bottom: 1rem;

  h2 {
    color: ${styleVars.colorHackRed};
    font-size: 3rem;
    font-weight: 400;
  }

  @media only screen and (max-width: ${styleVars.smUp}) {
    width: 100%;
    margin: 0;
    padding: 0 2rem;
    margin-bottom: 1rem;
  }
`

export const AboutImg = styled.img`
  max-width: 50%;
  height: auto;
  object-fit: contain;
  padding-right: 2rem;

  @media only screen and (max-width: ${styleVars.smUp}) {
    max-width: 100%;
    margin: 0;
    padding: 0 2rem;
  }
`
export const SponsContent = styled.div`
  display: flex;
  padding: 2rem 1rem;
  max-width: 1000px;
  margin: auto;
  margin-bottom: 5rem;

  @media only screen and (max-width: ${styleVars.smUp}) {
    display: block;
  }
`

export const SponsText = styled.div`
  padding-left: 10rem;
  // margin-right: 10rem;
  width: 50%;
  margin-bottom: 2rem;

  h2 {
    color: ${styleVars.colorHackRed};
    font-size: 3rem;
    font-weight: 400;
  }

  @media only screen and (max-width: ${styleVars.smUp}) {
    width: 100%;
    margin: 0;
    padding: 0 2rem;
    margin-bottom: 1rem;
  }
`

export const SponsImg = styled.img`
  max-width: 50%;
  height: auto;
  object-fit: contain;
  padding-right: 2rem;

  @media only screen and (max-width: ${styleVars.smUp}) {
    max-width: 100%;
    margin: 0;
    padding: 0 2rem;
  }
`

export const SponsButton = styled.button`
  font-family: Brown, sans-serif;
  font-weight: 600;
  font-size: 14px;
  text-transform: none;
  background-color: ${landingColorPrimary};
  color: white;
  border-radius: 3.75em;
  border: none;
  transition: all 0.15s ease-in-out;
  margin-top: 16px;
  padding-top: 15px;
  padding-bottom: 15px;
  padding-left: 25px;
  padding-right: 25px;
  //   height: 45px;
  //   width: 175px;

  &:hover {
    background-color: #f56f65;
    color: white;
  }
`

export const Sponsor = styled.section`
  margin-bottom: 12rem;
  .sponsor__heading {
    font-size: 2.8rem;
  }

  .sponsor-list {
    margin-bottom: 16rem;
  }

  .sponsor-list__heading {
    text-align: center;
    // font-size: 2.8rem;
    margin-bottom: 6rem;
  }

  .sponsor-list__tier {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin-bottom: 0.5rem;
  }
`
export const SponsorLogoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  align-content: center;
  padding: 1em 4rem;

  a {
    max-width: 100%;
    max-height: 100%;
  }
`
export const SponsorLogoWrapperTera = styled.div`
  flex-basis: 90%;
  align-self: center;
  padding: 2%;

  a {
    img {
      max-height: 25vh;
      max-width: 25vw;
    }
  }
`

export const SponsorLogoWrapperGiga = styled.div`
  flex-basis: 65%;
  align-self: center;
  padding: 2%;

  a {
    img {
      max-height: 10vh;
    }
  }
`

export const SponsorLogoWrapperMega = styled.div`
  flex-basis: 45%;
  align-self: center;
  padding: 2%;

  a {
    img {
      max-height: 9vh;
    }
  }
`

export const SponsorLogoWrapperKilo = styled.div`
  flex-basis: 21%;
  align-self: center;
  padding: 2%;

  a {
    img {
      max-height: 6vh;
    }
  }
`

export const SponsorLogoWrapperByte = styled.div`
  flex-basis: 18%;
  align-self: center;
  padding: 1%;

  a {
    img {
      max-height: 5vh;
    }
  }
`

export const SponsorLogoWrapperInkind = styled.div`
  flex-basis: 7%;
  align-self: center;
  padding: 1.5%;

  a {
    img {
      max-height: 4vh;
    }
  }
`

export const SponsorLogo = styled.image`
  max-width: 100%;
  max-height: 100%;
  transition: 1s;

  &:hover {
    transform: scale(1.1);
  }
`
export const SponsporList = styled.div`
  margin-bottom: 16rem;
  sponsor-list__heading {
    text-align: center;
    // font-size: 2.8rem;
    margin-bottom: 6rem;
  }

  sponsor-list__tier {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin-bottom: 0.5rem;
  }
`
export const SponsorHeading = styled.div`
  font-size: 2.8rem;
`
export const FaqSection = styled.div`
  align-content: center;
`

export const FaqContainer = styled.div`
  padding-bottom: 60rem;
  max-width: 88rem;
  height: 40rem;
  text-align: center;
  margin: auto;

  @include media-query(${styleVars.mdUp}) {
    padding-bottom: 32rem;
  }
`
export const FaqJumpTo = styled.div`
  padding-top: 5rem;
`
export const FaqFlexContainer = styled.div`
  .faq__flex-container {
    display: flex;
    justify-content: center;
    padding-top: 75px;
    flex-wrap: wrap;
    padding-left: 1.5rem;
    padding-right: 1.5rem;

    @include media-query(814px) {
      display: flex;
      justify-content: center;
      padding-top: 75px;
      flex-wrap: wrap;
    }
  }
`
export const FaqLeftColumn = styled.div`
  width: 40rem;
  text-align: initial;

  @include media-query(875px) {
    padding-right: 1.5rem;
  }
`
export const FaqRightColumn = styled.div`
  width: 40rem;
  text-align: initial;

  @include media-query(875px) {
    padding-left: 1.5rem;
  }
`
export const AccordionTitle = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 80%;
  padding: 1rem 0.5rem 1rem 1rem;
  color: ${styleVars.hackBlack80};

  &:hover {
    cursor: pointer;
    color: ${styleVars.globalColorPrimary};
  }

  &.active {
    color: ${styleVars.globalColorPrimary};
  }
`

export const AccordionItem = styled.div`
  background-color: ${styleVars.hackBlack5};
  box-shadow: 0px 2px 2px #e9e9e9;
  border-radius: 4px;
  margin-bottom: 3rem;
  position: relative;
  z-index: 1;

  &:after {
    font-weight: 900;
    content: "+";
    position: absolute;
    float: right;
    top: 1.1rem;
    right: 1.1rem;
    font-size: 1.5rem;
    color: ${styleVars.hackBlack80};
  }

  &.active {
    &:after {
      font-weight: 900;
      font-size: 1.5rem;
      content: "-";
      color: ${styleVars.globalColorPrimary};
    }
  }

  &:hover {
    &:after {
      cursor: pointer;
      color: ${styleVars.globalColorPrimary};
    }
  }
`

export const AccordionContent = styled.div`
    opacity: 0;
    padding: 0 1rem;
    max-height: 0;
    overflow: hidden;
    clear: both;

    a,
        a:active {
        color:  ${styleVars.globalColorPrimary};
    }

    a:hover {
        color: ${styleVars.hackBlack80};
    }

    &.active {
        opacity: 1;
        max-height: 100%;
        -o-transition: all 0.2s ease 0.15s;
        transition: all 0.2s ease 0.15s;
        }
    }

    .faq__wrapper {
        position: relative;

    }

    .faq__image-left {
        display: none;

        @include media-query(${styleVars.lgUp}) {
        display: initial;
        position: absolute;
        top: 40%;
        left: 0;
        width: 23vw;
        height: auto;
        }
    }

    .faq__image-right {
        display: none;
    
        @include media-query(${styleVars.lgUp}) {
          display: initial;
          position: absolute;
          top: 30%;
          right: 0%;
          width: 25vw;
          height: auto;
        }
    }
`
