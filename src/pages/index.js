import React, { useRef } from "react"
import SEO from "../components/seo"
import Nav from "../components/Nav/Nav"
import Hero from "../components/Hero/Hero"
import About from "../components/About/About"
import Sponsor from "../components/sponsor"
import Footer from "../components/Footer/Footer"

const scrollToRef = ref => {
  if (!ref || !ref.current) {
    return
  }
  window.scrollTo(0, ref.current.offsetTop)
}

const IndexPage = () => {
  const aboutRef = useRef(null)
  const sponsorRef = useRef(null)

  return (
    <div>
      <SEO />
      <Nav
        scrollToAbout={() => scrollToRef(aboutRef)}
        scrollToSponsor={() => scrollToRef(sponsorRef)}
      />
      <Hero />
      <About scrollRef={aboutRef} />
      <Sponsor scrollRef={sponsorRef} />
      <Footer />
    </div>
  )
}

export default IndexPage
