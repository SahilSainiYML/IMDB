import React from "react";
import MovieList from "./MovieList";

const MovieListWrapper = ({
  title,
  movieType,
  watchList,
  setWatchList,
  favourites,
  setFavourites,
}) => {
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
      <MovieList
        movieType={movieType}
        watchList={watchList}
        setWatchList={setWatchList}
        favourites={favourites}
        setFavourites={setFavourites}
      />
    </h1>
  );
};

export default MovieListWrapper;
