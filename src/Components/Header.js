import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faHouse, faFilm } from "@fortawesome/free-solid-svg-icons";
import "./css/header.css";
import SearchBar from "./Search/SearchBar";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="header">
      <p>
        <FontAwesomeIcon icon={faHouse} />
        <Link to="/IMDB"> Home </Link>
      </p>

      <p>
        <FontAwesomeIcon icon={faHeart} />
        <Link to="/favorites"> Favorites </Link>
      </p>

      <p>
        <FontAwesomeIcon icon={faFilm} />
        <Link to="/watchlist"> WatchList </Link>
      </p>
      <p>
        <SearchBar />
      </p>
    </div>
  );
};

export default Header;
