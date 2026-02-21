import Link from 'next/link';
import ThemeToggle from './ThemeToggle';

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 dark:bg-zinc-900/80 backdrop-blur border-b border-zinc-200 dark:border-zinc-800">
      <nav className="max-w-2xl mx-auto px-4 h-14 flex items-center justify-between">
        <Link
          href="/"
          className="font-semibold text-zinc-900 dark:text-zinc-100 hover:text-teal-500 dark:hover:text-teal-400 transition-colors"
        >
          Avvai Ketheeswaran
        </Link>
        <div className="flex items-center gap-4">
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
