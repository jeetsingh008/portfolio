import { ProjectsSectionType } from '@/lib/types/sections';
import { getId } from '@/lib/utils/helper';

export const projectsSection: ProjectsSectionType = {
  title: 'my projects',
  projects: [
    {
      id: getId(),
      name: 'Pixel Forge',
      url: 'https://pixel-forge-blush.vercel.app/',
      repo: 'https://github.com/jeetsingh008/pixelforge',
      img: '/images/projects/pixelforge.png',
      year: 2023,
      tags: ['NextJS', 'Tailwind', 'Framer Motion'],
    },
    {
      id: getId(),
      name: 'PostJob',
      url: 'https://post-job-rho.vercel.app/',
      repo: 'https://github.com/jeetsingh008/the-creator',
      img: '/images/projects/postjob.png',
      year: 2023,
      tags: ['NextJS', 'Tailwind', 'Framer Motion'],
    },
    {
      id: getId(),
      name: 'The Creator',
      url: 'https://the-creator-one.vercel.app/',
      repo: 'https://github.com/jeetsingh008/Post-Job',
      img: '/images/projects/creator.png',
      year: 2023,
      tags: ['NextJS', 'Tailwind', 'Framer Motion'],
    },
    {
      id: getId(),
      name: 'Knect Hotel',
      url: 'https://knect.vercel.app/dashboard',
      repo: '#',
      img: '/images/projects/knecthotel.png',
      year: 2023,
      tags: ['NextJS', 'Tailwind', 'redux', 'axios', 'zod'],
    },
    {
      id: getId(),
      name: 'Spellicious',
      url: 'https://lighthearted-eclair-dea0a0.netlify.app/game',
      repo: '#',
      img: '/images/projects/spellicious.png',
      year: 2023,
      tags: ['ReactJS', 'Tailwind',],
    },
  ],
};
