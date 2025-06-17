import React from 'react';

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full bg-gray-900/80 backdrop-blur-md z-50 flex justify-between items-center px-8 py-6">
      <div className="text-2xl font-bold">
        <span className="text-white">Game</span>
        <span className="text-purple-400">Designer</span>
      </div>
      <div className="flex space-x-8">
        <a href="#about" className="text-lg text-gray-300 hover:text-white transition-colors">
          About
        </a>
        <a href="#skills" className="text-lg text-gray-300 hover:text-white transition-colors">
          Skills
        </a>
        <a href="#projects" className="text-lg text-gray-300 hover:text-white transition-colors">
          Projects
        </a>
        <button className="bg-purple-600 hover:bg-purple-700 px-6 py-2 rounded-lg transition-colors text-lg">
          Contact
        </button>
      </div>
    </nav>
  );
};

export default Navbar;