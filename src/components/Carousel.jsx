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

  const prev = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
        setIsTransitioning(false);
      }, 250);
    }
  };

  return (
    <div className="w-full max-w-xl mx-auto relative font-inter mt-10">
      {/* Image */}
      <div className="overflow-hidden rounded-lg shadow-lg ring-2 ring-accent ring-opacity-50 shadow-accent/20 relative">
        <div 
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((image, index) => (
            <img
              key={index}
              src={image.src}
              alt={image.caption || `Slide ${index + 1}`}
              className={`w-full h-64 object-cover flex-shrink-0 ${
                image.noAnimation ? '' : 'transition-opacity duration-300'
              }`}
              style={{
                objectPosition: image.objectPosition || 'center center'
              }}
            />
          ))}
        </div>
      </div>

      {/* Caption */}
      <p className="text-center text-gray-200 mt-4 text-base sm:text-lg px-4">
        {images[currentIndex].caption}
      </p>

      {/* Navigation */}
      <div className="flex justify-between items-center mt-6 px-4">
        <button
          onClick={prev}
          className="bg-accent text-white px-4 py-2 rounded hover:bg-opacity-80 transition cursor-pointer"
        >
          Prev
        </button>

        <div className="flex items-center space-x-2">
          {images.map((_, index) => (
            <div
              key={index}
              className={`w-3 h-3 rounded-full transition ${
                index === currentIndex ? "bg-accent" : "bg-gray-400"
              }`}
            />
          ))}
        </div>

        <button
          onClick={next}
          className="bg-accent text-white px-4 py-2 rounded hover:bg-opacity-80 transition cursor-pointer"
        >
          Next
        </button>
      </div>

      {/* Copyright */}
    </div>
  );
}
