import React, { useEffect, useState } from "react";
import axios from "axios";
import Movieslist from "./Movieslist";

export default function Upcoming() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/movie/upcoming?api_key=cbb70bb8b35bbc8b8612487fa772b5c3",
      )
      .then((res) => {
        console.log(res.data.results);
        setData(res.data.results);
      })
      .catch((err) => {
        console.log("Error fetching movies:", err);
      });
  }, []);

  return (
    <div>
      <Movieslist p1={data} />
    </div>
  );
}
