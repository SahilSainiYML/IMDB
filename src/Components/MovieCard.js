import React, { useState } from "react";
import "./css/movieCard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faStar, faHeart } from "@fortawesome/free-solid-svg-icons";
import Modal from "./Modal";

const MovieCard = ({
  movie,
  idx,
  handleWatchList,
  isInWatchList,
  handleFavourites,
  isInFavourites,
}) => {
  const [trailerSelected, setTrailerSelected] = useState(false);

  const handleTrailerClick = () => {
    setTrailerSelected(true);
  };

  const addToWatchListClicked = () => {
    handleWatchList(movie);
  };

  const handleFavourite = () => {
    handleFavourites(movie);
  };

  return (
    <div>
      {trailerSelected && (
        <Modal
          setIsOpen={setTrailerSelected}
          movieId={movie.id}
          name={movie.original_title}
        />
      )}
      <div className="movieCard">
        <div style={{ position: "relative" }}>
          <button className="overlay" onClick={handleFavourite}>
            <FontAwesomeIcon
              icon={faHeart}
              color={isInFavourites ? "red" : "white"}
            />
            <span class="tooltiptext">
              {isInFavourites ? "Remove from Favorites" : "Add to favorites"}
            </span>{" "}
          </button>
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt="img path"
          />
        </div>
        <h1>{idx + 1 + ". " + movie.original_title}</h1>
        <div className="rating-trailer-container">
          <h1>
            <FontAwesomeIcon icon={faStar} color="orange" />
            {" " + Math.round((movie.vote_average + Number.EPSILON) * 10) / 10}
          </h1>
          <button onClick={handleTrailerClick}>
            <FontAwesomeIcon icon={faPlay} color="orange" /> Trailer
          </button>
        </div>
        <button onClick={addToWatchListClicked}>
          {isInWatchList ? "Remove form WatchList" : "Add to WatchList"}
        </button>
      </div>
    </div>
  );
};

export default MovieCard;
