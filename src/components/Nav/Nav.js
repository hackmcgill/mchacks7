import React from "react"

import { slide as Menu } from "react-burger-menu"
import { Link } from "gatsby"

import Container from "./Container"
import IconContainer from "./IconContainer"
import Icon from "./Icon"
import Links from "./Links"
import MLHBadge from "./MLHBadge"
import MLHContainer from "./MLHContainer"
import NavLink from "./NavLink"
import MobileMenu from "./MobileMenu"

import Logo from "../../assets/images/logos/mchacks-martlet.svg"
import MLH from "../../assets/images/mlh-trust-badge-2020-white.svg"

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
      <IconContainer>
        <Link to="/">
          <Icon src={Logo} />
        </Link>
      </IconContainer>
      <Links>{NavItems()}</Links>
      <Menu isOpen={true} styles={MobileMenu}>
        {NavItems()}
      </Menu>
      <MLHContainer>
        <MLHBadge src={MLH} />
      </MLHContainer>
    </Container>
  )
}

export default Nav
