import React, { useRef } from "react"

import SEO from "../components/SEO/SEO"
import Nav from "../components/Live/Nav"

const scrollTo = ref => {
  if (!ref || !ref.current) {
    return
  }
  window.scrollTo(0, ref.current.offsetTop - 100)
}

const LivePage = () => {

  return (
    <div>
      <SEO />
      <Nav />
    </div>
  )
}

export default LivePage
