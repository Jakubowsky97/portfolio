import ScrollAnimation from './ScrollAnimation';
import ProjectImage from './ProjectImage';

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  imageSrc: string;
  imageAlt: string;
  isFullPage?: boolean;
  isDashboard?: boolean;
  icon: React.ReactNode;
  iconGradientFrom: string;
  iconGradientTo: string;
  techBadgeColor: string;
  techBadgeTextColor: string;
  techBadgeDark: string;
  techBadgeDarkText: string;
  delay?: number;
  links?: Array<{ label: string; href: string }>;
  highlights?: string[];
  status?: string;
}

export default function ProjectCard({
  title,
  description,
  technologies,
  imageSrc,
  imageAlt,
  isFullPage = false,
  isDashboard = false,
  icon,
  iconGradientFrom,
  iconGradientTo,
  techBadgeColor,
  techBadgeTextColor,
  techBadgeDark,
  techBadgeDarkText,
  delay = 0,
  links,
  highlights,
  status,
}: ProjectCardProps) {
  return (
    <ScrollAnimation delay={delay}>
      <div className="project-card rounded-2xl border border-zinc-200 bg-white/80 p-8 shadow-lg dark:border-zinc-800 dark:bg-zinc-900/80">
        {imageSrc && (isFullPage || isDashboard) && (
          <ProjectImage
            src={imageSrc}
            alt={imageAlt}
            isFullPage={isFullPage}
            isDashboard={isDashboard}
          />
        )}
        <div className="mb-4 flex items-center gap-3">
          <div className={`rounded-lg bg-gradient-to-br ${iconGradientFrom} ${iconGradientTo} p-2`}>
            {icon}
          </div>
          <h3 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">
            {title}
          </h3>
        </div>
        <p className="mb-4 text-zinc-700 dark:text-zinc-300">
          {description}
        </p>
        {highlights && (
          <div className="mb-4 space-y-2">
            <p className="font-semibold text-zinc-800 dark:text-zinc-200">Highlights:</p>
            <ul className="ml-4 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
              {highlights.map((highlight, index) => (
                <li key={index}>{highlight}</li>
              ))}
            </ul>
          </div>
        )}
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech) => (
            <span
              key={tech}
              className={`rounded-full ${techBadgeColor} px-3 py-1 text-xs font-medium ${techBadgeTextColor} dark:${techBadgeDark} dark:${techBadgeDarkText}`}
            >
              {tech}
            </span>
          ))}
        </div>
        {status && (
          <p className="mt-4 text-sm font-medium text-indigo-600 dark:text-indigo-400">{status}</p>
        )}
        {links && links.length > 0 && (
          <div className="flex flex-wrap gap-4 mt-4">
            {links.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-600 transition-all hover:gap-3 dark:text-indigo-400"
              >
                {link.label}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
            ))}
          </div>
        )}
      </div>
    </ScrollAnimation>
  );
}

