import React from "react"

import HeroStyles from "./HeroStyles"
import Buildings from "./Buildings"

import SignUpForm from "./SignUpForm"

import BuildingImg from "../../assets/images/designs/buildings.svg"

const Hero = () => (
  <HeroStyles>
    <h2 class="hero__topsubheading">Create, build, and play @</h2>
    <h1 class="hero__heading">McHacks</h1>
    <p class="hero__subheading"> McGill University · Feb 1-2, 2020</p>
    <p class="hero__email">
      Sign up for updates about McHacks. No spam, we promise.
    </p>
    <SignUpForm />
    <Buildings src={BuildingImg} />
      
  </HeroStyles>
)

export default Hero
