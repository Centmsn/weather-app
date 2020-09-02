import React, { useState, useEffect } from "react";
import WeatherCard from "./WeatherCard";

import "../css/userweather.css";

const UserWeather = ({ userForecast, name }) => {
  const currentTime = new Date().getTime();

  const [dailyForecast, setDailyForecast] = useState([]);

  useEffect(() => {
    if (userForecast.length === 0) return;
    setDailyForecast([
      getDailyForecast(),
      getDailyForecast(86400000),
      getDailyForecast(172800000),
      getDailyForecast(259200000),
      getDailyForecast(345600000),
    ]);
  }, [userForecast]);

  const getDailyForecast = (ms = 0) => {
    return [...userForecast].filter((el) =>
      el.dt_txt.match(new Date(currentTime + ms).toISOString().slice(0, 10))
    );
  };

  const weatherCards = () => {
    if (userForecast.length === 0) return;
    const renderedForecast = [];
    for (let i = 0; i < dailyForecast.length; i++) {
      let index = null;
      i === 0 ? (index = 0) : (index = 5);
      renderedForecast.push(
        <WeatherCard
          key={dailyForecast[i][index].dt}
          temp={dailyForecast[i][index].main.temp}
          weather={dailyForecast[i][index].weather[0].main}
          weatherIcon={dailyForecast[i][index].weather[0].icon}
          pressure={dailyForecast[i][index].main.pressure}
          date={dailyForecast[i][index].dt_txt.slice(0, 10)}
          details={dailyForecast[i]}
        />
      );
    }
    return renderedForecast;
  };

  return (
    <div className="userWeather">
      <div className="nameBar">{name.toUpperCase()}</div>
      {weatherCards()}
    </div>
  );
};

export default UserWeather;
