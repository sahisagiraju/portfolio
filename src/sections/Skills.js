import React from 'react';
import SectionHeader from '../components/SectionHeader';
import Reveal from '../components/Reveal';

const skillCategories = [
  {
    title: 'Languages',
    skills: ['Python', 'TypeScript', 'JavaScript', 'Swift', 'Java', 'C++', 'C', 'SQL'],
  },
  {
    title: 'Frameworks',
    skills: ['React', 'Next.js', 'React Native', 'SwiftUI', 'Stencil.js', 'FastAPI', 'Django', 'Node.js / Express', 'Flask', 'Tailwind CSS', 'Prisma', 'SCSS'],
  },
  {
    title: 'Cloud & Infra',
    skills: ['AWS', 'AWS Lambda', 'AWS Step Functions', 'AWS AppSync', 'Terraform', 'Docker', 'Kubernetes', 'Google Cloud', 'Firebase'],
  },
  {
    title: 'Data & Streaming',
    skills: ['PostgreSQL', 'MySQL', 'SQLite', 'Supabase', 'Kafka', 'Spark', 'Redis'],
  },
  {
    title: 'AI & ML',
    skills: ['LLM Agents', 'LangChain', 'RAG', 'Computer Vision', 'TensorFlow', 'PyTorch', 'YOLOv8', 'Machine Learning'],
  },
  {
    title: 'Tools & Practices',
    skills: ['Git', 'GitHub', 'GitHub Actions', 'CI/CD', 'New Relic', 'Splunk', 'Postman', 'Figma', 'Linux / Unix', 'REST APIs', 'GraphQL', 'Jira', 'Rally', 'ServiceNow', 'Spec-Driven Dev'],
  },
];

const Skills = () => {
  return (
    <div className="max-w-6xl mx-auto px-5 md:px-8">
      <SectionHeader dark index="04 — Skills" title="Toolkit" note="What I build with" />

      <Reveal className="mt-10 md:mt-14 border-t border-paper/20">
        {skillCategories.map((cat, i) => (
          <div
            key={i}
            className="group grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-6 py-6 md:py-7 border-b border-paper/10 hover:bg-white/5 transition-colors duration-300 px-2 md:px-3 -mx-2 md:-mx-3"
          >
            <div className="md:col-span-3 flex items-baseline gap-3">
              <span className="label text-wine-soft">{String(i + 1).padStart(2, '0')}</span>
              <h3 className="display text-2xl font-bold text-paper group-hover:text-wine-light transition-colors">
                {cat.title}
              </h3>
            </div>
            <div className="md:col-span-9 flex flex-wrap gap-x-2 gap-y-2">
              {cat.skills.map((skill, j) => (
                <span
                  key={j}
                  className="text-[14px] text-paper/80 px-3 py-1 border border-paper/25 hover:border-paper hover:text-paper transition-colors duration-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </Reveal>
    </div>
  );
};

export default Skills;
