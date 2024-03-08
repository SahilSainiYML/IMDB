import { useContext } from "react";
import { listContext } from "../../index.js";
import MovieCard from "../MovieCard.js";

const WatchList = () => {
  const context = useContext(listContext);
  const watchList = context.watchList;

  const handleWatchList = (movie) => {
    let ind = watchList.indexOf(movie);
    context.watchList.splice(ind, 1);
    context.updateWatchList([...context.watchList]);
  };
  return watchList.length === 0 ? (
    <div style={{ color: "red", position: "fixed", "margin-top": "100px" }}>
      "No Watch-list!"
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
      <div className="favorite-list">
        {context.watchList.map((movie, index) => {
          return (
            <MovieCard
              idx={index}
              movie={movie}
              isInWatchList={true}
              handleWatchList={handleWatchList}
            />
          );
        })}
      </div>
    </div>
  );
};

export default WatchList;
