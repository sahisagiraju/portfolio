import React from 'react';
import Sahi from '../assets/sahi.png';

const socials = [
  { label: 'GitHub', href: 'https://github.com/sahisagiraju' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/sahishnu-sagiraju' },
  { label: 'Devpost', href: 'https://devpost.com/sahi-sagiraju' },
  { label: 'Résumé', href: '/resume.pdf' },
  { label: 'Email', href: 'mailto:sahithedev@gmail.com' },
];

const ticker = [
  'Full-stack', 'AWS', 'React', 'iOS / SwiftUI', 'TypeScript', 'Python',
  'Terraform', 'GraphQL', 'Hackathons', 'Cloud', 'Django', 'Serverless',
];

const Header = () => {
  return (
    <header className="max-w-6xl mx-auto px-5 md:px-8 pt-28 md:pt-36">
      {/* top meta line */}
      <div className="rule-b pb-4 flex items-baseline justify-between animate-fade-in">
        <span className="label text-ink-3">Portfolio — 2026</span>
        <span className="label text-ink-3 hidden sm:block">Dallas, TX / New York, NY</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 pt-10 md:pt-14">
        {/* Left — the statement */}
        <div className="lg:col-span-8 flex flex-col">
          <span
            className="label text-wine mb-5 animate-fade-in-up"
            style={{ animationDelay: '80ms' }}
          >
            Software Engineer
          </span>

          <h1 className="relative z-10 display font-bold text-ink uppercase text-[clamp(2.75rem,8.5vw,7.5rem)]">
            <span className="block animate-fade-in-up" style={{ animationDelay: '120ms' }}>
              Sahi
            </span>
            <span className="block animate-fade-in-up" style={{ animationDelay: '220ms' }}>
              Sagiraju<span className="text-wine">.</span>
            </span>
          </h1>

          <p
            className="mt-8 max-w-xl text-ink-2 text-lg md:text-xl leading-relaxed animate-fade-in-up"
            style={{ animationDelay: '320ms' }}
          >
            SWE @ Cox Auto | UTD CS '25
          </p>

          {/* social links as an editorial list */}
          <ul
            className="mt-9 flex flex-wrap gap-x-6 gap-y-2 animate-fade-in-up"
            style={{ animationDelay: '420ms' }}
          >
            {socials.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  target={s.href.startsWith('mailto:') ? undefined : '_blank'}
                  rel={s.href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
                  className="label text-ink hover:text-wine link-underline inline-flex items-center gap-1.5 py-1"
                >
                  {s.label}
                  <span aria-hidden className="text-wine">↗</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Right — portrait */}
        <div className="lg:col-span-4 flex flex-col animate-fade-in" style={{ animationDelay: '260ms' }}>
          <div className="relative bg-paper-2 border border-rule p-2">
            <div className="overflow-hidden">
              <img
                src={Sahi}
                alt="Sahi Sagiraju"
                className="w-full aspect-[4/5] object-cover grayscale-[0.15] hover:grayscale-0 transition-all duration-700 hover:scale-[1.03]"
              />
            </div>
            <div className="flex items-baseline justify-between pt-2 px-0.5">
              <span className="label text-ink-3">Fig. 01</span>
              <span className="label text-ink-3">Sahi, 2026</span>
            </div>
          </div>
        </div>
      </div>

      {/* role ticker */}
      <div
        className="mt-14 md:mt-20 rule-t rule-b py-4 overflow-hidden animate-fade-in"
        style={{ animationDelay: '520ms' }}
      >
        <div className="marquee-track animate-marquee">
          {[...ticker, ...ticker].map((word, i) => (
            <span key={i} className="flex items-center">
              <span className="label text-ink px-6">{word}</span>
              <span className="text-wine">◆</span>
            </span>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
