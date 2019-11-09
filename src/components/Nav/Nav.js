import React from "react"

import { slide as Menu } from "react-burger-menu"
import { Link } from "gatsby"

import Container from "./Container"
import IconWrapper from "./IconWrapper"
import Icon from "./Icon"
import LinksWrapper from "./LinksWrapper"
import NavLink from "./NavLink"
import MobileMenu from "./MobileMenu"

import Logo from "../../assets/images/logos/mchacks-martlet.svg"

const Nav = ({ scrollToAbout = () => {}, scrollToSponsor = () => {} }) => {
  const NavItems = () => (
    <>
      <NavLink onClick={scrollToAbout}>About</NavLink>
      <NavLink onClick={scrollToSponsor}>Sponsor</NavLink>
      <NavLink href="https://2019.mchacks.ca" target="_blank">
        2019
      </NavLink>
    </>
  )
  return (
    <Container>
      <IconWrapper>
        <Link to="/">
          <Icon src={Logo} />
        </Link>
      </IconWrapper>
      <LinksWrapper>{NavItems()}</LinksWrapper>
      <Menu isOpen={true} styles={MobileMenu}>
        {NavItems()}
      </Menu>
    </Container>
  )
}

export default Nav
