import React, { useState } from "react";
import coxImg from '../assets/cox.png';
import havenImg from '../assets/haven.jpg';
import untImg from '../assets/unt.png';
import fannieMaeImg from "../assets/fanniemae.png";
import smuImg from "../assets/hacksmu.png";
import axxessImg from "../assets/axxess.jpg";

const images = [
  {
    src: coxImg,
    caption: "Orientation at Cox Headquarters in Dunwoody, GA",
    noAnimation: true,
  },
  {
    src: havenImg,
    caption: "Haven: FannieMae Challenge 1st Place @ HackUTD 2023",
  },
  {
    src: untImg,
    caption: "UtiliTrack: CBRE Challenge 1st Place & Overall 3rd Place @ HackUNT 2024",
  },
  {
    src: fannieMaeImg,
    caption: "Presenting our project, Haven, to Fannie Mae Headquarters in Plano, TX",
  },
  {
    src: smuImg,
    caption: "Park-EZ: SMU OIT Challenge 1st Place @ HackSMU 2024",
    objectPosition: "center 30%",
    noAnimation: true,
  },
  {
    src: axxessImg,
    caption: "Our First Hackathon: Axxess Hackathon 2023",
    objectPosition: "center 30%",
    noAnimation: true,
  }
];

export default function CarouselWithCaptions() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const next = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
        setIsTransitioning(false);
      }, 250);
    }
  };

  // Auto-scroll every 20 seconds
  React.useEffect(() => {
    const interval = setInterval(() => {
      if (!isTransitioning) {
        setIsTransitioning(true);
        setTimeout(() => {
          setCurrentIndex((prev) => (prev + 1) % images.length);
          setIsTransitioning(false);
        }, 250);
      }
    }, 20000);

    return () => clearInterval(interval);
  }, [isTransitioning]);

  return (
    <div className="w-full max-w-xl mx-auto relative font-inter mt-10 animate-fade-in">
      {/* Image */}
      <div className="overflow-hidden rounded-xl shadow-lg ring-2 ring-accent/50 shadow-[0_0_30px_rgba(122,51,80,0.3)]
        hover:shadow-[0_0_60px_rgba(122,51,80,0.6)] hover:ring-accent transition-all duration-500 relative group">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((image, index) => (
            <div key={index} className="w-full h-64 flex-shrink-0 relative overflow-hidden">
              <img
                src={image.src}
                alt={image.caption || `Slide ${index + 1}`}
                className={`w-full h-full object-cover ${
                  image.noAnimation ? '' : 'transition-transform duration-500 group-hover:scale-105'
                }`}
                style={{
                  objectPosition: image.objectPosition || 'center center'
                }}
              />
            </div>
          ))}
        </div>
        {/* Gradient overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-accent/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      </div>

      {/* Caption */}
      <p className="text-center text-white mt-4 text-base sm:text-lg px-4 font-medium transition-all duration-300 hover:text-accent">
        {images[currentIndex].caption}
      </p>

      {/* Navigation Dots */}
      <div className="flex justify-center items-center mt-6 px-4">
        <div className="flex items-center space-x-3">
          {images.map((_, index) => (
            <div
              key={index}
              className={`rounded-full transition-all duration-300 cursor-pointer ${
                index === currentIndex
                  ? "w-4 h-4 bg-accent shadow-[0_0_15px_rgba(122,51,80,1)] scale-110"
                  : "w-3 h-3 bg-gray-500 hover:bg-gray-400 hover:scale-110"
              }`}
              onClick={() => !isTransitioning && setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>

      {/* Copyright */}
    </div>
  );
}
