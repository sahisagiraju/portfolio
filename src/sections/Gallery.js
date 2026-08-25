import React from 'react';
import SectionHeader from '../components/SectionHeader';
import Reveal from '../components/Reveal';

import coxImg from '../assets/cox.png';
import havenImg from '../assets/haven.jpg';
import untImg from '../assets/unt.png';
import fannieMaeImg from '../assets/fanniemae.png';
import smuImg from '../assets/hacksmu.png';
import axxessImg from '../assets/axxess.jpg';

const photos = [
  { src: coxImg, caption: 'Orientation at Cox Headquarters — Dunwoody, GA', span: 'lg:col-span-7', ratio: 'aspect-[16/10]' },
  { src: fannieMaeImg, caption: 'Presenting Haven to Fannie Mae — Plano, TX', span: 'lg:col-span-5', ratio: 'aspect-[16/10]' },
  { src: havenImg, caption: 'Haven — Fannie Mae Challenge, 1st Place @ HackUTD 2023', span: 'lg:col-span-4', ratio: 'aspect-[4/3]' },
  { src: untImg, caption: 'UtiliTrack — CBRE 1st & Overall 3rd @ HackUNT 2024', span: 'lg:col-span-4', ratio: 'aspect-[4/3]' },
  { src: smuImg, caption: 'Park-EZ — SMU OIT Challenge, 1st Place @ HackSMU 2024', span: 'lg:col-span-4', ratio: 'aspect-[4/3]', objectPosition: 'center 30%' },
  { src: axxessImg, caption: 'Our first hackathon — Axxess Hackathon 2023', span: 'lg:col-span-12', ratio: 'aspect-[21/9]', objectPosition: 'center 30%' },
];

const Gallery = () => {
  return (
    <div className="max-w-6xl mx-auto px-5 md:px-8">
      <SectionHeader index="05 — Gallery" title="In the Field" note="Wins & moments" />

      <div className="mt-10 md:mt-14 grid grid-cols-1 lg:grid-cols-12 gap-4">
        {photos.map((photo, i) => (
          <Reveal key={i} delay={(i % 2) * 90} className={photo.span || 'lg:col-span-6'}>
            <figure className="group border border-rule bg-paper-2 p-2 h-full">
              <div className={`overflow-hidden ${photo.ratio}`}>
                <img
                  src={photo.src}
                  alt={photo.caption}
                  loading="lazy"
                  style={{ objectPosition: photo.objectPosition || 'center' }}
                  className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-[1.04]"
                />
              </div>
              <figcaption className="flex items-baseline gap-2 pt-2.5 px-0.5">
                <span className="label text-wine shrink-0">Fig. {String(i + 1).padStart(2, '0')}</span>
                <span className="label !tracking-normal normal-case text-ink-3 truncate">
                  {photo.caption}
                </span>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
