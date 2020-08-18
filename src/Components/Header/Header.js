import React from "react";
import "./Header.scss";
import SearchBar from "../SearchBar/SearchBar";

const Header = () => {
  return (
    <header>
      <h1 className="title"> Github Profile Search </h1>
      <SearchBar />
    </header>
  );
};

export default Header;
