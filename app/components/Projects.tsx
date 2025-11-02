import SectionHeader from './SectionHeader';
import ProjectCard from './ProjectCard';

export default function Projects() {
  return (
    <section id="projects" className="relative mx-auto max-w-6xl px-6 py-20">
      <SectionHeader title="Featured Projects" />
      <div className="grid gap-8 md:grid-cols-2">
        <ProjectCard
          title="TripMate"
          description="A comprehensive full-stack travel planning platform designed for organizing and sharing travel itineraries with friends. Built with React, Next.js, and Supabase for real-time collaboration features."
          technologies={['React', 'Next.js', 'Supabase']}
          imageSrc="/tripmate.png"
          imageAlt="TripMate - Full page screenshot"
          isFullPage={true}
          icon={
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
            </svg>
          }
          iconGradientFrom="from-blue-500"
          iconGradientTo="to-cyan-500"
          techBadgeColor="bg-blue-100"
          techBadgeTextColor="text-blue-800"
          techBadgeDark="bg-blue-900/30"
          techBadgeDarkText="text-blue-300"
          delay={100}
          status="🚧 In Development"
        />
        <ProjectCard
          title="Los Laseros"
          description="A fully-featured business website with integrated reservation system, powered by Next.js and Payload CMS. Features a comprehensive admin dashboard for dynamic image and content management."
          technologies={['Next.js', 'Payload CMS']}
          imageSrc="/loslaseros.png"
          imageAlt="Los Laseros - Full page screenshot"
          isFullPage={true}
          icon={
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
          }
          iconGradientFrom="from-purple-500"
          iconGradientTo="to-pink-500"
          techBadgeColor="bg-purple-100"
          techBadgeTextColor="text-purple-800"
          techBadgeDark="bg-purple-900/30"
          techBadgeDarkText="text-purple-300"
          delay={200}
          links={[{ label: 'View Live Site', href: 'https://los-laseros-cms.vercel.app/' }]}
        />
        <ProjectCard
          title="Biłgokart"
          description="A high-performance, visually stunning landing page for a go-kart rental business. Optimized for speed, aesthetics, and seamless content management. Built with Next.js, Tailwind CSS, and Framer Motion, deployed on Vercel."
          technologies={['Next.js', 'Tailwind CSS', 'Framer Motion']}
          imageSrc="/bilgokart.png"
          imageAlt="Biłgokart - Full page screenshot"
          isFullPage={true}
          icon={
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          }
          iconGradientFrom="from-orange-500"
          iconGradientTo="to-red-500"
          techBadgeColor="bg-orange-100"
          techBadgeTextColor="text-orange-800"
          techBadgeDark="bg-orange-900/30"
          techBadgeDarkText="text-orange-300"
          delay={300}
        />
        <ProjectCard
          title="AstroColony"
          description="An innovative interactive Mars colony simulator developed during a 24-hour hackathon. Frontend built with React, TypeScript, Vite, Leaflet maps, and Recharts. Backend powered by Spring Boot with automated schedulers for day/night cycles and environmental simulations."
          technologies={['React', 'TypeScript', 'Spring Boot', 'Leaflet']}
          imageSrc="/astrocolony.png"
          imageAlt="AstroColony - Dashboard View"
          isDashboard={true}
          icon={
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          }
          iconGradientFrom="from-green-500"
          iconGradientTo="to-teal-500"
          techBadgeColor="bg-green-100"
          techBadgeTextColor="text-green-800"
          techBadgeDark="bg-green-900/30"
          techBadgeDarkText="text-green-300"
          delay={400}
          highlights={[
            '• Interactive Mars terrain mapping with structure placement',
            '• Real-time environmental metrics visualization (O₂, H₂O, Energy)',
            '• RESTful API architecture with scheduled simulation updates',
          ]}
          links={[
            { label: 'GitHub', href: 'https://github.com/Jakubowsky97/Spaceshield-Hackathon' },
            { label: 'Certificate', href: 'https://credsverse.com/credentials/89c1df53-e923-44dd-8201-8fd1494f0615' },
          ]}
        />
        <ProjectCard
          title="x-clone"
          description="A full-stack social media clone demonstrating modern web architecture. Built with Next.js, TypeScript, and Prisma, featuring modular structure, type-safe operations, and robust middleware implementation."
          technologies={['Next.js', 'TypeScript', 'Prisma']}
          imageSrc=""
          imageAlt=""
          icon={
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
          }
          iconGradientFrom="from-indigo-500"
          iconGradientTo="to-purple-500"
          techBadgeColor="bg-indigo-100"
          techBadgeTextColor="text-indigo-800"
          techBadgeDark="bg-indigo-900/30"
          techBadgeDarkText="text-indigo-300"
          delay={500}
          highlights={[
            '• Prisma ORM for type-safe database operations',
            '• Next.js middleware for route protection',
            '• Clean separation: lib/, types/, components/',
            '• Responsive design with Tailwind CSS',
          ]}
          links={[{ label: 'View Repository', href: 'https://github.com/Jakubowsky97/x-clone' }]}
        />
        <ProjectCard
          title="Portfolio Website"
          description="A modern, animated portfolio showcasing my work, skills, and professional journey. Built with Next.js, Tailwind CSS, and Framer Motion for smooth animations and engaging interactions."
          technologies={['Next.js', 'Tailwind CSS', 'Framer Motion']}
          imageSrc=""
          imageAlt=""
          icon={
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          }
          iconGradientFrom="from-pink-500"
          iconGradientTo="to-rose-500"
          techBadgeColor="bg-pink-100"
          techBadgeTextColor="text-pink-800"
          techBadgeDark="bg-pink-900/30"
          techBadgeDarkText="text-pink-300"
          delay={600}
        />
      </div>
    </section>
  );
}

