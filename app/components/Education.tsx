import SectionHeader from './SectionHeader';
import ScrollAnimation from './ScrollAnimation';

export default function Education() {
  return (
    <section className="relative mx-auto max-w-6xl px-6 py-20">
      <SectionHeader title="Education & Learning" />
      <div className="grid gap-8 md:grid-cols-2">
        <ScrollAnimation delay={100}>
          <div className="project-card rounded-2xl border border-zinc-200 bg-white/80 p-8 shadow-lg dark:border-zinc-800 dark:bg-zinc-900/80">
            <h3 className="mb-3 text-xl font-bold text-zinc-900 dark:text-zinc-100">
              Zespół Szkół im. ks. S. Staszica w Tarnobrzegu
            </h3>
            <p className="mb-2 text-sm font-semibold text-indigo-600 dark:text-indigo-400">Programmer Profile</p>
            <p className="mb-4 text-zinc-600 dark:text-zinc-400">2021-2026</p>
            <p className="text-zinc-700 dark:text-zinc-300">
              Formal education in programming fundamentals, computer science, and software development principles.
            </p>
          </div>
        </ScrollAnimation>
        <ScrollAnimation delay={200}>
          <div className="project-card rounded-2xl border border-zinc-200 bg-white/80 p-8 shadow-lg dark:border-zinc-800 dark:bg-zinc-900/80">
            <h3 className="mb-3 text-xl font-bold text-zinc-900 dark:text-zinc-100">
              Self-Directed Learning
            </h3>
            <p className="mb-2 text-sm font-semibold text-indigo-600 dark:text-indigo-400">Full-Stack Development</p>
            <p className="text-zinc-700 dark:text-zinc-300">
              Continuously expanding expertise in <strong className="text-indigo-600 dark:text-indigo-400">JavaScript</strong>, <strong className="text-indigo-600 dark:text-indigo-400">React</strong>, and <strong className="text-indigo-600 dark:text-indigo-400">Node.js</strong> through hands-on project development, online courses, and building real-world applications.
            </p>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
}

