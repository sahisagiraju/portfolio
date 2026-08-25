import React from 'react';
import Reveal from './Reveal';

/**
 * SectionHeader — the editorial "01 — WORK" masthead used at the top of
 * every section. Hairline rule on top, mono index on the left, big
 * display title, optional note aligned to the right.
 *
 * Pass `dark` when the section sits on a maroon (wine-dark) background so
 * the title and rules invert to paper tones.
 */
const SectionHeader = ({ index, title, note, dark = false }) => {
  return (
    <Reveal className={`${dark ? 'border-t border-paper/20' : 'rule-t'} pt-5 md:pt-6`}>
      <div className="flex items-baseline justify-between gap-4">
        <span className={`label ${dark ? 'text-wine-soft' : 'text-wine'}`}>{index}</span>
        {note && (
          <span className={`label ${dark ? 'text-paper/70' : 'text-ink-3'} text-right hidden sm:block`}>
            {note}
          </span>
        )}
      </div>
      <h2
        className={`display ${dark ? 'text-paper' : 'text-ink'} text-5xl sm:text-6xl md:text-7xl font-bold mt-3 uppercase`}
      >
        {title}
      </h2>
    </Reveal>
  );
};

export default SectionHeader;
