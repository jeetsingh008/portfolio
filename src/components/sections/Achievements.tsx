'use client';
import { useEffect, useRef } from 'react';

const stats = [
  {
    id: 'leetcode',
    label: 'LeetCode',
    sublabel: 'Problems Solved',
    value: '144',
    note: 'Algorithms & Data Structures',
    color: '#f59e0b',
    link: null,
    viewLabel: null,
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
        <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z" />
      </svg>
    ),
  },
  {
    id: 'codechef',
    label: 'CodeChef',
    sublabel: 'Problems Solved',
    value: '230+',
    note: 'Competitive Programming',
    color: '#a855f7',
    link: null,
    viewLabel: null,
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
        <path d="M11.257.004C5.23.085.05 5.19.05 11.22c0 6.09 4.93 11.02 11.02 11.02 6.09 0 11.02-4.93 11.02-11.02 0-6.09-4.93-11.02-11.02-11.02-.27 0-.54.006-.81.014zm.78 3.89c.18 0 .36.007.54.02.09.006.18.013.27.02.54.048 1.08.147 1.59.3.091.027.18.055.27.084v2.27c-.09-.04-.18-.078-.27-.115-.51-.21-1.05-.33-1.62-.36-.09-.006-.18-.01-.27-.012-.36-.01-.72.02-1.062.09-.36.072-.702.19-1.02.35-.318.16-.6.36-.84.594-.24.234-.435.51-.57.81-.14.3-.21.63-.21.99 0 .36.07.69.21.99.135.3.33.576.57.81.24.234.522.434.84.594.318.16.66.278 1.02.35.342.07.702.1 1.062.09.09-.002.18-.006.27-.012.57-.03 1.11-.15 1.62-.36.09-.037.18-.075.27-.115v2.27c-.09.03-.18.057-.27.084-.51.153-1.05.252-1.59.3-.09.007-.18.014-.27.02-.18.013-.36.02-.54.02-.48 0-.96-.04-1.44-.12-.48-.08-.93-.2-1.35-.36-.42-.16-.81-.36-1.17-.6-.36-.24-.675-.516-.945-.828-.27-.312-.495-.66-.675-1.032-.18-.372-.315-.762-.405-1.17-.09-.408-.135-.834-.135-1.26 0-.426.045-.852.135-1.26.09-.408.225-.798.405-1.17.18-.372.405-.72.675-1.032.27-.312.585-.588.945-.828.36-.24.75-.44 1.17-.6.42-.16.87-.28 1.35-.36.48-.08.96-.12 1.44-.12z" />
      </svg>
    ),
  },
  {
    id: 'opensource',
    label: 'Open Source',
    sublabel: 'Contributions',
    value: '10+',
    note: 'Merged PRs & issues across public repos',
    color: '#10b981',
    link: '#opensource',
    viewLabel: 'View Contributions',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
      </svg>
    ),
  },
  {
    id: 'projects',
    label: 'Personal Projects',
    sublabel: 'On GitHub',
    value: '30+',
    note: 'SaaS, backends, tools & creative UIs',
    color: '#38bdf8',
    link: 'https://github.com/jeetsingh008',
    viewLabel: 'View on GitHub',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="3" y="3" width="7" height="7" rx="1" />
        <rect x="14" y="3" width="7" height="7" rx="1" />
        <rect x="3" y="14" width="7" height="7" rx="1" />
        <rect x="14" y="14" width="7" height="7" rx="1" />
      </svg>
    ),
  },
];

const text = '// highlights';

const highlights = [
  'Built 6+ full-stack projects from specification to deployment',
  'Interned at a product startup, shipping real features for real users',
  'Passionate about data structures, algorithms, and system design',
  'Active GitHub contributor with projects spanning SaaS, backends & creative UIs',
];

function StatCard({ stat }: { stat: typeof stats[0] }) {
  const handleClick = () => {
    if (!stat.link) return;
    if (stat.link.startsWith('#')) {
      const el = document.querySelector(stat.link);
      el?.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.open(stat.link, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div className="glass-card p-6 flex flex-col gap-4 group cursor-default">
      <div
        className="w-11 h-11 rounded-xl flex items-center justify-center"
        style={{
          background: `${stat.color}15`,
          border: `1px solid ${stat.color}30`,
          color: stat.color,
        }}
      >
        {stat.icon}
      </div>
      <div>
        <div
          className="text-3xl font-bold mb-1"
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            color: stat.color,
          }}
        >
          {stat.value}
        </div>
        <div className="text-[#e2e8f0] text-sm font-medium">{stat.label}</div>
        <div className="text-[#475569] text-xs font-mono mt-0.5">{stat.sublabel}</div>
      </div>
      <div className="text-[#475569] text-xs leading-relaxed border-t border-white/[0.05] pt-3 flex-1">
        {stat.note}
      </div>
      {stat.viewLabel && (
        <button
          onClick={handleClick}
          className="mt-auto inline-flex items-center gap-1.5 font-mono text-xs transition-colors"
          style={{ color: stat.color }}
        >
          {stat.viewLabel}
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="m9 18 6-6-6-6" />
          </svg>
        </button>
      )}
    </div>
  );
}

export default function Achievements() {
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
      id="achievements"
      ref={sectionRef}
      style={{
        opacity: 0,
        transform: 'translateY(30px)',
        transition: 'opacity 0.7s ease, transform 0.7s ease',
      }}
      className="py-24 md:py-32 px-6 md:px-16 lg:px-24 max-w-6xl mx-auto"
    >
      <p className="section-label mb-3">04. Achievements</p>
      <h2 className="section-title mb-12">By The Numbers</h2>

      {/* Stat cards */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-14">
        {stats.map((stat) => (
          <StatCard key={stat.id} stat={stat} />
        ))}
      </div>

      {/* Highlights */}
      <div className="glass-card p-6 md:p-8">
        <p className="font-mono text-xs text-[#a855f7] tracking-wider mb-5">{text}</p>
        <ul className="grid sm:grid-cols-2 gap-4">
          {highlights.map((h, i) => (
            <li key={i} className="flex gap-3 text-[#94a3b8] text-sm leading-relaxed">
              <span className="text-[#10b981] font-mono mt-0.5 shrink-0">▹</span>
              {h}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
