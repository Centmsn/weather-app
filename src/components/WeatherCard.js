import React, { useState } from "react";
import HourlyWeather from "./HourlyWeather";

import "../css/dailycard.css";

const WeatherCard = ({
  temp,
  weather,
  pressure,
  weatherIcon,
  date,
  details,
}) => {
  const icon = `http://openweathermap.org/img/wn/${weatherIcon}@2x.png`;

  const [displayDetails, setDisplayDetails] = useState(false);

  const handleShowDetails = () => {
    setDisplayDetails(!displayDetails);
  };

  const dailyWeather = (
    <div className="dailycard">
      <div className="icon">
        <img src={icon} alt={`${weather} icon`} />
      </div>
      <div className="temperature">
        {temp}
        <sup>o</sup>C
      </div>
      <div className="pressure">{pressure} hPa</div>
      <div className="date">{date}</div>
      <div className="detail-btn">
        <button onClick={handleShowDetails}>Show details</button>
      </div>
    </div>
  );
  const hourlyWeather = (
    <div className="hourlycard">
      {details.map((el) => (
        <HourlyWeather
          icon={el.weather[0].icon}
          temp={el.main.temp}
          pressure={el.main.pressure}
          clouds={el.clouds.all}
        />
      ))}
      <button onClick={handleShowDetails}>Hide details</button>
    </div>
  );

  return !displayDetails ? dailyWeather : hourlyWeather;
};

export default WeatherCard;
