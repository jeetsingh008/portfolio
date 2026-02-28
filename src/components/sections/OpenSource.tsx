'use client';
import { useEffect, useRef } from 'react';

// ─────────────────────────────────────────────
// Edit this array to add / update your OSS contributions.
// Each entry: repo name, stars, PR/issue title, PR hashtag, and link.
// ─────────────────────────────────────────────
export const ossContributions = [
  {
    id: 'oss-1',
    repo: 'repository/name',
    repoUrl: 'https://github.com/repository/name',
    stars: '⭐ 1.2k',
    prTitle: 'fix: description of the fix or feature added',
    prTag: '#123',
    prUrl: 'https://github.com/repository/name/pull/123',
    type: 'PR', // "PR" | "Issue"
  },
  {
    id: 'oss-2',
    repo: 'another-org/repo',
    repoUrl: 'https://github.com/another-org/repo',
    stars: '⭐ 3.4k',
    prTitle: 'feat: added support for dark mode toggle',
    prTag: '#456',
    prUrl: 'https://github.com/another-org/repo/pull/456',
    type: 'PR',
  },
  {
    id: 'oss-3',
    repo: 'some-org/cool-library',
    repoUrl: 'https://github.com/some-org/cool-library',
    stars: '⭐ 780',
    prTitle: 'docs: improved README with usage examples',
    prTag: '#89',
    prUrl: 'https://github.com/some-org/cool-library/pull/89',
    type: 'PR',
  },
  {
    id: 'oss-4',
    repo: 'open-project/tool',
    repoUrl: 'https://github.com/open-project/tool',
    stars: '⭐ 2.1k',
    prTitle: 'fix: resolved edge case in date parsing function',
    prTag: '#234',
    prUrl: 'https://github.com/open-project/tool/issues/234',
    type: 'Issue',
  },
  {
    id: 'oss-5',
    repo: 'community/framework',
    repoUrl: 'https://github.com/community/framework',
    stars: '⭐ 5.6k',
    prTitle: 'refactor: simplified auth middleware logic',
    prTag: '#712',
    prUrl: 'https://github.com/community/framework/pull/712',
    type: 'PR',
  },
  {
    id: 'oss-6',
    repo: 'devtools/inspector',
    repoUrl: 'https://github.com/devtools/inspector',
    stars: '⭐ 410',
    prTitle: 'chore: updated dependencies to fix security vulnerabilities',
    prTag: '#55',
    prUrl: 'https://github.com/devtools/inspector/pull/55',
    type: 'PR',
  },
];

function PRIcon({ type }: { type: string }) {
  if (type === 'Issue') {
    return (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="text-[#f59e0b]">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
      </svg>
    );
  }
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="text-[#10b981]">
      <path d="M18 21a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0-8a5 5 0 0 1 4.546 2.916A5.002 5.002 0 0 0 18 7h-3V3l-4 4 4 4V7h3a3 3 0 0 1 3 3v.174A4.992 4.992 0 0 1 18 13zM6 3a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm0 8a5 5 0 0 1-4.546-2.916A5.002 5.002 0 0 0 6 17h3v4l4-4-4-4v3H6a3 3 0 0 1-3-3v-.174A4.992 4.992 0 0 1 6 11z" />
    </svg>
  );
}

export default function OpenSource() {
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
      { threshold: 0.08 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="opensource"
      ref={sectionRef}
      style={{
        opacity: 0,
        transform: 'translateY(30px)',
        transition: 'opacity 0.7s ease, transform 0.7s ease',
      }}
      className="py-24 md:py-32 px-6 md:px-16 lg:px-24 max-w-6xl mx-auto"
    >
      {/* Header */}
      <p className="section-label mb-3">04b. Open Source</p>
      <h2 className="section-title mb-4">OSS Contributions</h2>
      <p className="text-[#64748b] text-sm md:text-base max-w-xl mb-12">
        Merged pull requests and filed issues in public repositories. Each contribution
        is linked directly to the PR or issue.
      </p>

      {/* Table — desktop */}
      <div className="hidden md:block glass-card overflow-hidden">
        {/* Header row */}
        <div className="grid grid-cols-[1fr_1fr_80px_80px] gap-4 px-6 py-3 border-b border-white/[0.06] font-mono text-[10px] text-[#334155] tracking-widest uppercase">
          <span>Repository</span>
          <span>PR / Issue</span>
          <span>Stars</span>
          <span>Type</span>
        </div>

        {ossContributions.map((item, i) => (
          <div
            key={item.id}
            className={`grid grid-cols-[1fr_1fr_80px_80px] gap-4 px-6 py-4 items-center transition-colors hover:bg-white/[0.025] ${i !== ossContributions.length - 1 ? 'border-b border-white/[0.04]' : ''
              }`}
          >
            {/* Repo */}
            <a
              href={item.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 group min-w-0"
            >
              <svg
                className="text-[#334155] group-hover:text-[#a855f7] transition-colors shrink-0"
                width="14" height="14" viewBox="0 0 24 24" fill="currentColor"
              >
                <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
              </svg>
              <span className="font-mono text-xs text-[#94a3b8] group-hover:text-[#e2e8f0] truncate transition-colors">
                {item.repo}
              </span>
            </a>

            {/* PR title + tag */}
            <a
              href={item.prUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 group min-w-0"
            >
              <span className="font-mono text-xs text-[#a855f7] shrink-0 group-hover:text-[#c084fc] transition-colors">
                {item.prTag}
              </span>
              <span className="text-xs text-[#64748b] group-hover:text-[#94a3b8] truncate transition-colors">
                {item.prTitle}
              </span>
            </a>

            {/* Stars */}
            <span className="font-mono text-xs text-[#475569]">{item.stars}</span>

            {/* Type badge */}
            <div className="flex items-center gap-1.5">
              <PRIcon type={item.type} />
              <span
                className="font-mono text-[10px]"
                style={{ color: item.type === 'PR' ? '#10b981' : '#f59e0b' }}
              >
                {item.type}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Mobile card list */}
      <div className="md:hidden space-y-4">
        {ossContributions.map((item) => (
          <div key={item.id} className="glass-card p-5">
            {/* Repo header */}
            <div className="flex items-center justify-between mb-3">
              <a
                href={item.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 group"
              >
                <svg className="text-[#475569] group-hover:text-[#a855f7] transition-colors" width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
                <span className="font-mono text-xs text-[#94a3b8] group-hover:text-[#e2e8f0] transition-colors">
                  {item.repo}
                </span>
              </a>
              <div className="flex items-center gap-1.5">
                <PRIcon type={item.type} />
                <span className="font-mono text-[10px] text-[#475569]">{item.type}</span>
              </div>
            </div>

            {/* PR link */}
            <a
              href={item.prUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block group"
            >
              <div className="flex items-center gap-2 mb-1">
                <span className="font-mono text-xs text-[#a855f7]">{item.prTag}</span>
                <span className="text-[#475569] font-mono text-xs">{item.stars}</span>
              </div>
              <p className="text-sm text-[#64748b] group-hover:text-[#94a3b8] transition-colors leading-relaxed">
                {item.prTitle}
              </p>
            </a>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="mt-10 text-center">
        <a
          href="https://github.com/jeetsingh008"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-ghost inline-flex"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
          </svg>
          View GitHub Profile
        </a>
      </div>
    </section>
  );
}
