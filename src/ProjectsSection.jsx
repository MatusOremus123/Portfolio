import React, { useState } from 'react';
import ProjectCard from './ProjectCard';

const ProjectsSection = () => {
  const [activeTab, setActiveTab] = useState('published');

  const projects = [
    {
      title: "Nebula Odyssey",
      description: "A sci-fi space exploration RPG with branching narratives and strategic combat.",
      tags: ["RPG", "Sci-Fi", "Exploration"],
      year: "2023",
      image: "https://via.placeholder.com/400x300/4B0082/FFFFFF?text=Nebula+Odyssey"
    },
    {
      title: "Crimson Legacy",
      description: "A dark fantasy action RPG with a unique blood magic system and challenging combat.",
      tags: ["Action", "RPG", "Dark Fantasy"],
      year: "2022",
      image: "https://via.placeholder.com/400x300/8B0000/FFFFFF?text=Crimson+Legacy"
    },
    {
      title: "Pocket Monsters: Celestial Edition",
      description: "A monster collection and battle game with unique celestial-themed creatures.",
      tags: ["Mobile", "Collection", "Turn-based"],
      year: "2021",
      image: "https://via.placeholder.com/400x300/FF6347/FFFFFF?text=Pocket+Monsters"
    },
    {
      title: "Urban Drift",
      description: "A stylish street racing game with realistic physics and deep car customization.",
      tags: ["Racing", "Customization"],
      year: "2020",
      image: "https://via.placeholder.com/400x300/FF8C00/FFFFFF?text=Urban+Drift"
    },
    {
      title: "Quantum Conundrum",
      description: "A mind-bending puzzle game with reality-warping mechanics.",
      tags: ["Puzzle", "First-Person", "Physics"],
      year: "2021",
      image: "https://via.placeholder.com/400x300/483D8B/FFFFFF?text=Quantum+Conundrum"
    },
    {
      title: "Echo Protocol",
      description: "A stealth action game featuring advanced AI and emergent gameplay.",
      tags: ["Stealth", "Action", "Sci-Fi"],
      year: "2023",
      image: "https://via.placeholder.com/400x300/2F4F4F/FFFFFF?text=Echo+Protocol"
    }
  ];

  return (
    <section id="projects" className="py-20 px-8 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-5xl md:text-6xl font-bold mb-4">
          Projects
        </h2>
        <div className="w-20 h-1 bg-purple-400 mx-auto mb-8"></div>
        <div className="flex justify-center gap-4 mb-12">
          <button 
            onClick={() => setActiveTab('published')}
            className={`px-6 py-2 rounded-lg transition-colors ${
              activeTab === 'published' 
                ? 'bg-purple-600' 
                : 'border border-gray-600 hover:bg-gray-800'
            }`}
          >
            Published Games
          </button>
          <button 
            onClick={() => setActiveTab('other')}
            className={`px-6 py-2 rounded-lg transition-colors ${
              activeTab === 'other' 
                ? 'bg-purple-600' 
                : 'border border-gray-600 hover:bg-gray-800'
            }`}
          >
            Other Projects
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;