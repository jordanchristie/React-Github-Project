import React from "react";

const Search = ({ handleChange, getUser }) => {
  return (
    <div className="search-bar">
      <input onChange={handleChange} type="text" placeholder="Search Github" />
      <button onClick={getUser}>Find</button>
    </div>
  );
};

export default Search;
