import styled from "styled-components"
import * as styleVariables from './variable'

export const notFound = styled.body`
    overflow-x: hidden;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
`

export const notFoundWrapper = styled.body`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: auto;

    @include page-width;
`

export const notFoundConstruction = styled.body`
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 100%;
    padding-top: 16rem;
` 

export const notFoundHeading = styled.body`
    font-size: 3rem;
    font-weight: 600;
    padding: 3rem 0 1rem 0;
    text-align: center;

    @include media-query(${styleVariables.smUp}) {
    font-size: 4rem;
    }
` 


export const notFoundCTA = styled.body`
    font-size: 1.5rem;
    text-align: center;
` 