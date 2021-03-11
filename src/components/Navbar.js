import { FirebaseAuthConsumer } from '@react-firebase/auth';
import { FirestoreCollection } from '@react-firebase/firestore';
import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="w-full flex flex-col relative z-10">
      <div className="bg-gray-900 w-full flex justify-between items-center mx-auto px-3 py-1">
        {/* <!-- logo --> */}
        <div className="inline-flex">
          <a className="_o6689fn" href="/">
            <img src="/logo-white.png" className="w-24" alt="Logo"></img>
          </a>
        </div>

        {/* <!-- end logo --> */}

        {/* <!-- start delivery location --> */}
        <button type="button">
          <div className="hidden sm:block flex mx-1">
            <div className="flex justify-center items-center">
              <div className="h-6 w-6 flex justify-center items-center">
                <svg
                  viewBox="0 0 12 12"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  role="presentation"
                  focusable="false"
                  className="h-2 w-2 overflow-visible"
                  style={{
                    fill: 'none',
                    stroke: '#ffffff',
                    strokeWidth: 1.33333,
                  }}
                >
                  <g fill="none">
                    <path d="M10,1.375c-3.17,0-5.75,2.548-5.75,5.682c0,6.685,5.259,11.276,5.483,11.469c0.152,0.132,0.382,0.132,0.534,0c0.224-0.193,5.481-4.784,5.483-11.469C15.75,3.923,13.171,1.375,10,1.375 M10,17.653c-1.064-1.024-4.929-5.127-4.929-10.596c0-2.68,2.212-4.861,4.929-4.861s4.929,2.181,4.929,4.861C14.927,12.518,11.063,16.627,10,17.653 M10,3.839c-1.815,0-3.286,1.47-3.286,3.286s1.47,3.286,3.286,3.286s3.286-1.47,3.286-3.286S11.815,3.839,10,3.839 M10,9.589c-1.359,0-2.464-1.105-2.464-2.464S8.641,4.661,10,4.661s2.464,1.105,2.464,2.464S11.359,9.589,10,9.589"></path>
                  </g>
                </svg>
              </div>
              <div className="flex flex-col text-base leading-tight text-left">
                <p className="text-gray-400 font-bold tracking-tight">
                  Deliver to
                </p>
                <p className="text-white font-bold">Portugal</p>
              </div>
            </div>
          </div>
        </button>

        {/* <!-- end delivery location --> */}

        {/* <!-- search bar --> */}
        <div className="sm:block flex flex-grow mx-2">
          <div className="flex items-center flex-grow max-w-full">
            <form
              className="flex items-center flex-grow pl-2 relative rounded-sm bg-white"
              type="button"
            >
              <input
                className="flex-grow relative text-sm"
                placeholder="Search anything..."
              ></input>
              <div className="flex items-center justify-center relative rounded-r-sm bg-yellow-400 p-2">
                <div className="h-3 w-3">
                  <svg
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    role="presentation"
                    focusable="false"
                    className="h-2 w-2 overflow-visible"
                    style={{
                      fill: 'none',
                      stroke: 'currentcolor',
                      strokeWidth: 3.33333,
                    }}
                  >
                    <g fill="none">
                      <path d="m13 24c6.0751322 0 11-4.9248678 11-11 0-6.07513225-4.9248678-11-11-11-6.07513225 0-11 4.92486775-11 11 0 6.0751322 4.92486775 11 11 11zm8-3 9 9"></path>
                    </g>
                  </svg>
                </div>
              </div>
            </form>
          </div>
        </div>
        {/* <!-- end search bar --> */}

        {/* <!-- login --> */}
        <div className="sm:block flex mx-2 mr-4">
          <div className="flex justify-center items-center">
            <div className="flex flex-col text-base leading-tight text-left group inline-block relative">
              <p className="text-white inline-flex">Hello,</p>
              <FirebaseAuthConsumer>
                {({ isSignedIn }) => (
                  <ul className="absolute hidden text-gray-700 group-hover:block rounded bg-white shadow mt-16 md:mt-7 font-bold text-md">
                    {!isSignedIn && (
                      <li className="">
                        <Link
                          className="rounded-t hover:bg-gray-200 py-2 px-4 block whitespace-no-wrap"
                          to="/login"
                        >
                          Sign In
                        </Link>
                      </li>
                    )}

                    {isSignedIn && (
                      <>
                        <li className="">
                          <Link
                            className="rounded-t hover:bg-gray-200 py-2 px-4 block whitespace-no-wrap"
                            to="/logout"
                          >
                            Sign Out
                          </Link>
                        </li>
                        <li className="">
                          <Link
                            className="rounded-t hover:bg-gray-200 py-2 px-4 block whitespace-no-wrap"
                            to="/product/new"
                          >
                            New Product
                          </Link>
                        </li>
                        <li className="block md:hidden">
                          <Link
                            className="rounded-t hover:bg-gray-200 py-2 px-4 block whitespace-no-wrap"
                            to="/inbox"
                          >
                            Inbox
                          </Link>
                        </li>
                      </>
                    )}
                  </ul>
                )}
              </FirebaseAuthConsumer>
              <p className="text-white font-bold">Account & Lists</p>
            </div>
          </div>
        </div>
        {/* <!-- end login --> */}

        {/* <!-- start cart --> */}
        <Link to="/inbox">
          <button type="button">
            <div className="hidden sm:block flex mx-1">
              <div className="flex justify-center items-end">
                <div className="h-8 w-8 flex justify-center items-end">
                  <img
                    src="/inbox.png"
                    width="24"
                    height="24"
                    alt="Inbox Icon"
                  ></img>
                </div>
                <p className="text-white font-bold text-base pb-1">Inbox</p>
              </div>
            </div>
          </button>
        </Link>
        {/* <!-- end cart --> */}
      </div>
      <div className="hidden md:block bg-gray-800 w-full flex justify-start items-center mx-auto px-2 py-2">
        <div className="text-white text-base leading-4">
          <ul className="flex">
            <FirestoreCollection path="/categories" limit={4}>
              {({ isLoading, value }) => {
                return isLoading ? (
                  <li>Loading</li>
                ) : (
                  React.Children.toArray(
                    value.map((category) => (
                      <li className="capitalize mr-2">
                        <Link to={`/category/${category.name}`}>
                          {category.name}
                        </Link>
                      </li>
                    ))
                  )
                );
              }}
            </FirestoreCollection>
          </ul>
        </div>
      </div>
    </nav>
  );
}
