import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

/**
 * Reveal — fades + lifts its children into view once on scroll.
 * A single wrapper so sections don't have to hand-roll one hook per item.
 */
const Reveal = ({ children, delay = 0, as: Tag = 'div', className = '', threshold = 0.15 }) => {
  const [ref, visible] = useScrollAnimation({ threshold });

  return (
    <Tag
      ref={ref}
      className={`transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Tag>
  );
};

export default Reveal;
