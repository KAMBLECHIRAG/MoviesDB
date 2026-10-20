import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Movieslist from "./Movieslist";

export default function Searchmovie() {
  let [record, setRecord] = useState([]);
  let ansMovie = useSelector((state) => state.search.movieName);

  useEffect(() => {
    console.log("call api", ansMovie);
    let api = `https://api.themoviedb.org/3/search/movie?api_key=cbb70bb8b35bbc8b8612487fa772b5c3&language=en-US&query=${
      ansMovie
    }&page=1`;

    axios
      .get(api)
      .then((res) => {
        console.log(res.data.results);
        setRecord(res.data.results);
      })
      .catch((err) => {
        console.log("Error fetching movies:", err);
      });
  }, [ansMovie]);

  return (
    <div>
      <Movieslist p1={record} />
    </div>
  );
}
