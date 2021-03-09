import React from "react";
import { Link } from "react-router-dom";

export default function RegisterPage() {
  return (
    <div>
      <div className="flex flex-col justify-center items-center mx-auto py-2 border-gray-700 w-60">
        <div className="inline-flex">
          <a className="_o6689fn" href="/">
            <img src="logo-black.png" height="30" width="75" alt="Logo"></img>
          </a>
        </div>
        <form className="border-gray-300 border rounded-sm my-4 p-4">
          <h1 className="font-bold">Create Account</h1>
          <label htmlFor="name" className="font-bold text-tiny ml-1">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="name"
            autoComplete="name"
            required
            className="appearance-none rounded-sm relative block w-full p-1 border border-gray-400 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 sm:text-tiny"
            placeholder="Name"
            minLength={3}
          />
          <label htmlFor="email" className="font-bold text-tiny ml-1">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
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
            className="appearance-none rounded-sm relative block w-full p-1 border border-gray-400 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 sm:text-tiny"
            placeholder="Password"
            minLength={6}
          />
          <label htmlFor="password" className="font-bold text-tiny ml-1">
            Re-Enter Password
          </label>
          <input
            id="password"
            name="password"
            type="password"
            autoComplete="password"
            required
            className="appearance-none rounded-sm relative block w-full p-1 border border-gray-400 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 sm:text-tiny"
            placeholder="Re-Enter Password"
            minLength={6}
          />
          <button
            type="submit"
            className="bg-gradient-to-t from-yellow-300 to-yellow-100 text-tiny p-1 w-full rounded-sm my-3 border border-gray-500"
          >
            Create your Amazon account
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
          <div className="w-1/2 mx-auto mt-4 border-t-2 border-gray-100"></div>
          <p className="text-tiny">
            Alread have an account?{" "}
            <Link to="login" className="text-blue-500">
              Sign In
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
