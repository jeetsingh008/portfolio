import { FeaturedProjectsSectionType } from '@/lib/types/sections';
import { getId } from '@/lib/utils/helper';

const featuredProjectsSection: FeaturedProjectsSectionType = {
  title: "projects i've worked on",
  projects: [
    {
      id: getId(),
      name: 'Ganpati Tours',
      description:
        'A frontend for a travel agency that offers authentic, personalized tours of India to Spanish travelers.',
      tasks:
        "Developed the complete frontend for 'Ganpati Tours', a travel agency run by a Spanish-Indian couple. The site is designed to showcase the authentic and exciting side of India, offering personalized routes and guides in Spanish.",
      url: 'https://ganpati-tours-main.vercel.app/',
      img: '/images/projects/ganpati_tours.png',
      tags: ['React.js', 'TypeScript', 'Tailwind CSS'],
    },
    {
      id: getId(),
      name: 'Streamy (Video Hosting Backend)',
      description:
        'A backend for a YouTube-like video hosting platform with real-time features.',
      tasks:
        'Engineered a Node.js backend for video uploads, comments, and likes with real-time updates. Integrated secure JWT and Bcrypt authentication and developed a user subscription system.',
      url: 'https://github.com/jeetsingh008/Streamy-Backend',
      img: '/images/projects/streamy.png',
      tags: ['Node.js', 'Express.js', 'MongoDB', 'JWT', 'Bcrypt', 'Mongoose'],
    },
    {
      id: getId(),
      name: 'Bookit (Travel Booking Fullstack)',
      description:
        'A full-stack travel booking application allowing users to browse, select, and book travel experiences.',
      tasks:
        'Built a full-stack monorepo with a Next.js (App Router) frontend and an Express.js layered backend. Implemented real-time search filtering using URL state and a debounced hook. Secured the booking process with atomic (ACID) transactions in Mongoose to prevent double-booking.',
      url: 'https://bookit-delta-flame.vercel.app/',
      img: '/images/projects/bookit.png', // You'll need to add a screenshot here
      tags: [
        'Next.js',
        'TypeScript',
        'Tailwind CSS',
        'Node.js',
        'Express.js',
        'MongoDB',
        'Mongoose',
      ],
    },
  ],
};

export default featuredProjectsSection;
