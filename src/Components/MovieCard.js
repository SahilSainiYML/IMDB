import React, { useEffect, useState } from "react";
import "./css/movieCard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import Modal from "./Modal";

const MovieCard = ({ movie, idx }) => {
  const [trailerSelected, setTrailerSelected] = useState(false);
  const [trailerKey, setTrailerKey] = useState("");

  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhZmRjYmQ1ZTVkMGNkMzc3NTIxMjk1ZjFmODA4MjYwZiIsInN1YiI6IjY1ZTIxNDAxMDdlMjgxMDE3Y2RmM2ZkZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9o5tZSzMy_w9W1bqDtnySyvG464WUOBJMnzA4W-r7ho",
      },
    };

    fetch(
      `https://api.themoviedb.org/3/movie/${movie.id}/videos?language=en-US`,
      options
    )
      .then((response) => response.json())
      .then((response) => {
        let key = response.results[0]["key"];
        setTrailerKey(key);
      })
      .catch((err) => console.error(err));
  }, []);

  const handleTrailerClick = () => {
    setTrailerSelected(true);
  };
  return (
    <div>
      {trailerSelected && (
        <Modal
          setIsOpen={setTrailerSelected}
          trailerKey={trailerKey}
          name={movie.original_title}
        />
      )}
      <div className="movieCard">
        <div style={{ position: "relative" }}>
          <button className="overlay">
            {" "}
            +<span class="tooltiptext">Add to favorites</span>{" "}
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
          <button
            style={{
              minWidth: "50%",
              color: "white",
              backgroundColor: "inherit",
              fontSize: "20px",
              fontWeight: "800",
            }}
            onClick={handleTrailerClick}
          >
            Trailer
          </button>
        </div>
        <button>Add to WatchList</button>
      </div>
    </div>
  );
};

export default MovieCard;
