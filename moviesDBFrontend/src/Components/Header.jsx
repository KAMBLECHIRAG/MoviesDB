import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router";
import { changeMovieName } from "../Redux/slices/searchSlice";

export default function Header() {
  let x1 = useRef();
  let dispatch = useDispatch();
  let navigate = useNavigate();
  let ansMovie = useSelector((state) => state.name.userName);

  function myFunc() {
    console.log(x1.current.value);

    if (x1.current.value != "") {
      dispatch(changeMovieName(x1.current.value));
      navigate("/searchMovie");
    }
  }

  return (
    <div className="border flex  justify-between  bg-blue-950 p-2">
      <img
        src="https://www.themoviedb.org/assets/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg"
        className="w-1/12 ml-4"
      />

      <ul className="flex justify-end  text-white items-center">
        <li className="mx-4 text-xl">
          <Link to="/">Top Rated</Link>
        </li>
        <li className="mx-4 text-xl">
          <Link to="upcoming">Upcoming</Link>
        </li>
        <li className="mx-4 text-xl flex items-center">
          <input
            ref={x1}
            className="border bg-white mx-2 rounded text-black py-1"
            type="text"
            placeholder="Movie name"
          />
          <button className="bg-blue-600 cursor-pointer" onClick={myFunc}>
            Search
          </button>
        </li>
        {!ansMovie && (
          <li className="mx-4 text-xl">
            <Link to="login">Login</Link>
          </li>
        )}
        <li className="mx-4 text-xl">
          <Link to="signUp">Signup</Link>
        </li>
        {ansMovie && <li className="mx-4 text-xl">Welcome {ansMovie}</li>}
      </ul>
    </div>
  );
}
