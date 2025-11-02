import ScrollAnimation from './ScrollAnimation';
import SectionHeader from './SectionHeader';

export default function About() {
  return (
    <section id="about" className="relative mx-auto max-w-6xl px-6 py-20">
      <SectionHeader title="About Me" />
      <div className="grid gap-8 md:grid-cols-2">
        <ScrollAnimation delay={100}>
          <div className="space-y-6">
            <p className="text-lg leading-relaxed text-zinc-700 dark:text-zinc-300">
              I'm a passionate <strong className="text-indigo-600 dark:text-indigo-400">Front-End Developer</strong> with an unwavering commitment to creating pixel-perfect, responsive, and engaging web experiences. Every project is an opportunity to blend clean code with intuitive design.
            </p>
            <p className="text-lg leading-relaxed text-zinc-700 dark:text-zinc-300">
              My approach centers on writing maintainable code, crafting modern UI designs, and ensuring seamless user interactions that leave a lasting impression.
            </p>
          </div>
        </ScrollAnimation>
        <ScrollAnimation delay={200}>
          <div className="space-y-6">
            <p className="text-lg leading-relaxed text-zinc-700 dark:text-zinc-300">
              With expertise in <strong className="text-indigo-600 dark:text-indigo-400">React</strong>, <strong className="text-indigo-600 dark:text-indigo-400">Next.js</strong>, and <strong className="text-indigo-600 dark:text-indigo-400">TypeScript</strong>, I'm expanding my horizons in backend development using Node.js and Payload CMS.
            </p>
            <p className="text-lg leading-relaxed text-zinc-700 dark:text-zinc-300">
              I'm actively seeking remote opportunities where I can grow as a <strong className="text-indigo-600 dark:text-indigo-400">Full-Stack Developer</strong> and contribute to meaningful digital products that make a difference.
            </p>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
}

