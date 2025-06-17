import React from 'react';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';
import SplitText from './SplitText';

function App() {
  const handleAnimationComplete = () => {
    console.log('Animation completed!');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white">
      <nav className="flex justify-between items-center px-8 py-6">
        <div className="text-2xl font-bold">
          <span className="text-white">Game</span>
          <span className="text-purple-600">Designer</span>
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

      <div className="flex flex-col items-center justify-center min-h-[80vh] px-8 text-center">
        <h1 className="text-7xl md:text-8xl lg:text-9xl font-bold mb-6 leading-tight">
          <SplitText
            text="Alex "
            className="inline"
            delay={50}
            duration={0.8}
            ease="power4.out"
            splitType="chars"
            from={{ opacity: 0, y: 100, rotateZ: 10 }}
            to={{ opacity: 1, y: 0, rotateZ: 0 }}
            textAlign="center"
          />
          <SplitText
            text="Parker"
            className="text-purple-400 inline"
            delay={70}
            duration={0.8}
            ease="power4.out"
            splitType="chars"
            from={{ opacity: 0, y: 100, rotateZ: -10 }}
            to={{ opacity: 1, y: 0, rotateZ: 0 }}
            textAlign="center"
            onAnimationComplete={handleAnimationComplete}
          />
        </h1>
        
        <SplitText
          text="Game Designer & Creative Director"
          className="text-2xl md:text-3xl lg:text-4xl text-gray-300 mb-8 max-w-2xl"
          delay={100}
          duration={0.6}
          ease="power3.out"
          splitType="words"
          from={{ opacity: 0, y: 40 }}
          to={{ opacity: 1, y: 0 }}
          textAlign="center"
        />
        
        <SplitText
          text="Crafting immersive gaming experiences with a focus on innovative mechanics and compelling narratives."
          className="text-xl md:text-2xl text-gray-400 mb-12 max-w-4xl leading-relaxed"
          delay={80}
          duration={0.5}
          ease="power2.out"
          splitType="words"
          from={{ opacity: 0, y: 30 }}
          to={{ opacity: 1, y: 0 }}
          textAlign="center"
        />

        <div className="flex space-x-6 opacity-0 animate-fade-in-up animation-delay-1500">
          <a href="#" className="p-4 border border-gray-600 rounded-lg hover:border-purple-400 hover:bg-purple-400/10 transition-all duration-300">
            <Github className="w-8 h-8" />
          </a>
          <a href="#" className="p-4 border border-gray-600 rounded-lg hover:border-purple-400 hover:bg-purple-400/10 transition-all duration-300">
            <Linkedin className="w-8 h-8" />
          </a>
          <a href="#" className="p-4 border border-gray-600 rounded-lg hover:border-purple-400 hover:bg-purple-400/10 transition-all duration-300">
            <Twitter className="w-8 h-8" />
          </a>
          <a href="#" className="p-4 border border-gray-600 rounded-lg hover:border-purple-400 hover:bg-purple-400/10 transition-all duration-300">
            <Mail className="w-8 h-8" />
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