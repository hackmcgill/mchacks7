import React, { useRef } from "react"

import SEO from "../components/SEO/SEO"
import Nav from "../components/Nav/Nav"
import Footer from "../components/Footer/Footer"
import Privacy from "../components/DocPages/Privacy"

const scrollTo = ref => {
  if (!ref || !ref.current) {
    return
  }
  window.scrollTo(0, ref.current.offsetTop - 100)
}

const PrivacyPage = () => {
  const aboutRef = useRef(null)
  const sponsorRef = useRef(null)

  return (
    <div>
      <SEO />
      <Nav
        scrollToAbout={() => scrollTo(aboutRef)}
        scrollToSponsor={() => scrollTo(sponsorRef)}
      />
      <Privacy />
      <Footer />
    </div>
  )
}

export default PrivacyPage
