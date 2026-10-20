import React from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import App from "./Components/App";
import TopRated from "./Components/TopRated";
import Upcoming from "./Components/Upcoming";
import PageNotFound from "./Components/PageNotFound";
import Movieinfo from "./Components/Movieinfo";
import MovieCast from "./Components/MovieCast";
import Singlemovie from "./Components/Singlemovie";
import Signup from "./Components/Signup";
import Searchmovie from "./Components/Searchmovie";
import Login from "./Components/Login";

const routeValue = (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="" element={<TopRated />} />
        <Route path="upcoming" element={<Upcoming />} />
        <Route path="singlemovie/:movieid" element={<Singlemovie />} />
        <Route path="movieinfo" element={<Movieinfo />} />
        <Route path="moviecast" element={<MovieCast />} />
        <Route path="searchMovie" element={<Searchmovie />} />
        <Route path="signUp" element={<Signup />} />
        <Route path="login" element={<Login />} />
        <Route path="*" element={<PageNotFound />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default routeValue;
