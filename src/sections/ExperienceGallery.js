import React from 'react';
import ExperienceCard from '../components/ExperienceCard';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const experiences = [
  {
    company: 'Cox Automotive',
    position: 'Software Engineering I',
    startDate: 'June 2025',
    endDate: 'Present',
    location: 'North Hills, NY',
    technologies: ['AWS Step Functions', 'AWS Lambda', 'AWS AppSync', 'TypeScript', 'Stencil.js', 'Python', 'Django', 'Terraform'],
    description: 'Currently working as a Software Engineer I at Cox Automotive.',
    logo: require('../assets/cai.png')
  },
  {
    company: 'Cox Automotive',
    position: 'Software Engineering Intern',
    startDate: 'June 2025',
    endDate: 'August 2025',
    location: 'North Hills, NY',
    technologies: ['Terraform', 'AWS DynamoDB', 'AWS IAM', 'AWS API Gateway', 'Docker', 'PostgreSQL'],
    description: 'At Cox, I developed a modular Slack bot in Python that integrated with both the ServiceNow and Rally APIs to automate the change request workflow. This automation reduced the time required to handle change requests by 95%. I also wrote Python scripts for message parsing, threaded Slack message formatting, and DynamoDB-based caching. Beyond core functionality, I ideated and implemented new features, such as using the GitHub API to automatically update Rally tickets with changelog entries and adding Slackbot message reaction features to improve workflow visibility. On the infrastructure side, I provisioned AWS services including Lambda, DynamoDB, SSM, and Secrets Manager, all managed through Terraform with role-based IAM and environment-specific configurations.',
    logo: require('../assets/cai.png')
  },
  {
    company: 'Texas Instruments',
    position: 'Software Engineer',
    startDate: 'January 2025',
    endDate: 'May 2025',
    location: 'Remote',
    technologies: ['Javascript', 'ZCL Advanced Platform', 'Zigbee', 'Handlebars.js', 'CC23xx Microcontrollers'],
    description: 'During my time at Texas Instruments (TI), I enhanced the company’s Zigbee cluster configuration tooling by extending template output logic and integrating new Zigbee device profiles. I built a code generation system using Handlebars.js and custom JavaScript helpers to automate the creation of C-based Zigbee driver templates for CC23xx chipsets. I also contributed to the open-source ZCL Advanced Platform (ZAP) tool, where I optimized embedded software workflows for devices such as lights, locks, and other Zigbee-enabled hardware.',
    logo: require('../assets/ti.jpg')
  },
  {
    company: 'All Ears Autism Services (Consult Your Community)',
    position: 'Project Lead, Consultant',
    startDate: 'January 2025',
    endDate: 'May 2025',
    location: 'Remote',
    technologies: ['React', 'Figma', 'Github Actions', 'Github Pages', 'Jester', 'Agile'],
    description: 'Performed an audit for All Ears Autism Services, a non-profit organization that provides therapy and support for children with autism. Led a team of 4 in redesigning and developing a new website using React, improving user experience and accessibility. Conducted stakeholder interviews to gather requirements and ensure the website met the needs of the organization. Implemented CI/CD pipelines using GitHub Actions to automate testing and deployment, ensuring a smooth launch process. The new website enhanced the organization’s online presence, making it easier for families to access resources and support. Audit also captured unnecessary spendings, saving the client over $6,000 annually (in addition to savings from the new website). https://www.allearsautismservices.org/',
    logo: require('../assets/hank.png')
  },
  {
    company: 'Tapsta',
    position: 'Software Engineering Intern',
    startDate: 'October 2024',
    endDate: 'January 2025',
    location: 'Remote',
    technologies: ['React', 'TypeScript', 'SCSS', 'Supabase', 'Python', 'Tailwind', 'Amazon SES'],
    description: 'As a Software Engineering Intern at Tapsta, I enhanced the Supabase backend by automating email verification with custom token generation and AWS SES integration, which strengthened both security and user onboarding. On the front end, I developed and optimized the iOS app using React Native and Tailwind, improvements that led to a 98% increase in average likes and a 248% increase in daily posts. Additionally, I researched machine learning applications to improve data collection and conducted market research and UI analysis to restyle the platform into a more professional, social-media–ready product.',
    logo: require('../assets/tapsta.jpeg')
  },
  {
    company: 'HackUTD',
    position: 'Logistics Coordinator',
    startDate: 'January 2024',
    endDate: 'Present',
    location: 'Richardson, TX',
    technologies: ['Organization', 'Leadership', 'Event Planning', 'Communication', 'Teamwork'],
    description: 'Coordinated logistics for Texas’s largest 24-hour hackathon, serving 1,500+ participants. Partnered with vendors and design teams to produce merchandise, negotiated with restaurants to secure quality meals at competitive prices, and oversaw efficient food and swag distribution.',
    logo: require('../assets/hack.png')
  }
];

const ExperienceGallery = () => {
  const [titleRef, titleVisible] = useScrollAnimation({ threshold: 0.2 });

  // Create refs and visibility states for all experience cards at the top level
  const [cardRef0, cardVisible0] = useScrollAnimation({ threshold: 0.1 });
  const [cardRef1, cardVisible1] = useScrollAnimation({ threshold: 0.1 });
  const [cardRef2, cardVisible2] = useScrollAnimation({ threshold: 0.1 });
  const [cardRef3, cardVisible3] = useScrollAnimation({ threshold: 0.1 });
  const [cardRef4, cardVisible4] = useScrollAnimation({ threshold: 0.1 });

  const cardRefs = [cardRef0, cardRef1, cardRef2, cardRef3, cardRef4];
  const cardVisibles = [cardVisible0, cardVisible1, cardVisible2, cardVisible3, cardVisible4];

  return (
    <section className="bg-black py-16 px-4 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-black to-accent-dark/5 animate-gradient-shift" style={{ backgroundSize: '200% 200%' }} />

      {/* Accent lines */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <h2
          ref={titleRef}
          className={`text-4xl font-bold text-gray-100 mb-8 border-b-2 border-accent/50 pb-2 transition-all duration-1000 ${
            titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          Experience
        </h2>
        <div className="space-y-4">
          {experiences.map((experience, index) => (
              <div
                key={index}
                ref={cardRefs[index]}
                className={`transition-all duration-700 ${
                  cardVisibles[index] ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <ExperienceCard {...experience} />
              </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceGallery;
