import React from "react"
import { slide as Menu } from "react-burger-menu"
import { Link } from "gatsby"
import Logo from "../images/logo.svg"
import * as Styles from "../styles/components/nav"
import { Z_BUF_ERROR } from "zlib"
import "../styles/hamburger.css"

const Nav = ({ scrollToAbout = () => {}, scrollToSponsor = () => {} }) => {
  const NavItems = () => (
    <>
      <Styles.NavItem onClick={scrollToAbout}>About</Styles.NavItem>
      <Styles.NavItem onClick={scrollToSponsor}>Sponsor</Styles.NavItem>
      <Styles.NavItem href="https://2019.mchacks.ca" target="_blank">
        2019
      </Styles.NavItem>
    </>
  )
  return (
    <Styles.NavBar>
      <Styles.NavbarBrand>
        <Link to="/"> 
          <Styles.NavbarBrandImg src={Logo} /> 
        </Link>
      </Styles.NavbarBrand>
      <Styles.NavItems>{NavItems()}</Styles.NavItems>
      <Menu isOpen={true}>
        {NavItems()}
      </Menu>
    </Styles.NavBar>
  )
}

export default Nav
