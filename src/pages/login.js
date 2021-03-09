import React, { useReducer } from "react";
import { Link } from "react-router-dom";

const initialState = {
  email: "",
  password: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "email":
      return { ...state, email: action.payload };
    case "password":
      return { ...state, password: action.payload };
    default:
      throw new Error();
  }
};

export default function LoginPage() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleOnChange = (evt) => {
    const { target } = evt;
    dispatch({
      type: target.name,
      payload: target.value,
    });
  };

  return (
    <div>
      <div className="flex flex-col justify-center items-center mx-auto py-2 border-gray-700 w-60">
        <div className="inline-flex">
          <a className="_o6689fn" href="/">
            <img src="logo-black.png" height="30" width="75" alt="Logo"></img>
          </a>
        </div>
        <form className="border-gray-300 border rounded-sm my-4 p-4">
          <h1 className="font-bold">Sign-In</h1>
          <label htmlFor="email" className="font-bold text-tiny ml-1">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            onChange={handleOnChange}
            value={state.email}
            className="appearance-none rounded-sm relative block w-full p-1 border border-gray-400 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 sm:text-tiny"
            placeholder="Email"
          />
          <label htmlFor="password" className="font-bold text-tiny ml-1">
            Password
          </label>
          <input
            id="password"
            name="password"
            type="password"
            autoComplete="password"
            required
            onChange={handleOnChange}
            value={state.password}
            className="appearance-none rounded-sm relative block w-full p-1 border border-gray-400 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 sm:text-tiny"
            placeholder="Password"
          />
          <button
            type="submit"
            className="bg-gradient-to-t from-yellow-300 to-yellow-100 text-tiny p-1 w-full rounded-sm my-3 border border-gray-500"
          >
            Continue
          </button>
          <p className="text-tiny tracking-none">
            By continuing, you agree to Amazon's{" "}
            <a href="#" className="text-blue-500">
              Conditions of Use
            </a>{" "}
            and{" "}
            <a href="#" className="text-blue-500">
              Privacy Notice
            </a>
            .
          </p>
        </form>
        <p className="text-center text-tiny text-gray-500">New to Amazon?</p>
        <button
          type="submit"
          className="w-full bg-gradient-to-t from-gray-200 to-white text-tiny p-1 rounded-sm my-3 border border-gray-500"
        >
          <Link to="/register">Create your Amazon account</Link>
        </button>
      </div>
    </div>
  );
}
