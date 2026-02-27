/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
        mono: ['var(--font-jetbrains)', 'monospace'],
        heading: ['var(--font-space-grotesk)', 'sans-serif'],
      },
      colors: {
        bg: '#0d0d12',
        'bg-secondary': '#13131a',
        'bg-card': '#1a1a26',
        accent: '#a855f7',
        'accent-dim': '#7c3aed',
        'accent-glow': 'rgba(168,85,247,0.15)',
        'accent-border': 'rgba(168,85,247,0.3)',
        'text-primary': '#e2e8f0',
        'text-muted': '#64748b',
        'text-faint': '#334155',
        'green-term': '#10b981',
        'border-subtle': 'rgba(255,255,255,0.07)',
        // Keep legacy vars for compatibility
        bg: '#0d0d12',
        'bg-secondary': '#13131a',
        accent: '#a855f7',
        text: '#e2e8f0',
        'dark-1': '#e2e8f0',
        'dark-2': '#cbd5e1',
        'dark-3': '#475569',
      },
      screens: {
        xs: '375px',
      },
      backgroundImage: {
        'grid-pattern':
          "linear-gradient(rgba(168,85,247,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(168,85,247,0.03) 1px, transparent 1px)",
        'hero-gradient':
          'radial-gradient(ellipse 80% 50% at 50% -10%, rgba(124,58,237,0.25), transparent)',
        'accent-gradient': 'linear-gradient(135deg, #7c3aed 0%, #a855f7 100%)',
        'glass-gradient':
          'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)',
      },
      backgroundSize: {
        grid: '40px 40px',
      },
      boxShadow: {
        glass: '0 4px 32px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.05)',
        'accent-glow': '0 0 30px rgba(168,85,247,0.3)',
        'card-hover': '0 20px 60px rgba(168,85,247,0.15), 0 4px 20px rgba(0,0,0,0.5)',
      },
      transitionTimingFunction: {
        smooth: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
      },
      gridTemplateColumns: {
        'auto-300': 'repeat(auto-fill, minmax(300px, 1fr))',
        'auto-250': 'repeat(auto-fill, minmax(250px, 1fr))',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
        'blink': 'blink 1s step-end infinite',
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        slideUp: {
          from: { opacity: '0', transform: 'translateY(20px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
};
