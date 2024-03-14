import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import "../css/searchScreen.css";
import { useNavigate } from "react-router-dom";

const SearchBar = ({ updateSearch }) => {
  const navigate = useNavigate();
  const [searchText, setSearchText] = useState("");

  const handleSearch = () => {
    navigate(`/search`);
  };

  const handleChange = (e) => {
    setSearchText(e.target.value);
    updateSearch(e.target.value);
  };

  return (
    <div className="searchBar">
      <input placeholder="Search" value={searchText} onChange={handleChange} />
      {/*try making it auto search when user type */}
      <button onClick={handleSearch}>
        <FontAwesomeIcon icon={faSearch} />
      </button>
    </div>
  );
};

export default SearchBar;
