import React from 'react';

const Header = ({ isDarkMode }) => {
  const toggleTheme = () => {
    document.body.classList.toggle('dark-mode');
  };

  return (
    <header>
      <div className="logo">
        <img src="/path/to/logo.png" alt="Logo" />
      </div>
      <nav>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/projects">Projects</a>
          </li>
          <li>
            <a href="/skills">Skills</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </nav>
      <button onClick={toggleTheme}>
        {isDarkMode ? 'Light Mode' : 'Dark Mode'}
      </button>
    </header>
  );
};

export default Header;