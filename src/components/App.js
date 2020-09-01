import React, { useEffect } from "react";
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

function App() {
  useEffect(() => {
    window.navigator.geolocation.getCurrentPosition(
      (pos) => console.log(pos),
      (err) => console.log(err)
    );
  });

  return (
    <>
      <div className="filter">
        <div className="container">
          <AnimatedBg bg={snow} />
          <LocalWeather />
          <SearchBar />
          <UserWeather />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
