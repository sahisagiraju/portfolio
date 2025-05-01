import React from 'react';
import Sahi from '../assets/Sahi.js';

const Header = () => (
  <header className="bg-gray-900 text-white p-6">
    <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
      <div className="relative group w-32 h-32 md:w-40 md:h-40">
        <div className="absolute inset-0 rounded-full border-4 border-accent shadow-[0_0_20px_#426398] animate-pulse" />
        <Sahi className="relative w-full h-full rounded-full" />
      </div>
      <div className="text-center md:text-left">
        <h1 className="text-4xl font-bold text-accent animate-neon-glow">Hey, I'm Sahi.</h1>
        <p className="text-gray-400 mt-2">CS @ UTD | Hackathon Enthusiast</p>
        <div className="flex justify-center md:justify-start space-x-4 mt-3">
          <a href="https://github.com/sahi-sagiraju" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">GitHub</a>
          <a href="https://www.linkedin.com/in/sahishnu-sagiraju" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">LinkedIn</a>
        </div>
      </div>
    </div>
  </header>
);
export default Header;