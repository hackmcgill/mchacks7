import React, { useState } from "react"

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
  const [activePage, setActivePage] = useState('schedule');

  return (
    <div>
      <SEO />
      <LiveNav switchPage={setActivePage} activePage={activePage} />
      <Schedule visible={activePage === 'schedule'} />
      <Maps visible={activePage === 'maps'} />
      <Info visible={activePage === 'info'} />
    </div>
  )
}

export default LivePage
