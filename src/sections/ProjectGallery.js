import React from 'react';
import ProjectCard from '../components/ProjectCard';
import SectionHeader from '../components/SectionHeader';
import Reveal from '../components/Reveal';

const personalProject = {
  title: 'Nudge',
  description:
    'A social habit-tracking iOS app where friends nudge each other to build better routines. Built natively in SwiftUI with a Supabase/PostgreSQL backend and row-level security, delivering sub-second social feeds, messaging, and leaderboards. Habit completion is automated across five HealthKit streams via background sync, a WidgetKit Home Screen widget, and real-time nudges over APNs — with privacy-first controls over what friends can see.',
  ctaLabel: 'Request beta access',
  ctaScrollTo: 'contact',
  specs: [
    ['Platform', 'iOS · SwiftUI'],
    ['Backend', 'Supabase · PostgreSQL'],
    ['Health', 'HealthKit · WidgetKit'],
    ['Realtime', 'APNs push'],
    ['Status', 'Private beta'],
    ['Team', 'Solo'],
  ],
};

const hackathonProjects = [
  {
    title: 'RACE',
    description: 'Agentic F1 strategy platform that streams race telemetry through Kafka, Spark, and Redis, then orchestrates 20+ Gemini agents — with ElevenLabs speech and emotion analysis — to surface real-time strategy calls.',
    link: 'https://devpost.com/software/yo-6yk378',
    image: 'https://d112y698adiu2z.cloudfront.net/photos/production/software_thumbnail_photos/003/861/749/datas/medium.png',
    tags: ['HackTX', 'Oct 2025'],
  },
  {
    title: 'SideQuest',
    description: 'A social-location game that delivers personalized daily quests, encouraging players to explore the real world and connect with nearby users.',
    link: 'https://devpost.com/software/sidequest-q5oudj',
    image: 'https://d112y698adiu2z.cloudfront.net/photos/production/software_thumbnail_photos/003/821/443/datas/medium.jpeg',
    tags: ['HackUTA 7', 'Oct 2025', 'Solo'],
  },
  {
    title: 'Routed',
    description: 'A trip-planning platform that combines travel recommendations with automated logistics, using voice AI to discover locations, reserve tables, and handle bookings.',
    link: 'https://devpost.com/software/routed-5czf38',
    image: 'https://d112y698adiu2z.cloudfront.net/photos/production/software_thumbnail_photos/003/740/881/datas/medium.png',
    tags: ['Hack the North', 'Sep 2025'],
  },
  {
    title: 'EyeGotchu',
    description: 'Real-time eye-tracking and emotion-detection tool that analyzes where viewers focus and how they react to marketing content.',
    link: 'https://devpost.com/software/s-q4x98n',
    image: 'https://d112y698adiu2z.cloudfront.net/photos/production/software_photos/003/384/398/datas/medium.png',
    tags: ['HackAI', 'Apr 2025', 'Solo'],
  },
  {
    title: 'FinSim',
    description: 'Historical market simulator that models portfolio performance across 2008–2025 using real market shocks, Gemini-generated scenarios, and SVG analytics. Won 1st place in the PIMCO Challenge.',
    link: 'https://devpost.com/software/finsim-d2j8be',
    hasWinner: true,
    tags: ['TAMUhack', 'Jan 2025', 'PIMCO 1st'],
  },
  {
    title: 'Paralaví',
    description: 'An AI-driven app that optimizes grocery shopping by comparing store prices and predicting future expenses.',
    link: 'https://devpost.com/software/paralavi',
    image: 'https://d112y698adiu2z.cloudfront.net/photos/production/software_thumbnail_photos/003/112/590/datas/medium.png',
    tags: ['HackTX', 'Nov 2024'],
  },
  {
    title: 'UtiliTrack',
    description: 'Automates maintenance scheduling, tracks customer feedback, and monitors energy usage to help businesses reduce costs.',
    link: 'https://devpost.com/software/utilitrack',
    image: 'https://d112y698adiu2z.cloudfront.net/photos/production/software_photos/003/103/365/datas/medium.png',
    hasWinner: true,
    wins: 2,
    tags: ['HackUNT', 'Oct 2024', 'CBRE 1st · Overall 3rd'],
  },
  {
    title: 'Checkpoint',
    description: 'License plate scanning system that verifies authorized vehicles during school pickups and sends real-time notifications to teachers and parents.',
    link: 'https://devpost.com/software/checkpoint-z4vt73',
    image: 'https://d112y698adiu2z.cloudfront.net/photos/production/software_thumbnail_photos/003/073/490/datas/medium.png',
    tags: ['HackUTA 6', 'Oct 2024'],
  },
  {
    title: 'Park-EZ',
    description: 'Uses computer vision to detect accessible parking spots in real-time, providing instant availability updates.',
    link: 'https://devpost.com/software/park-ez',
    image: 'https://d112y698adiu2z.cloudfront.net/photos/production/software_thumbnail_photos/003/062/663/datas/medium.png',
    hasWinner: true,
    tags: ['HackSMU VI', 'Oct 2024'],
  },
  {
    title: 'DermaSkan',
    description: 'AI-powered skin condition analysis app that lets users photograph skin issues and receive instant diagnostic suggestions and treatment guidance.',
    link: 'https://devpost.com/software/dermaskan',
    image: 'https://d112y698adiu2z.cloudfront.net/photos/production/software_thumbnail_photos/002/737/265/datas/medium.jpeg',
    tags: ['TAMUhack X', 'Jan 2024'],
  },
  {
    title: 'Haven',
    description: 'Transforms house hunting with AI-driven personalized home matches and validation scores for buyers.',
    link: 'https://devpost.com/software/haven-yxpujc',
    image: 'https://d112y698adiu2z.cloudfront.net/photos/production/software_photos/002/658/031/datas/medium.png',
    hasWinner: true,
    tags: ['HackUTD X', 'Nov 2023'],
  },
  {
    title: 'ToolboxPro.tech',
    description: 'A platform for construction workers to share experiences and find support through real-time chatting and AI-assisted conversations.',
    link: 'https://devpost.com/software/toolboxpro-tech',
    image: 'https://d112y698adiu2z.cloudfront.net/photos/production/software_photos/002/635/530/datas/medium.gif',
    tags: ['HackTX', 'Oct 2023'],
  },
  {
    title: 'PEAK',
    description: 'A home energy monitoring system that uses ML to track power usage, predict appliance maintenance needs, and reduce electricity costs.',
    link: 'https://devpost.com/software/peak-go43u9',
    image: 'https://d112y698adiu2z.cloudfront.net/photos/production/software_thumbnail_photos/002/615/362/datas/medium.png',
    tags: ['HackUTA', 'Oct 2023'],
  },
  {
    title: 'Citrus',
    description: 'AI-powered predictive maintenance tool that helps prevent machine failures by analyzing sensor data.',
    link: 'https://devpost.com/software/citrus-rbz8xs',
    image: 'https://d112y698adiu2z.cloudfront.net/photos/production/software_thumbnail_photos/002/595/131/datas/medium.png',
    hasWinner: true,
    tags: ['HackSMU V', 'Sep 2023'],
  },
  {
    title: 'ChatPHD.co',
    description: 'An AI-based symptom detector that provides accurate disease predictions and health advice.',
    link: 'https://devpost.com/software/chatphd-co',
    image: 'https://d112y698adiu2z.cloudfront.net/photos/production/software_photos/002/437/410/datas/medium.png',
    tags: ['Axxess Hackathon', 'Apr 2023'],
  },
  {
    title: 'Pocket Lawyer',
    description: 'A mobile app that transcribes police interactions, identifies relevant laws, and surfaces summaries to improve legal literacy and accountability.',
    link: 'https://devpost.com/software/pocket-lawyer-kupzes',
    image: 'https://d112y698adiu2z.cloudfront.net/photos/production/software_photos/002/453/873/datas/medium.png',
    tags: ['HackAI', 'Apr 2023'],
  },
];

