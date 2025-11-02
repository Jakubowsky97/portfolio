import ScrollAnimation from './ScrollAnimation';

interface ExperienceCardProps {
  title: string;
  company?: string;
  period: string;
  description?: string;
  achievements?: string[];
  delay?: number;
}

export default function ExperienceCard({
  title,
  company,
  period,
  description,
  achievements,
  delay = 0,
}: ExperienceCardProps) {
  return (
    <ScrollAnimation delay={delay}>
      <div className="project-card rounded-2xl border border-zinc-200 bg-white/80 p-8 shadow-lg dark:border-zinc-800 dark:bg-zinc-900/80">
        <div className="mb-4 flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <h3 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">
              {title}
            </h3>
            {company && (
              <p className="text-lg font-medium text-indigo-600 dark:text-indigo-400">
                {company}
              </p>
            )}
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              {period}
            </p>
          </div>
        </div>
        {description && (
          <p className="mt-6 text-zinc-700 dark:text-zinc-300">
            {description}
          </p>
        )}
        {achievements && (
          <ul className="mt-6 space-y-3 text-zinc-700 dark:text-zinc-300">
            {achievements.map((achievement, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-indigo-500"></span>
                <span>{achievement}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </ScrollAnimation>
  );
}

