import styled from "styled-components"
import * as styleVars from "./variable"

export const Footer = styled.footer`
  padding: 2rem 0;
  border-top: 2px solid ${styleVars.colorHackRed};
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  z-index: 2;
  height: 7rem;
`

export const FooterLinks = styled.div`
  padding: 1.2rem 2.4rem;
`

export const FooterLink = styled.a`
  color: ${styleVars.hackBlack60};
  margin-right: 2rem;
  cursor: pointer;
  text-decoration: none;

  &:focus,
  &:hover {
    color: ${styleVars.colorHackRed};
  }
`

export const FooterLinksSocial = styled.div`
  padding: 1.2rem 2.4rem;
`

export const FooterLinkSocial = styled.a`
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
