import React from 'react';

const ContactMe = () => {
  const contactInfo = [
    {
      type: 'Email',
      value: 'your.email@example.com', // Replace with actual email
      href: 'mailto:your.email@example.com',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      type: 'Phone',
      value: '+1 (555) 123-4567', // Replace with actual phone
      href: 'tel:+15551234567',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
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
    {
      type: 'Devpost',
      value: 'devpost.com/sahisagiraju',
      href: 'https://devpost.com/sahisagiraju', // Replace with actual Devpost URL
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M6.002 1.61L0 12.004L6.002 22.39h11.996L24 12.004L17.998 1.61H6.002zm1.593 4.084h3.947c3.605 0 6.276 1.695 6.276 6.31 0 4.436-3.21 6.302-6.456 6.302H7.595V5.694zm2.517 2.449v7.714h1.241c2.646 0 3.862-1.55 3.862-3.861.009-2.569-1.096-3.853-3.767-3.853H10.112z"/>
        </svg>
      )
    }
  ];

  return (
    <section id="contact" className="py-20 px-4 bg-gray-900">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-white text-center mb-4">
          Contact Me
        </h2>
        <p className="text-gray-400 text-center mb-12 text-lg">
          Let's connect! Feel free to reach out through any of these channels.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {contactInfo.map((contact, index) => (
            <a
              key={index}
              href={contact.href}
              target={contact.type === 'Email' || contact.type === 'Phone' ? '_self' : '_blank'}
              rel={contact.type === 'Email' || contact.type === 'Phone' ? '' : 'noopener noreferrer'}
              className="group bg-gray-800/50 rounded-lg p-6 border border-gray-700/50 hover:border-blue-500/50 hover:bg-gray-800/80 transition-all duration-300 transform hover:scale-105"
            >
              <div className="flex items-center space-x-4">
                <div className="text-blue-400 group-hover:text-blue-300 transition-colors duration-300">
                  {contact.icon}
                </div>
                <div>
                  <h3 className="text-white font-semibold text-lg group-hover:text-blue-300 transition-colors duration-300">
                    {contact.type}
                  </h3>
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                    {contact.value}
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-gray-400">
            Open to new opportunities and collaborations!
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
