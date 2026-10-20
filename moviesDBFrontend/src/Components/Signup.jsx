import React, { useRef, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";

export default function Signup() {
  let [message, setMessage] = useState("");
  let [errMessage, setErrMessage] = useState("");
  let navigate = useNavigate();

  const x1 = useRef(null);
  const x2 = useRef(null);
  const x3 = useRef(null);
  const x4 = useRef(null);
  const x5 = useRef(null);

  function myfunc() {
    if (
      x1.current.value ||
      x2.current.value ||
      x3.current.value ||
      x4.current.value != ""
    ) {
      let data = {
        name: x1.current.value,
        email: x2.current.value,
        mobileNo: x3.current.value,
        password: x4.current.value,
        confirmPassword: x5.current.value,
      };
      console.log(data);

      axios
        .post("http://localhost:3300/api/users", data)
        .then((result) => {
          console.log(result);
          if (result.status === 200) {
            setMessage(result.data.message);
            setTimeout(() => setMessage(""), 5000);
            navigate("/login");
          }
        })
        .catch((err) => {
          console.log(err);
          setErrMessage(err.response?.data?.message);
          setTimeout(() => setErrMessage(""), 5000);
        });
    } else {
      setErrMessage("No empty values allowed");
      setTimeout(() => setErrMessage(""), 5000);
    }
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
          <h1 className="text-2xl font-bold text-gray-900">Create Account</h1>
          <p className="text-sm text-gray-500 mt-1">
            Add a new user to the database
          </p>
        </div>

        <div className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">
              Name
            </label>
            <input
              ref={x1}
              name="name"
              type="text"
              placeholder="Enter name"
              className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">
              Email
            </label>
            <input
              ref={x2}
              name="email"
              type="text"
              placeholder="example@gmail.com"
              className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">
              Mobile Number
            </label>
            <input
              ref={x3}
              name="mobileNo"
              type="text"
              placeholder="Enter mobile number"
              className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">
              Password
            </label>
            <input
              ref={x4}
              name="password"
              type="text"
              placeholder="Enter password"
              className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">
              Confirm Password
            </label>
            <input
              ref={x5}
              name="confirmPassword"
              type="text"
              placeholder="Enter confirm password"
              className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            />
          </div>

          <button
            onClick={myfunc}
            className="w-full mt-2 py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl shadow-lg shadow-blue-200 transition-all"
          >
            Signup
          </button>

          {message && (
            <p className="mt-4 text-center text-sm font-medium text-green-500 bg-gray-100 p-3 rounded-xl">
              {message}
            </p>
          )}

          {errMessage && (
            <p className="mt-4 text-center text-sm font-medium text-red-500 bg-gray-100 p-3 rounded-xl">
              {errMessage}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
