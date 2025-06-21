import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { User, Heart, Gamepad2, Coffee } from 'lucide-react';
import SplitText from './SplitText';

gsap.registerPlugin(ScrollTrigger);

const AboutSection = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    // Animate cards when they come into view
    cardsRef.current.forEach((card, index) => {
      if (card) {
        gsap.fromTo(card,
          {
            opacity: 0,
            y: 50,
            scale: 0.9
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            delay: index * 0.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
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

  const highlights = [
    {
      icon: <User className="w-6 h-6" />,
      title: "Creative Vision",
      description: "Passionate about creating immersive gaming experiences that tell compelling stories and engage players on multiple levels."
    },
    {
      icon: <Gamepad2 className="w-6 h-6" />,
      title: "Player-Focused",
      description: "Always designing with the player in mind, ensuring every mechanic serves a purpose in the overall experience."
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Team Collaboration",
      description: "Experienced in working with diverse teams, from programmers to artists, fostering creativity and innovation."
    },
    {
      icon: <Coffee className="w-6 h-6" />,
      title: "Continuous Learning",
      description: "Constantly exploring new technologies, design patterns, and industry trends to stay at the forefront of game design."
    }
  ];

  return (
    <section ref={sectionRef} id="about" className="py-20 px-8">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#DEEEDF]">
            <SplitText
              text="About Me"
              className="inline-block"
              delay={50}
              duration={0.8}
              splitType="chars"
              from={{ opacity: 0, y: 20 }}
              to={{ opacity: 1, y: 0 }}
            />
          </h2>
          <div className="w-20 h-1 bg-[#519e55] mx-auto"></div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
          {/* Profile Image */}
          <div className="lg:col-span-1 flex justify-center">
            <div className="w-80 h-80 bg-[#1E351F]/20 border border-[#95B597]/20 rounded-xl flex items-center justify-center">
              <div className="text-center">
                <User className="w-16 h-16 text-[#95B597]/50 mx-auto mb-4" />
                <p className="text-[#DEEEDF]/40 text-sm">Profile Image</p>
                <p className="text-[#DEEEDF]/30 text-xs mt-1">Coming Soon</p>
              </div>
            </div>
          </div>

          {/* Personal Story and Quick Facts */}
          <div className="lg:col-span-2 space-y-8">
            {/* Personal Story */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-[#DEEEDF] mb-4">My Journey</h3>
              <p className="text-[#DEEEDF]/80 leading-relaxed">
                As a Game Designer and Creative Director, I've dedicated my career to crafting experiences 
                that resonate with players on both emotional and intellectual levels. My passion for 
                interactive storytelling began early, and has evolved into a deep understanding of 
                player psychology and engagement mechanics.
              </p>
              <p className="text-[#DEEEDF]/80 leading-relaxed">
                I believe that great games are born from the intersection of compelling narratives, 
                innovative mechanics, and thoughtful player experience design. Every project I work on 
                is an opportunity to push boundaries and create something truly memorable.
              </p>
              <p className="text-[#DEEEDF]/80 leading-relaxed">
                When I'm not designing games, you'll find me analyzing the latest releases, 
                exploring new technologies, or collaborating with fellow creatives to bring 
                ambitious visions to life.
              </p>
            </div>

            {/* Quick Facts */}
            <div className="bg-[#1E351F]/20 border border-[#95B597]/20 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-[#DEEEDF] mb-6">Quick Facts</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex justify-between items-center py-2 border-b border-[#95B597]/10">
                  <span className="text-[#DEEEDF]/70">Location</span>
                  <span className="text-[#95B597] font-medium">Slovakia</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-[#95B597]/10">
                  <span className="text-[#DEEEDF]/70">Experience</span>
                  <span className="text-[#95B597] font-medium">5+ Years</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-[#95B597]/10">
                  <span className="text-[#DEEEDF]/70">Projects Completed</span>
                  <span className="text-[#95B597] font-medium">15+</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-[#95B597]/10">
                  <span className="text-[#DEEEDF]/70">Favorite Genre</span>
                  <span className="text-[#95B597] font-medium">RPG & Simulation</span>
                </div>
                <div className="flex justify-between items-center py-2 md:col-span-2">
                  <span className="text-[#DEEEDF]/70">Current Focus</span>
                  <span className="text-[#95B597] font-medium">Narrative Design</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((highlight, index) => (
            <div
              key={index}
              ref={el => cardsRef.current[index] = el}
              className="bg-[#1E351F]/20 border border-[#95B597]/20 rounded-lg p-6 hover:bg-[#95B597]/5 transition-all duration-300 group"
            >
              <div className="text-[#95B597] mb-4 group-hover:scale-110 transition-transform duration-300">
                {highlight.icon}
              </div>
              <h4 className="text-lg font-semibold text-[#DEEEDF] mb-3">
                {highlight.title}
              </h4>
              <p className="text-[#DEEEDF]/70 text-sm leading-relaxed">
                {highlight.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;