import styled from "styled-components"
import * as styleVars from "../variable"

export const Button = styled.button`
  font-family: Brown, sans-serif;
  font-weight: 600;
  font-size: 14px;
  text-transform: none;
  color: white;
  background-color: ${styleVars.colorHackRed};
  border-radius: 3.75em;
  border: none;
  transition: all 0.15s ease-in-out;
  padding-top: 15px;
  padding-bottom: 15px;
  padding-left: 25px;
  padding-right: 25px;
  //   height: 45px;
  //   width: 175px;
  display: block;
  margin: auto;
  margin-top: 24px;

  &:hover {
    background-color: ${styleVars.colorHackRedMed};
  }

  @media only screen and (min-width: ${styleVars.smUp}) {
    display: flex;
    margin: 0;
    margin-top: 24px;
    align-items: left;
  }
`

export default Button
