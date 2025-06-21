import React from 'react';
import Navbar from './Navbar';
import HeroSection from './HeroSection';
import AboutSection from './AboutSection';
import ProjectsSection from './ProjectsSection';
import SkillsSection from './SkillsSection';
import BackgroundEffects from './BackgroundEffects';

function App() {
  return (
    <div className="min-h-screen bg-black text-[#DEEEDF] relative overflow-hidden">
      <BackgroundEffects className="opacity-100" />  
      <div className="relative z-10">
        <Navbar />
        <HeroSection />
        <ProjectsSection />
        <SkillsSection  />
        <AboutSection />
      </div>
    </div>
  );
}

export default App;