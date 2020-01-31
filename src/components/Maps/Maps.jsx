import React from "react"

import Container from "./Container"
import Scrollspy from 'react-scrollspy'
import Floorplan from "./Floorplan"
import TrottierFloorG from "../../assets/images/maps/ground-floor.png"
import TrottierFloor1 from "../../assets/images/maps/floor-1.png"
import TrottierFloor2 from "../../assets/images/maps/floor-2.png"
import TrottierFloor3 from "../../assets/images/maps/floor-3.png"
import TrottierFloor4 from "../../assets/images/maps/floor-4.png"
import TrottierFloor5 from "../../assets/images/maps/floor-5.png"
import Rutherford from "../../assets/images/maps/floor-1.png"
import OutdoorMap from "../../assets/images/maps/map.png"
import Sidebar from "./Sidebar";

const Maps = ({ visible }) => (
  <Container style={{justifyContent: 'space-evenly'}}>
  <Container className={!visible ? 'hidden' : ''}>
    <Sidebar>
      <Scrollspy items={ ['section-1', 'section-2','section-3','section-4','section-5','section-6','section-7','section-8'] } currentClassName="is-current" offset={50}>
        <li><a href="#section-1">Outdoor Map</a></li>
        <li><a href="#section-2">Rutherford</a></li>
        <li><a href="#section-3">Trottier</a>
            <ul>
              <li><a href="#section-3">Ground</a></li>
              <li><a href="#section-4">1st Floor</a></li>
              <li><a href="#section-5">2nd Floor</a></li>
              <li><a href="#section-6">3rd Floor</a></li>
              <li><a href="#section-7">4th Floor</a></li>
              <li><a href="#section-8">5th Floor</a></li>
            </ul>
          </li>

      </Scrollspy>
    </Sidebar>
    <Container className={!visible ? 'hidden' : ''}>
      <Floorplan id="1" floorplan={OutdoorMap} name="Outdoor">
      </Floorplan>
      <Floorplan id="2" floorplan={Rutherford} name="Rutherford">
      </Floorplan>
      <Floorplan id="3" floorplan={TrottierFloorG} name="Trottier Ground Floor">
      </Floorplan>
      <Floorplan id="4" floorplan={TrottierFloor1} name="Trottier 1st Floor">
      </Floorplan>
      <Floorplan id="5" floorplan={TrottierFloor2} name="Trottier 2nd Floor">
      </Floorplan>
      <Floorplan id="6" floorplan={TrottierFloor3} name="Trottier 3rd Floor">
      </Floorplan>
      <Floorplan id="7" floorplan={TrottierFloor4} name="Trottier 4th Floor">
      </Floorplan>
      <Floorplan id="8" floorplan={TrottierFloor5} name="Trottier 5th Floor">
      </Floorplan>
    </Container>
    </Container>
  </Container>


)

export default Maps