import React from "react";

import "../css/localweather.css";

const LocalWeather = (props) => {
  console.log(props.weather);
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
      <div className="desc">
        <p>Now in Your location: {props.weather}</p>
      </div>
    </div>
  );
};

export default LocalWeather;
