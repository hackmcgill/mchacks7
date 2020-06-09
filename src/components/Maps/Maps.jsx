import React, { useState } from "react"

import Sticky from "react-stickynode"

import Container from "../Schedule/Container"
import Floorplan from "./Floorplan"

import outdoor from "../../assets/images/maps/map.png"
import rutherford from "../../assets/images/maps/rutherford-1.png"
import trottierfloorg from "../../assets/images/maps/ground-floor.png"
import trottierfloor1 from "../../assets/images/maps/floor-1.png"
import trottierfloor2 from "../../assets/images/maps/floor-2.png"
import trottierfloor3 from "../../assets/images/maps/floor-3.png"
import trottierfloor4 from "../../assets/images/maps/floor-4.png"
import trottierfloor5 from "../../assets/images/maps/floor-5.png"

const maps = [
  {
    group: 1,
    name: "Outdoor",
    image: outdoor,
  },
  {
    group: 3,
    name: "Rutherford 1st Floor",
    image: rutherford,
  },
  {
    group: 2,
    name: "Trottier Ground Floor",
    image: trottierfloorg,
  },
  {
    group: 2,
    name: "Trottier 1st Floor",
    image: trottierfloor1,
  },
  {
    group: 2,
    name: "Trottier 2nd Floor",
    image: trottierfloor2,
  },
  {
    group: 2,
    name: "Trottier 3rd Floor",
    image: trottierfloor3,
  },
  {
    group: 2,
    name: "Trottier 4th Floor",
    image: trottierfloor4,
  },
  {
    group: 2,
    name: "Trottier 5th Floor",
    image: trottierfloor5,
  },
]

const Maps = ({ visible }) => {
  const [group, _setGroup] = useState(1)
  const setGroup = newGroup => {
    if (newGroup !== group) {
      _setGroup(newGroup)
      window.scrollTo(0, 0)
    }
  }

  return (
    <Container className={!visible ? "hidden" : ""}>
      <h2>Maps</h2>

      <Sticky enabled={true} top={80}>
        <div className="DayTabNav">
          <div
            className={"DayTab " + (group === 1 ? "active" : "")}
            onClick={() => setGroup(1)}
            onKeyDown={() => setGroup(1)}
            role="button"
            tabIndex={0}
          >
            Outdoor
          </div>
          <div
            className={"DayTab " + (group === 2 ? "active" : "")}
            onClick={() => setGroup(2)}
            onKeyDown={() => setGroup(2)}
            role="button"
            tabIndex={0}
          >
            Trottier
          </div>
          <div
            className={"DayTab " + (group === 3 ? "active" : "")}
            onClick={() => setGroup(3)}
            onKeyDown={() => setGroup(3)}
            role="button"
            tabIndex={0}
          >
            Rutherford
          </div>
        </div>
      </Sticky>

      <div className="Maps">
        {maps
          .filter(e => e.group === group)
          .map((e, i) => (
            <Floorplan key={i} {...e} />
          ))}
      </div>
    </Container>
  )
}

export default Maps
