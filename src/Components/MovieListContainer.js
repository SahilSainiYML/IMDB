import "./css/movieListContainer.css";
import MovieListWrapper from "./MovieListWrapper";

const MovieListContainer = () => {
  return (
    <div className="movieListContainer">
      <MovieListWrapper
        title={"Top 10 on IMDb this week!"}
        movieType={"upcoming"}
      />
      <MovieListWrapper title={"Top Rated!"} movieType={"top_rated"} />
      <MovieListWrapper title={"Fan favorites!"} movieType={"popular"} />
    </div>
  );
};

export default MovieListContainer;
