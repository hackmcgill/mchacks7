import React, { useRef } from "react"

import SEO from "../components/SEO/SEO"
import Nav from "../components/Nav/Nav"
import Hero from "../components/Hero/Hero"
import About from "../components/About/About"
import Sponsor from "../components/Sponsor/Sponsor"
import FAQ from "../components/FAQ/FAQ"
import Logos from "../components/Logos/Logos"
import Footer from "../components/Footer/Footer"
import Bg from "../components/Bg/Bg"

const scrollTo = ref => {
  if (!ref || !ref.current) {
    return
  }
  window.scrollTo(0, ref.current.offsetTop - 100)
}

const IndexPage = () => {
  const aboutRef = useRef(null)
  const sponsorRef = useRef(null)
  const faqRef = useRef(null)

  return (
    <div>
      <SEO />
      <Nav
        scrollToAbout={() => scrollTo(aboutRef)}
        scrollToSponsor={() => scrollTo(sponsorRef)}
        scrollToFaq={() => scrollTo(faqRef)}
      />
      <Hero />
      <Bg>
        <About scrollRef={aboutRef} />
        <Sponsor scrollRef={sponsorRef} />
      </Bg>
      <FAQ scrollRef={faqRef} />
      <Logos />
      <Footer />
    </div>
  )
}

export default IndexPage
