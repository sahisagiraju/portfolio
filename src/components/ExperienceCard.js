import React, { useState } from 'react';

const ExperienceCard = ({
  company,
  position,
  startDate,
  endDate,
  location,
  technologies,
  description,
  logo
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  // Helper function to render description with clickable links
  const renderDescription = (text) => {
    const urlRegex = /(https?:\/\/[^\s]+)/g;
    const parts = text.split(urlRegex);

    return parts.map((part, index) => {
      if (part.match(urlRegex)) {
        return (
          <a
            key={index}
            href={part}
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent-light hover:text-accent underline hover:no-underline transition-colors duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            {part}
          </a>
        );
      }
      return part;
    });
  };

  return (
    <div
      className="bg-gradient-to-br from-gray-900/95 to-black/95 rounded-xl shadow-lg mb-4 overflow-hidden
        border border-accent/30 backdrop-blur-sm hover:border-accent/70
        hover:shadow-[0_0_50px_rgba(122,51,80,0.5)] transition-all duration-500
        transform hover:scale-[1.02] group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Animated gradient overlay */}
      <div
        className={`absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-accent-dark/10
        transition-opacity duration-500 ${isHovered ? 'opacity-100' : 'opacity-0'}`}
      />

      {/* Main horizontal row - clickable */}
      <div
        className="flex items-center p-4 cursor-pointer relative z-10 transition-all duration-300"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {/* Company Logo */}
        <div className="flex-shrink-0 w-16 h-16 mr-4">
          <div className="w-full h-full bg-gradient-to-br from-gray-800 to-black rounded-lg flex items-center justify-center overflow-hidden
            border border-accent/30 group-hover:border-accent/60 transition-all duration-300
            group-hover:shadow-[0_0_20px_rgba(122,51,80,0.4)]">
            {logo ? (
              <img
                src={logo}
                alt={`${company} logo`}
                className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-110"
              />
            ) : (
              <span className="text-accent text-xl font-bold text-center">
                {company.charAt(0)}
              </span>
            )}
          </div>
        </div>

        {/* Company and Position Info */}
        <div className="flex-grow">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
            <h3 className="text-xl font-semibold text-white group-hover:text-accent transition-colors duration-300">
              {company}
            </h3>
            <span className="text-gray-300 text-sm font-medium group-hover:text-accent-light transition-colors duration-300">
              {location}
            </span>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
            <h4 className="text-lg text-white font-medium group-hover:text-accent transition-colors duration-300">
              {position}
            </h4>
            <span className="text-gray-200 text-sm font-medium">
              {startDate} - {endDate}
            </span>
          </div>

          {/* Technologies */}
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech, index) => (
              <span
                key={index}
                className="px-2.5 py-1 bg-black/60 text-gray-200 text-xs font-medium rounded-md border border-accent/30
                  hover:bg-white/15 hover:text-white hover:border-accent hover:scale-105
                  transition-all duration-300 cursor-default"
                style={{ transitionDelay: `${index * 30}ms` }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Expand/Collapse Icon */}
        <div className="flex-shrink-0 ml-4">
          <svg
            className={`w-5 h-5 text-accent transition-all duration-500 ${
              isExpanded ? 'rotate-180' : ''
            } group-hover:text-accent-light group-hover:scale-125`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </div>

      {/* Expanded Description */}
      <div
        className={`overflow-hidden transition-all duration-500 ${
          isExpanded ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-4 pb-4 border-t border-accent/30 relative z-10">
          <div className="pt-4 animate-fade-in-up">
            <h5 className="text-white font-semibold mb-3 text-lg">Description</h5>
            <p className="text-gray-200 leading-relaxed text-[15px]">{renderDescription(description)}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;
