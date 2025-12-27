import { FeaturedProjectsSectionType } from '@/lib/types/sections';
import { getId } from '@/lib/utils/helper';

const featuredProjectsSection: FeaturedProjectsSectionType = {
  title: "projects i've worked on",
  projects: [
    {
      id: getId(),
      name: 'Command Center (Productivity & Career Tracker)',
      description:
        'A Full stack web application with a comprehensive dashboard for developers to track project hours, log daily activities, and manage career milestones.',
      tasks:
        'Architected a full-stack MERN solution with a secure Next.js frontend and Express.js backend. Implemented JWT authentication via Auth.js (NextAuth) and deployed a scalable MongoDB database. Features include real-time project logging, visual analytics, and a centralized control panel for career management.',
      url: 'https://command-center-lilac.vercel.app/', // Updated to your live link
      img: '/images/projects/command-center.png', // Don't forget to add this screenshot!
      tags: [
        'Next.js',
        'React',
        'Tailwind CSS',
        'Node.js',
        'Express.js',
        'MongoDB',
        'Auth.js',
        'Recharts',
      ],
    },
    {
      id: getId(),
      name: 'Bookit (Travel Booking Fullstack)',
      description:
        'A full-stack travel booking application allowing users to browse, select, and book travel experiences.',
      tasks:
        'Built a full-stack monorepo with a Next.js (App Router) frontend and an Express.js layered backend. Implemented real-time search filtering using URL state and a debounced hook. Secured the booking process with atomic (ACID) transactions in Mongoose to prevent double-booking.',
      url: 'https://bookit-delta-flame.vercel.app/',
      img: '/images/projects/bookit.png',
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
  ],
};

export default featuredProjectsSection;