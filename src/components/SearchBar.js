import React from "react";

import "../css/searchbar.css";

const SearchBar = () => {
  return (
    <div className="searchBar">
      <form>
        <input type="text" placeholder="Enter city name..." />
        <button>Search</button>
      </form>
    </div>
  );
};

export default SearchBar;
