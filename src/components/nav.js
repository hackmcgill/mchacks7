import React from "react"
import { slide as Menu } from "react-burger-menu"
import { Link } from "gatsby"
import Logo from "../images/logo.svg"
import * as Styles from "../styles/components/nav"
import { Z_BUF_ERROR } from "zlib"

const styles = {
  bmBurgerButton: {
    position: 'fixed',
    width: '30px',
    height: '25px',
    top: '30px',
    right: '30px',
  },
  bmBurgerBars: {
    background: '#a6a6a6',
    borderRadius: '30px',
    height: '3.5px',
  },
  bmBurgerBarsHover: {
    background: '#a90000'
  },
  bmCrossButton: {
    height: '24px',
    width: '24px',
    top: '10px',
    right: '30px',
  },
  bmCross: {
    background: '#bdc3c7',
    height: '30px',
    borderRadius: '30px'
  },
  bmMenuWrap: {
    position: 'fixed',
    height: '100%',
    width: '100%',

  },
  bmMenu: {
    background: '#fff',
    padding: '2.5em 1.5em 0',
    fontSize: '1.15em',
    position: 'absolute',
    top: '0',
    right: '0',
  },
  bmMorphShape: {
    fill: '#373a47'
  },
  bmItemList: {
    color: '#b8b7ad',
    padding: '0.8em'
  },
  bmItem: {
    display: 'grid',
    textAlign: 'center',
    lineHeight: '4rem',
  },
  bmOverlay: {
    background: 'rgba(0, 0, 0, 0.3)'
  }
}

const Nav = ({ scrollToAbout = () => {}, scrollToSponsor = () => {} }) => {
  const NavItems = () => (
    <Styles.NavItems>
      <Styles.NavItem onClick={scrollToAbout}>About</Styles.NavItem>
      <Styles.NavItem onClick={scrollToSponsor}>Sponsor</Styles.NavItem>
      <Styles.NavItem href="https://2019.mchacks.ca" target="_blank">
        2019
      </Styles.NavItem>
    </Styles.NavItems>
  )
  return (
    <Styles.NavBar>
      <Styles.NavbarBrand>
        <Link to="/"> 
          <Styles.NavbarBrandImg src={Logo} /> 
        </Link>
      </Styles.NavbarBrand>
      {NavItems()}
      <Menu styles={styles}>
        {NavItems()}
      </Menu>
    </Styles.NavBar>
  )
}

export default Nav
