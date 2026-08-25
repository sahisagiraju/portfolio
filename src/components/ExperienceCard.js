import React, { useState } from 'react';

const renderDescription = (text) => {
  const urlRegex = /(https?:\/\/[^\s]+)/g;
  return text.split(urlRegex).map((part, i) =>
    part.match(urlRegex) ? (
      <a
        key={i}
        href={part}
        target="_blank"
        rel="noopener noreferrer"
        className="text-wine link-underline"
        onClick={(e) => e.stopPropagation()}
      >
        {part.replace(/^https?:\/\//, '')}
      </a>
    ) : (
      part
    )
  );
};

const ExperienceCard = ({
  company,
  position,
  startDate,
  endDate,
  location,
  technologies,
  description,
  logo,
  num,
}) => {
  const [open, setOpen] = useState(false);
  const isPresent = endDate === 'Present';

  return (
    <div className="rule-b group">
      {/* Clickable row */}
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full text-left py-6 md:py-7 px-2 md:px-3 -mx-2 md:-mx-3 flex items-center gap-4 md:gap-6 hover:bg-paper-2 transition-colors duration-300"
        aria-expanded={open}
      >
        <span className="label text-wine w-8 shrink-0 hidden sm:block">{num}</span>

        <div className="w-12 h-12 md:w-14 md:h-14 shrink-0 bg-paper border border-rule grid place-items-center overflow-hidden">
          {logo ? (
            <img src={logo} alt={`${company} logo`} className="w-full h-full object-contain p-1.5" />
          ) : (
            <span className="display font-bold text-wine">{company.charAt(0)}</span>
          )}
        </div>

        <div className="flex-grow min-w-0">
          <div className="flex items-baseline gap-3 flex-wrap">
            <h3 className="display text-2xl md:text-3xl font-bold text-ink group-hover:text-wine transition-colors duration-300 leading-none">
              {company}
            </h3>
            {isPresent && (
              <span className="label text-wine inline-flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-wine animate-pulse" />
                Now
              </span>
            )}
          </div>
          <p className="text-ink-2 mt-1.5 text-[15px] font-medium">{position}</p>
        </div>

        {/* Right meta */}
        <div className="hidden md:flex flex-col items-end shrink-0 text-right">
          <span className="label text-ink">
            {startDate.split(' ').pop()} — {isPresent ? 'Now' : endDate.split(' ').pop()}
          </span>
          <span className="label text-ink-3 mt-1">{location}</span>
        </div>

        <span
          className={`shrink-0 w-8 h-8 grid place-items-center border border-rule text-wine group-hover:border-wine group-hover:bg-wine group-hover:text-paper transition-all duration-300 ${
            open ? 'rotate-45' : ''
          }`}
          aria-hidden
        >
          +
        </span>
      </button>

      {/* Expanded body */}
      <div
        className={`overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          open ? 'max-h-[900px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="pb-8 pl-2 md:pl-[6.5rem] pr-2 grid md:grid-cols-3 gap-6">
          <div className="md:col-span-2">
            <p className="text-ink-2 leading-relaxed text-[15px]">
              {renderDescription(description)}
            </p>
          </div>
          <div className="md:col-span-1">
            <span className="label text-ink-3 block mb-3 md:hidden">
              {startDate} — {endDate} · {location}
            </span>
            <span className="label text-ink-3 block mb-3">Stack</span>
            <div className="flex flex-wrap gap-1.5">
              {technologies.map((tech, i) => (
                <span
                  key={i}
                  className="label !tracking-normal !text-[0.68rem] normal-case px-2 py-1 border border-rule text-ink-2 bg-paper"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;
