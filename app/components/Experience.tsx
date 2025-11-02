import SectionHeader from './SectionHeader';
import ExperienceCard from './ExperienceCard';

export default function Experience() {
  return (
    <section id="experience" className="relative mx-auto max-w-6xl px-6 py-20">
      <SectionHeader title="Professional Journey" />
      <div className="space-y-6">
        <ExperienceCard
          title="Freelance & Independent Developer"
          period="2023 – Present"
          achievements={[
            'Designed and developed cutting-edge web applications leveraging React and Next.js frameworks',
            'Architected and integrated custom CMS solutions using Payload CMS and Neon database',
            'Prioritized responsive design, performance optimization, and exceptional user experience across all projects',
          ]}
          delay={100}
        />
        <ExperienceCard
          title="C# Backend Intern"
          company="W-ned Software"
          period="Remote • May 2024"
          achievements={[
            'Developed and tested robust backend features using C# and .NET technologies',
            'Collaborated effectively with cross-functional teams using Git workflows and agile methodologies',
            'Gained hands-on experience in clean code principles and efficient backend architecture',
          ]}
          delay={200}
        />
        <ExperienceCard
          title="Front-end Intern"
          company="Magico Software"
          period="Remote • October 2024"
          description="Engineered a sophisticated web-based phone simulator for the Helpdesk system using React, Next.js, and Bootstrap. The application delivers real-time phone simulation capabilities directly in the browser, featuring seamless server synchronization, incoming call handling, and dynamic status management (idle, ringing, off-hook states)."
          delay={300}
        />
      </div>
    </section>
  );
}

