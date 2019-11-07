import React, { useRef } from "react"
import SEO from "../components/seo"
import Nav from "../components/nav"
import Hero from "../components/hero"
import About from "../components/about"
import Sponsor from "../components/sponsor"
import Footer from "../components/footer"

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
