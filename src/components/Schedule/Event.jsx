import React from 'react';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPizzaSlice, faGraduationCap, faBasketballBall } from "@fortawesome/free-solid-svg-icons"

const Event = ({type, startTime, endTime, name, location}) => {
    let logo = <div></div>;
    if (type === 'Workshop') {
        logo = <FontAwesomeIcon icon={faGraduationCap}/>;
    } else if (type === 'Activity') {
        logo = <FontAwesomeIcon icon={faBasketballBall}/>;
    } else if (type === 'Food') {
        logo = <FontAwesomeIcon icon={faPizzaSlice}/>;
    }

    return (
        <div className={"Event type-" + type.replace(/\s+/g, '-').toLowerCase()}>
            <div className="time">
                <div className="start">{startTime}</div>
                {endTime ? <div className="to">to</div> : <></>}
                <div className="start">{endTime}</div>
            </div>
            <div className="detail">
                <div className="overview">
                    <div className="type">{type}</div>
                    <div className="name">{name}</div>
                    <div className="location">@ {location}</div>
                </div>
                <div className="icon">
                    {logo}
                </div>
            </div>
        </div>
    );
};

export default Event;