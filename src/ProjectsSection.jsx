import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';

gsap.registerPlugin(ScrollTrigger);

const ProjectsSection = () => {
  const [activeTab, setActiveTab] = useState('published');
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const tabsRef = useRef(null);
  const projectsRef = useRef([]);

  useEffect(() => {
    // Animate section title
    gsap.fromTo(titleRef.current,
      {
        opacity: 0,
        y: 50,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 80%",
          once: true,
        }
      }
    );

    // Animate tabs
    gsap.fromTo(tabsRef.current,
      {
        opacity: 0,
        y: 30,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        delay: 0.3,
        ease: "power3.out",
        scrollTrigger: {
          trigger: tabsRef.current,
          start: "top 85%",
          once: true,
        }
      }
    );

    // Animate project cards
    projectsRef.current.forEach((el, index) => {
      if (el) {
        gsap.fromTo(el,
          {
            opacity: 0,
            y: 60,
            scale: 0.9,
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            delay: index * 0.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 90%",
              once: true,
            }
          }
        );
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedProject(null), 300);
  };

  const projects = [
    {
      title: "Shark Hunt",
      description: "You are a recently graduated shark on your first hunt. Try to eat as much as you can manage.",
      tags: ["RPG", "Sci-Fi", "Exploration"],
      year: "2023",
      image: "https://img.itch.zone/aW1nLzIxNTExNzUwLnBuZw==/315x250%23c/GMImpi.png"
    },
    {
      title: "JoyKill",
      description: "An emotional and unconventional crowd simulation.",
      tags: ["Simulation"],
      year: "2025",
      image: "https://img.itch.zone/aW1nLzIxNzUzNTU1LnBuZw==/315x250%23c/xBKXo%2B.png"
    },
    {
      title: "(DDR) Drunk Döner RPG",
      description: "Pay off your debts to the kebab man.",
      tags: ["Simulation"],
      year: "2025",
      image: "https://img.itch.zone/aW1nLzIxNzQyOTkyLnBuZw==/315x250%23c/%2BPZJb1.png"
    },
    {
      title: "Unconventional Driving Sim",
      description: "Grab your buddy and test your skills in this co-operative driving simulator.",
      tags: ["Racing", "Simulation"],
      year: "2025",
      image: "https://img.itch.zone/aW1nLzIwOTg2NDA2LnBuZw==/315x250%23c/BUe%2Bb7.png"
    },
    {
      title: "(Don't) Lie",
      description: "A story about crimes and lies.",
      tags: ["Interactive", "Fiction"],
      year: "2025",
      image: "https://img.itch.zone/aW1nLzIwNjI2NTk3LnBuZw==/315x250%23c/F1xxRz.png"
    },
    {
      title: "Frogis",
      description: "FROG HEHE.",
      tags: ["Survival"],
      year: "2025",
      image: "https://img.itch.zone/aW1nLzIwNzMwNjg5LnBuZw==/315x250%23c/wmSpC%2F.png"
    },

     {
      title: "Line Arcade",
      description: "Play three arcade inspired mini-games.",
      tags: [],
      year: "2025",
      image: "https://img.itch.zone/aW1nLzE5MzY3NDc1LnBuZw==/315x250%23c/XBqZR4.png"
    }
  ];

  return (
    <section ref={sectionRef} id="projects" className="py-20 px-8 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <div ref={titleRef}>
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            Projects
          </h2>
          <div className="w-20 h-1 bg-[#519e55] mx-auto mb-8"></div>
        </div>
        <div ref={tabsRef} className="flex justify-center gap-4 mb-12">
          <button 
            onClick={() => setActiveTab('published')}
            className={`px-6 py-2 rounded-lg transition-colors ${
              activeTab === 'published' 
                ? 'bg-[#519e55]' 
                : 'border border-black-600 hover:bg-gray-800'
            }`}
          >
            Published Games
          </button>
          <button 
            onClick={() => setActiveTab('other')}
            className={`px-6 py-2 rounded-lg transition-colors ${
              activeTab === 'other' 
                ? 'bg-[#519e55]' 
                : 'border border-gray-600 hover:bg-gray-800'
            }`}
          >
            Other Projects
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            ref={el => projectsRef.current[index] = el}
          >
            <ProjectCard 
              project={project} 
              onClick={() => handleProjectClick(project)}
            />
          </div>
        ))}
      </div>

      {/* Project Modal */}
      <ProjectModal 
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </section>
  );
};

export default ProjectsSection;