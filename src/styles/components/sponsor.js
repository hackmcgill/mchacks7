import styled from "styled-components"
import * as styleVars from "./variable"

const sponsorColorPrimary = styleVars.globalColorPrimary
const sponsorColorBg = $styleVars.globalColorBg
const sponsorColorText = $styleVars.globalColorText
const sponsorColorBgSlant = $styleVars.hackBlack5
const sponsorColorBgTable = $styleVars.hackBlack10
const sponsorColorBgTableHover = $styleVars.hackBlack20
const sponsorColorFooterHeading = $styleVars.hackBlack80
const sponsorColorTableCategory = $styleVars.hackBlack70

export const Hero = styled.div`
  max-width: 128rem;
  margin: 0 auto;
  position: relative;
`

export const HeroForeground = styled.div`
  z-index: 2;
  margin-top: 12rem;
  text-align: center;

  @include media-query(${styleVars.smUp}) {
    position: absolute;
    top: 10%;
    left: 10%;
    margin-top: 4rem;
  }
`

export const HeroBackground = styled.div`
  margin-top: 10rem;
  width: 80%;
  margin-left: 10%;
  max-width: 128rem;
  pointer-events: none;
  user-select: none;
`

export const HeroHeading = styled.div`
  color: ${sponsorColorPrimary};
  font-size: 4.8rem;

  @include media-query(${styleVars.mdUp}) {
    font-size: 6.4rem;
    margin-top: 6rem;
  }
`

export const Description = styled.section`
  max-width: 76.8rem;
  padding: 4.8rem;
  margin: 0 auto;
  margin-bottom: 12rem;

  @include media-query(${styleVars.mdUp}) {
    padding: 6.4rem;
  }

  .logo {
    width: 12rem;
    display: block;
    margin: 0 auto;

    @include media-query(${styleVars.mdUp}) {
      width: 24rem;
    }
  }

  .heading {
    color: ${globalColorPrimary};
    font-size: 3rem;

    @include media-query(${styleVars.smUp}) {
      font-size: 4.2rem;
    }
  }

  .subheading {
    color: ${styleVars.globalColorPrimary};
    font-size: 2.75rem;
  }

  .text {
    color: ${styleVars.globalColorText};
    font-size: 1.8rem;
  }

  a {
    color: ${styleVars.colorHackRed};
    text-decoration: none;
    background-color: transparent;
  }

  a:hover {
    color: ${styleVars.colorHackRedLight};
    text-decoration: none;
  }
`

export const TierList = styled.div`
  font-family: Brown, sans-serif;
  background-color: ${sponsorColorBgSlant};
  position: relative;
  margin-top: 20rem;
  margin-bottom: 6rem;
  padding: 2rem;
  font-size: 1.8rem;

  &::before {
    background: inherit;
    position: absolute;
    width: 100%;
    height: 50rem;
    content: "";
    top: -20rem;
    left: 0;
    transform: skewY(4deg);
    z-index: -2;
  }

  &::after {
    background: inherit;
    position: absolute;
    width: 100%;
    height: 50rem;
    content: "";
    top: calc(100% - 30rem);
    left: 0;
    transform: skewY(4deg);
    z-index: -1;
  }

  .wrapper {
    max-width: 118rem;
    margin: 0 auto;
  }

  .heading {
    color: ${sponsorColorPrimary};
    font-weight: bold;
  }

  .table-wrapper {
    overflow-x: scroll;

    @include media-query(${styleVars.mdUp}) {
      overflow: initial;
    }
  }

  .table {
    border-spacing: 0;
  }

  .row {
    &:hover {
      background-color: none;
      transition: 0.2s background-color ease-in-out;

      & .tier-list__table-cell {
        background-color: ${sponsorColorBgTableHover};
        transition: 0.2s background-color ease-in-out;
      }
    }
  }

  .row--category {
    th {
      font-family: Brown, sans-serif;
      color: ${sponsorColorTableCategory};
      padding-top: 4rem;
    }
  }

  .tier-icon {
    height: 3.75rem;
    width: auto;
  }

  .table-head {
    border: 0;
    padding: 0;
    text-align: center;
  }

  .tier-name {
    background: ${sponsorColorBgSlant};
    text-align: center;
    z-index: 2;
    position: sticky;
    top: 0;

    @include tiered-coloring;

    font-size: 2.4rem;
  }

  &__tier-price {
    font-size: 1.6rem;
    margin-bottom: 0;
  }

  .perk-name {
    z-index: 3;
    width: 7.5%;
    position: sticky;
    left: 0;
    background-color: ${sponsorColorBgSlant};

    @include media-query(${styleVars.smUp}) {
      width: initial;
    }
  }

  .table-cell {
    padding: 0;
    text-align: center;
    width: 12rem;
    height: 6rem;
    border-bottom-color: ${sponsorColorBgTable};

    @include tiered-coloring;

    &:not(:empty) {
      background-color: ${sponsorColorBgTable};
    }
  }

  .dot {
    margin: 0 auto;
    border-radius: 50%;
    width: 1.25rem;
    height: 1.25rem;
  }

  .footnote {
    font-size: 1.6rem;
  }
`

export const GetInTouchSection = styled.div`
  margin: 0 auto;
  max-width: 128rem;
  margin-top: 24rem;
  padding: 10rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  .heading {
    color: ${sponsorColorFooterHeading};
    font-size: 4rem;
    font-weight: bold;
    margin-bottom: 1rem;
    text-align: center;
  }

  .subheading {
    color: ${sponsorColorPrimary};
    font-size: 2.4rem;
    text-align: center;

    @include media-query(${styleVars.mdUp}) {
      text-align: left;
    }
  }
`
