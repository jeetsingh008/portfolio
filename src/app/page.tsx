import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import About from '@/components/sections/About';
import Achievements from '@/components/sections/Achievements';
import Contact from '@/components/sections/Contact';
import Experience from '@/components/sections/Experience';
import Hero from '@/components/sections/Hero';
import OpenSource from '@/components/sections/OpenSource';
import Projects from '@/components/sections/Projects';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="relative">
        {/* Noise overlay for depth */}
        <div
          className="fixed inset-0 pointer-events-none z-0"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E\")",
            backgroundRepeat: 'repeat',
            backgroundSize: '180px 180px',
            opacity: 0.022,
          }}
        />
        <div className="relative z-10">
          <Hero />
          <div className="max-w-6xl mx-auto">
            {/* Divider */}
            <div className="px-6 md:px-16 lg:px-24">
              <div className="h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
            </div>
          </div>
          <About />
          <div className="max-w-6xl mx-auto">
            <div className="px-6 md:px-16 lg:px-24">
              <div className="h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
            </div>
          </div>
          <Experience />
          <div className="max-w-6xl mx-auto">
            <div className="px-6 md:px-16 lg:px-24">
              <div className="h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
            </div>
          </div>
          <Projects />
          <div className="max-w-6xl mx-auto">
            <div className="px-6 md:px-16 lg:px-24">
              <div className="h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
            </div>
          </div>
          <Achievements />
          <div className="max-w-6xl mx-auto">
            <div className="px-6 md:px-16 lg:px-24">
              <div className="h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
            </div>
          </div>
          <OpenSource />
          <div className="max-w-6xl mx-auto">
            <div className="px-6 md:px-16 lg:px-24">
              <div className="h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
            </div>
          </div>
          <Contact />
        </div>
      </main>
      <Footer />
    </>
  );
}
