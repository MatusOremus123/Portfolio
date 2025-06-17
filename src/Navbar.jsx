import React, { useEffect, useState } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 flex justify-between items-center px-8 py-6 transition-all duration-300 ${
      scrolled ? 'bg-gray-900/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
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