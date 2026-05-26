import ZineGrid from '../../components/ZineGrid';

export const metadata = {
  title: 'Common Spokes Press — Avvai Ketheeswaran',
};

const zines = [
  {
    title: 'Zine 1: Tour de VPL Zine',
    subtitle: 'A Vancouver Public Library biking adventure zine. Includes a map of all the VPL branches.',
    pages: [
      { src: '/tour_de_vpl_zine_cover.jpg', width: 1200, height: 1600, alt: 'Tour de VPL cover' },
      { src: '/tour_de_vpl_zine_instagram_slides1.jpg', width: 1200, height: 1500, alt: 'Tour de VPL page 1' },
      { src: '/tour_de_vpl_zine_instagram_slides2.jpg', width: 1200, height: 1500, alt: 'Tour de VPL page 2' },
      { src: '/tour_de_vpl_zine_instagram_slides3.jpg', width: 1200, height: 1500, alt: 'Tour de VPL page 3' },
      { src: '/tour_de_vpl_zine_instagram_slides4.jpg', width: 1200, height: 1500, alt: 'Tour de VPL page 4' },
      { src: '/tour_de_vpl_zine_instagram_slides5.jpg', width: 1200, height: 1500, alt: 'Tour de VPL page 5' },
      { src: '/tour_de_vpl_zine_instagram_slides6.jpg', width: 1200, height: 1500, alt: 'Tour de VPL page 6' },
      { src: '/tour_de_vpl_zine_instagram_slides7.jpg', width: 1200, height: 1500, alt: 'Tour de VPL page 7' },
      { src: '/tour_de_vpl_zine_instagram_slides_back.jpg', width: 1500, height: 1200, alt: 'Tour de VPL back page' },
    ],
  },
  {
    title: 'Zine 2: Raingardens',
    subtitle: 'Coming soon',
    subtitleColor: '#ADD8E6',
    pages: [],
  },
];

export default function CommonSpokesPressPage() {
  return (
    <div className="py-8 px-2 sm:px-0">
      <div className="flex flex-col sm:flex-row-reverse gap-8 items-center mb-8">
        <div className="w-full sm:w-1/2 shrink-0">
          <img
            src="/commonspokeslogo.gif"
            alt="Common Spokes Press logo"
            className="w-full h-auto"
          />
        </div>
        <div>
          <h1 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100 mb-2">
            Common Spokes Press
          </h1>
          <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
            A small, scrappy micro&ndash;indie press. A place to encourage local creators to make small publications of any kind, whether that&apos;s a zine, a comic, or anything that&apos;s a thing-with-pages.
          </p>
        </div>
      </div>

      <div className="space-y-12">
        {zines.map((zine) => (
          <div key={zine.title}>
            <div className="inline-block mb-4">
              <h2 className="text-xl font-semibold text-zinc-900 mb-1 bg-[#FFB830] px-3 -mx-3 py-0.5 w-fit">
                {zine.title}
              </h2>
              <p className="text-sm text-zinc-700 italic px-3 -mx-3 py-0.5" style={{ backgroundColor: zine.subtitleColor || '#FFB3A7' }}>{zine.subtitle}</p>
            </div>
            {zine.pages.length > 0 && <ZineGrid pages={zine.pages} />}
          </div>
        ))}
      </div>
    </div>
  );
}
