import React from 'react';
import Reveal from '../components/Reveal';

const links = [
  { label: 'GitHub', value: '@sahisagiraju', href: 'https://github.com/sahisagiraju' },
  { label: 'LinkedIn', value: 'in/sahishnu-sagiraju', href: 'https://www.linkedin.com/in/sahishnu-sagiraju' },
  { label: 'Devpost', value: 'sahi-sagiraju', href: 'https://devpost.com/sahi-sagiraju' },
];

const ContactMe = () => {
  return (
    <div className="max-w-6xl mx-auto px-5 md:px-8">
      <Reveal className="border-t border-paper/20 pt-5 md:pt-6">
        <div className="flex items-baseline justify-between gap-4">
          <span className="label text-wine-soft">06 — Contact</span>
          <span className="label text-paper/70 hidden sm:block">Open to opportunities</span>
        </div>
      </Reveal>

      <Reveal className="mt-8">
        <p className="display text-paper text-3xl md:text-4xl font-medium max-w-3xl leading-tight">
          Have something to build, a role to fill, or just want to talk shop?
        </p>
      </Reveal>

      {/* Big email link */}
      <Reveal className="mt-10 md:mt-14" delay={80}>
        <a
          href="mailto:sahithedev@gmail.com"
          className="group block border-t border-b border-paper/15 py-6 md:py-8"
        >
          <span className="label text-paper/70 block mb-2">Email</span>
          <span className="display font-bold text-paper uppercase text-[clamp(1.75rem,6vw,4.5rem)] group-hover:text-wine-soft transition-colors duration-300 flex items-center justify-between gap-4 break-all">
            sahithedev@gmail.com
            <span aria-hidden className="text-wine-soft shrink-0 transition-transform duration-300 group-hover:translate-x-2 group-hover:-translate-y-1">
              ↗
            </span>
          </span>
        </a>
      </Reveal>

      {/* Other links */}
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-px bg-paper/15 border border-paper/15">
        {links.map((link, i) => (
          <Reveal key={link.label} delay={i * 70} className="contents">
            <a
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-paper hover:bg-wine p-6 transition-colors duration-300"
            >
              <span className="label text-ink-3 group-hover:text-paper/60 block mb-2 transition-colors">
                {link.label}
              </span>
              <span className="display text-lg font-bold text-ink group-hover:text-paper flex items-center justify-between transition-colors">
                {link.value}
                <span aria-hidden className="text-wine group-hover:text-paper transition-colors">↗</span>
              </span>
            </a>
          </Reveal>
        ))}
      </div>
    </div>
  );
};

export default ContactMe;
