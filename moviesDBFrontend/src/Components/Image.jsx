import React from "react";

export default function Image(props) {
//   console.log(props.p1);
  if (props.p1 == null) {
    throw new Error("Image Empty");
  }

  return (
    <img
      src={"https://image.tmdb.org/t/p/w500" + props.p1}
      className="w-1/2 justify-self-center"
    />
  );
}
