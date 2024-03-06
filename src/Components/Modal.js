import React, { useEffect, useState } from "react";
import "./css/modal.css";

import Trailer from "./Trailer";
const Modal = ({ setIsOpen, name, movieId }) => {
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
      `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
      options
    )
      .then((response) => response.json())
      .then((response) => {
        let key = response.results[0]["key"];
        setTrailerKey(key);
      })
      .catch((err) => console.error(err));
  }, []);
  return (
    <div onClick={() => setIsOpen(false)}>
      <div className="modal">
        <button onClick={() => setIsOpen(false)}>Close</button>
        <div className="modal-content">
          <Trailer name={name} id={trailerKey} />
        </div>
      </div>
    </div>
  );
};

export default Modal;
