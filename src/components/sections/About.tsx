'use client';
import { useEffect, useRef } from 'react';

const techStack = [
  { name: 'React', icon: '⚛', color: '#61dafb' },
  { name: 'Next.js', icon: '▲', color: '#e2e8f0' },
  { name: 'TypeScript', icon: 'TS', color: '#3178c6' },
  { name: 'Node.js', icon: '⬡', color: '#68a063' },
  { name: 'Express', icon: '◆', color: '#64748b' },
  { name: 'MongoDB', icon: '◉', color: '#47a248' },
  { name: 'Tailwind', icon: '~', color: '#38bdf8' },
  { name: 'Python', icon: '🐍', color: '#f7cc42' },
  { name: 'Git', icon: '⌥', color: '#f05030' },
  { name: 'JWT', icon: '🔑', color: '#a855f7' },
];

function useScrollReveal(ref: React.RefObject<HTMLElement | null>) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.opacity = '1';
          el.style.transform = 'translateY(0)';
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [ref]);
}

const text = "// tech I work with";

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  useScrollReveal(sectionRef);

  return (
    <section
      id="about"
      ref={sectionRef}
      style={{ opacity: 0, transform: 'translateY(30px)', transition: 'opacity 0.7s ease, transform 0.7s ease' }}
      className="py-24 md:py-32 px-6 md:px-16 lg:px-24 max-w-6xl mx-auto"
    >
      <p className="section-label mb-3">01. About</p>
      <h2 className="section-title mb-12">Who I Am</h2>

      <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-start">
        {/* Bio */}
        <div className="lg:col-span-3 space-y-5 text-[#94a3b8] text-base md:text-lg leading-relaxed">
          <p>
            Hi! I'm <span className="text-[#e2e8f0] font-medium">Jeet Singh</span>, a MERN Stack & Full Stack
            Developer and a Master of Computer Applications student at{' '}
            <a
              href="https://www.bitmesra.ac.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#a855f7] hover:text-[#c084fc] underline underline-offset-2 decoration-[#a855f7]/30 transition-colors"
            >
              Birla Institute of Technology, Mesra
            </a>
            .
          </p>
          <p>
            I recently had the privilege of working as a{' '}
            <span className="text-[#e2e8f0] font-medium">Frontend Developer Intern</span> at{' '}
            <a
              href="https://www.techavtar.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#a855f7] hover:text-[#c084fc] underline underline-offset-2 decoration-[#a855f7]/30 transition-colors"
            >
              Techavtar
            </a>
            , where I built an entire hotel SaaS platform — architecting dashboards, integrating
            role-based APIs, and engineering dynamic data tables for 1,000+ records.
          </p>
          <p>
            My focus is building{' '}
            <span className="text-[#10b981]">robust, scalable systems</span> — from secure authentication
            flows to real-time data visualization — and finding opportunities to contribute
            to ambitious, engineering-driven teams.
          </p>
        </div>

        {/* Tech stack badges */}
        <div className="lg:col-span-2">
          <p className="font-mono text-xs text-[#10b981] mb-4 tracking-wider">
            {text}
          </p>
          <div className="flex flex-wrap gap-2.5">
            {techStack.map((tech) => (
              <div
                key={tech.name}
                className="group flex items-center gap-2 px-3 py-2 rounded-lg border border-white/[0.07] bg-white/[0.02] hover:border-[#a855f7]/30 hover:bg-[#a855f7]/5 transition-all duration-200 cursor-default"
              >
                <span
                  className="text-sm font-mono leading-none"
                  style={{ color: tech.color }}
                >
                  {tech.icon}
                </span>
                <span className="font-mono text-xs text-[#64748b] group-hover:text-[#94a3b8] transition-colors">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>

          {/* Availability badge */}
          <div className="mt-8 inline-flex items-center gap-2.5 px-4 py-2.5 rounded-lg bg-[#10b981]/5 border border-[#10b981]/20">
            <span className="w-2 h-2 rounded-full bg-[#10b981] animate-pulse-slow" />
            <span className="font-mono text-xs text-[#10b981]">
              Available for Full-Stack roles
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
