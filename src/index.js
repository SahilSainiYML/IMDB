import React, { createContext, useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import MovieListContainer from "./Components/MovieListContainer";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Favorites from "./Components/Favorites/Favorites";
import WatchList from "./Components/Favorites/WatchList";
import Header from "./Components/Header";

export const listContext = createContext();

const AppLayout = () => {
  const [favorites, setFavorites] = useState(
    JSON.parse(localStorage.getItem("favorites")) || []
  );
  const [watchList, setWatchListss] = useState(
    JSON.parse(localStorage.getItem("watchList")) || []
  );

  const updateFavorites = (list) => {
    localStorage.setItem("favorites", JSON.stringify(list));
    setFavorites(list);
  };

  const updateWatchList = (list) => {
    localStorage.setItem("watchList", JSON.stringify(list));
    setWatchListss(list);
  };

  return (
    <listContext.Provider
      value={{
        favorites: favorites,
        watchList: watchList,
        updateFavorites: updateFavorites,
        updateWatchList: updateWatchList,
      }}
    >
      <RouterProvider router={router} />
    </listContext.Provider>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div className="mainContainer">
        <Header />
        <Outlet />
      </div>
    ),
    children: [
      {
        path: "IMDB",
        element: <MovieListContainer />,
      },
      {
        path: "/favorites",
        element: <Favorites />,
      },
      {
        path: "/watchlist",
        element: <WatchList />,
      },
    ],
  },
]);
root.render(
  <AppLayout />
  // <React.StrictMode>
  // </React.StrictMode> // for lighthouse
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
