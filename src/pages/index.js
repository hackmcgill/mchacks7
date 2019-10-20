import React from "react"
import { Link } from "gatsby"

import Nav from "../components/nav"
import Hero from "../components/hero"
import About from "../components/about"
import Sponsor from "../components/sponsor"
import Footer from "../components/footer"

const IndexPage = () => (
    <div>
        <Nav />
        <Hero />
        <About />
        <Sponsor />
        <Footer />
    </div>
)

export default IndexPage
