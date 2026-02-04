import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const ContactMe = () => {
  const [titleRef, titleVisible] = useScrollAnimation({ threshold: 0.2 });

  // Create refs and visibility states for all contact cards at the top level
  const [cardRef0, cardVisible0] = useScrollAnimation({ threshold: 0.1 });
  const [cardRef1, cardVisible1] = useScrollAnimation({ threshold: 0.1 });

  const cardRefs = [cardRef0, cardRef1];
  const cardVisibles = [cardVisible0, cardVisible1];

  const contactInfo = [
    {
      type: 'Email',
      value: 'sahithedev@gmail.com', // Replace with actual email
      href: 'sahithedev@gmail.com',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      type: 'LinkedIn',
      value: 'linkedin.com/in/sahishnu-sagiraju',
      href: 'https://www.linkedin.com/in/sahishnu-sagiraju',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      )
    },

  ];

  return (
    <section id="contact" className="py-20 px-4 bg-black relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent-dark/10 via-black to-accent/10 animate-gradient-shift" style={{ backgroundSize: '200% 200%' }} />

      {/* Top accent line */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent"></div>

      <div className="max-w-4xl mx-auto relative z-10">
        <h2
          ref={titleRef}
          className={`text-4xl font-bold text-gray-100 text-center mb-4 transition-all duration-1000 ${
            titleVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
          }`}
        >
          Contact Me
        </h2>
        <p
          className={`text-gray-200 text-center mb-12 text-lg transition-all duration-1000 delay-200 ${
            titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
          }`}
        >
          Let's connect! Feel free to reach out through any of these channels.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {contactInfo.map((contact, index) => (
              <a
                key={index}
                ref={cardRefs[index]}
                href={contact.href}
                target={contact.type === 'Email' || contact.type === 'Phone' ? '_self' : '_blank'}
                rel={contact.type === 'Email' || contact.type === 'Phone' ? '' : 'noopener noreferrer'}
                className={`group bg-gradient-to-br from-gray-900/95 to-black/95 rounded-xl p-6
                  border border-accent/30 backdrop-blur-sm hover:border-accent/70
                  hover:shadow-[0_0_50px_rgba(122,51,80,0.5)] transition-all duration-500
                  transform hover:scale-105 hover:-translate-y-2 relative overflow-hidden ${
                    cardVisibles[index] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                {/* Animated gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-accent-dark/10
                  opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="flex items-center space-x-4 relative z-10">
                  <div className="text-accent-light group-hover:text-accent transition-all duration-300
                    transform group-hover:scale-110 group-hover:rotate-6">
                    {contact.icon}
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-lg group-hover:text-accent transition-colors duration-300">
                      {contact.type}
                    </h3>
                    <p className="text-gray-200 group-hover:text-white transition-colors duration-300 font-medium">
                      {contact.value}
                    </p>
                  </div>
                </div>
              </a>
          ))}
        </div>

        <div
          className={`mt-12 text-center transition-all duration-1000 delay-500 ${
            titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
          }`}
        >
          <p className="text-gray-200 text-lg font-medium">
            Open to new opportunities and collaborations!
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
