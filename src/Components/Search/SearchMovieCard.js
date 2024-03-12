import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../css/searchScreen.css";
import { faPlay, faStar } from "@fortawesome/free-solid-svg-icons";
import Modal from "../Modal";
import { useState } from "react";

const SearchMovieCard = ({ movie }) => {
  const [trailerSelected, setTrailerSelected] = useState(false);

  const handlePlay = () => {
    setTrailerSelected(true);
  };

  return (
    <>
      {trailerSelected && (
        <Modal
          setIsOpen={setTrailerSelected}
          movieId={movie.id}
          name={movie.original_title}
        />
      )}
      <div className="search-card-wrapper">
        <div className="movie-detail">
          <div style={{ position: "relative" }}>
            <button className="overlay" onClick={handlePlay}>
              <FontAwesomeIcon icon={faPlay} color="red" />
            </button>
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt="movieImg"
            />
          </div>
          <div className="movie-discription">
            <h1>{movie.title}</h1>
            <h3>{movie.overview}</h3>
            <h3>
              <FontAwesomeIcon icon={faStar} color="orange" />
              {" " +
                Math.round((movie.vote_average + Number.EPSILON) * 10) / 10}
            </h3>
            <h3>Release Date {movie.release_date}</h3>
            <h3>Popularity {movie.popularity}</h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchMovieCard;
