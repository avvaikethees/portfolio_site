import Image from 'next/image';

export const metadata = {
  title: 'Publishing — Avvai Ketheeswaran',
};

const projects = [
  {
    src: '/publishing/book-1.jpg',
    alt: 'Book title one',
    title: 'Book Title One',
    role: 'Your Role',
    publisher: 'Publisher Name',
    year: '2024',
  },
  {
    src: '/publishing/book-2.jpg',
    alt: 'Book title two',
    title: 'Book Title Two',
    role: 'Your Role',
    publisher: 'Publisher Name',
    year: '2023',
  },
  // Add more entries here
];

export default function Publishing() {
  return (
    <div className="py-8">
      <h1 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100 mb-2">
        Publishing
      </h1>
      <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-4">Ongoing</p>
      <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed mb-12">
        A selection of publishing projects — covers, mechanicals, and editorial work.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {projects.map((project, i) => (
          <div key={i} className="flex flex-col gap-3">
            <div className="relative w-full aspect-[2/3] bg-zinc-100 dark:bg-zinc-800 rounded overflow-hidden">
              <Image
                src={project.src}
                alt={project.alt}
                fill
                className="object-cover"
                sizes="(min-width: 640px) 50vw, 100vw"
              />
            </div>
            <div>
              <p className="font-medium text-zinc-900 dark:text-zinc-100 text-sm">
                {project.title}
              </p>
              <p className="text-zinc-500 dark:text-zinc-400 text-sm">
                {project.role} &middot; {project.publisher} &middot; {project.year}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
