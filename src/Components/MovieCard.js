import React from "react";
import "./css/movieCard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const MovieCard = ({ movie, idx }) => {
  console.log(movie);
  return (
    <div className="movieCard">
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt="img path"
      />

      <h1>{idx + 1 + ". " + movie.original_title}</h1>
      <h1>
        <FontAwesomeIcon icon={faStar} color="orange" />
        {" " + Math.round((movie.vote_average + Number.EPSILON) * 10) / 10}
      </h1>
      <button>Add to WatchList</button>
    </div>
  );
};

export default MovieCard;
