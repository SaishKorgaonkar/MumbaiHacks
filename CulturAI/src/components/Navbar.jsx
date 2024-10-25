import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isSpinning, setIsSpinning] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Added missing state

  const handleLogoClick = () => {
    setIsSpinning(true);
    setTimeout(() => setIsSpinning(false), 1000); // Stop spin after 1 second
  };

  return (
    <nav className="bg-gradient-to-r from-gray-900 to-gray-800 text-white fixed w-full z-20 shadow-md transition-shadow duration-300 hover:shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1
              onClick={handleLogoClick}
              className={`text-3xl font-extrabold text-teal-400 tracking-wide cursor-pointer hover:scale-105 transition-transform duration-300 ${
                isSpinning ? "animate-spin" : ""
              }`}
            >
              CulturAI
            </h1>
          </div>

          {/* Menu Items */}
          <div className="hidden md:flex space-x-8 font-medium">
            {["Home", "Features", "Services", "Pricing", "Contact Us"].map(
              (item) => (
                <Link
                  key={item}
                  to={
                    item === "Home"
                      ? "/"
                      : `/${item.toLowerCase().replace(" ", "-")}`
                  }
                  className="relative group transition duration-300"
                >
                  <span className="hover:text-teal-400">{item}</span>
                  {/* Underline Effect */}
                  <span className="absolute left-0 bottom-0 w-full h-0.5 bg-teal-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                </Link>
              )
            )}
          </div>

          {/* Login/Signup and Mobile Menu */}
          <div className="flex items-center space-x-4">
            {/* Login/Signup Button */}
            <Link
              to="/login"
              className="hidden md:inline-block bg-gradient-to-r from-teal-400 to-green-500 hover:from-teal-500 hover:to-green-600 text-gray-900 px-5 py-2 rounded-full font-bold transition duration-300 transform hover:scale-105 shadow-lg"
            >
              Login / Sign Up
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden focus:outline-none"
            >
              <svg
                className="w-6 h-6 text-gray-200"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-800">
          <div className="px-4 py-2 space-y-2">
            {["Home", "Features", "Services", "Pricing", "Contact Us"].map(
              (item) => (
                <Link
                  key={item}
                  to={
                    item === "Home"
                      ? "/"
                      : `/${item.toLowerCase().replace(" ", "-")}`
                  }
                  className="block text-left py-2 hover:text-teal-400 transition duration-300 font-semibold"
                >
                  {item}
                </Link>
              )
            )}
            <Link
              to="/login"
              className="block bg-teal-500 hover:bg-teal-400 text-gray-900 px-4 py-2 rounded-full font-bold transition duration-300 text-center shadow-lg transform hover:scale-105"
            >
              Login / Sign Up
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
