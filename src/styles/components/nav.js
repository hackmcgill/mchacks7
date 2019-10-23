import styled from "styled-components"
import * as styleVars from "./variable"

const navBarLink = styleVars.hackBlack60

export const NavBar = styled.nav`
  z-index: 2;
  height: 7rem;
  background-color: transparent;
  border-bottom: 2px solid #f4f4f4;
  position: absolute;
  top: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
`

export const NavbarBrand = styled.div`
  cursor: pointer;
  padding: 1.2rem 2.4rem;
`

export const NavbarBrandImg = styled.img`
  height: 5rem;
`

export const NavItems = styled.div` 
    padding: 1.2rem 2.4rem;
    display: flex;
    align-items: center;

    @media only screen and (min-width: ${styleVars.smUp})
        display: initial;
    }
`

export const NavItem = styled.a`
  margin-left: 2rem;
  cursor: pointer;
  color: ${navBarLink};
  text-decoration: none;

  &:focus,
  &:hover {
    color: ${styleVars.colorHackRed};
  }
`

export const NavButton = styled.button`
  font-family: Brown, sans-serif;
  font-weight: 600;
  font-size: 16px;
  text-transform: none;
  color: ${styleVars.colorHackRed};
  border-radius: 0.5em;
  border: 2px solid ${styleVars.colorHackRed};
  transition: all 0.15s ease-in-out;
  padding: 8px 16px;
  margin-left: 12px;

  &:hover {
    background-color: ${styleVars.colorHackRed};
    color: white;
  }
`

export const Footer = styled.footer`
  padding: 2rem 0;
  border-top: 2px solid ${styleVars.colorHackRed};
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`

export const FooterLinks = styled.div`
  padding: 1.2rem 2.4rem;
`

export const FooterLink = styled.a`
  color: ${navBarLink};
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
  color: ${navBarLink};
  margin-right: 2rem;
  cursor: pointer;
  text-decoration: none;

  &:focus,
  &:hover {
    color: ${styleVars.colorHackRed};
  }
`
