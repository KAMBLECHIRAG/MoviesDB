import React from "react";
import Image from "./Image";
import ErrorBoundary from "./Errorboundary";

export default function MovieCast(props) {
  console.log(`Movie cast ${props.mc}`);

  return (
    <div className="grid grid-cols-4 gap-4 my-4 p-4 ">
      {" "}
      {props.mc &&
        props.mc.map((value) => {
          return (
            <div key={value.id}>
              <ErrorBoundary>
                <Image p1={value.profile_path} />
              </ErrorBoundary>
              <p className="text-center font-bold">{value.name}</p>
              <p className="text-center">{value.character}</p>
            </div>
          );
        })}
    </div>
  );
}
