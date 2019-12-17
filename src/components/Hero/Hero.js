import React from "react"

import HeroStyles from "./HeroStyles"
import { HotAirStyles, UFOStyles, PlanetStyles } from "./FloatingStyles"

import Buildings from "./Buildings"
// import SignUpForm from "./SignUpForm"

import BuildingImg from "../../assets/images/designs/buildings.svg"
import HotAirImg from "../../assets/images/designs/hotair.svg"
import UFOImg from "../../assets/images/designs/ufo.svg"
import PlanetImg from "../../assets/images/designs/planet-stars.svg"

const Hero = () => (
  <HeroStyles>
    <h2 class="hero__topsubheading">Create, build, and play @</h2>
    <h1 class="hero__heading">McHacks</h1>
    <p class="hero__subheading"> McGill University · Feb 1-2, 2020</p>
    {/* <p class="hero__email">
      Sign up for updates about McHacks. No spam, we promise.
    </p>
    <SignUpForm /> */}
    <div class="hero__illustrations">
      <HotAirStyles src={HotAirImg} />
      <UFOStyles src={UFOImg} />
      <PlanetStyles src={PlanetImg} />
      <Buildings src={BuildingImg} />
    </div>
  </HeroStyles>
)

export default Hero
