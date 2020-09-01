import React from "react";

const WeatherCard = ({ temperature, weather, name, pressure }) => {
  return (
    <div className="weathercard">
      <div className="icon">{weather}</div>
      <div className="temperature">
        {temperature}
        <sup>o</sup>C
      </div>
      <div className="pressure">{pressure} hPa</div>
    </div>
  );
};

export default WeatherCard;
