export const metadata = {
  title: 'Contact — Avvai Ketheeswaran',
};

export default function Contact() {
  return (
    <div className="py-8 max-w-prose">
      <h1 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100 mb-8">
        Contact
      </h1>
      <div className="space-y-4 text-zinc-600 dark:text-zinc-400">
        <p>
          Email: <span className="text-teal-500 font-bold">avvai.kethees@gmail.com</span>
        </p>
        <p>
          Instagram: <a href="https://www.instagram.com/graphicnovelbookclub" target="_blank" rel="noopener noreferrer" className="text-teal-500 hover:text-teal-400 transition-colors font-bold">@graphicnovelbookclub</a>
        </p>
      </div>
    </div>
  );
}
