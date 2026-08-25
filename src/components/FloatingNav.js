import React, { useState, useEffect } from 'react';

const navItems = [
  { id: 'about', label: 'About', num: '01' },
  { id: 'experience', label: 'Work', num: '02' },
  { id: 'projects', label: 'Projects', num: '03' },
  { id: 'skills', label: 'Skills', num: '04' },
  { id: 'gallery', label: 'Gallery', num: '05' },
  { id: 'contact', label: 'Contact', num: '06' },
];

const FloatingNav = () => {
  const [activeSection, setActiveSection] = useState('about');
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);
      const scrollPosition = window.scrollY + 120;
      for (const { id } of navItems) {
        const element = document.getElementById(id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(id);
            break;
          }
        }
      }
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-md transition-all duration-500 ${
          scrolled
            ? 'bg-paper/95 border-b border-rule shadow-[0_1px_12px_rgba(26,22,19,0.06)]'
            : 'bg-paper/80 border-b border-transparent'
        }`}
      >
        <div className="max-w-6xl mx-auto px-5 md:px-8 h-16 flex items-center justify-between">
          {/* Monogram / name */}
          <button
            onClick={() => scrollToSection('about')}
            className="group flex items-center gap-2.5 focus:outline-none"
            aria-label="Back to top"
          >
            <span className="w-8 h-8 grid place-items-center bg-wine text-paper font-display font-bold text-sm group-hover:bg-wine-dark transition-colors duration-300">
              S
            </span>
            <span className="display font-bold text-ink text-[15px] tracking-tight hidden sm:block">
              Sahi Sagiraju
            </span>
          </button>

          {/* Desktop section index */}
          <ul className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => scrollToSection(item.id)}
                  className={`label px-3 py-2 transition-colors duration-300 ${
                    activeSection === item.id
                      ? 'text-wine'
                      : 'text-ink-2 hover:text-wine'
                  }`}
                >
                  <span className="opacity-60 mr-1">{item.num}</span>
                  {item.label}
                </button>
              </li>
            ))}
          </ul>

          {/* Mobile toggle */}
          <button
            onClick={() => setIsMenuOpen((v) => !v)}
            className="md:hidden w-9 h-9 grid place-items-center text-ink focus:outline-none"
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            <div className="w-6 h-4 flex flex-col justify-between">
              <span className={`h-0.5 w-full bg-current transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-[7px]' : ''}`} />
              <span className={`h-0.5 w-full bg-current transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`} />
              <span className={`h-0.5 w-full bg-current transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-[7px]' : ''}`} />
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile full overlay */}
      <div
        className={`fixed inset-0 z-40 bg-paper md:hidden transition-all duration-500 ${
          isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="h-full flex flex-col justify-center px-8">
          {navItems.map((item, i) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="group text-left rule-b py-5 flex items-baseline gap-4"
              style={{
                transitionDelay: `${i * 40}ms`,
                transform: isMenuOpen ? 'translateY(0)' : 'translateY(12px)',
                opacity: isMenuOpen ? 1 : 0,
                transition: 'opacity 0.5s ease, transform 0.5s ease',
              }}
            >
              <span className="label text-wine">{item.num}</span>
              <span className="display text-4xl font-bold text-ink group-hover:text-wine transition-colors">
                {item.label}
              </span>
            </button>
          ))}
        </div>
      </div>
    </>
  );
};

export default FloatingNav;
