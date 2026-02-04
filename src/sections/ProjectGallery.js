import React from 'react';
import ProjectCard from '../components/ProjectCard';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const projects = [
  {
    title: 'UtiliTrack',
    description: 'Automates maintenance scheduling, tracks customer feedback, and monitors energy usage to help businesses reduce costs.',
    link: 'https://devpost.com/software/utilitrack',
    hasWinner: true,
  },
  {
    title: 'Park-EZ',
    description: 'Uses computer vision to detect accessible parking spots in real-time, providing instant availability updates.',
    link: 'https://devpost.com/software/park-ez',
    hasWinner: true,
  },
  {
    title: 'Haven',
    description: 'Transforms house hunting with AI-driven personalized home matches and validation scores for buyers.',
    link: 'https://devpost.com/software/haven-2u0n9g',
    hasWinner: true,
  },
  {
    title: 'Citrus',
    description: 'AI-powered predictive maintenance tool that helps prevent machine failures by analyzing sensor data.',
    link: 'https://devpost.com/software/citrus',
    hasWinner: true,
  },
  {
    title: 'FinSim',
    description: 'A stock market simulator that allows users to build portfolios and track investment decisions over time.',
    link: 'https://devpost.com/software/finsim-d2j8be',
    hasWinner: true,
  },
  {
    title: 'Paralaví',
    description: 'An AI-driven app that optimizes grocery shopping by comparing store prices and predicting future expenses.',
    link: 'https://devpost.com/software/paralavi',
  },
  {
    title: 'ToolboxPro.tech',
    description: 'A platform for construction workers to share experiences and find support through real-time chatting and AI-assisted conversations.',
    link: 'https://devpost.com/software/toolboxpro-tech',
  },
  {
    title: 'ChatPHD.co',
    description: 'An AI-based symptom detector that provides accurate disease predictions and health advice.',
    link: 'https://devpost.com/software/chatphd-co',
  },
];

const ProjectGallery = () => {
  const [titleRef, titleVisible] = useScrollAnimation({ threshold: 0.2 });

  // Create refs and visibility states for all project cards at the top level
  const [cardRef0, cardVisible0] = useScrollAnimation({ threshold: 0.1 });
  const [cardRef1, cardVisible1] = useScrollAnimation({ threshold: 0.1 });
  const [cardRef2, cardVisible2] = useScrollAnimation({ threshold: 0.1 });
  const [cardRef3, cardVisible3] = useScrollAnimation({ threshold: 0.1 });
  const [cardRef4, cardVisible4] = useScrollAnimation({ threshold: 0.1 });
  const [cardRef5, cardVisible5] = useScrollAnimation({ threshold: 0.1 });
  const [cardRef6, cardVisible6] = useScrollAnimation({ threshold: 0.1 });
  const [cardRef7, cardVisible7] = useScrollAnimation({ threshold: 0.1 });

  const cardRefs = [cardRef0, cardRef1, cardRef2, cardRef3, cardRef4, cardRef5, cardRef6, cardRef7];
  const cardVisibles = [cardVisible0, cardVisible1, cardVisible2, cardVisible3, cardVisible4, cardVisible5, cardVisible6, cardVisible7];

  return (
    <section className="bg-black py-16 px-4 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent-dark/10 via-black to-accent/10 animate-gradient-shift" style={{ backgroundSize: '200% 200%' }} />

      {/* Accent lines */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent-light/30 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent-light/30 to-transparent"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <h2
          ref={titleRef}
          className={`text-4xl font-bold text-gray-100 mb-8 pb-2 border-b-2 border-accent/50 transition-all duration-1000 ${
            titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          Projects
        </h2>
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
              <div
                key={index}
                ref={cardRefs[index]}
                className={`transition-all duration-700 ${
                  cardVisibles[index] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <ProjectCard {...project} />
              </div>
          ))}
        </div>
      </div>
    </section>
  );
};
  
export default ProjectGallery;
