import React, { useEffect, useRef } from 'react';
import { X, ExternalLink, Github, Calendar, Users, Star } from 'lucide-react';
import { gsap } from 'gsap';

const ProjectModal = ({ project, isOpen, onClose }) => {
  const modalRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    if (isOpen && modalRef.current && contentRef.current) {
      // Animate modal opening
      gsap.fromTo(modalRef.current, 
        { opacity: 0 },
        { opacity: 1, duration: 0.3 }
      );
      
      gsap.fromTo(contentRef.current,
        { scale: 0.8, opacity: 0, y: 50 },
        { scale: 1, opacity: 1, y: 0, duration: 0.4, ease: "back.out(1.7)" }
      );
    }
  }, [isOpen]);

  const handleClose = () => {
    // Animate modal closing
    gsap.to(contentRef.current, {
      scale: 0.8,
      opacity: 0,
      y: 50,
      duration: 0.3,
      ease: "power2.in"
    });
    
    gsap.to(modalRef.current, {
      opacity: 0,
      duration: 0.3,
      onComplete: onClose
    });
  };

  if (!isOpen) return null;

  return (
    <div 
      ref={modalRef}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
      onClick={handleClose}
    >
      <div 
        ref={contentRef}
        className="bg-gray-900 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden border border-gray-700"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Image */}
        <div className="relative h-64 md:h-80 overflow-hidden">
          <img 
            src={project.image} 
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent" />
          
          {/* Close Button */}
          <button 
            onClick={handleClose}
            className="absolute top-4 right-4 p-2 bg-gray-900/80 rounded-lg hover:bg-gray-800 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Title Overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-8">
            <h2 className="text-4xl md:text-5xl font-bold mb-2">{project.title}</h2>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, i) => (
                <span key={i} className="text-sm px-3 py-1 bg-purple-600/30 backdrop-blur-sm rounded-full">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-8 overflow-y-auto max-h-[50vh]">
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <div className="bg-gray-800/50 rounded-lg p-4">
              <Calendar className="w-5 h-5 text-purple-400 mb-2" />
              <p className="text-sm text-gray-400">Release Date</p>
              <p className="font-semibold">{project.year}</p>
            </div>
            <div className="bg-gray-800/50 rounded-lg p-4">
              <Users className="w-5 h-5 text-purple-400 mb-2" />
              <p className="text-sm text-gray-400">Team Size</p>
              <p className="font-semibold">{project.teamSize || '5-10'}</p>
            </div>
            <div className="bg-gray-800/50 rounded-lg p-4">
              <Star className="w-5 h-5 text-purple-400 mb-2" />
              <p className="text-sm text-gray-400">Rating</p>
              <p className="font-semibold">{project.rating || '4.5/5'}</p>
            </div>
            <div className="bg-gray-800/50 rounded-lg p-4">
              <ExternalLink className="w-5 h-5 text-purple-400 mb-2" />
              <p className="text-sm text-gray-400">Platform</p>
              <p className="font-semibold">{project.platform || 'PC/Console'}</p>
            </div>
          </div>

          {/* Description */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-4">About the Game</h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              {project.longDescription || project.description}
            </p>
            <p className="text-gray-300 leading-relaxed">
              {project.additionalInfo || 'This project showcases innovative game design principles and cutting-edge technology to deliver an immersive gaming experience. Our team focused on creating engaging mechanics that keep players coming back for more.'}
            </p>
          </div>

          {/* Key Features */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-4">Key Features</h3>
            <ul className="space-y-2">
              {(project.features || [
                'Innovative gameplay mechanics',
                'Stunning visual effects and art style',
                'Dynamic storytelling with multiple endings',
                'Multiplayer support with matchmaking',
                'Regular content updates and events'
              ]).map((feature, i) => (
                <li key={i} className="flex items-start">
                  <span className="text-purple-400 mr-2">▸</span>
                  <span className="text-gray-300">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* My Role */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-4">My Role</h3>
            <p className="text-gray-300 leading-relaxed">
              {project.role || 'As the Game Designer and Creative Director, I was responsible for conceptualizing the core gameplay mechanics, overseeing the narrative development, and ensuring the overall player experience met our quality standards. I worked closely with the development team to iterate on features and balance gameplay elements.'}
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4">
            <button className="flex items-center gap-2 px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg transition-colors">
              <ExternalLink className="w-5 h-5" />
              View Live
            </button>
            <button className="flex items-center gap-2 px-6 py-3 border border-gray-600 hover:bg-gray-800 rounded-lg transition-colors">
              <Github className="w-5 h-5" />
              Source Code
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;