import React from 'react';
import ExperienceCard from '../components/ExperienceCard';
import SectionHeader from '../components/SectionHeader';
import Reveal from '../components/Reveal';

const experiences = [
  {
    company: 'Cox Automotive',
    position: 'Software Engineer I',
    startDate: 'January 2026',
    endDate: 'Present',
    location: 'North Hills, NY',
    technologies: ['Django', 'TypeScript', 'AWS', 'S3', 'RDS', 'DynamoDB', 'New Relic', 'Splunk', 'Clumio'],
    description: 'Full-time Software Engineer on Point Predictive integrations. Shipped Django and TypeScript work for BorrowerCheck that generated $50K+ in revenue, improved production observability with Splunk queries and New Relic dashboards for API failures and latency, and hardened disaster recovery by validating S3, RDS, and DynamoDB backups and documenting Clumio restore steps.',
    logo: require('../assets/cai.png'),
  },
  {
    company: 'Cox Automotive',
    position: 'Software Engineering Intern',
    startDate: 'June 2025',
    endDate: 'August 2025',
    location: 'North Hills, NY',
    technologies: ['Python', 'ServiceNow API', 'Rally API', 'GitHub API', 'AWS Lambda', 'DynamoDB', 'Secrets Manager', 'Terraform', 'IAM'],
    description: 'Built a modular Slack bot in Python integrating the ServiceNow and Rally APIs to automate the change-request workflow, cutting handling time by 95%. Wrote message parsing, threaded Slack formatting, and DynamoDB-based caching; added GitHub-API changelog syncing to Rally tickets and reaction-based workflow signals. Provisioned Lambda, DynamoDB, SSM, and Secrets Manager via Terraform with role-based IAM and environment-specific configs.',
    logo: require('../assets/cai.png'),
  },
  {
    company: 'Texas Instruments',
    position: 'Senior Capstone Project',
    startDate: 'January 2025',
    endDate: 'May 2025',
    location: 'Remote',
    technologies: ['JavaScript', 'ZCL Advanced Platform', 'Zigbee', 'Handlebars.js', 'CC23xx Microcontrollers'],
    description: 'Enhanced TI’s Zigbee cluster configuration tooling by extending template output logic and integrating new device profiles. Built a code-generation system with Handlebars.js and custom JavaScript helpers to automate C-based Zigbee driver templates for CC23xx chipsets, and contributed to the open-source ZCL Advanced Platform (ZAP), optimizing embedded workflows for lights, locks, and other Zigbee hardware.',
    logo: require('../assets/ti.jpg'),
  },
  {
    company: 'All Ears Autism Services',
    position: 'Project Lead & Consultant · Consult Your Community',
    startDate: 'January 2025',
    endDate: 'May 2025',
    location: 'Richardson, TX',
    technologies: ['React', 'GitHub Pages', 'GitHub Actions', 'Figma', 'Jest', 'Agile'],
    description: 'Led the design and development of the client’s current production website for a non-profit providing therapy and support for children with autism — built in React and deployed on GitHub Pages. Identified $6K+ in annual savings by auditing and optimizing the client’s technology subscriptions, and expanded outreach by launching LinkedIn and Alignable assets and reorganizing team roles to improve delivery. https://www.allearsautismservices.org/',
    logo: require('../assets/hank.png'),
  },
  {
    company: 'Tapsta',
    position: 'Software Engineering Intern',
    startDate: 'October 2024',
    endDate: 'January 2025',
    location: 'Remote',
    technologies: ['React Native', 'TypeScript', 'SCSS', 'Supabase', 'Python', 'Tailwind', 'Amazon SES'],
    description: 'Hardened the Supabase backend with custom-token email verification via AWS SES, strengthening security and onboarding. Rebuilt and optimized the iOS app in React Native and Tailwind — driving a 98% increase in average likes and a 248% increase in daily posts — and researched ML applications while restyling the platform into a polished, social-media-ready product.',
    logo: require('../assets/tapsta.jpeg'),
  },
  {
    company: 'HackUTD',
    position: 'Logistics Coordinator',
    startDate: 'January 2024',
    endDate: 'Present',
    location: 'Richardson, TX',
    technologies: ['Leadership', 'Event Planning', 'Vendor Negotiation', 'Operations', 'Teamwork'],
    description: 'Coordinate logistics for Texas’s largest 24-hour hackathon, serving 1,500+ participants. Partner with vendors and design teams on merchandise, negotiate with restaurants for quality meals at competitive prices, and oversee efficient food and swag distribution.',
    logo: require('../assets/hack.png'),
  },
];

const ExperienceGallery = () => {
  return (
    <div className="max-w-6xl mx-auto px-5 md:px-8">
      <SectionHeader index="02 — Work" title="Experience" note="Where I've built" />

      <Reveal className="mt-10 md:mt-14">
        <div className="rule-t">
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={index}
              {...experience}
              num={String(index + 1).padStart(2, '0')}
            />
          ))}
        </div>
        <p className="label text-ink-3 mt-5">Tap a row to expand.</p>
      </Reveal>
    </div>
  );
};

export default ExperienceGallery;
