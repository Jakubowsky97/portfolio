export default function Hero() {
  return (
    <section className="relative mx-auto max-w-6xl px-6 py-24 sm:py-32">
      <div className="text-center animate-fade-in-up">
        <div className="mb-6 inline-block">
          <span className="rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 px-4 py-2 text-sm font-semibold text-white shadow-lg">
            Available for Remote Work
          </span>
        </div>
        <h2 className="mb-6 text-5xl font-extrabold tracking-tight text-zinc-900 sm:text-7xl dark:text-zinc-100">
          Crafting Digital
          <br />
          <span className="gradient-text">Experiences</span>
        </h2>
        <p className="mb-4 text-2xl font-medium text-zinc-700 dark:text-zinc-300">
          Front-End / Full-Stack Developer
        </p>
        <p className="mb-12 text-lg text-zinc-600 dark:text-zinc-400">
          📍 Sandomierz, Poland | 🌐 Remote Worldwide
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="mailto:jakubowskyy97@gmail.com"
            className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 px-8 py-4 text-sm font-semibold text-white shadow-xl transition-all hover:scale-105 hover:shadow-2xl dark:from-indigo-500 dark:to-purple-500"
          >
            <span>Get in Touch</span>
            <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/in/jakub-m%C4%85dry-28b694267/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border-2 border-zinc-300 bg-white px-8 py-4 text-sm font-semibold text-zinc-900 transition-all hover:scale-105 hover:border-indigo-400 hover:bg-indigo-50 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100 dark:hover:border-indigo-500 dark:hover:bg-zinc-800"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/Jakubowsky97"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border-2 border-zinc-300 bg-white px-8 py-4 text-sm font-semibold text-zinc-900 transition-all hover:scale-105 hover:border-indigo-400 hover:bg-indigo-50 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100 dark:hover:border-indigo-500 dark:hover:bg-zinc-800"
          >
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}

