import { useContext } from "react";
import { listContext } from "../../index.js";
import MovieCard from "../MovieCard.js";

const WatchList = () => {
  const context = useContext(listContext);

  return (
    <div className="favorite-list">
      {context.watchList.map((movie, index) => {
        return (
          <MovieCard
            idx={index}
            movie={movie}
            isInFavourites={true}
            // handleFavourites={handleFavourites}
          />
        );
      })}
    </div>
  );
};

export default WatchList;
