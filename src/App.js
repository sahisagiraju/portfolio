import React from 'react';
import FloatingNav from './components/FloatingNav';
import Header from './components/Header';
import Skills from './components/Skills';
import ProjectGallery from './components/ProjectGallery';
import ExperienceGallery from './components/ExperienceGallery';
import ContactMe from './components/ContactMe';
import Carousel from "./components/Carousel"

function App() {
  return (
    <div className="bg-gray-900 min-h-screen">
      <FloatingNav />
      <div id="about" className="pt-20">
        <Header />
        <Carousel />
        <div className="py-16"></div>
      </div>
      <Skills />
      <div id="experiences" className="pt-20">
        <ExperienceGallery />
      </div>
      <div id="projects" className="pt-20">
        <ProjectGallery />
      </div>
      <ContactMe />
      <div className="text-center p-2 text-gray-400 text-sm">
        © 2025 Sahi Sagiraju. All Rights Reserved.
      </div>

    </div>
  );
}

export default App;
