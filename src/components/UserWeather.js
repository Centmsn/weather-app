import React from "react";
import WeatherCard from "./WeatherCard";

import "../css/userweather.css";

const UserWeather = ({ userForecast }) => {
  console.log(userForecast);

  const cards = userForecast.map((el, index) => (
    <WeatherCard
      key={index}
      temperature={el.main.temp}
      weather={el.weather[0].main}
      pressure={el.main.pressure}
    />
  ));

  return <div className="userWeather">{cards}</div>;
};

export default UserWeather;
