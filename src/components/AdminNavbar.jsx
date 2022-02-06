import React, { useState } from "react";
import { AiOutlineSetting } from "react-icons/ai";
export default function AdminNavbar(props) {
  const [profilemenu, setProfileMenu] = useState(false);
  return (
    <nav
      className={
        "bg-gray-800 h-16 z-40 flex w-full transition-all duration-1000 fixed items-center" +
        (props.sidebar ? " md:pl-20" : " md:pl-64")
      }
    >
      <div className="px-6 relative flex justify-between ">
        <AiOutlineSetting
          className={
            "text-white cursor-pointer  text-2xl" +
            (props.sidebar
              ? " transform rotate-180 transition duration-300"
              : " transform -rotate-0 transition duration-300")
          }
          onClick={props.sidebarOpen}
        />
      </div>

      <div className="bg-gray-800 flex w-full items-center px-4 h-full">
        <div className="relative flex items-center w-full justify-between h-16">
          <div className="flex-1 flex justify-center px-2 lg:ml-6 lg:justify-end">
            <div className="max-w-lg w-full lg:max-w-xs">
              <label htmlFor="search" className="sr-only">
                Search
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg
                    className="h-5 w-5 text-gray-400"
                    x-description="Heroicon name: solid/search"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </div>
                <input
                  id="search"
                  name="search"
                  className="block w-full pl-10 pr-3 py-2 border border-transparent rounded-md leading-5 bg-gray-700 text-gray-300 placeholder-gray-400 focus:outline-none focus:bg-white focus:border-white focus:ring-white focus:text-gray-900 sm:text-sm"
                  placeholder="Search"
                  type="search"
                />
              </div>
            </div>
          </div>

          <div className="hidden lg:block lg:ml-4">
            <div className="flex items-center">
              <div className="ml-4 relative flex-shrink-0">
                <div>
                  <button
                    className="bg-gray-800 rounded-full flex text-sm text-white focus:outline-none"
                    id="user-menu"
                    aria-haspopup="true"
                    aria-expanded="false"
                    onClick={() => setProfileMenu(!profilemenu)}
                  >
                    <span className="sr-only">Open user menu</span>
                    <img
                      className="h-8 w-8 rounded-full"
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"
                      alt=""
                    />
                  </button>
                </div>
                {profilemenu && (
                  <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <a
                      href="/"
                      className="block px-4 py-2 text-sm text-gray-700"
                    >
                      Your Profile
                    </a>
                    <a
                      href="/"
                      className="block px-4 py-2 text-sm text-gray-700"
                    >
                      Settings
                    </a>
                    <a
                      href="/"
                      className="block px-4 py-2 text-sm text-gray-700"
                    >
                      Sign out
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
