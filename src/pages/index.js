import React from "react"
import { Link } from "gatsby"
import SEO from "../components/seo"
import Nav from "../components/nav"
import Hero from "../components/hero"
import About from "../components/about"
import Sponsor from "../components/sponsor"
import Footer from "../components/footer"

import * as Styles from "../styles/components/index.js"
import HeroFirstBackground from "../images/hero/bg.svg"
import Cord from "../images/hero/cord.svg"

const IndexPage = () => (
  <div>
    <SEO />
    <Nav />
    <Hero />
    <About />
    <Sponsor />
    <Footer />
  </div>
)

export default IndexPage
