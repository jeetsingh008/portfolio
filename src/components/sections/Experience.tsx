'use client';
import { useEffect, useRef } from 'react';

const tasks = [
  'Built the frontend for KnectHotels SaaS platform — check-in/out, service requests, and role-based dashboards.',
  'Integrated role-based APIs and created 20+ Zod-validated forms with real-time validation feedback.',
  'Engineered dynamic data tables with sorting, filtering, and full CRUD operations for 1,000+ hotel records.',
  'Collaborated in a 6-member Agile team, shipping client-centric features in bi-weekly sprints.',
];

export default function Experience() {
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
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="experience"
      ref={sectionRef}
      style={{ opacity: 0, transform: 'translateY(30px)', transition: 'opacity 0.7s ease, transform 0.7s ease' }}
      className="py-24 md:py-32 px-6 md:px-16 lg:px-24 max-w-6xl mx-auto"
    >
      <p className="section-label mb-3">02. Experience</p>
      <h2 className="section-title mb-12">Where I've Worked</h2>

      <div className="relative">
        {/* Timeline vertical line */}
        <div className="absolute left-4 top-6 bottom-0 w-px bg-gradient-to-b from-[#a855f7] via-[#a855f7]/30 to-transparent hidden md:block" />

        {/* Experience card */}
        <div className="md:pl-14 relative">
          {/* Timeline dot */}
          <div className="hidden md:block absolute left-[13px] top-[23px]">
            <div className="w-2.5 h-2.5 rounded-full bg-[#a855f7] shadow-[0_0_10px_rgba(168,85,247,0.7)]" />
          </div>

          <div className="glass-card p-6 md:p-8">
            {/* Header */}
            <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
              <div>
                <h3
                  className="text-[#e2e8f0] font-semibold text-lg md:text-xl mb-1"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  Frontend Developer Intern
                </h3>
                <a
                  href="https://www.techavtar.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#a855f7] font-mono text-sm hover:text-[#c084fc] transition-colors"
                >
                  @ Techavtar
                </a>
              </div>
              <div className="flex flex-col items-end gap-1">
                <span className="font-mono text-xs text-[#64748b] bg-white/[0.04] border border-white/[0.07] px-3 py-1.5 rounded-md">
                  Mar 2024 – May 2024
                </span>
                <span className="font-mono text-xs text-[#10b981]">Remote · Internship</span>
              </div>
            </div>

            {/* Project context */}
            <div className="mb-5 px-4 py-3 rounded-lg bg-[#a855f7]/5 border border-[#a855f7]/15">
              <span className="font-mono text-xs text-[#a855f7] tracking-wider">PROJECT:</span>
              <span className="font-mono text-xs text-[#94a3b8] ml-2">
                KnectHotels — Hotel Management SaaS Platform
              </span>
            </div>

            {/* Task bullets */}
            <ul className="space-y-3">
              {tasks.map((task, i) => (
                <li key={i} className="flex gap-3 text-[#94a3b8] text-sm md:text-base leading-relaxed">
                  <span className="text-[#a855f7] font-mono mt-0.5 shrink-0">▹</span>
                  {task}
                </li>
              ))}
            </ul>

            {/* Tech tags */}
            <div className="flex flex-wrap gap-2 mt-6 pt-6 border-t border-white/[0.06]">
              {['Next.js', 'TypeScript', 'Tailwind CSS', 'Redux', 'Zod', 'Axios'].map((t) => (
                <span key={t} className="tech-badge">{t}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
