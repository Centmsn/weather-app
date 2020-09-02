import React from "react";

import "../css/localweather.css";

const LocalWeather = (props) => {
  const icon = `http://openweathermap.org/img/wn/${props.weatherIcon}@2x.png`;
  return (
    <div className="localWeather">
      <div className="icon">
        <img src={icon} alt="" />
      </div>
      <div className="name">{props.name}</div>
      <div className="temp">
        {props.temperature}
        <sup>o</sup>C
      </div>
    </div>
  );
};

export default LocalWeather;
