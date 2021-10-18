import React from 'react';

const Search = () => {
  return (
    <div className="searchbar">
      <input
        type="text"
        name="search"
        id="search"
        placeholder="Search for a task.."
      />
    </div>
  );
};

export default Search;
