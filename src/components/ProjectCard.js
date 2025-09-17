import React from 'react';

const ProjectCard = ({ title, description, link, image, hasWinner }) => (
  <div className="bg-gray-900/50 rounded-lg p-6 border border-gray-700/50 hover:bg-gray-800/80 transition-all duration-300 transform hover:scale-105 relative">
    {hasWinner && (
      <div className="absolute top-3 right-3 z-10">
        <div className="bg-yellow-500 text-yellow-900 rounded-full w-8 h-8 flex items-center justify-center text-lg font-bold shadow-lg">
          🏆
        </div>
      </div>
    )}
    {image && <img src={image} alt={title} className="w-full h-40 object-cover rounded-md mb-4" />}
    <h3 className="text-xl font-semibold text-blue-400 mb-3">{title}</h3>
    <p className="text-gray-300 mb-4 leading-relaxed">{description}</p>
    <a 
      href={link} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="text-blue-400 hover:text-blue-300 transition-colors duration-200 font-medium inline-flex items-center gap-1"
    >
      View Project 
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
      </svg>
    </a>
  </div>
);

export default ProjectCard;
