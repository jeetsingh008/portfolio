'use client';
import { useEffect, useRef } from 'react';

const projects = [
  {
    id: 'command-center',
    name: 'Command Center',
    description:
      'A full-stack productivity & career tracker for developers to log project hours, track milestones, and visualize growth with real-time analytics dashboards.',
    tags: ['Next.js', 'Express.js', 'MongoDB', 'Auth.js', 'Recharts'],
    live: 'https://command-center-lilac.vercel.app/',
    github: 'https://github.com/jeetsingh008',
    featured: true,
    color: '#7c3aed',
  },
  {
    id: 'bookit',
    name: 'Bookit',
    description:
      'A full-stack travel booking platform with real-time search filtering, atomic ACID transactions to prevent double-booking, and a clean monorepo architecture.',
    tags: ['Next.js', 'TypeScript', 'Express.js', 'MongoDB', 'Mongoose'],
    live: 'https://bookit-delta-flame.vercel.app/',
    github: 'https://github.com/jeetsingh008',
    featured: true,
    color: '#0ea5e9',
  },
  {
    id: 'ganpati-tours',
    name: 'Ganpati Tours',
    description:
      'Frontend for a Spanish-Indian travel agency offering authentic Indian tours to Spanish travelers. Built with focus on cultural storytelling and clean UI.',
    tags: ['React.js', 'TypeScript', 'Tailwind CSS'],
    live: 'https://ganpati-tours-main.vercel.app/',
    github: 'https://github.com/jeetsingh008',
    featured: false,
    color: '#10b981',
  },
  {
    id: 'streamy',
    name: 'Streamy',
    description:
      'A professional-grade YouTube-like backend with video uploads, comments, likes, user subscriptions, and JWT + Bcrypt auth.',
    tags: ['Node.js', 'Express.js', 'MongoDB', 'JWT', 'Bcrypt'],
    live: null,
    github: 'https://github.com/jeetsingh008/Streamy-Backend',
    featured: false,
    color: '#f59e0b',
  },
  {
    id: 'pixel-forge',
    name: 'Pixel Forge',
    description:
      'A creative design tool built with Next.js and Framer Motion, exploring pixel-based editing with smooth animations.',
    tags: ['Next.js', 'Tailwind', 'Framer Motion'],
    live: 'https://pixel-forge-blush.vercel.app/',
    github: 'https://github.com/jeetsingh008/pixelforge',
    featured: false,
    color: '#ec4899',
  },
  {
    id: 'postjob',
    name: 'PostJob',
    description:
      'A job board platform for posting and discovering opportunities, built with Next.js and animated with Framer Motion.',
    tags: ['Next.js', 'Tailwind', 'Framer Motion'],
    live: 'https://post-job-rho.vercel.app/',
    github: 'https://github.com/jeetsingh008/the-creator',
    featured: false,
    color: '#64748b',
  },
];

function ExternalIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  );
}

function GithubIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
          }, index * 80);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [index]);

  return (
    <div
      ref={cardRef}
      style={{
        opacity: 0,
        transform: 'translateY(24px)',
        transition: 'opacity 0.6s ease, transform 0.6s ease',
      }}
      className="glass-card p-6 flex flex-col h-full group"
    >
      {/* Top row */}
      <div className="flex items-start justify-between mb-4">
        <div
          className="w-10 h-10 rounded-lg flex items-center justify-center text-white font-bold text-sm"
          style={{ background: `${project.color}20`, border: `1px solid ${project.color}40` }}
        >
          <span style={{ color: project.color }}>{project.name[0]}</span>
        </div>
        <div className="flex gap-3">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#475569] hover:text-[#a855f7] transition-colors"
              aria-label={`${project.name} GitHub`}
            >
              <GithubIcon />
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#475569] hover:text-[#a855f7] transition-colors"
              aria-label={`${project.name} live demo`}
            >
              <ExternalIcon />
            </a>
          )}
        </div>
      </div>

      {/* Name */}
      <h3
        className="text-[#e2e8f0] font-semibold text-lg mb-2 group-hover:text-[#c084fc] transition-colors"
        style={{ fontFamily: "'Space Grotesk', sans-serif" }}
      >
        {project.name}
      </h3>

      {/* Description */}
      <p className="text-[#64748b] text-sm leading-relaxed flex-1 mb-5">
        {project.description}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-1.5">
        {project.tags.map((tag) => (
          <span key={tag} className="tech-badge">{tag}</span>
        ))}
      </div>
    </div>
  );
}

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.opacity = '1';
          el.style.transform = 'translateY(0)';
          observer.disconnect();
        }
      },
      { threshold: 0.05 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="projects"
      ref={sectionRef}
      style={{ opacity: 0, transform: 'translateY(30px)', transition: 'opacity 0.7s ease, transform 0.7s ease' }}
      className="py-24 md:py-32 px-6 md:px-16 lg:px-24 max-w-6xl mx-auto"
    >
      <p className="section-label mb-3">03. Projects</p>
      <h2 className="section-title mb-4">Things I've Built</h2>
      <p className="text-[#64748b] text-sm md:text-base mb-12 max-w-xl">
        A selection of projects ranging from full-stack SaaS platforms to backends and creative frontends.
      </p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {projects.map((project, i) => (
          <ProjectCard key={project.id} project={project} index={i} />
        ))}
      </div>

      {/* GitHub CTA */}
      <div className="text-center mt-12">
        <a
          href="https://github.com/jeetsingh008"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-ghost inline-flex"
        >
          <GithubIcon />
          View more on GitHub
        </a>
      </div>
    </section>
  );
}
