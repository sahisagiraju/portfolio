import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Skills = () => {
  const [titleRef, titleVisible] = useScrollAnimation({ threshold: 0.2 });

  // Create refs and visibility states for all cards at the top level
  const [cardRef0, cardVisible0] = useScrollAnimation({ threshold: 0.1 });
  const [cardRef1, cardVisible1] = useScrollAnimation({ threshold: 0.1 });
  const [cardRef2, cardVisible2] = useScrollAnimation({ threshold: 0.1 });
  const [cardRef3, cardVisible3] = useScrollAnimation({ threshold: 0.1 });
  const [cardRef4, cardVisible4] = useScrollAnimation({ threshold: 0.1 });

  const cardRefs = [cardRef0, cardRef1, cardRef2, cardRef3, cardRef4];
  const cardVisibles = [cardVisible0, cardVisible1, cardVisible2, cardVisible3, cardVisible4];

  const skillCategories = [
    {
      title: 'Programming Languages',
      skills: [
        'Python',
        'Java',
        'C++',
        'C',
        'JavaScript',
        'TypeScript',
        'SQL',
        'HTML/CSS'
      ]
    },
    {
      title: 'Frameworks & Libraries',
      skills: [
        'React',
        'Next.js',
        'Tailwind CSS',
        'Flutter/Dart',
        'FastAPI',
        'Prisma',
        'Express.js',
        'Flask',
        'SCSS'
      ]
    },
    {
      title: 'Databases & Cloud',
      skills: [
        'PostgreSQL',
        'MySQL',
        'SQLite',
        'Amazon Web Services (AWS)',
        'Google Cloud',
        'Google Firebase',
        'Docker',
        'Kubernetes',
        'Terraform'
      ]
    },
    {
      title: 'Machine Learning & AI',
      skills: [
        'EasyOCR',
        'YOLOv8',
        'CrewAI'
      ]
    },
    {
      title: 'Tools & Technologies',
      skills: [
        'Git',
        'GitHub',
        'GitHub Actions',
        'VS Code',
        'IntelliJ',
        'Postman',
        'Figma',
        'Linux/Unix',
        'REST APIs',
        'GraphQL',
        'Jira',
        'Rally',
        'ServiceNow'
      ]
    }
  ];
  
  return (
    <section className="py-20 px-4 bg-black relative overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-black to-accent-dark/5 animate-gradient-shift" style={{ backgroundSize: '200% 200%' }} />

      {/* Shimmer effect */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-accent/5 to-transparent animate-shimmer"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <h2
          ref={titleRef}
          className={`text-4xl font-bold text-gray-100 text-center mb-12 transition-all duration-1000 ${
            titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
          }`}
        >
          Skills & Technologies
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
              <div
                key={index}
                ref={cardRefs[index]}
                className={`bg-gradient-to-br from-gray-900/95 to-black/95 rounded-xl p-6 border border-accent/30 backdrop-blur-sm
                  hover:border-accent/70 hover:shadow-[0_0_40px_rgba(85,35,54,0.5)] transition-all duration-500
                  group relative overflow-hidden ${
                    cardVisibles[index] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Animated gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-accent-dark/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <h3 className="text-xl font-semibold text-white mb-4 relative z-10 group-hover:text-accent-light transition-colors duration-300">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2 relative z-10">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1.5 bg-black/60 text-gray-200 rounded-full text-sm font-medium border border-accent/30
                        hover:bg-white/15 hover:text-white hover:border-accent hover:scale-105 hover:shadow-[0_0_15px_rgba(255,255,255,0.3)]
                        transition-all duration-300 cursor-default animate-fade-in"
                      style={{ animationDelay: `${(index * 100) + (skillIndex * 50)}ms` }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
