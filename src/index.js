import React, { useRef, useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import MovieListContainer from "./Components/MovieListContainer";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
const router = createBrowserRouter([
  {
    path: "/",
    element: <MovieListContainer />,
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

const signin = () => {
  const [userInfo, setUserInfo] = useState({});

  const handleChange = (e) => {
    setUserInfo((prevState) => {
      return { ...prevState, e.dataset["UserName"]: e.target.value };
    });
  };
  return (
    <form onSubmit={handleChange}>
      <input placeholder="UserName" data-key="UserName" onChange={handleChange} />{" "}
      <input placeholder="Password" data-key="Password"onChange={handleChange} />
    </form>
  );
};
