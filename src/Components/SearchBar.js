import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import "./css/searchBar.css";
import { useRef } from "react";

const SearchBar = () => {
  const inputRef = useRef(null);
  const handleSearch = () => {
    let text = inputRef.current.value;
    console.log(text);
  };

  return (
    <div className="searchBar">
      <input placeholder="Search" ref={inputRef} />{" "}
      {/*try making it auto search when user type */}
      <button onClick={handleSearch}>
        <FontAwesomeIcon icon={faSearch} />
      </button>
    </div>
  );
};

export default SearchBar;
