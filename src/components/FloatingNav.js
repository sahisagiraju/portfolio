import React, { useState, useEffect } from 'react';

const FloatingNav = () => {
  const [activeSection, setActiveSection] = useState('about');

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
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
    <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50">
      <div className="bg-gray-900/80 backdrop-blur-md border border-gray-700/50 rounded-full px-6 py-3 shadow-2xl">
        <ul className="flex space-x-6">
          {navItems.map((item) => (
            <li key={item.id}>
              {item.isExternal ? (
                <a
                  href="#" // Will be updated with actual resume URL later
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium px-3 py-2 rounded-full transition-all duration-200 text-gray-300 hover:text-white hover:bg-gray-700/50 inline-block"
                >
                  {item.label}
                </a>
              ) : (
                <button
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-medium px-3 py-2 rounded-full transition-all duration-200 ${
                    activeSection === item.id
                      ? 'text-white bg-blue-600/80'
                      : 'text-gray-300 hover:text-white hover:bg-gray-700/50'
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
  );
};

export default FloatingNav;
