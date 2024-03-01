import MovieList from "./MovieList";
import "./css/movieListContainer.css";

const MovieListContainer = () => {
  return (
    <div className="movieListContainer">
      <h1 style={{ "margin-left": "2.5%" }}>
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
      <MovieList />
      <h1 style={{ "margin-left": "2.5%" }}>
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
      <MovieList />
    </div>
  );
};

export default MovieListContainer;
