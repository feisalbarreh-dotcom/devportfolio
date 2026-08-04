import React from 'react';

const Header = ({ toggleDarkMode, darkMode }) => {
  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-gray-900 shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800 dark:text-white">
          DevPortfolio
        </h1>
        <nav>
          <ul className="flex space-x-6">
            <li><a href="#home" className="text-gray-600 dark:text-gray-300 hover:text-blue-600">Home</a></li>
            <li><a href="#projects" className="text-gray-600 dark:text-gray-300 hover:text-blue-600">Projects</a></li>
            <li><a href="#skills" className="text-gray-600 dark:text-gray-300 hover:text-blue-600">Skills</a></li>
            <li><a href="#contact" className="text-gray-600 dark:text-gray-300 hover:text-blue-600">Contact</a></li>
          </ul>
        </nav>
        <button
          onClick={toggleDarkMode}
          className="px-3 py-1 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white hover:bg-gray-300"
        >
          {darkMode ? '☀️' : '🌙'}
        </button>
      </div>
    </header>
  );
};

export default Header;
