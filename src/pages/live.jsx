import React, { useRef } from "react"

import SEO from "../components/SEO/SEO"
import LiveNav from "../components/Live/LiveNav"
import Schedule from "../components/Schedule/Schedule"
import Maps from "../components/Maps/Maps"
import Info from "../components/Live/Info"

const scrollTo = ref => {
  if (!ref || !ref.current) {
    return
  }
  window.scrollTo(0, ref.current.offsetTop - 100)
}

const LivePage = () => {
  const scheduleRef = useRef(null)
  const mapsRef = useRef(null)
  const infoRef = useRef(null)

  return (
    <div>
      <SEO />
      <LiveNav />
      <Schedule scrollRef={scheduleRef} />
      <Maps scrollRef={mapsRef} />
      <Info scrollRef={infoRef} />
    </div>
  )
}

export default LivePage
