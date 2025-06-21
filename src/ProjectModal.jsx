import React, { useEffect, useRef } from 'react';
import { X, ExternalLink, Github, Calendar, Users, Star } from 'lucide-react';
import { gsap } from 'gsap';

const ProjectModal = ({ project, isOpen, onClose }) => {
  const modalRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    if (isOpen && modalRef.current && contentRef.current) {
      // Disable background scrolling
      document.body.style.overflow = 'hidden';
      
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

    // Cleanup: re-enable scrolling when modal closes
    return () => {
      document.body.style.overflow = 'unset';
    };
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
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md"
      onClick={handleClose}
    >
      <div 
        ref={contentRef}
        className="bg-black/95 backdrop-blur-sm rounded-2xl max-w-5xl w-full max-h-[90vh] overflow-y-auto border border-[#95B597]/20"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button - Fixed position */}
        <button 
          onClick={handleClose}
          className="absolute top-6 right-6 z-10 p-3 bg-black/80 rounded-full hover:bg-[#95B597]/20 border border-[#95B597]/30 transition-all duration-300"
        >
          <X className="w-6 h-6 text-[#DEEEDF]" />
        </button>

        {/* Header Section */}
        <div className="p-8 pb-6">
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#DEEEDF]">{project.title}</h2>
            
            {/* Tags */}
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {project.tags.map((tag, i) => (
                <span key={i} className="text-sm px-4 py-2 bg-[#95B597]/20 border border-[#95B597]/30 text-[#95B597] rounded-full">
                  {tag}
                </span>
              ))}
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
              <div className="bg-[#1E351F]/20 border border-[#95B597]/20 rounded-lg p-4">
                <Calendar className="w-5 h-5 text-[#95B597] mb-2 mx-auto" />
                <p className="text-sm text-[#DEEEDF]/60">Release Year</p>
                <p className="font-semibold text-[#DEEEDF]">{project.year}</p>
              </div>
              <div className="bg-[#1E351F]/20 border border-[#95B597]/20 rounded-lg p-4">
                <Star className="w-5 h-5 text-[#95B597] mb-2 mx-auto" />
                <p className="text-sm text-[#DEEEDF]/60">Status</p>
                <p className="font-semibold text-[#DEEEDF]">Published</p>
              </div>
              <div className="bg-[#1E351F]/20 border border-[#95B597]/20 rounded-lg p-4">
                <Users className="w-5 h-5 text-[#95B597] mb-2 mx-auto" />
                <p className="text-sm text-[#DEEEDF]/60">Team Size</p>
                <p className="font-semibold text-[#DEEEDF]">{project.teamSize || 'Solo'}</p>
              </div>
              <div className="bg-[#1E351F]/20 border border-[#95B597]/20 rounded-lg p-4">
                <ExternalLink className="w-5 h-5 text-[#95B597] mb-2 mx-auto" />
                <p className="text-sm text-[#DEEEDF]/60">Platform</p>
                <p className="font-semibold text-[#DEEEDF]">PC/Web</p>
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-8 pt-6">
          {/* Description */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-4 text-[#DEEEDF] border-b border-[#95B597]/20 pb-2">About the Game</h3>
            <p className="text-[#DEEEDF]/80 leading-relaxed mb-4">
              {project.longDescription || project.description}
            </p>
            <p className="text-[#DEEEDF]/70 leading-relaxed">
              {project.additionalInfo || 'This project showcases innovative game design principles and cutting-edge technology to deliver an immersive gaming experience. Our team focused on creating engaging mechanics that keep players coming back for more.'}
            </p>
          </div>

          {/* Key Features */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-4 text-[#DEEEDF] border-b border-[#95B597]/20 pb-2">Key Features</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {(project.features || [
                'Innovative gameplay mechanics',
                'Stunning visual effects and art style',
                'Dynamic storytelling with multiple endings',
                'Engaging player progression system',
                'Immersive sound design and music',
                'Optimized performance across platforms'
              ]).map((feature, i) => (
                <div key={i} className="flex items-start bg-[#1E351F]/20 border border-[#95B597]/20 rounded-lg p-3">
                  <span className="text-[#95B597] mr-3 mt-1">▸</span>
                  <span className="text-[#DEEEDF]/80 text-sm">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* My Role */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-4 text-[#DEEEDF] border-b border-[#95B597]/20 pb-2">My Role</h3>
            <div className="bg-[#1E351F]/20 border border-[#95B597]/20 rounded-lg p-6">
              <p className="text-[#DEEEDF]/80 leading-relaxed">
                {project.role || 'As the Game Designer and Creative Director, I was responsible for conceptualizing the core gameplay mechanics, overseeing the narrative development, and ensuring the overall player experience met our quality standards. I worked closely with the development team to iterate on features and balance gameplay elements.'}
              </p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4 pt-4">
            <button className="flex items-center gap-2 px-6 py-3 bg-[#519e55] hover:bg-[#95B597] text-black font-semibold rounded-lg transition-all duration-300">
              <ExternalLink className="w-5 h-5" />
              Play Game
            </button>
            <button className="flex items-center gap-2 px-6 py-3 border border-[#95B597]/30 hover:bg-[#95B597]/10 text-[#DEEEDF] rounded-lg transition-all duration-300">
              <Github className="w-5 h-5" />
              View Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;