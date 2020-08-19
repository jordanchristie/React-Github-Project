import React, { useContext, useState } from "react";
import "./SearchBar.scss";
import { UserContext } from "../../Context/UserContext";

const SearchBar = () => {
  const [name, setName] = useState("");
  const { fetchUser } = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    fetchUser(name);
  };

  return (
    <div className="searchbar">
      <form onSubmit={handleSubmit}>
        <input
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="Search Github"
        />
        <button className="searchbar-button" type="submit">
          Find
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
