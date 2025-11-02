import ScrollAnimation from './ScrollAnimation';

export default function LanguagesAndInterests() {
  return (
    <section className="relative mx-auto max-w-6xl px-6 py-20">
      <div className="grid gap-8 md:grid-cols-2">
        <ScrollAnimation delay={100}>
          <div className="rounded-2xl border border-zinc-200 bg-white/80 p-8 shadow-lg dark:border-zinc-800 dark:bg-zinc-900/80">
            <h2 className="mb-6 text-2xl font-bold text-zinc-900 dark:text-zinc-100">
              Languages
            </h2>
            <div className="space-y-4">
              <div>
                <div className="mb-2 flex items-center justify-between">
                  <span className="font-semibold text-zinc-800 dark:text-zinc-200">Polish</span>
                  <span className="text-sm text-zinc-600 dark:text-zinc-400">Native</span>
                </div>
                <div className="h-2 rounded-full bg-zinc-200 dark:bg-zinc-800">
                  <div className="h-2 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500" style={{ width: '100%' }}></div>
                </div>
              </div>
              <div>
                <div className="mb-2 flex items-center justify-between">
                  <span className="font-semibold text-zinc-800 dark:text-zinc-200">English</span>
                  <span className="text-sm text-zinc-600 dark:text-zinc-400">Fluent</span>
                </div>
                <div className="h-2 rounded-full bg-zinc-200 dark:bg-zinc-800">
                  <div className="h-2 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500" style={{ width: '95%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </ScrollAnimation>
        <ScrollAnimation delay={200}>
          <div className="rounded-2xl border border-zinc-200 bg-white/80 p-8 shadow-lg dark:border-zinc-800 dark:bg-zinc-900/80">
            <h2 className="mb-6 text-2xl font-bold text-zinc-900 dark:text-zinc-100">
              Interests & Hobbies
            </h2>
            <p className="mb-4 text-zinc-700 dark:text-zinc-300">
              When I'm not coding, I'm passionate about <strong className="text-indigo-600 dark:text-indigo-400">karting</strong> and <strong className="text-indigo-600 dark:text-indigo-400">motorsports</strong>, which fuel my competitive spirit and attention to detail.
            </p>
            <p className="text-zinc-700 dark:text-zinc-300">
              I'm constantly exploring <strong className="text-indigo-600 dark:text-indigo-400">emerging technologies</strong> and building applications that solve real-world problems and enhance everyday life.
            </p>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
}

