import React, { useState } from "react";

import "../css/searchbar.css";

const SearchBar = (props) => {
  const [searchValue, setSearchValue] = useState("");

  const handleWeatherSearch = (e) => {
    props.fetchUserWeather(e, searchValue);
    setSearchValue("");
  };

  return (
    <div className="search-bar">
      <form>
        <input
          className="search-bar__input"
          type="text"
          placeholder="Check weather in..."
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <button
          className="search-bar__btn"
          onClick={(e) => handleWeatherSearch(e)}
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
