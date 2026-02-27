import '../styles/globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Jeet Singh | MERN Stack Developer',
  description:
    'Jeet Singh is a MERN Stack Developer specializing in Next.js 15, TypeScript, and Express. Building robust SaaS platforms, secure authentication systems, and real-time data visualization tools.',
  authors: [{ name: 'Jeet Singh' }],
  keywords: [
    'Jeet Singh',
    'MERN Stack Developer',
    'Full Stack Developer',
    'Next.js',
    'React',
    'Node.js',
    'TypeScript',
    'Portfolio',
  ].join(','),
  metadataBase: new URL('https://portfolio-lyart-alpha-14.vercel.app/'),
  alternates: { canonical: 'https://portfolio-lyart-alpha-14.vercel.app/' },
  openGraph: {
    type: 'website',
    url: 'https://portfolio-lyart-alpha-14.vercel.app/',
    title: 'Jeet Singh | MERN Stack Developer',
    description:
      'Building robust SaaS platforms and turning complex backends into intuitive UIs.',
    siteName: 'Jeet Singh Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jeet Singh | MERN Stack Developer',
    description:
      'Building robust SaaS platforms and turning complex backends into intuitive UIs.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=Inter:wght@300;400;500;600&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-[#0d0d12] text-[#e2e8f0] antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
