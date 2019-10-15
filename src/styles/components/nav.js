import styled from "styled-components"

export const NavBar = styled.nav`
    z-index: 2;
    height: 7rem;
    background-color: transparent;
    border-bottom: 2px solid $color-hack-black-5;
    position: absolute;
    top: 0;
    width: 100%;
`
  
export const NavbarBrand = styled.div`
    display: inline-block;
    padding: 1.2rem 0 1.2rem 1.4rem;
    margin-left: 1.2rem;
  
    &:focus,
    &:hover {
      text-decoration: none;
    }
`

export const NavbarBrand = styled.img`
    height: 5rem;
    vertical-align: middle;
    vertical-align: -webkit-baseline-middle;
`
  
export const NavItems = styled.div` 
    float: right;
    list-style: none;
    padding: 2.1rem;
    padding-left: 0;
    display: none;
  
    @include media-query($sm-up) {
      display: initial;
    }
`
  
export const NavItem = styled.div`
    vertical-align: middle;
    vertical-align: -webkit-baseline-middle;
    margin-right: 2rem;
    text-decoration: none;

    a {
        color: $navbar-link;
        &:focus,
        &:hover {
            text-decoration: none;
        }
    }
`
  
export const NavButton = styled.button`
    font-family: Brown, sans-serif;
    font-weight: 600;
    font-size: 16px;
    text-transform: none;
    color: $color-hack-red;
    border-radius: 0.5em;
    border: 2px solid $color-hack-red;
    transition: all 0.15s ease-in-out;
    padding: 8px 16px;
    margin-left: 12px;
  
    &:hover {
      background-color: $color-hack-red;
      color: white;
    }
`
  
export const footer = styled.footer`
    padding: 2rem;
    border-top: 2px solid $color-hack-red;
    display: flex;
    align-items: center;
    justify-content: space-between;
`
  
export const footerContainer = styled.div`
    display: flex;
    flex: row;
    justify-content: flex-start;
    align-items: center;
    max-width: 48%;
    flex-wrap: wrap;
`
  
export const footerLinks = styled.a`
    margin: 0;
    padding: 0;
    flex-basis: auto;
  
    li {
      margin-left: 1rem;
      display: inline;
    }
`
  
export const footerLinksSocial = styled.div`
    float: right;
    list-style: none;
    padding: 0 0 0 1rem;
    margin: 0;
`
  
export const footerLinkSocial = styled.a`
    vertical-align: middle;
    vertical-align: -webkit-baseline-middle;
    margin-right: 2rem;
    text-decoration: none;
`
  
export const footerLink = styled.a`
    color: $navbar-link;
    margin-right: 2rem;
  
    &:focus,
    &:hover {
      text-decoration: none;
    }
`