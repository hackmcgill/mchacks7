import React from "react"
import { Link } from "gatsby"

import Hero from "../components/hero"
import About from "../components/about"
import Footer from "../components/footer"
import Sponsor from "../components/sponsor"
import Nav from "../components/nav"


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
