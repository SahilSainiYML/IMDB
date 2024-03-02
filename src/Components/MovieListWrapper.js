import React from "react";
import MovieList from "./MovieList";

const MovieListWrapper = ({ title, movieType }) => {
  return (
    <h1>
      <span
        style={{
          "background-color": "yellow",
          color: "yellow",
          "margin-right": "5px",
          "border-radius": "10px",
        }}
      >
        {"."}
      </span>
      {title}
      <MovieList movieType={movieType} />
    </h1>
  );
};

export default MovieListWrapper;
