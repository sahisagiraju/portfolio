import Sahi from '../assets/Sahi.js';
import React from 'react';

const Header = () => (
  <header className="bg-gray-900 text-white p-10">
    <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-center gap-12">
      {/* Glowing circle avatar */}
      <div className="relative group w-32 h-32 md:w-40 md:h-40 md:order-1">
        <div className="absolute inset-0 rounded-full border-4 border-accent shadow-[0_0_20px_#426398] animate-pulse" />
        <div className="relative w-full h-full overflow-hidden rounded-full">
        <Sahi className="w-full h-full object-cover scale-150 translate-y-7" />
        </div>
      </div>

      {/* Intro text */}
      <div className="text-center md:text-left md:order-2">
      <h1
  className="text-4xl md:text-6xl font-bold text-[#ffffff] animate-flicker-neon"
  style={{
    animation: 'flicker 2s linear forwards',
  }}
>
  Hey, I&apos;m Sahi.
</h1>
        <p className="text-gray-400 mt-4">SWE Intern @ Cox Automotive</p>
        <p className="text-gray-400">UTD CS | Hackathon Enthusiast</p>
        <div className="flex justify-center md:justify-start space-x-6 mt-3">
          <a
            href="https://github.com/sahisagiraju"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:underline flex items-center gap-2"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.30.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/sahishnu-sagiraju"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:underline flex items-center gap-2"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
            LinkedIn
          </a>
          <a
            href="https://devpost.com/sahi-sagiraju"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:underline flex items-center gap-2"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6.002 1.61L0 12.004L6.002 22.39h11.996L24 12.004L17.998 1.61H6.002zm1.593 4.084h3.947c3.605 0 6.276 1.695 6.276 6.31 0 4.436-3.21 6.302-6.456 6.302H7.595V5.694zm2.517 2.449v7.714h1.241c2.646 0 3.862-1.55 3.862-3.861.009-2.569-1.096-3.853-3.767-3.853H10.112z"/>
            </svg>
            Devpost
          </a>
        </div>
      </div>
    </div>
  </header>
);

export default Header;
