import React, { useState } from "react";

import "../css/searchbar.css";

const SearchBar = (props) => {
  const [searchValue, setSearchValue] = useState("");

  const handleInput = (e) => {
    props.fetchUserWeather(e, searchValue);
    setSearchValue("");
  };

  return (
    <div className="searchBar">
      <form>
        <input
          type="text"
          placeholder="Check weather in..."
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <button onClick={(e) => handleInput(e)}>Search</button>
      </form>
    </div>
  );
};

export default SearchBar;
