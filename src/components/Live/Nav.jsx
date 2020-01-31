import React from "react"

import { slide as Menu } from "react-burger-menu"
import { Link } from "gatsby"

import Container from "../Nav/Container"
import IconContainer from "../Nav/IconContainer"
import Icon from "../Nav/Icon"
import Links from "../Nav/Links"
import NavLink from "../Nav/NavLink"
import MobileMenu from "../Nav/MobileMenu"

import Logo from "../../assets/images/logos/mchacks-martlet.svg"

const Nav = ({
  scrollToAbout = () => {},
  scrollToSponsor = () => {},
  scrollToFaq = () => {},
}) => {
  const NavItems = () => (
    <>
      <NavLink>Schedule</NavLink>
      <NavLink>Maps</NavLink>
      <NavLink>Info</NavLink>
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
