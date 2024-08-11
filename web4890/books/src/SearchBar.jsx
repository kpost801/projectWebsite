import React from "react";

function SearchBar({ searchQuery, setSearchQuery }) {
  return (
    <div className="searchbar">
      <input
        type="text"
        placeholder="Search for a Book"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      {searchQuery && <button onClick={() => setSearchQuery("")}>Clear</button>}
    </div>
  );
}

export default SearchBar;
