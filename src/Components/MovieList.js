import { useEffect, useState, useContext } from "react";
import MovieCard from "./MovieCard";
import "./css/movieList.css";
import { listContext } from "..";

const MovieList = ({ movieType }) => {
  const [movies, setMovies] = useState([]);
  let { favorites, watchList, updateFavorites, updateWatchList } =
    useContext(listContext);

  const handleWatchList = (movie) => {
    const isPresent = watchList.some((item) => item.id === movie.id);
    if (isPresent) {
      const newList = watchList.filter((item) => {
        return item.id !== movie.id;
      }); // instead of filter we should use index as filter will trace complete array
      watchList = newList;
      updateWatchList(newList);
      return newList;
    }
    const newList = [...watchList, movie];
    watchList = newList;
    updateWatchList(newList); // check with context["watchlist"]
    return newList;
  };

  const handleFavourites = (movie) => {
    const isPresent = favorites.some((item) => item.id === movie.id);
    if (isPresent) {
      const newList = favorites.filter((item) => item.id !== movie.id); // instead of filter we should use index as filter will trace complete array
      favorites = newList;
      updateFavorites(newList);
      return newList;
    }
    const newList = [...favorites, movie];
    favorites = newList;
    updateFavorites(newList);
    return newList;
  };

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${movieType}?api_key=9f48a5b363c49e0c31bf3d09bb319827`
    )
      .then((resp) => resp.json())
      .then((data) => setMovies(data.results));
  }, [movieType]);

  return movies.length === 0 ? (
    "Loading..."
  ) : (
    <div className="movieList">
      {movies.map((movie, index) => (
        <MovieCard
          idx={index}
          movie={movie}
          handleWatchList={handleWatchList}
          isInWatchList={watchList.some((item) => item.id === movie.id)}
          isInFavourites={favorites.some((item) => item.id === movie.id)}
          handleFavourites={handleFavourites}
        />
      ))}
    </div>
  );
};

export default MovieList;
