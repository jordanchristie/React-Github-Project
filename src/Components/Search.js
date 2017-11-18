import React from 'react';


const Search = (props) => {
    return (
      <div className="search-bar">
          <input onChange={props.handleChange} type="text" placeholder="Search Github"/>
          <button onClick={props.getUser}>Find</button>
      </div>
    ) 
}

export default Search;