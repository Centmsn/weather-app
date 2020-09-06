import React from "react";

import "../css/hourlycard.css";

const HourlyWeather = ({ icon, temp, pressure, clouds, time }) => {
  const iconUrl = `http://openweathermap.org/img/wn/${icon}@2x.png`;

  return (
    <li className="hourly-card__list-item">
      <img src={iconUrl} alt="weather icon" className="hourly-card__list-img" />
      {temp}
      <sup>o</sup>C<span className="hourly-card__list-time">{time}</span>
    </li>
  );
};

export default HourlyWeather;
