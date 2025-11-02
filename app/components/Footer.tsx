export default function Footer() {
  return (
    <footer className="relative border-t border-zinc-200/50 bg-white/50 backdrop-blur-sm dark:border-zinc-800/50 dark:bg-zinc-950/50">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div>
            <h3 className="mb-2 text-xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent dark:from-indigo-400 dark:to-purple-400">
              Jakub Mądry
            </h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              Front-End / Full-Stack Developer
            </p>
          </div>
          <div className="flex flex-col items-center gap-4 sm:items-end">
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              © 2025 Jakub Mądry. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a
                href="https://www.linkedin.com/in/jakub-m%C4%85dry-28b694267/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-zinc-700 transition-colors hover:text-indigo-600 dark:text-zinc-300 dark:hover:text-indigo-400"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/Jakubowsky97"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-zinc-700 transition-colors hover:text-indigo-600 dark:text-zinc-300 dark:hover:text-indigo-400"
              >
                GitHub
              </a>
              <a
                href="mailto:jakubowskyy97@gmail.com"
                className="text-sm font-medium text-zinc-700 transition-colors hover:text-indigo-600 dark:text-zinc-300 dark:hover:text-indigo-400"
              >
                Email
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

