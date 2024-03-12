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
  isFavEditable = true,
  isWatchEditable = true,
}) => {
  const [trailerSelected, setTrailerSelected] = useState(false);

  const handleTrailerClick = () => {
    setTrailerSelected(true);
  };

  const addToWatchListClicked = () => {
    if (isWatchEditable) {
      handleWatchList(movie);
    }
  };

  const handleFavourite = () => {
    if (isFavEditable) {
      handleFavourites(movie);
    }
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
      <div className="movieCard" onclick="">
        <div style={{ position: "relative" }}>
          <button
            className="overlay"
            onClick={handleFavourite}
            disabled={!isFavEditable}
          >
            <FontAwesomeIcon
              icon={faHeart}
              color={
                isFavEditable ? (isInFavourites ? "red" : "white") : "gray"
              }
            />
            <span class="tooltiptext">
              {isFavEditable
                ? isInFavourites
                  ? "Remove from Favorites"
                  : "Add to favorites"
                : "Can't edit!"}
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
        <button onClick={addToWatchListClicked} disabled={!isWatchEditable}>
          {isInWatchList ? "Remove form WatchList" : "Add to WatchList"}
        </button>
      </div>
    </div>
  );
};

export default MovieCard;
/*
const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhZmRjYmQ1ZTVkMGNkMzc3NTIxMjk1ZjFmODA4MjYwZiIsInN1YiI6IjY1ZTIxNDAxMDdlMjgxMDE3Y2RmM2ZkZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9o5tZSzMy_w9W1bqDtnySyvG464WUOBJMnzA4W-r7ho'
      }
    };
    
    fetch(`https://api.themoviedb.org/3/movie/${movieId}`, options)
      .then(response => response.json())
      .then(response => console.log(response))
      .catch(err => console.error(err));
*/
