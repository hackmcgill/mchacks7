import React from "react"

import HeroStyles from "./HeroStyles"
import Campus from "./Campus"
import Plateau from "./Plateau"
import SignUpForm from "./SignUpForm"

import HeroPlateauImg from "../../assets/images/designs/plateau.svg"
import HeroCampusImg from "../../assets/images/designs/campus.svg"

const Hero = () => (
  <HeroStyles>
    <div class="hero__copy">
      <h2 class="hero__topsubheading">Create, build, and play @</h2>
      <h1 class="hero__heading">McHacks</h1>
      <p class="hero__subheading"> McGill University · Feb 1-2, 2020</p>
      <p class="hero__email">
        Sign up for updates about McHacks. No spam, we promise.
      </p>
      <SignUpForm />
      <Plateau src={HeroPlateauImg} />
      <Campus src={HeroCampusImg} />
    </div>
  </HeroStyles>
)

export default Hero
