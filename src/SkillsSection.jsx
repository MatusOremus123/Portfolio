import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitText from './SplitText';

gsap.registerPlugin(ScrollTrigger);

const skills = [
  { name: 'Game Design', level: 95, color: '#519e55' },
  { name: 'Narrative Design', level: 90, color: '#5fa863' },
  { name: 'Unity', level: 85, color: '#6bb26c' },
  { name: 'Unreal Engine', level: 80, color: '#77bc75' },
  { name: 'Level Design', level: 88, color: '#84c67e' },
  { name: 'Player Psychology', level: 92, color: '#95B597' }
];

const SkillsSection = () => {
  const skillsRef = useRef([]);

  useEffect(() => {
    // Animate progress bars when they come into view
    skillsRef.current.forEach((progressBar, index) => {
      if (progressBar) {
        gsap.fromTo(progressBar,
          {
            width: '0%'
          },
          {
            width: `${skills[index].level}%`,
            duration: 1.5,
            ease: "power2.out",
            delay: index * 0.1,
            scrollTrigger: {
              trigger: progressBar,
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

  return (
    <section id="skills" className="py-20 px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          <SplitText
            text="Skills & Expertise"
            className="inline-block"
            delay={50}
            duration={0.8}
            splitType="chars"
            from={{ opacity: 0, y: 20 }}
            to={{ opacity: 1, y: 0 }}
          />
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {}
          <div className="space-y-6">
            {skills.map((skill, index) => (
              <div key={index} className="group">
                <div className="flex justify-between mb-2">
                  <span className="text-gray-300 font-medium">{skill.name}</span>
                  <span className="text-[#95B597]">{skill.level}%</span>
                </div>
                <div className="h-3 bg-gray-800 rounded-full overflow-hidden">
                  <div 
                    ref={el => skillsRef.current[index] = el}
                    className="h-full rounded-full"
                    style={{ 
                      width: '0%',
                      background: `linear-gradient(90deg, ${skill.color}, #95B597)`
                    }}
                  />
                </div>
              </div>
            ))}
          </div>

          {}
          <div className="flex flex-wrap gap-4 content-start">
            {[
              'Mechanics Design', 'Quest Design', 'Character Development',
              'Prototyping', 'Playtesting', 'Scripting (C#)',
              'Blueprints', 'UI/UX', 'Game Balancing',
              'Storyboarding', 'Dialogue Systems', 'Economy Design'
            ].map((tag, index) => (
              <span 
                key={index}
                className="px-4 py-2 bg-gray-800 text-gray-300 rounded-full 
                          hover:bg-[#95B597] hover:text-gray-900 transition-all"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;