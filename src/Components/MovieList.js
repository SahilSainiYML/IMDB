import { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import "./css/movieList.css";

const MovieList = ({
  movieType,
  watchList,
  setWatchList,
  favourites,
  setFavourites,
}) => {
  const [movies, setMovies] = useState([]);
  const handleWatchList = (id) => {
    setWatchList(() => {
      if (watchList.includes(id)) {
        const newList = watchList.filter((item) => {
          return item !== id;
        }); // instead of filter we should use index as filter will trace complete array
        localStorage.setItem("watchList", JSON.stringify(newList));
        return newList;
      }
      const newList = [...watchList, id];
      localStorage.setItem("watchList", JSON.stringify(newList));
      return newList;
    });
  };

  const handleFavourites = (id) => {
    setFavourites(() => {
      if (favourites.includes(id)) {
        const newList = favourites.filter((item) => {
          return item !== id;
        }); // instead of filter we should use index as filter will trace complete array
        localStorage.setItem("favourites", JSON.stringify(newList));
        return newList;
      }
      const newList = [...favourites, id];
      localStorage.setItem("favourites", JSON.stringify(newList));
      return newList;
    });
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
          isInWatchList={watchList.includes(movie.id)}
          isInFavourites={favourites.includes(movie.id)}
          handleFavourites={handleFavourites}
        />
      ))}
    </div>
  );
};

export default MovieList;
