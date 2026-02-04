import React from 'react';
import FloatingNav from './components/FloatingNav';
import Header from './sections/Header';
import Skills from './sections/Skills';
import ProjectGallery from './sections/ProjectGallery';
import ExperienceGallery from './sections/ExperienceGallery';
import ContactMe from './sections/ContactMe';
import LightRays from './components/lightBg';
import Carousel from "./components/Carousel";
import ParticleBackground from './components/ParticleBackground';
import AnimatedBackground from './components/AnimatedBackground';

function App() {
  return (
    <div className="relative">
      <AnimatedBackground />
      <ParticleBackground />
      <FloatingNav />

      {/* Header section with light rays */}
      <section id="about" className="relative w-full min-h-[600px]">
        {/* Light rays background */}
        <LightRays
          raysOrigin="top-center"
          raysColor="#7A3350"
          raysSpeed={1.5}
          lightSpread={0.8}
          rayLength={1.2}
          followMouse
          mouseInfluence={0.1}
          noiseAmount={0.1}
          distortion={0.05}
          className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
        />

        {/* Foreground content */}
        <div className="relative z-10 pt-24 md:pt-20 pb-12 px-4">
          <Header />
          <div className="mt-8">
            <Carousel />
          </div>
        </div>
      </section>

      <section id="skills" className="relative px-4">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent-dark/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        </div>
        <Skills />
      </section>

      <section id="experiences" className="pt-20 relative px-4">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-40 right-20 w-80 h-80 bg-accent-light/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-10 left-20 w-64 h-64 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }}></div>
        </div>
        <ExperienceGallery />
      </section>

      <section id="projects" className="pt-20 relative px-4">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-10 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1.5s' }}></div>
          <div className="absolute bottom-20 right-1/4 w-72 h-72 bg-accent-dark/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2.5s' }}></div>
        </div>
        <ProjectGallery />
      </section>

      <section className="relative px-4">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/2 left-10 w-64 h-64 bg-accent-light/10 rounded-full blur-3xl animate-float"></div>
        </div>
        <ContactMe />
      </section>
      <footer className="relative z-10 py-8 px-4 bg-gradient-to-t from-accent-dark/20 to-transparent border-t border-accent/30">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-200 text-sm font-medium hover:text-accent transition-colors duration-300">
            © 2026 Sahi Sagiraju. All Rights Reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
