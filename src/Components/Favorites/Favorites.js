import { useContext } from "react";
import { listContext } from "../../index.js";
import MovieCard from "../MovieCard.js";
import "../css/favoriteList.css";
const Favorites = () => {
  const context = useContext(listContext);

  const favorites = context.favorites;
  const handleFavourites = (movie) => {
    let ind = favorites.indexOf(movie);
    context.favorites.splice(ind, 1);
    context.updateFavorites([...context.favorites]);
  };
  return favorites.length === 0 ? (
    <div style={{ color: "red", position: "fixed", "margin-top": "100px" }}>
      "No Favorites!"
      <a
        href="/IMDB"
        style={{
          "text-decoration": "none",
          color: "white",
        }}
      >
        {" "}
        <button>Let's add</button>
      </a>
    </div>
  ) : (
    <div className="favorite-wrapper">
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
        Your Fantastic favorite movies!
      </h1>
      <div className="favorite-list">
        {favorites.map((movie, index) => {
          return (
            <MovieCard
              idx={index}
              movie={movie}
              isInFavourites={true}
              handleFavourites={handleFavourites}
              isWatchEditable={false}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Favorites;
