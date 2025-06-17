import React from 'react';
import Navbar from './Navbar';
import HeroSection from './HeroSection';
import ProjectsSection from './ProjectsSection';
import BackgroundEffects from './BackgroundEffects';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white">
      <Navbar />
      <HeroSection />
      <ProjectsSection />
      <BackgroundEffects />
    </div>
  );
}

export default App;