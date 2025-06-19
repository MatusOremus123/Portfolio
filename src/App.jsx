import React from 'react';
import Navbar from './Navbar';
import HeroSection from './HeroSection';
import ProjectsSection from './ProjectsSection';
import BackgroundEffects from './BackgroundEffects';

function App() {
  return (
    <div className="min-h-screen bg-black text-[#DEEEDF] relative overflow-hidden">
      <BackgroundEffects className="opacity-100" />  
      <div className="relative z-10">
        <Navbar />
        <HeroSection />
        <ProjectsSection />
      </div>
    </div>
  );
}

export default App;