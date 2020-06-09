import React from "react"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faPizzaSlice,
  faGraduationCap,
  faBasketballBall,
  faLaptopCode,
  faBus,
  faBed,
} from "@fortawesome/free-solid-svg-icons"

const Event = ({
  type,
  startTime,
  endTime,
  name,
  location,
  subtitle,
  description,
}) => {
  let logo = <div></div>
  if (type === "Workshop") {
    logo = <FontAwesomeIcon icon={faGraduationCap} />
  } else if (type === "Activity") {
    logo = <FontAwesomeIcon icon={faBasketballBall} />
  } else if (type === "Food") {
    logo = <FontAwesomeIcon icon={faPizzaSlice} />
  } else if (type === "Main Event") {
    logo = <FontAwesomeIcon icon={faLaptopCode} />
  } else if (type === "Travel") {
    logo = <FontAwesomeIcon icon={faBus} />
  } else if (type === "Rest") {
    logo = <FontAwesomeIcon icon={faBed} />
  }

  return (
    <div className={"Event type-" + type.replace(/\s+/g, "-").toLowerCase()}>
      <div className="time">
        <div className="start">
          {startTime}
          {endTime ? <span> to {endTime}</span> : ""}
        </div>
      </div>
      <div className="detail">
        <div className="overview">
          <div className="type">{type}</div>
          <div className="name">
            {name}
            <small>{subtitle}</small>
          </div>
          {description ? <div className="description">{description}</div> : ""}
          <div className="location">@ {location}</div>
        </div>
        <div className="icon">{logo}</div>
      </div>
    </div>
  )
}

export default Event
