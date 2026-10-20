import React, { useEffect, useState } from "react";
import Movieinfo from "./Movieinfo";
import MovieCast from "./MovieCast";
import { useParams } from "react-router";
import axios from "axios";

export default function Singlemovie() {
  const [movieDetails, setMovieDetails] = useState([]);
  const [movieCast, setMovieCast] = useState([]);
  let ansUrl = useParams();
  console.log(ansUrl);

  useEffect(() => {
    if (!ansUrl) return;

    const apiKey = "cbb70bb8b35bbc8b8612487fa772b5c3";

    const url1 = `https://api.themoviedb.org/3/movie/${ansUrl.movieid}?api_key=${apiKey}`;

    const url2 = `https://api.themoviedb.org/3/movie/${ansUrl.movieid}/credits?api_key=${apiKey}`;

    Promise.allSettled([axios.get(url1), axios.get(url2)]).then((results) => {
      if (results[0].status === "fulfilled") {
        // console.log("Movie details:", results[0].value.data);
        setMovieDetails(results[0].value.data);
      } else {
        console.log("Movie details API failed");
      }

      if (results[1].status === "fulfilled") {
        // console.log("Movie cast:", results[1].value.data.cast);
        setMovieCast(results[1].value.data.cast);
      } else {
        console.log("Movie cast API failed");
      }
    });
  }, [ansUrl]);

  return (
    <div>
      <Movieinfo md={movieDetails} />
      <MovieCast mc={movieCast} />
    </div>
  );
}
