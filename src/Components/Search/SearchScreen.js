import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SearchMovieCard from "./SearchMovieCard";
import SearchBar from "./SearchBar";
import "../css/searchScreen.css";

const SearchScreen = () => {
  const params = useParams();
  const [movies, setMovies] = useState([]);

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
      `https://api.themoviedb.org/3/search/movie?query=${params.searchText}&include_adult=false&language=en-US&page=1`,
      options
    )
      .then((response) => response.json())
      .then((response) => setMovies(response.results || []))
      .catch((err) => setMovies([]));
  }, []);

  console.log(params);
  return (
    <>
      <div className="search-header">
        <SearchBar />
        <button>Close</button>
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