const winCount = hackathonProjects.reduce(
  (n, p) => n + (p.wins || (p.hasWinner ? 1 : 0)),
  0,
);

const ProjectGallery = () => {
  return (
    <div className="max-w-6xl mx-auto px-5 md:px-8">
      <SectionHeader
        index="03 — Projects"
        title="Selected Work"
        note={`${hackathonProjects.length + 1} builds · ${winCount} wins`}
      />

      {/* Featured personal project */}
      <Reveal className="mt-10 md:mt-14">
        <span className="label text-ink-3 block mb-4">Featured — Personal</span>
        <div className="border border-wine-dark bg-wine-dark text-paper grid md:grid-cols-3">
          <div className="md:col-span-2 p-7 md:p-10 flex flex-col">
            <div className="flex items-center gap-3">
              <h3 className="display text-5xl md:text-6xl font-bold">{personalProject.title}</h3>
              <span className="label bg-paper text-wine-dark px-2 py-1">
                In development
              </span>
            </div>
            <p className="text-paper/70 leading-relaxed mt-5 max-w-xl text-[15px]">
              {personalProject.description}
            </p>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById(personalProject.ctaScrollTo)?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="label text-paper hover:text-paper/70 mt-8 inline-flex items-center gap-2 self-start border-b border-paper/50 pb-1 transition-colors"
            >
              {personalProject.ctaLabel}
              <span aria-hidden className="text-paper">↗</span>
            </a>
          </div>
          <div className="md:col-span-1 border-t md:border-t-0 md:border-l border-paper/15 p-7 md:p-10 flex flex-col justify-center gap-0">
            {personalProject.specs.map(([k, v], i) => (
              <div key={i} className="flex items-center justify-between py-2.5 border-b border-paper/10 last:border-0">
                <span className="label text-paper/65">{k}</span>
                <span className="label text-paper">{v}</span>
              </div>
            ))}
          </div>
        </div>
      </Reveal>

      {/* Hackathon grid */}
      <Reveal className="mt-14">
        <span className="label text-ink-3 block mb-4">Hackathons — {hackathonProjects.length} projects</span>
      </Reveal>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {hackathonProjects.map((project, index) => (
          <Reveal key={index} delay={(index % 3) * 80}>
            <ProjectCard {...project} num={String(index + 1).padStart(2, '0')} />
          </Reveal>
        ))}
      </div>
    </div>
  );
};

export default ProjectGallery;
