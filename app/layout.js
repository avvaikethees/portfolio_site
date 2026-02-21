import './globals.css';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

export const metadata = {
  title: 'Avvai Ketheeswaran',
  description: 'Personal portfolio site',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme');
                  if (theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                    document.documentElement.classList.add('dark');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 font-sans antialiased min-h-screen flex flex-col">
        <Nav />
        <main className="flex-1 max-w-2xl mx-auto w-full px-4 py-12">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
