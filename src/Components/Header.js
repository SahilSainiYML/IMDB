import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faHouse, faFilm } from "@fortawesome/free-solid-svg-icons";
import "./css/header.css";
import SearchBar from "./SearchBar";
const Header = () => {
  return (
    <div className="header">
      <p>
        <FontAwesomeIcon icon={faHouse} />
        <a href="/IMDB"> Home </a>
      </p>

      <p>
        <FontAwesomeIcon icon={faHeart} />
        <a href="/favorites"> Favorites </a>
      </p>

      <p>
        <FontAwesomeIcon icon={faFilm} />
        <a href="/watchlist"> WatchList </a>
      </p>
      <p>
        <SearchBar />
      </p>
    </div>
  );
};

export default Header;
