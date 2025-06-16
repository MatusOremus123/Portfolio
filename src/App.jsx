import React from 'react';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white">
      <nav className="flex justify-between items-center px-8 py-6">
        <div className="text-xl font-bold">
          <span className="text-white">Game</span>
          <span className="text-purple-400">Designer</span>
        </div>
        <div className="flex space-x-8">
          <a href="#about" className="text-gray-300 hover:text-white transition-colors">
            About
          </a>
          <a href="#skills" className="text-gray-300 hover:text-white transition-colors">
            Skills
          </a>
          <a href="#projects" className="text-gray-300 hover:text-white transition-colors">
            Projects
          </a>
          <button className="bg-purple-600 hover:bg-purple-700 px-6 py-2 rounded-lg transition-colors">
            Contact
          </button>
        </div>
      </nav>

      <div className="flex flex-col items-center justify-center min-h-[80vh] px-8 text-center">
        <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
          Alex <span className="text-purple-400">Parker</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl">
          Game Designer & Creative Director
        </p>
        
        <p className="text-lg text-gray-400 mb-12 max-w-3xl leading-relaxed">
          Crafting immersive gaming experiences with a focus on innovative mechanics and compelling narratives.
        </p>

        <div className="flex space-x-6">
          <a href="#" className="p-3 border border-gray-600 rounded-lg hover:border-purple-400 hover:bg-purple-400/10 transition-all duration-300">
            <Github className="w-6 h-6" />
          </a>
          <a href="#" className="p-3 border border-gray-600 rounded-lg hover:border-purple-400 hover:bg-purple-400/10 transition-all duration-300">
            <Linkedin className="w-6 h-6" />
          </a>
          <a href="#" className="p-3 border border-gray-600 rounded-lg hover:border-purple-400 hover:bg-purple-400/10 transition-all duration-300">
            <Twitter className="w-6 h-6" />
          </a>
          <a href="#" className="p-3 border border-gray-600 rounded-lg hover:border-purple-400 hover:bg-purple-400/10 transition-all duration-300">
            <Mail className="w-6 h-6" />
          </a>
        </div>
      </div>

      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-3/4 left-1/3 w-48 h-48 bg-pink-500/10 rounded-full blur-3xl animate-pulse"></div>
      </div>
    </div>
  );
}

export default App;