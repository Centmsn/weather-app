import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun } from "@fortawesome/free-solid-svg-icons";
import { faCloud } from "@fortawesome/free-solid-svg-icons";
import { faCloudSun } from "@fortawesome/free-solid-svg-icons";
import { faCloudShowersHeavy } from "@fortawesome/free-solid-svg-icons";
import { faSnowflake } from "@fortawesome/free-solid-svg-icons";
import "../css/localweather.css";

const LocalWeather = (props) => {
  // clear rain clouds drizzle(mzawka)
  return (
    <div className="localWeather">
      <div className="icon">
        <FontAwesomeIcon icon={faCloudShowersHeavy} />
      </div>
      <div className="name">{props.name}</div>
      <div className="temp">
        {props.temperature}
        <sup>o</sup>C
      </div>

      {/* <FontAwesomeIcon icon={faCloud} />
      <FontAwesomeIcon icon={faCloudSun} />
      <FontAwesomeIcon icon={faSun} />

      <FontAwesomeIcon icon={faSnowflake} /> */}
    </div>
  );
};

export default LocalWeather;
