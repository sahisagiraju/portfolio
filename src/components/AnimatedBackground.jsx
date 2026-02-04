import React, { useEffect, useRef, useState } from 'react';

const AnimatedBackground = () => {
  const containerRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [ripples, setRipples] = useState([]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    const handleClick = (e) => {
      const newRipple = {
        id: Date.now(),
        x: e.clientX,
        y: e.clientY,
      };
      setRipples(prev => [...prev, newRipple]);

      setTimeout(() => {
        setRipples(prev => prev.filter(r => r.id !== newRipple.id));
      }, 2000);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('click', handleClick);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('click', handleClick);
    };
  }, []);

  return (
    <div ref={containerRef} className="fixed inset-0 pointer-events-none overflow-hidden -z-20">
      {/* Mouse follower gradient */}
      <div
        className="absolute w-[600px] h-[600px] rounded-full opacity-30 transition-all duration-700 ease-out"
        style={{
          background: 'radial-gradient(circle, rgba(122, 51, 80, 0.6) 0%, rgba(122, 51, 80, 0.3) 30%, transparent 70%)',
          left: `${mousePos.x}px`,
          top: `${mousePos.y}px`,
          transform: 'translate(-50%, -50%)',
        }}
      />

      {/* Click ripples */}
      {ripples.map(ripple => (
        <div
          key={ripple.id}
          className="absolute w-4 h-4 rounded-full animate-ping"
          style={{
            left: `${ripple.x}px`,
            top: `${ripple.y}px`,
            background: 'rgba(168, 72, 112, 0.8)',
            animationDuration: '2s',
          }}
        />
      ))}

      {/* Floating orbs with enhanced animation */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float"></div>
      <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-accent-light/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s', animationDuration: '8s' }}></div>
      <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-accent-dark/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s', animationDuration: '10s' }}></div>
      <div className="absolute bottom-1/3 right-1/3 w-64 h-64 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s', animationDuration: '7s' }}></div>
      <div className="absolute top-2/3 left-1/2 w-56 h-56 bg-accent-light/15 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s', animationDuration: '9s' }}></div>

      {/* Animated grid pattern with pulse effect */}
      <div className="absolute inset-0 opacity-[0.08] animate-pulse" style={{
        backgroundImage: `linear-gradient(rgba(122, 51, 80, 0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(122, 51, 80, 0.8) 1px, transparent 1px)`,
        backgroundSize: '50px 50px',
        animationDuration: '4s',
      }}></div>

      {/* Diagonal animated lines */}
      <div className="absolute inset-0 opacity-[0.04]" style={{
        backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(122, 51, 80, 1) 35px, rgba(122, 51, 80, 1) 36px)`,
      }}></div>

      {/* Moving spotlight effect */}
      <div
        className="absolute w-[800px] h-[800px] rounded-full opacity-20 blur-3xl transition-all duration-1000 ease-out"
        style={{
          background: 'radial-gradient(circle, rgba(168, 72, 112, 0.5) 0%, transparent 70%)',
          left: `${mousePos.x}px`,
          top: `${mousePos.y}px`,
          transform: 'translate(-50%, -50%)',
        }}
      />

      {/* Radial gradient vignette */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-black/60"></div>

      {/* Corner accents */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-accent/15 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '5s' }}></div>
      <div className="absolute top-0 right-0 w-64 h-64 bg-accent-light/15 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '6s', animationDelay: '1s' }}></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent-dark/15 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '7s', animationDelay: '2s' }}></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-accent/15 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '5.5s', animationDelay: '0.5s' }}></div>
    </div>
  );
};

export default AnimatedBackground;
