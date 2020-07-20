import React from "react"

import HeroStyles from "./HeroStyles"
import { HotAirStyles, UFOStyles, PlanetStyles } from "./FloatingStyles"

import Buildings from "./Buildings"
// import Button from "./Button"
import MLHBadge from "./MLHBadge"
import MLHContainer from "./MLHContainer"
import SignUpForm from "./SignUpForm"

import BuildingImg from "../../assets/images/designs/buildings.svg"
import HotAirImg from "../../assets/images/designs/hotair.svg"
import MLH from "../../assets/images/mlh-trust-badge-2020-white.svg"
import UFOImg from "../../assets/images/designs/ufo.svg"
import PlanetImg from "../../assets/images/designs/planet-stars.svg"

// const Dashboard = () => {
//   window.location = "https://app.mchacks.ca"
// }

// const Live = () => {
//   window.location = "/live"
// }

const Hero = () => (
  <>
    <MLHContainer>
      <MLHBadge src={MLH} />
    </MLHContainer>
    <HeroStyles>
      <h2 class="hero__topsubheading">Create, build, and play @</h2>
      <h1 class="hero__heading">McHacks</h1>
      <p class="hero__subheading"> McGill University · Jan 29-31, 2021</p>
      <p class="hero__email">
        Sign up for updates about McHacks. No spam, we promise.
      </p>
      <SignUpForm />
      {/* <Button onClick={Dashboard}>Apply →</Button>
      <Button onClick={Live}>Live Site</Button> */}
      <div class="hero__illustrations">
        <HotAirStyles src={HotAirImg} />
        <UFOStyles src={UFOImg} />
        <PlanetStyles src={PlanetImg} />
        <Buildings src={BuildingImg} />
      </div>
    </HeroStyles>
  </>
)

export default Hero
