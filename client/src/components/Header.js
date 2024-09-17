import React, { useContext } from 'react';
import { DarkModeContext } from '../contexts/DarkModeContext';
import { FaSun, FaMoon } from 'react-icons/fa';

function Header() {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);

  return (
    <header className="sticky top-0 z-50 flex justify-between items-center p-4 bg-white dark:bg-darkBg transition-colors duration-300">
      <div className="flex items-center space-x-2">
        <h1 className="text-secondary text-3xl font-medium cursor-pointer">
          {"<"}aravind{"/>"}
        </h1>
        <button
          onClick={toggleDarkMode}
          className="p-2 rounded-full transition-colors duration-300 focus:outline-none hover:bg-gray-200 dark:hover:bg-gray-600"
          aria-label="Toggle dark mode"
        >
          {darkMode ? (
            <FaMoon className="text-gray-200" />
          ) : (
            <FaSun className="text-yellow-500" />
          )}
        </button>
      </div>

      <nav className="flex space-x-6 sm:hidden">
        <a href="#about" className="text-lg text-gray-800 dark:text-gray-200 hover:text-secondary dark:hover:text-secondary transition-colors duration-300">About</a>
        <a href="#experience" className="text-lg text-gray-800 dark:text-gray-200 hover:text-secondary dark:hover:text-secondary transition-colors duration-300">Experience</a>
        <a href="#projects" className="text-lg text-gray-800 dark:text-gray-200 hover:text-secondary dark:hover:text-secondary transition-colors duration-300">Projects</a>
        <a href="#certificates" className="text-lg text-gray-800 dark:text-gray-200 hover:text-secondary dark:hover:text-secondary transition-colors duration-300">Certifications</a>
        <a href="#contact" className="text-lg text-gray-800 dark:text-gray-200 hover:text-secondary dark:hover:text-secondary transition-colors duration-300">Contact</a>
      </nav>
    </header>
  );
}

export default Header;
