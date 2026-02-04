import React, { useState, useEffect } from 'react';

const FloatingNav = () => {
  const [activeSection, setActiveSection] = useState('about');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'skills', 'experiences', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'about', label: 'About Me' },
    { id: 'skills', label: 'Skills' },
    { id: 'experiences', label: 'Experiences' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact Me' },
    { id: 'resume', label: 'Resume', isExternal: true }
  ];

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="fixed top-6 left-0 right-0 z-50 animate-fade-in-down hidden md:block">
        <div className="bg-black/70 backdrop-blur-xl border border-accent/40 rounded-full px-8 py-3.5
          shadow-[0_0_40px_rgba(122,51,80,0.3)] hover:shadow-[0_0_60px_rgba(122,51,80,0.5)]
          transition-all duration-500 group mx-auto w-fit">
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-accent/10 via-accent-dark/5 to-accent/10
            opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          <ul className="flex items-center justify-center space-x-6 relative z-10 whitespace-nowrap">
            {navItems.map((item) => (
              <li key={item.id}>
                {item.isExternal ? (
                  <a
                    href="https://drive.google.com/file/d/1jMug5SYCtUGjDyz9oDmYz13Jh6uUb0pu/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-semibold px-4 py-2 rounded-full transition-all duration-300
                      text-gray-200 hover:text-white hover:bg-accent/40 inline-block
                      hover:shadow-[0_0_15px_rgba(122,51,80,0.6)] hover:scale-105"
                  >
                    {item.label}
                  </a>
                ) : (
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className={`text-sm font-semibold px-4 py-2 rounded-full transition-all duration-300 ${
                      activeSection === item.id
                        ? 'text-white bg-accent shadow-[0_0_20px_rgba(122,51,80,0.8)] scale-105'
                        : 'text-gray-200 hover:text-white hover:bg-accent/40 hover:scale-105'
                    }`}
                  >
                    {item.label}
                  </button>
                )}
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 md:hidden w-[90%] max-w-md">
        <div className="bg-black/70 backdrop-blur-xl border border-accent/40 rounded-2xl px-4 py-3
          shadow-[0_0_40px_rgba(122,51,80,0.3)] transition-all duration-300">

          {/* Mobile Header */}
          <div className="flex items-center justify-between">
            <span className="text-accent-light font-bold text-lg">Sahi Sagiraju</span>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-gray-200 hover:text-white transition-colors duration-300 focus:outline-none"
              aria-label="Toggle menu"
            >
              <div className="w-6 h-5 flex flex-col justify-between">
                <span className={`w-full h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                <span className={`w-full h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                <span className={`w-full h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
              </div>
            </button>
          </div>

          {/* Mobile Menu Items */}
          <div className={`overflow-hidden transition-all duration-300 ${isMenuOpen ? 'max-h-96 mt-4' : 'max-h-0'}`}>
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.id}>
                  {item.isExternal ? (
                    <a
                      href="https://drive.google.com/file/d/1jMug5SYCtUGjDyz9oDmYz13Jh6uUb0pu/view?usp=sharing"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-sm font-semibold px-4 py-3 rounded-xl transition-all duration-300
                        text-gray-200 hover:text-white hover:bg-accent/40
                        hover:shadow-[0_0_15px_rgba(122,51,80,0.6)] text-center"
                    >
                      {item.label}
                    </a>
                  ) : (
                    <button
                      onClick={() => scrollToSection(item.id)}
                      className={`w-full text-sm font-semibold px-4 py-3 rounded-xl transition-all duration-300 text-center ${
                        activeSection === item.id
                          ? 'text-white bg-accent shadow-[0_0_20px_rgba(122,51,80,0.8)]'
                          : 'text-gray-200 hover:text-white hover:bg-accent/40'
                      }`}
                    >
                      {item.label}
                    </button>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default FloatingNav;
