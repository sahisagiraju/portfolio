import React from 'react';
import ExperienceCard from './ExperienceCard';

const experiences = [
  {
    company: 'Cox Automotive',
    position: 'Software Engineering Intern',
    startDate: 'June 2025',
    endDate: 'August 2025',
    location: 'North Hills, NY',
    technologies: ['Terraform', 'AWS DynamoDB', 'AWS IAM', 'AWS API Gateway', 'Docker', 'PostgreSQL'],
    description: 'At Cox, I developed a modular Slack bot in Python that integrated with both the ServiceNow and Rally APIs to automate the change request workflow. This automation reduced the time required to handle change requests by 95%. I also wrote Python scripts for message parsing, threaded Slack message formatting, and DynamoDB-based caching. Beyond core functionality, I ideated and implemented new features, such as using the GitHub API to automatically update Rally tickets with changelog entries and adding Slackbot message reaction features to improve workflow visibility. On the infrastructure side, I provisioned AWS services including Lambda, DynamoDB, SSM, and Secrets Manager, all managed through Terraform with role-based IAM and environment-specific configurations.',
    logo: require('../assets/cox.png')
  },
  {
    company: 'Texas Instruments',
    position: 'Software Engineer',
    startDate: 'January 2025',
    endDate: 'May 2025',
    location: 'Remote',
    technologies: ['Javascript', 'ZCL Advanced Platform', 'Zigbee', 'Handlebars.js', 'CC23xx Microcontrollers'],
    description: 'During my time at Texas Instruments (TI), I enhanced the company’s Zigbee cluster configuration tooling by extending template output logic and integrating new Zigbee device profiles. I built a code generation system using Handlebars.js and custom JavaScript helpers to automate the creation of C-based Zigbee driver templates for CC23xx chipsets. I also contributed to the open-source ZCL Advanced Platform (ZAP) tool, where I optimized embedded software workflows for devices such as lights, locks, and other Zigbee-enabled hardware.',
    logo: require('../assets/fanniemae.png')
  },
  {
    company: 'All Ears Autism',
    position: 'Project Lead, Consultant',
    startDate: 'January 2025',
    endDate: 'May 2025',
    location: 'Remote',
    technologies: ['React', 'Figma', 'Github Actions', 'Github Pages', 'Jester', 'Agile'],
    description: 'Conducted research in machine learning and artificial intelligence. Developed predictive models using various ML algorithms. Analyzed large datasets and presented findings to faculty and peers. Published research papers and presented at academic conferences. Mentored undergraduate students in research methodologies.',
    logo: require('../assets/unt.png')
  },
  {
    company: 'Tapsta',
    position: 'Software Engineering Intern',
    startDate: 'October 2024',
    endDate: 'January 2025',
    location: 'Remote',
    technologies: ['React', 'TypeScript', 'SCSS', 'Supabase', 'Python', 'Tailwind', 'Amazon SES'],
    description: 'As a Software Engineering Intern at Tapsta, I enhanced the Supabase backend by automating email verification with custom token generation and AWS SES integration, which strengthened both security and user onboarding. On the front end, I developed and optimized the iOS app using React Native and Tailwind, improvements that led to a 98% increase in average likes and a 248% increase in daily posts. Additionally, I researched machine learning applications to improve data collection and conducted market research and UI analysis to restyle the platform into a more professional, social-media–ready product.',
    logo: require('../assets/unt.png')
  },
  {
    company: 'HackUTD',
    position: 'Logistics Coordinator',
    startDate: 'January 2024',
    endDate: 'Present',
    location: 'Richardson, TX',
    technologies: ['Organization', 'Leadership', 'Event Planning', 'Communication', 'Teamwork'],
    description: 'Coordinated logistics for Texas’s largest 24-hour hackathon, serving 1,500+ participants. Partnered with vendors and design teams to produce merchandise, negotiated with restaurants to secure quality meals at competitive prices, and oversaw efficient food and swag distribution.',
    logo: require('../assets/unt.png')
  }
];

const ExperienceGallery = () => (
  <section className="bg-gray-900 py-16 px-4 transition-all duration-1000">
    <div className="max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-white mb-8 border-b-2 border-accent pb-2">Experience</h2>
      <div className="space-y-4">
        {experiences.map((experience, index) => (
          <ExperienceCard key={index} {...experience} />
        ))}
      </div>
    </div>
  </section>
);

export default ExperienceGallery;
