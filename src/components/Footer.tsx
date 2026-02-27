export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="py-10 px-6 border-t border-white/[0.05] text-center">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
        <span className="font-mono text-xs text-[#334155]">
          <span className="text-[#10b981]">$</span> jeet.dev
        </span>
        <p className="font-mono text-xs text-[#334155]">
          Designed & Built by{' '}
          <span className="text-[#a855f7]">Jeet Singh</span>
          {' '}· {currentYear}
        </p>
        <a
          href="https://github.com/jeetsingh008"
          target="_blank"
          rel="noopener noreferrer"
          className="font-mono text-xs text-[#334155] hover:text-[#a855f7] transition-colors"
        >
          github/jeetsingh008
        </a>
      </div>
    </footer>
  );
}
