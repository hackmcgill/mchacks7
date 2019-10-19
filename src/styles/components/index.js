import styled from "styled-components";

export const Hero = styled.section `
  min-height: 100vh;
  position: relative;
  overflow: hidden;
  padding: 0 4rem;

  @include media-query($md-up) {
    padding: 0 10rem;
  }
  }

  .hero__copy {
  padding-top: 16rem;
  }

  .hero__heading {
  font-size: 3.6rem;
  text-align: center;
  margin: auto;
  padding-bottom: 2rem;

  @include media-query($sm-up) {
    text-align: left;
    margin: inherit;
    font-size: 4.8rem;
    width: 48rem;
  }
  }

  .hero__subheading {
  font-size: 1.6rem;
  font-weight: 400;
  text-align: center;
  padding-bottom: 1rem;

  @include media-query($sm-up) {
    font-size: 1.8rem;
    text-align: left;
  }
  }

  .hero__cta {
    font-size: 1.4rem;
    font-weight: 400;
    text-align: center;

    @include media-query($sm-up) {
      font-size: 1.8rem;
      text-align: left;
    }

    .hero__email {
      font-size: 1.6rem;
      font-weight: 400;
      text-align: center;
      margin-bottom: 1rem;
  
      @include media-query($sm-up) {
        font-size: 1.4rem;
        text-align: left;
      }
    }
`

export const HeroButton = styled.button`
  font-family: Brown, sans-serif;
  font-weight: 600;
  font-size: 16px;
  text-transform: none;
  color: $color-hack-red;
  border-radius: 0.5em;
  border: 2px solid $color-hack-red;
  transition: all 0.15s ease-in-out;
  padding: 10px 32px;

  &:hover {
    background-color: $color-hack-red;
    color: white;
  }

  @include media-query($sm-up) {
    font-size: 1.8rem;
    margin-right: 25px;
  }
`

export const Intro = styled.section`
  background-color: $landing-color-dark-bg;
  position: relative;
  padding: 16rem 0 10vw;

  &::before {
    display: block;
    position: absolute;
    top: -350px;
    content: " ";
    width: 100%;
    height: 400px;
    background-image: url("/static/hero-skyline.svg");
    background-size: 1440px;
    z-index: -2;
  }

  &::after {
    display: block;
    position: absolute;
    content: " ";
    bottom: -30vw;
    width: 100%;
    height: 50vw;
    background-image: url("/static/info-plateau.svg");
    background-size: contain;
    z-index: 2;
  }
`

export const IntroButton = styled.button`
  background-color: $color-hack-red;
    color: white;
    border-radius: 2em;
    border: none;
    transition: all 0.15s ease-in-out;

    &:hover {
      background-color: $color-hack-red-med;
    }

    @include media-query($sm-up) {
      font-size: 1.8rem;
      margin-right: 25px;
    }
`

export const Sponsor = styled.section`
  margin-top: 50rem;
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
    margin-bottom: .5rem;
  }
`
export const sponsorLogoWrapper = style.div`
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
export const sponsorLogoWrapperTera = styled.div`
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

export const sponsorLogoWrapperGiga = styled.div`
    flex-basis: 65%;
    align-self: center;
    padding: 2%;

    a {
        img {
            max-height: 10vh;
        }
    }
`

export const sponsorLogoWrapperMega = styled.div`
    flex-basis: 45%;
    align-self: center;
    padding: 2%;

    a {
        img {
            max-height: 9vh;
        }
    }
`

export const sponsorLogoWrapperKilo = styled.div`
    flex-basis: 21%;
    align-self: center;
    padding: 2%;

    a {
        img {
            max-height: 6vh;
        }
    }
`

export const sponsorLogoWrapperByte = styled.div`
    flex-basis: 18%;
    align-self: center;
    padding: 1%;

    a {
        img {
            max-height: 5vh;
        }
    }
`

export const sponsorLogoWrapperInkind = styled.div`
    flex-basis: 7%;
    align-self: center;
    padding: 1.5%;

    a {
        img {
            max-height: 4vh;
        }
    }
`

export const sponsorLogo = styled.image`
    max-width: 100%;
    max-height: 100%;
    transition: 1s;

    &:hover {
    transform: scale(1.1);
    }
`
export const sponsporList = styled.div`
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
        margin-bottom: .5rem;
    }
`
export const sponsorHeading = styled.div`
    font-size: 2.8rem;
`
export const faqSection = styled.div`
    align-content: center;
`

export const faqContainer = styled.div`
    padding-bottom: 60rem;
    max-width: 88rem;
    height: 40rem;
    text-align: center;
    margin: auto;

    @include media-query($md-up) {
        padding-bottom: 32rem;
    }
`
export const faqJumpTo = styled.div`
    padding-top: 5rem;
`
export const faqFlexContainer = styled.div`
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
export const faqLeftColumn = styled.div`
    width: 40rem;
    text-align: initial;

    @include media-query(875px) {
        padding-right: 1.5rem;
    }
`
export const faqRightColumn = styled.div`
    width: 40rem;
    text-align: initial;

    @include media-query(875px) {
        padding-left: 1.5rem;
    }
`
export const accordionTitle = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 80%;
    padding: 1rem .5rem 1rem 1rem;
    color: $color-hack-black-80;

    &:hover {
        cursor: pointer;
        color: $global-color-primary;
    }

    &.active {
        color: $global-color-primary;
    }
`

export const accordionItem = styled.div`
    background-color: $color-hack-black-5;
    box-shadow: 0px 2px 2px #E9E9E9;
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
        color: $color-hack-black-80;
    }

    &.active {
        &:after {
            font-weight: 900;
            font-size: 1.5rem;
            content: '-';
            color: $global-color-primary;
        }
    }

    &:hover {
        &:after {
            cursor: pointer;
            color: $global-color-primary;
        }
    }
`

export const accordionContent = styled.div`
    opacity: 0;
    padding: 0 1rem;
    max-height: 0;
    overflow: hidden;
    clear: both;

    a,
        a:active {
        color: $global-color-primary;
    }

    a:hover {
        color: $color-hack-black-80;
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

        @include media-query($lg-up) {
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
    
        @include media-query($lg-up) {
          display: initial;
          position: absolute;
          top: 30%;
          right: 0%;
          width: 25vw;
          height: auto;
        }
    }
`
