'use client';
import { useEffect, useState } from 'react';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: '-40% 0px -55% 0px' }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const handleNav = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMenuOpen(false);
    const target = document.querySelector(href);
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-none ${scrolled
          ? 'bg-[#0d0d12]/90 backdrop-blur-md border-b border-white/[0.06] shadow-[0_4px_30px_rgba(0,0,0,0.4)]'
          : 'bg-transparent'
        }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#hero"
          onClick={(e) => handleNav(e, '#hero')}
          className="font-mono text-sm text-[#a855f7] hover:text-[#c084fc] transition-colors tracking-wider"
        >
          <span className="text-[#10b981]">$</span> jeet.dev
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map(({ label, href }, i) => {
            const sectionId = href.slice(1);
            const isActive = activeSection === sectionId;
            return (
              <a
                key={label}
                href={href}
                onClick={(e) => handleNav(e, href)}
                className={`font-mono text-xs tracking-wider transition-all duration-200 relative py-1 ${isActive
                    ? 'text-[#a855f7]'
                    : 'text-[#64748b] hover:text-[#e2e8f0]'
                  }`}
              >
                <span className="text-[#10b981] mr-1">{String(i + 1).padStart(2, '0')}.</span>
                {label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-px bg-[#a855f7] rounded-full" />
                )}
              </a>
            );
          })}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline text-xs px-4 py-2"
          >
            Resume
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Toggle menu"
        >
          <span
            className={`block w-5 h-px bg-[#e2e8f0] transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''
              }`}
          />
          <span
            className={`block w-5 h-px bg-[#e2e8f0] transition-all duration-300 ${menuOpen ? 'opacity-0' : ''
              }`}
          />
          <span
            className={`block w-5 h-px bg-[#e2e8f0] transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''
              }`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#13131a] border-t border-white/[0.06] px-6 py-6 space-y-4">
          {navLinks.map(({ label, href }, i) => (
            <a
              key={label}
              href={href}
              onClick={(e) => handleNav(e, href)}
              className="block font-mono text-sm text-[#94a3b8] hover:text-[#a855f7] transition-colors"
            >
              <span className="text-[#10b981] mr-2">{String(i + 1).padStart(2, '0')}.</span>
              {label}
            </a>
          ))}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="block btn-outline text-center mt-4 text-sm"
          >
            Resume
          </a>
        </div>
      )}
    </nav>
  );
}
