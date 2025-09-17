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

  return (
    <div className="bg-gray-800 rounded-lg shadow-md mb-4 overflow-hidden transition-all duration-300 hover:shadow-xl">
      {/* Main horizontal row - clickable */}
      <div 
        className="flex items-center p-4 cursor-pointer hover:bg-gray-750 transition-colors"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {/* Company Logo */}
        <div className="flex-shrink-0 w-16 h-16 mr-4">
          <div className="w-full h-full bg-gray-700 rounded-lg flex items-center justify-center overflow-hidden">
            {logo ? (
              <img 
                src={logo} 
                alt={`${company} logo`} 
                className="w-full h-full object-contain"
              />
            ) : (
              <span className="text-gray-400 text-xs text-center">
                {company.charAt(0)}
              </span>
            )}
          </div>
        </div>

        {/* Company and Position Info */}
        <div className="flex-grow">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
            <h3 className="text-xl font-semibold text-white">{company}</h3>
            <span className="text-gray-400 text-sm">{location}</span>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
            <h4 className="text-lg text-accent font-medium">{position}</h4>
            <span className="text-gray-300 text-sm">
              {startDate} - {endDate}
            </span>
          </div>
          
          {/* Technologies */}
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech, index) => (
              <span 
                key={index}
                className="px-2 py-1 bg-gray-700 text-gray-300 text-xs rounded-md"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Expand/Collapse Icon */}
        <div className="flex-shrink-0 ml-4">
          <svg 
            className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${
              isExpanded ? 'rotate-180' : ''
            }`}
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
      {isExpanded && (
        <div className="px-4 pb-4 border-t border-gray-700">
          <div className="pt-4">
            <h5 className="text-white font-medium mb-2">Description</h5>
            <p className="text-gray-300 leading-relaxed">{description}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ExperienceCard;
