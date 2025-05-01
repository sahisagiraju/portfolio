import React from 'react';

const ProjectCard = ({ title, description, link, image }) => (
  <div className="bg-gray-800 rounded-lg shadow-md p-4 hover:shadow-xl transition-shadow">
    {image && <img src={image} alt={title} className="w-full h-40 object-cover rounded-md mb-3" />}
    <h2 className="text-xl font-semibold text-white mb-2">{title}</h2>
    <p className="text-gray-300 mb-4">{description}</p>
    <a href={link} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
      View Project →
    </a>
  </div>
);

export default ProjectCard;
