import styled from "styled-components"
import * as styleVars from "../variable"

export const NotFound = styled.body`
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`

export const NotFoundWrapper = styled.body`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: auto;

  @include page-width;
`

export const NotFoundConstruction = styled.body`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  padding-top: 16rem;
`

export const NotFoundHeading = styled.body`
  font-size: 3rem;
  font-weight: 600;
  padding: 3rem 0 1rem 0;
  text-align: center;

  @include media-query(${styleVars.smUp}) {
    font-size: 4rem;
  }
`

export const NotFoundCTA = styled.body`
  font-size: 1.5rem;
  text-align: center;
`
