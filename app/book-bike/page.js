import Image from 'next/image';

export const metadata = {
  title: 'Book Bike — Avvai Ketheeswaran',
};

export default function BookZineBike() {
  return (
    <div className="py-8 px-2 sm:px-0">
      <div className="flex flex-col sm:flex-row-reverse gap-8 items-center mb-4">
        <div className="w-full sm:w-1/3 shrink-0">
          <Image
            src="/book_bike_illustration.png"
            alt="Book bike illustration"
            width={5400}
            height={7200}
            className="w-full h-auto -my-28 animate-wiggle"
            priority
          />
        </div>
        <div>
          <h1 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100 mb-6">
            What is the book bike?
          </h1>
          <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed mb-2">
            It is a micro, mobile bookstore, library, community art space, and publishing press, all centered around comics and art and a bicycle, in Vancouver, BC.
          </p>
          <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed mt-4 mb-8">
            The project began with a shared love of graphic novels and comics. I started the Instagram account to share &amp; recommend what I was reading. You can check it out here: <a
            href="https://www.instagram.com/graphicnovelbookclub"
            target="_blank"
            rel="noopener noreferrer"
            className="text-md text-teal-500 hover:text-teal-400 transition-colors"
          >
            @graphicnovelbookclub
          </a>
          </p>
          <a
            href="#workshops"
            className="inline-block mt-2 mb-8 px-4 py-2 rounded border border-teal-500 text-teal-500 hover:bg-teal-500 hover:text-white transition-colors text-sm font-bold"
          >
            Interested in workshops?
          </a>
        </div>
      </div>

      {/* Hero images — full bleed, stacked on mobile */}
      <div className="w-screen relative left-1/2 -translate-x-1/2 grid grid-cols-1 sm:grid-cols-3 gap-3 mb-2">
        <div>
          <div className="relative aspect-[4/3] sm:aspect-[3/4] overflow-hidden rounded">
            <Image
              src="/PXL_20251122_180117977.MP.jpg"
              alt="Book bike"
              fill
              className="object-cover"
              priority
            />
          </div>
          <p className="text-xs text-zinc-400 dark:text-zinc-500 italic mt-1 px-1">Got Craft Holiday Market, Vancouver. <br/>Photo credit: Kyle Siemens</p>
        </div>
        <div>
          <div className="relative aspect-[4/3] sm:aspect-[3/4] overflow-hidden rounded">
            <Image
              src="/PXL_20250810_013017606.jpg"
              alt="Book bike"
              fill
              className="object-cover"
              priority
            />
          </div>
          <p className="text-xs text-zinc-400 dark:text-zinc-500 italic mt-1 px-1">Mount Pleasant Car Free Day, Vancouver. <br/>Photo credit: Kyle Siemens</p>
        </div>
        <div>
          <div className="rounded overflow-hidden">
            <Image
              src="/MF-DSCF6391.jpg"
              alt="Book bike"
              width={4160}
              height={6240}
              className="w-full h-auto"
              priority
            />
          </div>
          <p className="text-xs text-zinc-400 dark:text-zinc-500 italic mt-1 px-1">Seedy Saturday, East Van. Happy to do masked/unmasked events! <br/>Photo credit: <a href="https://www.instagram.com/michaelejfrank/" target="_blank" rel="noopener noreferrer" className="text-teal-500 hover:text-teal-400 transition-colors">Michael Frank</a></p>
        </div>
      </div>
      <div className="mb-12" />

      <div className="max-w-prose space-y-12">
        <div>
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 mb-2">
            A bookstore and a library
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed mb-6">
            A mini, mobile bookstore that&apos;s stocked with local zines, stickers, and gently used graphic novels. There&apos;s always a section that acts as a library of sorts, where zines can be read and enjoyed on the spot.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-2">
            <div>
              <div className="relative aspect-[4/3] sm:aspect-square overflow-hidden rounded">
                <Image
                  src="/PXL_20250810_214454286.jpg"
                  alt="Book bike detail"
                  fill
                  className="object-cover"
                />
              </div>
              {/* <p className="text-xs text-zinc-400 dark:text-zinc-500 italic mt-1">Caption placeholder</p> */}
            </div>
            <div>
              <div className="relative aspect-[4/3] sm:aspect-square overflow-hidden rounded">
                <Image
                  src="/MF-DSCF6413.jpg"
                  alt="Book bike detail"
                  fill
                  className="object-cover"
                />
              </div>
              {/* <p className="text-xs text-zinc-400 dark:text-zinc-500 italic mt-1">Caption placeholder</p> */}
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 mb-2">
            A community crafting space
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed mb-6">
            I love supporting people who want to make things! 
            <br/>In the summer, you&apos;ll often find me set up in the park, surrounded by people making zines. Interested in a zine-making workshop? <a href="#workshops" className="text-teal-500 hover:text-teal-400 transition-colors">Click here to learn more!</a>
          </p>
          <div className="relative w-full aspect-[3/2] overflow-hidden rounded mb-1">
            <Image
              src="/MF-DSCF6425.jpg"
              alt="Community crafting"
              fill
              className="object-cover"
            />
          </div>
          <p className="text-xs text-zinc-400 dark:text-zinc-500 italic">Photo credit: <a href="https://www.instagram.com/michaelejfrank/" target="_blank" rel="noopener noreferrer" className="text-teal-500 hover:text-teal-400 transition-colors">Michael Frank</a></p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 mb-2">
            Common Spokes Press
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed mb-6">
            A small, scrappy micro&ndash;indie press. It&apos;s the publishing side of what we do&mdash;a place to encourage local creators to make small publications of any kind, whether that&apos;s a zine or a comic or anything that&apos;s a thing-with-pages.
          </p>
          {/* <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-2">
            <div>
              <div className="relative aspect-[4/3] sm:aspect-square overflow-hidden rounded">
                <Image
                  src="/MF-DSCF6425.jpg"
                  alt="Common Spokes Press"
                  fill
                  className="object-cover"
                />
              </div>
              <p className="text-xs text-zinc-400 dark:text-zinc-500 italic mt-1">Caption placeholder</p>
            </div>
            <div>
              <div className="relative aspect-[4/3] sm:aspect-square overflow-hidden rounded">
                <Image
                  src="/MF-DSCF6450.jpg"
                  alt="Common Spokes Press"
                  fill
                  className="object-cover"
                />
              </div>
              <p className="text-xs text-zinc-400 dark:text-zinc-500 italic mt-1">Caption placeholder</p>
            </div>
          </div> */}
        </div>

        <div id="workshops" className="scroll-mt-20">
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 mb-2">
            Workshops
          </h2>
          <div className="space-y-4 mb-6">
            <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
              I love teaching people of all ages on how to make zines. I bring all the supplies, and can lead a 1-2 hour workshop on the basics of zine-making, the different types of zines, and empowering people to be creative! My workshops are collaborative and hands-on, so everyone will make a zine to take home. If there&apos;s a zine that you made that you want out in the world, I&apos;m always happy to make some copies of it and distribute it on my zine bike for the community to read and engage with!
            </p>
            <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
              <strong><i>I charge a sliding-scale fee for nonprofits and educational institutions. Please get in touch with your budget and I&apos;ll happy to work with you. I can tailor workshops to meet your needs or educational goals.</i></strong>
            </p>
            <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Email: <span className="text-teal-500 font-bold">avvai.kethees@gmail.com</span>
              <br />
              Instagram: <a href="https://www.instagram.com/graphicnovelbookclub" target="_blank" rel="noopener noreferrer" className="text-teal-500 hover:text-teal-400 transition-colors">@graphicnovelbookclub</a>
            </p>
          </div>
               {/* Hero images — full bleed, stacked on mobile */}
      <div className="w-screen relative left-1/2 -translate-x-1/2 grid grid-cols-1 sm:grid-cols-3 gap-3 mb-2">
        <div>
          <div className="relative aspect-[4/3] sm:aspect-[3/4] overflow-hidden rounded">
            <Image
              src="/068.jpg"
              alt="Book bike"
              fill
              className="object-cover"
              priority
            />
          </div>
          <p className="text-xs text-zinc-400 dark:text-zinc-500 italic mt-1 px-1">Got Craft Holiday Market, Vancouver. <br/>Photo credit: <a href="https://beateschonborn.com/" target="_blank" rel="noopener noreferrer" 
  className="text-teal-500 hover:text-teal-400 transition-colors">Beaté Schönborn</a></p>
        </div>
        <div>
          <div className="relative aspect-[4/3] sm:aspect-[3/4] overflow-hidden rounded">
            <Image
              src="/041.jpg"
              alt="Book bike"
              fill
              className="object-cover"
              priority
            />
          </div>
          <p className="text-xs text-zinc-400 dark:text-zinc-500 italic mt-1 px-1">Got Craft Holiday Market, Vancouver. <br/>Photo credit: <a href="https://beateschonborn.com/" target="_blank" rel="noopener noreferrer" 
  className="text-teal-500 hover:text-teal-400 transition-colors">Beaté Schönborn</a> </p>
        </div>
        <div>
          <div className="relative aspect-[4/3] sm:aspect-[3/4] overflow-hidden rounded">
            <Image
              src="/067.jpg"
              alt="Book bike"
              fill
              className="object-cover"
              priority
            />
          </div>
          <p className="text-xs text-zinc-400 dark:text-zinc-500 italic mt-1 px-1">Got Craft Holiday Market, Vancouver. <br/>Photo credit: <a href="https://beateschonborn.com/" target="_blank" rel="noopener noreferrer" 
  className="text-teal-500 hover:text-teal-400 transition-colors">Beaté Schönborn</a></p>
        </div>
      </div>
        </div>
      </div>
    </div>
  );
}
