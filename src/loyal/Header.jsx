import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Contact from "../Home/concat";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  const handleBurgerClick = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="flex justify-center bg-gray-300 dark:bg-gray-900 dark:text-white transition-colors duration-500">
      <div className="container flex justify-between items-center py-4 px-10">
        {/* Logo */}
        <div className="relative bg-gray-500 text-white rounded-xl p-4 w-18 h-18 flex items-center justify-center shadow-lg">
          <span className="text-2xl font-extrabold">JS</span>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex justify-center gap-8 text-xl font-semibold">
          <li className="relative group cursor-pointer">
            <Link to="/" className="group-hover:text-gray-600 dark:group-hover:text-gray-300">
              Home
            </Link>
            <span className="absolute bottom-0 left-0 w-0 h-1 bg-gray-600 group-hover:w-full transition-all duration-300"></span>
          </li>
          <li className="relative group cursor-pointer">
            <Link to="/about" className="group-hover:text-gray-600 dark:group-hover:text-gray-300">
              About
            </Link>
            <span className="absolute bottom-0 left-0 w-0 h-1 bg-gray-600 group-hover:w-full transition-all duration-300"></span>
          </li>
          <li className="relative group cursor-pointer">
            <Link to="/services" className="group-hover:text-gray-600 dark:group-hover:text-gray-300">
              Services
            </Link>
            <span className="absolute bottom-0 left-0 w-0 h-1 bg-gray-600 group-hover:w-full transition-all duration-300"></span>
          </li>
          <li className="relative group cursor-pointer">
            <Link to="/portfolio" className="group-hover:text-gray-600 dark:group-hover:text-gray-300">
              Portfolio
            </Link>
            <span className="absolute bottom-0 left-0 w-0 h-1 bg-gray-600 group-hover:w-full transition-all duration-300"></span>
          </li>
          <li className="relative group cursor-pointer">
            <Link to="Contact" className="group-hover:text-gray-600 dark:group-hover:text-gray-300">
              Contact
            </Link>
            <span className="absolute bottom-0 left-0 w-0 h-1 bg-gray-600 group-hover:w-full transition-all duration-300"></span>
          </li>
        </ul>

        {/* Theme Toggle */}
        <button
          className="p-2 bg-gray-300 dark:bg-gray-700 text-black dark:text-white rounded-lg transition-colors duration-500"
          onClick={() => setDarkMode(!darkMode)}
        >
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>

        {/* Mobile Burger Menu */}
        <div
          id="burger-menu"
          className="md:hidden flex flex-col gap-2 cursor-pointer"
          onClick={handleBurgerClick}
        >
          <span
            className={`w-8 h-1 bg-black dark:bg-white transition-all duration-300 ease-in-out transform ${
              menuOpen ? "rotate-45" : ""
            }`}
          ></span>
          <span
            className={`w-8 h-1 bg-black dark:bg-white transition-all duration-300 ease-in-out ${
              menuOpen ? "scale-125 opacity-0" : ""
            }`}
          ></span>
          <span
            className={`w-8 h-1 bg-black dark:bg-white transition-all duration-300 ease-in-out transform ${
              menuOpen ? "-rotate-45" : ""
            }`}
          ></span>
        </div>

        {/* Mobile Menu */}
        <div
          id="burger-links"
          className={`md:hidden ${
            menuOpen ? "block" : "hidden"
          } bg-gray-300 dark:bg-gray-900 dark:text-white transition-colors duration-500 text-black font-semibold py-6 px-4 absolute top-20 left-0 right-0 shadow-lg`}
        >
          <ul className="flex flex-col gap-6">
            <li className="group cursor-pointer hover:text-gray-600 dark:hover:text-gray-300">
              <Link to="/">Home</Link>
            </li>
            <li className="group cursor-pointer hover:text-gray-600 dark:hover:text-gray-300">
              <Link to="/about">About</Link>
            </li>
            <li className="group cursor-pointer hover:text-gray-600 dark:hover:text-gray-300">
              <Link to="/services">Services</Link>
            </li>
            <li className="group cursor-pointer hover:text-gray-600 dark:hover:text-gray-300">
              <Link to="/portfolio">Portfolio</Link>
            </li>
            <li className="group cursor-pointer hover:text-gray-600 dark:hover:text-gray-300">
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
