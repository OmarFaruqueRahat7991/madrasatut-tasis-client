import React, { useState } from 'react';
import logo from "../../../Assets/logo.png"
import { Link } from 'react-router-dom';

export const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div class="bg-green-300">
      <div class="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 ">
        <div class="relative flex items-center justify-between">
          <Link to="/" aria-label="" title="" class="inline-flex items-center">
            <img className="w-16" src={logo} alt="logo" />
            <span class="ml-2 text-xl font-bold tracking-wide  uppercase">
              Madrasatut Ta'sis
            </span>
          </Link>
          <ul className="items-center hidden space-x-8 lg:flex">
            <li>
              <Link
                to="/courses"
                aria-label="Courses"
                title="Courses"
                class="font-medium tracking-wide transition-colors duration-200 hover:hover:text-green-400"
              >
                Courses
              </Link>
            </li>
            <li>
              <Link
                to="/blogs"
                aria-label="Donate"
                title="Donate"
                class="font-medium tracking-wide transition-colors duration-200 hover:hover:text-green-400"
              >
                Blogs
              </Link>
            </li>
            <li>
              <Link
                to="/about-us"
                aria-label="About Us"
                title="About Us"
                class="font-medium tracking-wide transition-colors duration-200 hover:text-green-400"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="/donation"
                className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide  transition duration-200 rounded shadow-md bg-green-400 hover:bg-green-500 focus:shadow-outline focus:outline-none"
                aria-label="Donation"
              >
                Donate Now
              </Link>
            </li>
          </ul>
          <div class="lg:hidden">
            <button
              aria-label="Open Menu"
              title="Open Menu"
              class="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline"
              onClick={() => setIsMenuOpen(true)}
            >
              <svg class="w-5 text-gray-600" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                />
                <path
                  fill="currentColor"
                  d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                />
                <path
                  fill="currentColor"
                  d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                />
              </svg>
            </button>
            {isMenuOpen && (
              <div class="absolute top-0 left-0 w-full">
                <div class="p-5 bg-white border rounded shadow-sm">
                  <div class="flex items-center justify-between mb-4">
                    <div>
                      <Link
                        to="/"
                        aria-label=""
                        title=""
                        class="inline-flex items-center"
                      >
                        <img className="w-20" src={logo} alt="logo" />
                        <span class="ml-2 text-xl font-bold tracking-wide  uppercase ">
                          Madrasatut Ta'sis
                        </span>
                      </Link>
                    </div>
                    <div>
                      <button
                        aria-label="Close Menu"
                        title="Close Menu"
                        class="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <svg class="w-5 text-gray-600" viewBox="0 0 24 24">
                          <path
                            fill="currentColor"
                            d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <nav>
                    <ul class="space-y-4">
                      <li>
                        <Link
                          to="/courses"
                          aria-label="Our product"
                          title="Our product"
                          class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:hover:text-green-400"
                        >
                          Courses
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/blogs"
                          aria-label="Donate"
                          title="Donate"
                          class="font-medium tracking-wide transition-colors duration-200 hover:hover:text-green-400"
                        >
                          Blogs
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/about-us"
                          aria-label="Product pricing"
                          title="Product pricing"
                          class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:hover:text-green-400"
                        >
                          About Us
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/donation"
                          class="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-green-400 hover:bg-green-500 focus:shadow-outline focus:outline-none"
                          aria-label="Donate Now"
                          title="Donate Now"
                        >
                          Donate Now
                        </Link>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
