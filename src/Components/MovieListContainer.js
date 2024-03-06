import "./css/movieListContainer.css";
import MovieListWrapper from "./MovieListWrapper";
import { useState } from "react";

const MovieListContainer = () => {
  const [watchList, setWatchList] = useState(() => {
    const watchListMovies = JSON.parse(localStorage.getItem("watchList")) || [];
    return watchListMovies;
  });

  const [favourites, setFavourites] = useState(() => {
    const favouriteMovies = JSON.parse(
      localStorage.getItem("favourites") || "[]"
    );
    return favouriteMovies;
  });
  return (
    <div className="movieListContainer">
      <MovieListWrapper
        title={"Top 10 on IMDb this week!"}
        movieType={"upcoming"}
        watchList={watchList}
        setWatchList={setWatchList}
        favourites={favourites}
        setFavourites={setFavourites}
      />
      <MovieListWrapper
        title={"Top Rated!"}
        movieType={"top_rated"}
        watchList={watchList}
        setWatchList={setWatchList}
        favourites={favourites}
        setFavourites={setFavourites}
      />
      <MovieListWrapper
        title={"Fan Favorites!"}
        movieType={"popular"}
        watchList={watchList}
        setWatchList={setWatchList}
        favourites={favourites}
        setFavourites={setFavourites}
      />
    </div>
  );
};

export default MovieListContainer;
