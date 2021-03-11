import React, { useReducer, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import firebase from 'firebase/app';
import 'firebase/auth';
import { loginCometChatUser, registerCometChatUser } from '../cometchat';

const initialState = {
  name: '',
  email: '',
  password: '',
  confirmPassword: '',
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'name':
      return { ...state, name: action.payload };
    case 'email':
      return { ...state, email: action.payload };
    case 'password':
      return { ...state, password: action.payload };
    case 'confirmPassword':
      return { ...state, confirmPassword: action.payload };
    default:
      throw new Error();
  }
};

export default function RegisterPage() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [error, setError] = useState('');
  const history = useHistory();

  const handleOnChange = (evt) => {
    const { target } = evt;
    dispatch({
      type: target.name,
      payload: target.value,
    });
  };

  const registerUser = (evt) => {
    evt.preventDefault();

    if (state.password !== state.confirmPassword) {
      setError('Error: Passwords do not match.');
      return;
    }

    firebase
      .auth()
      .createUserWithEmailAndPassword(state.email, state.password)
      .then(async (doc) => {
        await registerCometChatUser(state.name, doc.user.uid);
        await loginCometChatUser(doc.user.uid);
        history.push('/');
      })
      .catch((err) => {
        setError(err.message);
        console.log(`Unable to register user: ${err.message}`);
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
          onSubmit={registerUser}
        >
          <h1 className="font-bold">Create Account</h1>
          {error && (
            <p className="text-red-500 font-bold text-base py-2 ">{error}</p>
          )}
          <label htmlFor="name" className="font-bold text-base md:ml-1">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="name"
            autoComplete="name"
            required
            onChange={handleOnChange}
            value={state.name}
            className="appearance-none rounded-sm relative block w-full p-1 border border-gray-400 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 sm:text-base"
            placeholder="Name"
            minLength={3}
          />
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
            className="appearance-none rounded-sm relative block w-full p-1 border border-gray-400 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 sm:text-base"
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
            className="appearance-none rounded-sm relative block w-full p-1 border border-gray-400 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 sm:text-base"
            placeholder="Password"
            minLength={6}
          />
          <label htmlFor="password" className="font-bold text-base md:ml-1">
            Re-Enter Password
          </label>
          <input
            id="confirmPassword"
            name="confirmPassword"
            type="password"
            autoComplete="password"
            required
            onChange={handleOnChange}
            value={state.confirmPassword}
            className="appearance-none rounded-sm relative block w-full p-1 border border-gray-400 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 sm:text-base"
            placeholder="Re-Enter Password"
            minLength={6}
          />
          <button
            type="submit"
            className="bg-gradient-to-t from-yellow-300 to-yellow-100 text-base p-1 w-full rounded-sm my-3 border border-gray-500"
          >
            Create your Amazon account
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
          <div className="w-1/2 mx-auto mt-4 border-t-2 border-gray-100"></div>
          <p className="text-base">
            Alread have an account?{' '}
            <Link to="login" className="text-blue-500">
              Sign In
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
