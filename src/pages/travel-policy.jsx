import React, { useRef } from "react"

import SEO from "../components/SEO/SEO"
import Nav from "../components/Nav/Nav"
import Footer from "../components/Footer/Footer"
import TravelPolicy from "../components/DocPages/TravelPolicy"

const scrollTo = ref => {
  if (!ref || !ref.current) {
    return
  }
  window.scrollTo(0, ref.current.offsetTop - 100)
}

const TravelPolicyPage = () => {
  const aboutRef = useRef(null)
  const sponsorRef = useRef(null)

  return (
    <div>
      <SEO />
      <Nav
        scrollToAbout={() => scrollTo(aboutRef)}
        scrollToSponsor={() => scrollTo(sponsorRef)}
      />
      <TravelPolicy />
      <Footer />
    </div>
  )
}

export default TravelPolicyPage
