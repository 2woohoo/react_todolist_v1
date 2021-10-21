import React from 'react';

const Search = ({ searchTerm, setSearchTerm }) => {
  const searchHandler = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="searchbar">
      <input
        onChange={searchHandler}
        type="text"
        name="search"
        id="search"
        placeholder="Search for a task.."
      />
    </div>
  );
};

export default Search;
