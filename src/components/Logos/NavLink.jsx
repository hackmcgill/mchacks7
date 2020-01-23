import styled from "styled-components"
import * as styleVars from "../variable"

export const NavLink = styled.a`
  margin-left: 2rem;
  cursor: pointer;
  color: ${styleVars.hackBlack60};
  text-decoration: none;

  &:focus,
  &:hover,
  &:active {
    color: ${styleVars.colorHackRed};
    background: transparent;
  }
`

export default NavLink
