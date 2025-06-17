import React from 'react';
import { Code, ExternalLink, ChevronRight } from 'lucide-react';

const ProjectCard = ({ project, onClick }) => {
  return (
    <div 
      onClick={onClick}
      className="group relative bg-gray-800/50 rounded-xl overflow-hidden backdrop-blur-sm border border-gray-700 hover:border-purple-400 transition-all duration-300 hover:transform hover:-translate-y-2 cursor-pointer w-full h-full"
    >
      <div className="h-48 bg-gray-700 overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-2 group-hover:text-purple-400 transition-colors">{project.title}</h3>
        <p className="text-gray-400 mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag, i) => (
            <span key={i} className="text-sm px-3 py-1 bg-gray-700 rounded-full">
              {tag}
            </span>
          ))}
        </div>
        <div className="flex justify-between items-center">
          <span className="text-gray-500">{project.year}</span>
          <div className="flex items-center text-purple-400 opacity-0 group-hover:opacity-100 transition-opacity">
            <span className="text-sm mr-2">View Details</span>
            <ChevronRight className="w-4 h-4" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;