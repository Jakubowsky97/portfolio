import SectionHeader from './SectionHeader';

interface SkillCategoryProps {
  title: string;
  skills: string[];
  icon: React.ReactNode;
  gradientFrom: string;
  gradientTo: string;
  badgeGradientFrom: string;
  badgeGradientTo: string;
  badgeTextColor: string;
  badgeDarkFrom: string;
  badgeDarkTo: string;
  badgeDarkText: string;
}

function SkillCategory({ 
  title, 
  skills, 
  icon, 
  gradientFrom, 
  gradientTo,
  badgeGradientFrom,
  badgeGradientTo,
  badgeTextColor,
  badgeDarkFrom,
  badgeDarkTo,
  badgeDarkText
}: SkillCategoryProps) {
  return (
    <div className="rounded-2xl border border-zinc-200 bg-white/50 p-6 backdrop-blur-sm dark:border-zinc-800 dark:bg-zinc-900/50">
      <div className="mb-4 flex items-center gap-3">
        <div className={`rounded-lg bg-gradient-to-br ${gradientFrom} ${gradientTo} p-3`}>
          {icon}
        </div>
        <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100">
          {title}
        </h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span
            key={skill}
            className={`skill-badge rounded-full bg-gradient-to-r ${badgeGradientFrom} ${badgeGradientTo} px-4 py-2 text-sm font-medium ${badgeTextColor} dark:${badgeDarkFrom} dark:${badgeDarkTo} dark:${badgeDarkText}`}
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="relative mx-auto max-w-6xl px-6 py-20">
      <SectionHeader title="Technical Expertise" />
      <div className="grid gap-8 md:grid-cols-3">
        <SkillCategory
          title="Frontend"
          skills={['React', 'Next.js', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'Zustand', 'React Query', 'Framer Motion']}
          icon={
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          }
          gradientFrom="from-blue-500"
          gradientTo="to-cyan-500"
          badgeGradientFrom="from-blue-100"
          badgeGradientTo="to-cyan-100"
          badgeTextColor="text-blue-800"
          badgeDarkFrom="from-blue-900/30"
          badgeDarkTo="to-cyan-900/30"
          badgeDarkText="text-blue-300"
        />
        <SkillCategory
          title="Backend"
          skills={['Node.js', 'Express', 'Payload CMS', 'MongoDB', 'Supabase', 'Prisma']}
          icon={
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
            </svg>
          }
          gradientFrom="from-purple-500"
          gradientTo="to-pink-500"
          badgeGradientFrom="from-purple-100"
          badgeGradientTo="to-pink-100"
          badgeTextColor="text-purple-800"
          badgeDarkFrom="from-purple-900/30"
          badgeDarkTo="to-pink-900/30"
          badgeDarkText="text-purple-300"
        />
        <SkillCategory
          title="Tools & More"
          skills={['Git', 'GitHub', 'Vercel', 'Docker', 'REST APIs', 'UX/UI', 'Responsive Design', 'Performance', 'SEO']}
          icon={
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          }
          gradientFrom="from-indigo-500"
          gradientTo="to-purple-500"
          badgeGradientFrom="from-indigo-100"
          badgeGradientTo="to-purple-100"
          badgeTextColor="text-indigo-800"
          badgeDarkFrom="from-indigo-900/30"
          badgeDarkTo="to-purple-900/30"
          badgeDarkText="text-indigo-300"
        />
      </div>
    </section>
  );
}

