import React, { useState } from 'react';

const ProjectCard = ({ title, description, link, image, hasWinner }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="bg-gradient-to-br from-gray-900/95 to-black/95 rounded-xl p-6 border border-accent/30 backdrop-blur-sm
        hover:border-accent/70 hover:shadow-[0_0_50px_rgba(85,35,54,0.5)] transition-all duration-500
        transform hover:scale-105 hover:-translate-y-2 relative group overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Animated gradient overlay */}
      <div
        className={`absolute inset-0 bg-gradient-to-br from-accent/20 via-accent-dark/10 to-transparent
        transition-opacity duration-500 ${isHovered ? 'opacity-100' : 'opacity-0'}`}
      />

      {/* Trophy badge */}
      {hasWinner && (
        <div className="absolute top-3 right-3 z-10">
          <div className="bg-black/60 backdrop-blur-sm rounded-full w-12 h-12 flex items-center justify-center text-2xl">
            🏆
          </div>
        </div>
      )}

      {/* Image with overlay effect */}
      {image && (
        <div className="relative mb-4 overflow-hidden rounded-md group">
          <img
            src={image}
            alt={title}
            className="w-full h-40 object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-accent/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>
      )}

      <div className="relative z-10">
        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-accent transition-colors duration-300">
          {title}
        </h3>
        <p className="text-gray-200 mb-5 leading-relaxed text-[15px]">{description}</p>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent hover:text-accent-light transition-all duration-300 font-semibold inline-flex items-center gap-1
            hover:gap-2 group/link hover:drop-shadow-[0_0_10px_rgba(85,35,54,1)]"
        >
          View Project
          <svg
            className="w-4 h-4 transition-transform duration-300 group-hover/link:translate-x-1 group-hover/link:-translate-y-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
