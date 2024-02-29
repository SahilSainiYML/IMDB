import MovieCard from "./MovieCard";
import "./css/movieList.css";

const MovieList = () => {
  return (
    <div className="movieList">
      <MovieCard />
      <MovieCard />
      <MovieCard />
      <MovieCard />
      <MovieCard />
      <MovieCard />
    </div>
  );
};

export default MovieList;
