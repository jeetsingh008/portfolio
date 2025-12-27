import { HeroSectionType } from '@/lib/types/sections';
import { resumeFileName } from '@/lib/utils/config';

export const heroSection: HeroSectionType = {
  subtitle: 'Hi, my name is',
  title: 'Jeet Singh.',
  tagline: 'I engineer scalable, secure, and data-driven full-stack solutions.',
  description:
    "I'm a MERN Stack Developer specializing in Next.js 15, TypeScript, and Express. I architect robust SaaS platforms with secure authentication and real-time data visualization, bridging the gap between complex backends and intuitive user interfaces.",
  specialText: 'Available for Full-Stack Developer roles',
  cta: {
    title: 'see my resume',
    url: `/${resumeFileName}`,
    hideInDesktop: true,
  },
};