import styled from "styled-components"
import * as styleVars from "./variable"

const navBarLink = styleVars.hackBlack60

export const NavBar = styled.nav`
  z-index: 2;
  height: 7rem;
  background-color: white;
  border-bottom: 2px solid #f4f4f4;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
`

export const NavbarBrand = styled.div`
  cursor: pointer;
  margin-left: 1.2rem;
  margin-top: -4px;
`

export const NavbarBrandImg = styled.img`
  height: 8rem;
`

export const NavItems = styled.div`
  padding: 1.2rem 2.4rem;
  align-items: center;
  position: fixed;
  top: 1.3rem;
  right: 20px;
  display: none;

  @media only screen and (min-width: ${styleVars.smUp}) {
    display: flex;
  }
`

export const NavItem = styled.a`
  margin-left: 2rem;
  cursor: pointer;
  color: ${navBarLink};
  text-decoration: none;

  &:focus,
  &:hover,
  &:active {
    color: ${styleVars.colorHackRed};
    background: transparent;
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

export const menuStyles = {
  bmBurgerButton: {
    position: "fixed",
    width: "30px",
    height: "25px",
    top: "22px",
    right: "30px",
  },
  bmBurgerBars: {
    background: styleVars.hackBlack40,
    borderRadius: "30px",
    height: "3.5px",
  },
  bmBurgerBarsHover: {
    background: styleVars.hackBlack60,
  },
  bmCrossButton: {
    height: "30px",
    width: "30px",
    top: "22px",
    right: "30px",
    outline: "none",
  },
  bmCross: {
    background: styleVars.hackBlack40,
    height: "5px",
    width: "30px",
    top: "5px",
    left: "-15px",
    borderRadius: "5px",
  },
  bmMenuWrap: {
    position: "fixed",
    height: "100%",
  },
  bmMenu: {
    background: styleVars.hackBlack5,
    padding: "2.5em 1.5em 0",
  },
  bmMorphShape: {
    fill: "#373a47",
  },
  bmItemList: {
    color: styleVars.colorHackRed,
    padding: "0.8em",
    top: "8em",
    display: "grid",
    height: "250px",
    textAlign: "center",
    fontSize: "24px",
    marginTop: "60px",
  },
  bmItem: {
    textAlign: "center",
    lineHeight: "7rem",
    fontDize: "36px",
    padding: "40px",
  },
  bmOverlay: {
    background: "rgba(0, 0, 0, 0.3)",
  },
}
