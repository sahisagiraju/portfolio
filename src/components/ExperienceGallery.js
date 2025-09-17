import React from 'react';
import ExperienceCard from './ExperienceCard';

const experiences = [
  {
    company: 'Cox Automotive',
    position: 'Software Engineering Intern',
    startDate: 'June 2024',
    endDate: 'August 2024',
    location: 'Atlanta, GA',
    technologies: ['React', 'Node.js', 'TypeScript', 'AWS', 'Docker', 'PostgreSQL'],
    description: 'Developed and maintained web applications using React and Node.js. Collaborated with cross-functional teams to deliver high-quality software solutions. Implemented new features and optimized existing code for better performance. Worked with cloud services and containerization technologies to deploy applications.',
    logo: require('../assets/cox.png')
  },
  {
    company: 'Texas Instruments',
    position: 'Technology Intern',
    startDate: 'June 2023',
    endDate: 'August 2023',
    location: 'Plano, TX',
    technologies: ['Python', 'Java', 'Spring Boot', 'SQL', 'Jenkins', 'Git'],
    description: 'Built automated testing frameworks and CI/CD pipelines to improve software delivery processes. Developed backend services using Java and Spring Boot. Worked on data analysis projects using Python and SQL. Collaborated with senior engineers to implement best practices and coding standards.',
    logo: require('../assets/fanniemae.png')
  },
  {
    company: 'All Ears Autism',
    position: 'Research Assistant',
    startDate: 'September 2022',
    endDate: 'May 2024',
    location: 'Denton, TX',
    technologies: ['Python', 'Machine Learning', 'TensorFlow', 'Pandas', 'NumPy', 'Jupyter'],
    description: 'Conducted research in machine learning and artificial intelligence. Developed predictive models using various ML algorithms. Analyzed large datasets and presented findings to faculty and peers. Published research papers and presented at academic conferences. Mentored undergraduate students in research methodologies.',
    logo: require('../assets/unt.png')
  },
  {
    company: 'Tapsta',
    position: 'Research Assistant',
    startDate: 'September 2022',
    endDate: 'May 2024',
    location: 'Denton, TX',
    technologies: ['Python', 'Machine Learning', 'TensorFlow', 'Pandas', 'NumPy', 'Jupyter'],
    description: 'Conducted research in machine learning and artificial intelligence. Developed predictive models using various ML algorithms. Analyzed large datasets and presented findings to faculty and peers. Published research papers and presented at academic conferences. Mentored undergraduate students in research methodologies.',
    logo: require('../assets/unt.png')
  }
];

const ExperienceGallery = () => (
  <section className="bg-gray-900 py-16 px-4 transition-all duration-1000">
    <div className="max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-white mb-8 border-b-2 border-accent pb-2">Experience</h2>
      <div className="space-y-4">
        {experiences.map((experience, index) => (
          <ExperienceCard key={index} {...experience} />
        ))}
      </div>
    </div>
  </section>
);

export default ExperienceGallery;
