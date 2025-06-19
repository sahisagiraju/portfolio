import React from 'react';
import ProjectCard from './ProjectCard';

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

const ProjectGallery = () => (
    <section className="bg-gray-900 py-16 px-4 transition-all duration-1000">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-8 border-b-2 border-accent pb-2">Projects</h2>
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
  
export default ProjectGallery;
