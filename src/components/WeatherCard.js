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
    <div className="daily-card">
      <div className="daily-card__icon">
        <img src={icon} alt={`${weather} icon`} />
      </div>
      <div className="daily-card__temperature">
        {temp}
        <sup>o</sup>C
      </div>
      <div className="daily-card__pressure">{pressure} hPa</div>
      <div className="daily-card__date">{date}</div>
      <div className="daily-card__btn-box">
        <button className="daily-card__btn" onClick={handleShowDetails}>
          Show details
        </button>
      </div>
    </div>
  );
  const hourlyWeather = (
    <div className="hourly-card">
      <ul className="hourly-card__list">
        {details.map((el) => (
          <HourlyWeather
            key={el.dt}
            icon={el.weather[0].icon}
            temp={el.main.temp.toFixed(1)}
            pressure={el.main.pressure}
            clouds={el.clouds.all}
            time={el.dt_txt.slice(11, -3)}
          />
        ))}
      </ul>
      <button className="hourly-card__btn" onClick={handleShowDetails}>
        Hide details
      </button>
    </div>
  );

  return !displayDetails ? dailyWeather : hourlyWeather;
};

export default WeatherCard;
