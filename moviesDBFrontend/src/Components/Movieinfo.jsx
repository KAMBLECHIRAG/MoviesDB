import React from "react";

export default function Movieinfo(props) {
  // console.log(`movie detail ${props.md}`);
  return (
    <div className="relative flex p-4 bg-cover bg-center min-h-screen bg-blue-800">
      <div
        className="absolute right-0 top-0 h-full w-10/12 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original${props.md.backdrop_path})`,
        }}
      ></div>
      {/* Transparent overlay */}
      <div className="absolute inset-0 bg-black opacity-70"></div>

      {/* Content */}
      <div className="relative z-10 flex gap-4 text-white">
        <img
          src={"https://image.tmdb.org/t/p/w500" + props.md.poster_path}
          alt={props.md.title}
          className="w-1/5 h-10/12 rounded"
        />

        <div>
          <h1 className="text-4xl font-bold">{props.md.title}</h1>
          <div className="flex flex-wrap gap-2 mt-2">
            {props.md.genres?.map((genre) => (
              <span
                key={genre.id}
                className="px-3 py-1 border border-white rounded-full text-sm"
              >
                {genre.name}
              </span>
            ))}
          </div>

          <h2 className="text-xl font-bold mt-4">Overview</h2>

          <p>{props.md.overview}</p>
        </div>
      </div>
    </div>
  );
}
