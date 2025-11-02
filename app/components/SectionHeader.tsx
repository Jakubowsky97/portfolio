import ScrollAnimation from './ScrollAnimation';

interface SectionHeaderProps {
  title: string;
}

export default function SectionHeader({ title }: SectionHeaderProps) {
  return (
    <ScrollAnimation>
      <div className="mb-12">
        <h2 className="mb-4 text-4xl font-bold text-zinc-900 dark:text-zinc-100">
          {title}
        </h2>
        <div className="h-1 w-20 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full"></div>
      </div>
    </ScrollAnimation>
  );
}

