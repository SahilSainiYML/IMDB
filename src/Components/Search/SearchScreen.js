import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import SearchMovieCard from "./SearchMovieCard";
import SearchBar from "./SearchBar";
import "../css/searchScreen.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";

const SearchScreen = () => {
  const [movies, setMovies] = useState([]);
  const navigate = useNavigate();
  const [searchText, setSearchText] = useState("");
  const handleClose = () => {
    navigate(`/IMDB`);
  };

  const updateSearch = (text) => {
    setSearchText(text);
  };
  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhZmRjYmQ1ZTVkMGNkMzc3NTIxMjk1ZjFmODA4MjYwZiIsInN1YiI6IjY1ZTIxNDAxMDdlMjgxMDE3Y2RmM2ZkZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9o5tZSzMy_w9W1bqDtnySyvG464WUOBJMnzA4W-r7ho",
      },
    };

    fetch(
      `https://api.themoviedb.org/3/search/movie?query=${searchText}&include_adult=false&language=en-US&page=1`,
      options
    )
      .then((response) => response.json())
      .then((response) => setMovies(response.results || []))
      .catch((err) => setMovies([]));
  }, [searchText]);

  return (
    <>
      <div className="search-header">
        <SearchBar searchText={searchText} updateSearch={updateSearch} />
        <button onClick={handleClose}>
          <FontAwesomeIcon icon={faClose} color="red" fontSize={"30px"} />
        </button>
      </div>
      <div className="searchScreen">
        {movies.map((movie) => (
          <SearchMovieCard movie={movie} />
        ))}
      </div>
    </>
  );
};

export default SearchScreen;
