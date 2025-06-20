import React from 'react';
import { ChevronRight } from 'lucide-react';

const ProjectCard = ({ project, onClick }) => {
  return (
    <div 
      onClick={onClick}
      className="group relative bg-gray-800/50 rounded-xl overflow-hidden backdrop-blur-sm border border-gray-700 hover:border-[#519e55] transition-all duration-300 hover:transform hover:-translate-y-2 cursor-pointer w-full min-h-64 lg:min-h-80"
    >
      <div className="flex flex-row h-full">
        {/* Image container */}
        <div className="w-1/3 flex-shrink-0 overflow-hidden">
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
        </div>

        {/* Content container */}
        <div className="w-2/3 p-8 flex flex-col h-full">
          <h3 className="text-3xl font-bold mb-4 group-hover:text-[#519e55] transition-colors">
            {project.title}
          </h3>
          
          {/* Description */}
          <p className="text-gray-400 mb-6 text-lg">
            {project.description}
          </p>
          
          {/* Genres/Tags */}
          <div className="flex flex-wrap gap-2 mb-8">
            {project.tags.map((tag, i) => (
              <span key={i} className="text-sm px-3 py-1 bg-gray-700 rounded-full">
                {tag}
              </span>
            ))}
          </div>

          {/* Year and Details */}
          <div className="flex justify-between items-center mt-auto">
            <span className="text-gray-500 text-sm">{project.year}</span>
            <div className="flex items-center text-[#519e55] opacity-0 group-hover:opacity-100 transition-opacity">
              <span className="text-sm mr-2">View Details</span>
              <ChevronRight className="w-4 h-4" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;