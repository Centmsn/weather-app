import React, { Component } from "react";
import LocalWeather from "./LocalWeather";
import UserWeather from "./UserWeather";
import SearchBar from "./SearchBar";
import AnimatedBg from "./AnimatedBg";
import Footer from "./Footer";

import "../css/main.css";
// backgrounds
import rain from "../assets/rain.mp4";
// import snow from "../assets/snow.mp4";
// import sun from "../assets/sun.mp4";
// import clouds from "../assets/clouds.mp4";

class App extends Component {
  state = {
    localForecast: {},
    userForecast: {
      forecast: [],
      name: "",
    },
    locationAllowed: true,
  };

  fetchUserWeather = (e, value) => {
    e.preventDefault();
    if (!value) return;

    fetch(
      `http://api.openweathermap.org/data/2.5/forecast?q=${value}&units=metric&appid=b7238569c5de7a001ca295ee92e8c746`
    )
      .then((response) => {
        if (response.status !== 200) {
          throw new Error("abc");
        } else {
          return response.json();
        }
      })
      .then((data) =>
        this.setState({
          userForecast: {
            forecast: data.list,
            name: value,
          },
        })
      )
      .catch((err) => console.log(err));
  };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (pos) => {
        fetch(
          `http://api.openweathermap.org/data/2.5/weather?lat=${pos.coords.latitude}&lon=${pos.coords.longitude}&units=metric&appid=b7238569c5de7a001ca295ee92e8c746`
        )
          .then((response) => {
            if (response.status !== 200) {
              throw new Error("abc");
            } else {
              return response.json();
            }
          })
          .then((data) =>
            this.setState({
              localForecast: {
                temperature: data.main.temp,
                weather: data.weather[0].main,
                weatherIcon: data.weather[0].icon,
                name: data.name,
              },
            })
          )
          .catch((err) => console.log(err));
      },

      () => this.setState({ locationAllowed: false })
    );
  }
  render() {
    const { localForecast, userForecast } = this.state;
    return (
      <>
        <div className="filter">
          <div className="container">
            <AnimatedBg bg={rain} />
            {this.state.locationAllowed && (
              <LocalWeather
                temperature={localForecast.temperature}
                weather={localForecast.weather}
                weatherIcon={localForecast.weatherIcon}
                name={localForecast.name}
              />
            )}
            <SearchBar fetchUserWeather={this.fetchUserWeather} />
            <UserWeather
              userForecast={userForecast.forecast}
              name={userForecast.name}
            />
            <Footer />
          </div>
        </div>
      </>
    );
  }
}

export default App;
