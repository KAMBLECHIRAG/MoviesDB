import React, { useRef, useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { userName } from "../Redux/slices/loginSlice";

export default function Login() {
  let [message, setMessage] = useState("");
  let [errMessage, setErrMessage] = useState("");
  let [name, setName] = useState("");
  let dispatch = useDispatch();
  let navigate = useNavigate();

  const x1 = useRef(null);
  const x2 = useRef(null);

  function myfunc() {
    let data = {
      mobileNo: x1.current.value,
      password: x2.current.value,
    };
    console.log(data);

    axios
      .post("http://localhost:3300/api/users/login", data)
      .then((result) => {
        console.log(result);
        setMessage(result.data.message);
        console.log(result.data.user.name);
        setName(result.data.user.name);
        dispatch(userName(result.data.user.name));
        navigate("/");
        setTimeout(() => setMessage(""), 5000);
      })
      .catch((err) => {
        console.log(err);

        setErrMessage(err.response?.data?.message || "Login failed");

        setTimeout(() => setErrMessage(""), 5000);
      });
  }

  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 via-white to-indigo-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl border border-gray-100 p-8">
        <div className="text-center mb-8">
          <div className="w-14 h-14 bg-blue-600 rounded-2xl mx-auto flex items-center justify-center mb-4 shadow-lg shadow-blue-200">
            <svg
              className="w-7 h-7 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
              />
            </svg>
          </div>
          <h1 className="text-2xl font-bold text-gray-900">Login</h1>
        </div>

        <div className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">
              Mobile Number
            </label>
            <input
              ref={x1}
              name="mobileNo"
              type="number"
              placeholder="Enter mobile number"
              className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">
              Password
            </label>
            <input
              ref={x2}
              name="password"
              type="text"
              placeholder="Enter password"
              className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            />
          </div>

          <button
            onClick={myfunc}
            className="w-full mt-2 py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl shadow-lg shadow-blue-200 transition-all"
          >
            Login
          </button>
          <p
            className="text-center text-blue-500 cursor-pointer"
            onClick={() => navigate("/signUp")}
          >
            New User ? Register
          </p>

          {message && (
            <p className="mt-4 text-center text-sm font-medium text-green-500 bg-gray-100 p-3 rounded-xl">
              {message}
            </p>
          )}
          {errMessage && (
            <p className="mt-4 text-center text-sm font-medium text-red-500 bg-red-100 p-3 rounded-xl">
              {errMessage}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
