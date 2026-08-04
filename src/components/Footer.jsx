import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4 text-center">
        <p className="text-gray-400">
          &copy; {new Date().getFullYear()} DevPortfolio. All rights reserved.
        </p>
        <div className="mt-4 space-x-4">
          <a href="#" className="text-gray-400 hover:text-white transition">GitHub</a>
          <a href="#" className="text-gray-400 hover:text-white transition">LinkedIn</a>
          <a href="#" className="text-gray-400 hover:text-white transition">Twitter</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
