import React from "react";
import "./Header.scss";
import SearchBar from "../SearchBar/SearchBar";

const Header = () => {
  return (
    <header>
      <div className="nav-container">
        <h1 className="title"> Github Profile Search </h1>
        <SearchBar />
      </div>
    </header>
  );
};

export default Header;
