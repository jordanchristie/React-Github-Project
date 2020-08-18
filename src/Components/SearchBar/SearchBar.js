import React from "react";
import "./SearchBar.scss";

const SearchBar = ({ handleChange, getUser }) => {
  return (
    <div className="search-bar">
      <form onSubmit={getUser}>
        <input
          onChange={handleChange}
          type="text"
          placeholder="Search Github"
        />
        <button type="submit">Find</button>
      </form>
    </div>
  );
};

export default SearchBar;
