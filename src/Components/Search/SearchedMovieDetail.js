import { useEffect, useState } from "react";
import Videos from "./Videos.search";
import Images from "./Images.search";
import "../css/searchedMovieDetail.css";

const SearchedMovieDetail = ({ setIsOpen, movie }) => {
  const [images, setImages] = useState([]);
  const [videos, setVideos] = useState([]);
  if (typeof window != "undefined" && window.document) {
    document.body.style.overflow = "hidden";
  }
  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhZmRjYmQ1ZTVkMGNkMzc3NTIxMjk1ZjFmODA4MjYwZiIsInN1YiI6IjY1ZTIxNDAxMDdlMjgxMDE3Y2RmM2ZkZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9o5tZSzMy_w9W1bqDtnySyvG464WUOBJMnzA4W-r7ho",
      },
    };

    fetch(`https://api.themoviedb.org/3/movie/${movie.id}/images`, options)
      .then((response) => response.json())
      .then((response) => setImages(response.backdrops || []))
      .catch((err) => console.error(err));

    fetch(
      `https://api.themoviedb.org/3/movie/${movie.id}/videos?language=en-US`,
      options
    )
      .then((response) => response.json())
      .then((response) => {
        console.log(response.results);
        setVideos(response.results || []);
      })
      .catch((err) => console.error(err));
  }, [movie]);

  return (
    <div
      className="searched-movie-detail-wrapper"
      onClick={() => {
        setIsOpen(false);
        document.body.style.overflow = "visible";
      }}
    >
      <div className="searched-movie-detail">
        <Images imageList={images} />
        <div className="text-description">
          <h1 style={{ color: "red" }}>{movie.title}</h1>
          <h3>{movie.overview}</h3>
        </div>
        <Videos videos={videos} />
      </div>
    </div>
  );
};

export default SearchedMovieDetail;
