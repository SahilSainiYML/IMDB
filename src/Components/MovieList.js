import { useEffect, useState, useContext } from "react";
import MovieCard from "./MovieCard";
import "./css/movieList.css";
import { listContext } from "..";

const MovieList = ({ movieType }) => {
  const [movies, setMovies] = useState([]);
  const context = useContext(listContext);

  const [watchList, setWatchList] = useState(context.watchList);
  const [favorites, setFavorites] = useState(context.favorites);

  const handleWatchList = (movie) => {
    const isPresent = watchList.some((item) => item.id === movie.id);
    if (isPresent) {
      const newList = watchList.filter((item) => {
        return item.id !== movie.id;
      }); // instead of filter we should use index as filter will trace complete array
      localStorage.setItem("watchList", JSON.stringify(newList));
      context.watchList = newList;
      setWatchList(newList);
      return newList;
    }
    const newList = [...watchList, movie];
    context.watchList = newList; // check with context["watchlist"]
    setWatchList(newList);
    localStorage.setItem("watchList", JSON.stringify(newList));

    return newList;
  };

  const handleFavourites = (movie) => {
    const isPresent = favorites.some((item) => item.id === movie.id);
    if (isPresent) {
      const newList = favorites.filter((item) => {
        return item.id !== movie.id;
      }); // instead of filter we should use index as filter will trace complete array
      localStorage.setItem("favorites", JSON.stringify(newList));
      context.favorites = newList;
      setFavorites(newList);
      return newList;
    }
    const newList = [...favorites, movie];
    context.favorites = newList;
    setFavorites(newList);
    localStorage.setItem("favorites", JSON.stringify(newList));
    return newList;
  };

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${movieType}?api_key=9f48a5b363c49e0c31bf3d09bb319827`
    )
      .then((resp) => resp.json())
      .then((data) => setMovies(data.results));
  }, []);

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
