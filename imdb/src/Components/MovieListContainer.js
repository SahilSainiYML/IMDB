import MovieList from "./MovieList";
import "./css/movieListContainer.css";

const MovieListContainer = () => {
  return (
    <div className="movieListContainer">
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
        Top 10 on IMDb this week!
      </h1>
      <MovieList movieType={"upcoming"} />
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
        Fan favorites!
      </h1>
      <MovieList movieType={"popular"} />
    </div>
  );
};

export default MovieListContainer;
