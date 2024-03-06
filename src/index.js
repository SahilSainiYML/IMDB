import React, { useRef, useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import MovieListContainer from "./Components/MovieListContainer";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Favorites from "./Components/Favorites/Favorites";
import WatchList from "./Components/Favorites/WatchList";

const root = ReactDOM.createRoot(document.getElementById("root"));
const router = createBrowserRouter([
  {
    path: "/IMDB",
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
]);
root.render(
  <RouterProvider router={router} />
  // <React.StrictMode>
  // </React.StrictMode> // for lighthouse
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
