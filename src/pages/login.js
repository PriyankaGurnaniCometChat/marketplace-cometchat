import React, { useReducer, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import firebase from 'firebase/app';
import 'firebase/auth';
import { loginCometChatUser } from '../cometchat';

const initialState = {
  email: '',
  password: '',
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'email':
      return { ...state, email: action.payload };
    case 'password':
      return { ...state, password: action.payload };
    default:
      throw new Error();
  }
};

export default function LoginPage() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [error, setError] = useState('');
  let history = useHistory();

  const handleOnChange = (evt) => {
    const { target } = evt;
    dispatch({
      type: target.name,
      payload: target.value,
    });
  };

  const loginUser = (evt) => {
    evt.preventDefault();

    firebase
      .auth()
      .signInWithEmailAndPassword(state.email, state.password)
      .then((doc) => {
        loginCometChatUser(doc.user.uid);
        history.push('/');
      })
      .catch((err) => {
        setError(err.message);
        console.log(`Unable to login: ${err.message}`);
      });
  };

  return (
    <div>
      <div className="flex flex-col justify-center items-center mx-auto px-2 py-2 border-gray-700 w-full md:w-96">
        <div className="inline-flex">
          <Link to="/">
            <img src="/logo-black.png" className="w-24" alt="Logo"></img>
          </Link>
        </div>
        <form
          className="border-gray-300 border rounded-sm my-4 p-4"
          onSubmit={loginUser}
        >
          <h1 className="font-bold">Sign-In</h1>
          {error && (
            <p className="text-red-500 font-bold text-base py-2 ">{error}</p>
          )}
          <label htmlFor="email" className="font-bold text-base md:ml-1">
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
            className="appearance-none rounded-sm relative block w-full p-1 border border-gray-400 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 text-base"
            placeholder="Email"
          />
          <label htmlFor="password" className="font-bold text-base md:ml-1">
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
            className="appearance-none rounded-sm relative block w-full p-1 border border-gray-400 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 text-base"
            placeholder="Password"
          />
          <button
            type="submit"
            className="bg-gradient-to-t from-yellow-300 to-yellow-100 text-base p-1 w-full rounded-sm my-3 border border-gray-500"
          >
            Continue
          </button>
          <p className="text-base tracking-none">
            By continuing, you agree to Amazon's{' '}
            <a href="#" className="text-blue-500">
              Conditions of Use
            </a>{' '}
            and{' '}
            <a href="#" className="text-blue-500">
              Privacy Notice
            </a>
            .
          </p>
        </form>
        <p className="text-center text-base text-gray-500">New to Amazon?</p>
        <button
          type="submit"
          className="w-full bg-gradient-to-t from-gray-200 to-white text-base p-1 rounded-sm my-3 border border-gray-500"
        >
          <Link to="/register">Create your Amazon account</Link>
        </button>
      </div>
    </div>
  );
}
