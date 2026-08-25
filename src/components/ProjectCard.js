import React from 'react';

const ProjectCard = ({ title, description, link, image, hasWinner, wins = 1, tags = [], ctaLabel, ctaScrollTo, num }) => {
  const handleCtaClick = (e) => {
    if (ctaScrollTo) {
      e.preventDefault();
      const el = document.getElementById(ctaScrollTo);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const eyebrow = tags.slice(0, 2).join(' · ');
  const extraTags = tags.slice(2);

  return (
    <div className="group relative flex flex-col bg-paper border border-rule hover:border-wine transition-all duration-500 hover:-translate-y-1 h-full">
      {/* index */}
      <span className="absolute top-3 left-3 z-10 label text-wine bg-paper/85 backdrop-blur-sm px-1.5 py-0.5">
        {num}
      </span>

      {/* winner badge */}
      {hasWinner && (
        <span className="absolute top-3 right-3 z-10 label bg-wine text-paper px-2 py-1 inline-flex items-center gap-1">
          <span aria-hidden>★</span> {wins > 1 ? `${wins} Wins` : 'Winner'}
        </span>
      )}

      {/* preview */}
      <div className="relative overflow-hidden aspect-[16/10] bg-paper-2 border-b border-rule">
        {image ? (
          <img
            src={image}
            alt={title}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full grid place-items-center">
            <span className="display font-bold text-paper-3 text-7xl select-none">{num}</span>
          </div>
        )}
      </div>

      {/* body */}
      <div className="flex flex-col flex-1 p-5">
        {eyebrow && <span className="label text-wine">{eyebrow}</span>}

        <h3 className="display text-2xl font-bold text-ink mt-2 group-hover:text-wine transition-colors duration-300">
          {title}
        </h3>

        <p className="text-ink-2 text-[14.5px] leading-relaxed mt-2.5 flex-1">{description}</p>

        {extraTags.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mt-4">
            {extraTags.map((tag, i) => (
              <span
                key={i}
                className="label !tracking-normal !text-[0.66rem] normal-case px-2 py-0.5 border border-rule text-ink-3"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        <a
          href={link || '#'}
          onClick={handleCtaClick}
          target={ctaScrollTo ? undefined : '_blank'}
          rel={ctaScrollTo ? undefined : 'noopener noreferrer'}
          className="label text-ink hover:text-wine mt-5 pt-4 rule-t inline-flex items-center justify-between group/link"
        >
          {ctaLabel || 'View project'}
          <span aria-hidden className="text-wine transition-transform duration-300 group-hover/link:translate-x-1">
            ↗
          </span>
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
