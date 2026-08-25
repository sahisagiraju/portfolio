import React from 'react';
import FloatingNav from './components/FloatingNav';
import Header from './sections/Header';
import ExperienceGallery from './sections/ExperienceGallery';
import ProjectGallery from './sections/ProjectGallery';
import Skills from './sections/Skills';
import Gallery from './sections/Gallery';
import ContactMe from './sections/ContactMe';

function App() {
  return (
    <div className="bg-paper text-ink min-h-screen antialiased selection:bg-wine">
      <FloatingNav />

      <main>
        <section id="about">
          <Header />
        </section>

        <section id="experience" className="pt-24 md:pt-32">
          <ExperienceGallery />
        </section>

        <section id="projects" className="pt-24 md:pt-32">
          <ProjectGallery />
        </section>

        <section id="skills" className="mt-24 md:mt-32 py-24 md:py-32 bg-wine-dark">
          <Skills />
        </section>

        <section id="gallery" className="pt-24 md:pt-32">
          <Gallery />
        </section>

        <section id="contact" className="mt-24 md:mt-32 py-24 md:py-32 bg-wine-dark">
          <ContactMe />
        </section>
      </main>

      <footer className="rule-t">
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-3">
          <span className="label text-ink-3">© 2026 Sahi Sagiraju</span>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="label text-ink hover:text-wine transition-colors"
          >
            Back to top ↑
          </button>
        </div>
      </footer>
    </div>
  );
}

export default App;
