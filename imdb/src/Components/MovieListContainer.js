import MovieList from "./MovieList";
import "./css/movieListContainer.css";

const MovieListContainer = () => {
  return (
    <div className="movieListContainer">
      <h1>This is main container</h1>
      <MovieList />
    </div>
  );
};

export default MovieListContainer;
