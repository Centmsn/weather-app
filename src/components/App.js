import React, { Component } from "react";
import LocalWeather from "./LocalWeather";
import UserWeather from "./UserWeather";
import SearchBar from "./SearchBar";
import AnimatedBg from "./AnimatedBg";
import Footer from "./Footer";

import "../css/main.css";
// backgrounds
import rain from "../assets/rain.mp4";
import snow from "../assets/snow.mp4";
import sun from "../assets/sun.mp4";
import clouds from "../assets/clouds.mp4";

class App extends Component {
  state = {
    localForecast: {},
    userForecast: {},
    locationAllowed: true,
  };

  fetchUserWeather = (e, value) => {
    e.preventDefault();

    console.log(this.state.localForecast);
    console.log(value);
    console.log(e);
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
            <AnimatedBg bg={clouds} />
            {this.state.locationAllowed && (
              <LocalWeather
                temperature={localForecast.temperature}
                weather={localForecast.weather}
                name={localForecast.name}
              />
            )}
            <SearchBar fetchUserWeather={this.fetchUserWeather} />
            <UserWeather
              temperature={userForecast.temperature}
              weather={userForecast.weather}
              name={userForecast.name}
              sunrise={userForecast.sunrise}
              sunset={userForecast.sunset}
            />
            <Footer />
          </div>
        </div>
      </>
    );
  }
}

export default App;
