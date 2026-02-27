'use client';
import { useEffect, useRef, useState } from 'react';

const socials = [
  {
    label: 'GitHub',
    href: 'https://github.com/jeetsingh008',
    sublabel: '@jeetsingh008',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/jeet-singh9835/',
    sublabel: 'jeet-singh9835',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
      </svg>
    ),
  },
  {
    label: 'Email',
    href: 'mailto:iamjeetsingh46@gmail.com',
    sublabel: 'iamjeetsingh46@gmail.com',
    icon: (
      <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
  },
];

const text = "// find me here"

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    await new Promise((r) => setTimeout(r, 1000));
    setSending(false);
    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      style={{ opacity: 0, transform: 'translateY(30px)', transition: 'opacity 0.7s ease, transform 0.7s ease' }}
      className="py-24 md:py-32 px-6 md:px-16 lg:px-24 max-w-6xl mx-auto"
    >
      <p className="section-label mb-3">05. Contact</p>
      <h2 className="section-title mb-4">Let's Build Something</h2>
      <p className="text-[#64748b] text-sm md:text-base max-w-lg mb-12">
        I'm currently open to full-stack developer roles. Whether it's a question, opportunity,
        or just a hello — my inbox is always open.
      </p>

      <div className="grid lg:grid-cols-5 gap-10 lg:gap-14 items-start">
        {/* Form */}
        <div className="lg:col-span-3">
          {submitted ? (
            <div className="glass-card p-8 text-center">
              <div className="text-4xl mb-3">✅</div>
              <h3 className="text-[#e2e8f0] font-semibold text-lg mb-2" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                Message sent!
              </h3>
              <p className="text-[#64748b] text-sm">I'll get back to you as soon as possible.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="font-mono text-xs text-[#64748b] tracking-wider">NAME</label>
                  <input
                    type="text"
                    required
                    value={formState.name}
                    onChange={(e) => setFormState((s) => ({ ...s, name: e.target.value }))}
                    placeholder="Your name"
                    className="w-full bg-white/[0.03] border border-white/[0.08] rounded-lg px-4 py-3 text-sm text-[#e2e8f0] placeholder-[#334155] focus:outline-none focus:border-[#a855f7]/50 focus:bg-[#a855f7]/3 transition-all"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="font-mono text-xs text-[#64748b] tracking-wider">EMAIL</label>
                  <input
                    type="email"
                    required
                    value={formState.email}
                    onChange={(e) => setFormState((s) => ({ ...s, email: e.target.value }))}
                    placeholder="your@email.com"
                    className="w-full bg-white/[0.03] border border-white/[0.08] rounded-lg px-4 py-3 text-sm text-[#e2e8f0] placeholder-[#334155] focus:outline-none focus:border-[#a855f7]/50 transition-all"
                  />
                </div>
              </div>
              <div className="space-y-1.5">
                <label className="font-mono text-xs text-[#64748b] tracking-wider">MESSAGE</label>
                <textarea
                  required
                  rows={5}
                  value={formState.message}
                  onChange={(e) => setFormState((s) => ({ ...s, message: e.target.value }))}
                  placeholder="Tell me about the opportunity, project, or just say hi..."
                  className="w-full bg-white/[0.03] border border-white/[0.08] rounded-lg px-4 py-3 text-sm text-[#e2e8f0] placeholder-[#334155] focus:outline-none focus:border-[#a855f7]/50 transition-all resize-none"
                />
              </div>
              <button
                type="submit"
                disabled={sending}
                className="btn-accent w-full justify-center disabled:opacity-60"
              >
                {sending ? (
                  <>
                    <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <line x1="22" y1="2" x2="11" y2="13" /><polygon points="22 2 15 22 11 13 2 9 22 2" />
                    </svg>
                    Send Message
                  </>
                )}
              </button>
            </form>
          )}
        </div>

        {/* Social links */}
        <div className="lg:col-span-2 space-y-4">
          <p className="font-mono text-xs text-[#10b981] tracking-wider mb-5">{text}</p>
          {socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target={social.href.startsWith('mailto') ? undefined : '_blank'}
              rel={social.href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
              className="flex items-center gap-4 p-4 rounded-xl border border-white/[0.07] bg-white/[0.02] hover:border-[#a855f7]/30 hover:bg-[#a855f7]/5 transition-all duration-200 group"
            >
              <span className="text-[#475569] group-hover:text-[#a855f7] transition-colors">
                {social.icon}
              </span>
              <div>
                <div className="text-[#e2e8f0] text-sm font-medium group-hover:text-[#c084fc] transition-colors">
                  {social.label}
                </div>
                <div className="font-mono text-xs text-[#475569]">{social.sublabel}</div>
              </div>
              <svg
                className="ml-auto text-[#334155] group-hover:text-[#a855f7] transition-colors"
                width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
