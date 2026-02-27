'use client';
import { useEffect, useState } from 'react';

const roles = [
  'MERN Stack Developer',
  'Full Stack Engineer',
  'Next.js Specialist',
  'Backend Architect',
];

function TypingText() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [deleting, setDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && charIndex <= current.length) {
      timeout = setTimeout(() => {
        setDisplayed(current.slice(0, charIndex));
        setCharIndex((c) => c + 1);
      }, 70);
    } else if (!deleting && charIndex > current.length) {
      timeout = setTimeout(() => setDeleting(true), 1800);
    } else if (deleting && charIndex >= 0) {
      timeout = setTimeout(() => {
        setDisplayed(current.slice(0, charIndex));
        setCharIndex((c) => c - 1);
      }, 40);
    } else {
      setDeleting(false);
      setRoleIndex((r) => (r + 1) % roles.length);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, deleting, roleIndex]);

  return (
    <span className="text-[#a855f7]">
      {displayed}
      <span className="inline-block w-[2px] h-[1em] bg-[#a855f7] ml-0.5 animate-[blink_1s_step-end_infinite] align-middle" />
    </span>
  );
}

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center px-6 md:px-16 lg:px-24 overflow-hidden"
    >
      {/* Background grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(168,85,247,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(168,85,247,0.04) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      {/* Radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 70% 60% at 50% -5%, rgba(124,58,237,0.2), transparent)',
        }}
      />

      {/* Content */}
      <div
        className="relative z-10 max-w-5xl"
        style={{
          opacity: mounted ? 1 : 0,
          transition: 'opacity 0.6s ease',
        }}
      >
        {/* Terminal prefix line */}
        <p
          className="font-mono text-xs md:text-sm text-[#10b981] mb-4 tracking-wider"
          style={{
            animation: 'slideUp 0.6s ease-out 0.1s both',
          }}
        >
          <span className="text-[#475569]">~/portfolio</span> $ whoami
        </p>

        {/* Name */}
        <h1
          className="font-[Space_Grotesk,sans-serif] text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-[#e2e8f0] leading-[1.05] tracking-tight mb-4"
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            animation: 'slideUp 0.6s ease-out 0.25s both',
          }}
        >
          Jeet Singh<span className="text-[#a855f7]">.</span>
        </h1>

        {/* Typing role */}
        <div
          className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#94a3b8] mb-6 h-12 flex items-center"
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            animation: 'slideUp 0.6s ease-out 0.4s both',
          }}
        >
          <TypingText />
        </div>

        {/* Tagline */}
        <p
          className="text-[#64748b] text-base md:text-lg max-w-2xl leading-relaxed mb-10"
          style={{ animation: 'slideUp 0.6s ease-out 0.55s both' }}
        >
          I architect robust SaaS platforms and turn complex backends into intuitive UIs.
          MCA student at{' '}
          <span className="text-[#e2e8f0]">BIT Mesra</span>, building things that matter.
        </p>

        {/* CTA Buttons */}
        <div
          className="flex flex-wrap gap-3"
          style={{ animation: 'slideUp 0.6s ease-out 0.7s both' }}
        >
          <a href="#projects" className="btn-accent" onClick={(e) => {
            e.preventDefault();
            document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
          }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 3h18v18H3z" /><path d="M9 9h6v6H9z" />
            </svg>
            View Projects
          </a>
          <a href="#contact" className="btn-outline" onClick={(e) => {
            e.preventDefault();
            document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
          }}>
            Contact Me
          </a>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost"
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            Resume
          </a>
        </div>

        {/* Social row */}
        <div
          className="flex items-center gap-4 mt-12"
          style={{ animation: 'slideUp 0.6s ease-out 0.85s both' }}
        >
          <div className="h-px w-12 bg-gradient-to-r from-transparent to-[#334155]" />
          <a
            href="https://github.com/jeetsingh008"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#475569] hover:text-[#a855f7] transition-colors duration-200"
            aria-label="GitHub"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/in/jeet-singh9835/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#475569] hover:text-[#a855f7] transition-colors duration-200"
            aria-label="LinkedIn"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
            </svg>
          </a>
          <a
            href="mailto:iamjeetsingh46@gmail.com"
            className="text-[#475569] hover:text-[#a855f7] transition-colors duration-200"
            aria-label="Email"
          >
            <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
        <span className="font-mono text-[10px] text-[#475569] tracking-widest">SCROLL</span>
        <div className="w-px h-12 bg-gradient-to-b from-[#475569] to-transparent" />
      </div>
    </section>
  );
}
