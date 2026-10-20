import React from "react";
import { Link } from "react-router";

export default function Movieslist(props) {
  console.log("Props data:", props.p1);

  return (
    <div className="grid grid-cols-4 gap-4 p-4">
      {props.p1 &&
        props.p1.map((value) => {
          return (
            <div key={value.id}>
              <img
                src={"https://image.tmdb.org/t/p/w500" + value.poster_path}
                alt={value.title}
              />
              <Link to={"/singlemovie/" + value.id} className="text-center">
                <p>{value.title}</p>
              </Link>
              {/* <p className="text-center">{value.id}</p> */}
              <p className="text-center">{value.vote_average}</p>
            </div>
          );
        })}
    </div>
  );
}
