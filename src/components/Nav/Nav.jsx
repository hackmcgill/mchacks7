import React from "react"

import { slide as Menu } from "react-burger-menu"
import { Link } from "gatsby"

import Container from "./Container"
import IconContainer from "./IconContainer"
import Icon from "./Icon"
import Links from "./Links"
import NavLink from "./NavLink"
import MobileMenu from "./MobileMenu"

import Logo from "../../assets/images/logos/mchacks-martlet.svg"

const Nav = ({
  scrollToAbout = () => {},
  scrollToSponsor = () => {},
  scrollToFaq = () => {},
}) => {
  const NavItems = () => (
    <>
      <NavLink onClick={scrollToAbout}>About</NavLink>
      <NavLink onClick={scrollToSponsor}>Sponsor</NavLink>
      <NavLink onClick={scrollToFaq}>FAQ</NavLink>
      <NavLink href="/live" target="_blank">
        Live
      </NavLink>
      <NavLink
        href="https://2019.mchacks.ca"
        target="_blank"
        rel="noopener noreferrer"
      >
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
    </Container>
  )
}

export default Nav
