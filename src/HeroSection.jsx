import React from 'react';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';
import SplitText from './SplitText';

const HeroSection = () => {
  const handleAnimationComplete = () => {
    console.log('Animation completed!');
  };

  return (
    <div id="home" className="flex flex-col items-center justify-center min-h-screen px-8 text-center pt-20">
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
  );
};

export default HeroSection;