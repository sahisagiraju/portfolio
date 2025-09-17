import React from 'react';

const Skills = () => {
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
    <section id="skills" className="py-20 px-4 bg-gray-800">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-white text-center mb-12">
          Skills & Technologies
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-gray-900/50 rounded-lg p-6 border border-gray-700/50">
              <h3 className="text-xl font-semibold text-blue-400 mb-4">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-1 bg-gray-700/50 text-gray-300 rounded-full text-sm border border-gray-600/50 hover:bg-gray-600/50 hover:text-white transition-colors duration-200"
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
