import styled from "styled-components"
import * as styleVars from "./variable"

export const MceErrorResponse = styled.div`
  margin: 0 0 1em 0 !important;
  padding: 10px 10px !important;
  z-index: 1 !important;
  color: ${styleVars.hackBlack70} !important;
  font-size: 15px !important;
  font-weight: 400 !important;
  background-color: rgba(107, 5, 5, 0) !important;
`

export const MceSuccessResponse = styled.div`
  margin: 0 0 1em 0 !important;
  padding: 10px 10px !important;
  z-index: 1 !important;
  color: #f07c74 !important;
  font-size: 15px !important;
  font-weight: 400 !important;
  background-color: rgba(107, 5, 5, 0) !important;
`

export const MceEmbeddedSubscribe = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  margin-left: -42px;
  height: 36px;
  padding-left: 0px;

  @media only screen and (min-width: 767px) {
    left: 400px;
    right: inherit;
  }
`

export const McInputWrapper = styled.div`
  position: relative;
`

export const InputSignUp = styled.input.attrs({
  type: "submit",
  value: "Submit",
})`
  line-height: 24px !important;
  outline: 0;
  color: ${styleVars.colorHackRedMed};
  width: 152px !important;
  height: 40px !important;
  padding: 4px 12px !important; /* aligns input text in element */
  background-color: transparent !important;
  border-color: transparent !important;
  text-align: center;
  text-transform: lowercase;
  letter-spacing: normal !important;
  display: block;
  margin: 0 auto;
  margin-top: 16px;
  float: center;
`
