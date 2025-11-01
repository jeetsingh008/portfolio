import { HeroSectionType } from '@/lib/types/sections';
import { resumeFileName } from '@/lib/utils/config';

export const heroSection: HeroSectionType = {
  subtitle: 'Hi, my name is',
  title: 'Jeet Singh.', //
  tagline: 'I build dynamic and responsive web applications.',
  description:
    "I'm a passionate web developer with hands-on experience building full-stack applications with React.js, Next.js, Node.js, and MongoDB.", //
  specialText: 'Currently seeking new opportunities',
  cta: {
    title: 'see my resume',
    url: `/${resumeFileName}`,
    hideInDesktop: true,
  },
};
