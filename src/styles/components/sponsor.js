import styled from "styled-components"

export const tierList = styled.background`
    background: $global-color-bg;
`

export const hero = styled.div`
    max-width: 128rem;
    margin: 0 auto;
    position: relative;
`

export const heroForeground = styled.div`
    z-index: 2;
    margin-top: 12rem;
    text-align: center;

    @include media-query($sm-up) {
    position: absolute;
    top: 10%;
    left: 10%;
    margin-top: 4rem;
    }
`

export const heroBackground = styled.div`
    margin-top: 10rem;
    width: 80%;
    margin-left: 10%;
    max-width: 128rem;
    pointer-events: none;
    user-select: none;
`

export const heroHeading = styled.div`
    color: $sponsor-color-primary;
    font-size: 4.8rem;      

    @include media-query($md-up) {
    font-size: 6.4rem;
    margin-top: 6rem;
    }
`

export const tierList = styled.div`
    font-family: Brown, sans-serif;
    background-color: $sponsor-color-bg-slant;
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
`
