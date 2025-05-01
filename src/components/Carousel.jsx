import React, { useState } from "react";
import havenImg from '../assets/haven.jpg';
import untImg from '../assets/unt.png';
import fannieMaeImg from "../assets/fanniemae.png";
import smuImg from "../assets/hacksmu.png";
import axxessImg from "../assets/axxess.jpg";
// etc.


const images = [
  {
    src: havenImg,
    caption: "Haven: FannieMae Challenge 1st Place @ HackUTD 2023",
  },
  {
    src: untImg,
    caption: "UtiliTrack: CBRE Challenge 1st Place & Overall 3rd Place @ HackUNT 2024",
  }
];

export default function CarouselWithCaptions() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="w-full max-w-xl mx-auto relative font-inter mt-10">
      {/* Image */}
      <div className="overflow-hidden rounded-lg shadow-lg">
        <img
          src={images[currentIndex].src}
          alt={images[currentIndex].caption || `Slide ${currentIndex + 1}`}
          className="w-full h-64 object-cover transition-all duration-500"
        />
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
    </div>
  );
}
