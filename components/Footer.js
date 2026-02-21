import Link from 'next/link';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-zinc-200 dark:border-zinc-800 mt-16">
      <div className="max-w-2xl mx-auto px-4 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-zinc-500 dark:text-zinc-400">
          &copy; {year} Avvai Ketheeswaran
        </p>
        <nav className="flex gap-4 text-sm text-zinc-500 dark:text-zinc-400">
          <Link href="/" className="hover:text-teal-500 dark:hover:text-teal-400 transition-colors">
            Home
          </Link>
        </nav>
      </div>
    </footer>
  );
}
