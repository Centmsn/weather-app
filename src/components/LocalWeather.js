import React from "react";

import "../css/localweather.css";

const LocalWeather = (props) => {
  const icon = `http://openweathermap.org/img/wn/${props.weatherIcon}@2x.png`;
  return (
    <div className="local-weather">
      <div className="local-weather__icon">
        <img src={icon} alt="" />
      </div>
      <div className="local-weather__name">{props.name}</div>
      <div className="local-weather__temp">
        {props.temperature}
        <sup>o</sup>C
      </div>
      <div className="local-weather__desc">
        <p>Now in Your location: {props.weather}</p>
      </div>
    </div>
  );
};

export default LocalWeather;
