import styled from "styled-components"
import * as styleVars from "../variable"

export const SocialLink = styled.a`
  margin-left: 2rem;
  color: ${styleVars.hackBlack60};
  margin-right: 2rem;
  cursor: pointer;
  text-decoration: none;
  font-size: 16px;

  &:focus,
  &:hover {
    color: ${styleVars.colorHackRed};
  }
`

export default SocialLink
