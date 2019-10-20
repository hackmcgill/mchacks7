import React from "react"

import Logo from "../images/logo.png"
import * as Styles from "../styles/components/nav"

const Nav = ({ scrollToAbout = () => {}, scrollToSponsor = () => {}}) => (
        <Styles.NavBar>
                <Styles.NavbarBrand>
                        <Styles.NavbarBrandImg src={Logo} />
                </Styles.NavbarBrand>
                <Styles.NavItems>
                        <Styles.NavItem onClick={scrollToAbout}>
                                About
                        </Styles.NavItem>
                        <Styles.NavItem onClick={scrollToSponsor}>
                                Sponsor
                        </Styles.NavItem>
                        <Styles.NavItem href="https://2019.mchacks.ca" target="_blank">
                                2019
                        </Styles.NavItem>
                </Styles.NavItems>
        </Styles.NavBar>
)
    
export default Nav