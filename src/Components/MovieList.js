import { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import "./css/movieList.css";

const MovieList = ({ movieType }) => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    console.log("useEffect() called");
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
        <MovieCard idx={index} movie={movie} />
      ))}
    </div>
  );
};

export default MovieList;
