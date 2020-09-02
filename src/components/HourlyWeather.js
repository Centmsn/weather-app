import React from "react";

import "../css/hourlycard.css";

const HourlyWeather = ({ icon, temp, pressure, clouds }) => {
  const iconUrl = `http://openweathermap.org/img/wn/${icon}@2x.png`;

  return (
    <div className="weatherDetails">
      <img src={iconUrl} alt="" />
      {temp}
    </div>
  );
};

export default HourlyWeather;
