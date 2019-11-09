import styled from "styled-components"
import * as styleVars from "./variable"

export const SponsContent = styled.div`
  display: flex;
  padding: 2rem 1rem;
  max-width: 1000px;
  margin: auto;
  margin-bottom: 5rem;

  @media only screen and (max-width: ${styleVars.smUp}) {
    flex-direction: column;
    padding: 4rem 2rem;
  }
`

export const SponsText = styled.div`
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
    padding: 0;
    margin-bottom: 1rem;
    order: 1;
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
    padding: 0;
    order: 2;
  }
`

export const SponsButton = styled.button`
  font-family: Brown, sans-serif;
  font-weight: 600;
  font-size: 14px;
  text-transform: none;
  background-color: ${styleVars.colorHackRed};
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
