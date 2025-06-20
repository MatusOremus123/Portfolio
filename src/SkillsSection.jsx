import React from 'react';
import SplitText from './SplitText';

const SkillsSection = () => {
  const skills = [
    { name: 'Game Design', level: 95, color: '#519e55' },
    { name: 'Narrative Design', level: 90, color: '#5fa863' },
    { name: 'Unity', level: 85, color: '#6bb26c' },
    { name: 'Unreal Engine', level: 80, color: '#77bc75' },
    { name: 'Level Design', level: 88, color: '#84c67e' },
    { name: 'Player Psychology', level: 92, color: '#95B597' }
  ];

  return (
    <section id="skills" className="py-20 px-8 bg-gray-900/50 backdrop-blur-sm">
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
                    className="h-full rounded-full transition-all duration-1000 ease-out"
                    style={{ 
                      width: `${skill.level}%`,
                      background: `linear-gradient(90deg, ${skill.color}, #95B597)`
                    }}
                    data-aos="progress-animation"
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