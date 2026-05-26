'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';

export default function ZineGrid({ pages }) {
  const [activeIndex, setActiveIndex] = useState(null);

  const close = useCallback(() => setActiveIndex(null), []);
  const prev = useCallback(() => setActiveIndex(i => (i - 1 + pages.length) % pages.length), [pages.length]);
  const next = useCallback(() => setActiveIndex(i => (i + 1) % pages.length), [pages.length]);

  useEffect(() => {
    if (activeIndex === null) return;
    const onKey = (e) => {
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
      if (e.key === 'Escape') close();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [activeIndex, prev, next, close]);

  return (
    <>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {pages.map((page, i) => (
          <button
            key={i}
            onClick={() => setActiveIndex(i)}
            className={`relative overflow-hidden rounded focus:outline-none focus:ring-2 focus:ring-teal-500 cursor-zoom-in
              ${i === 0
                ? 'col-span-2 row-span-2 aspect-[4/5] sm:aspect-auto'
                : 'aspect-[4/5]'
              }`}
          >
            <Image
              src={page.src}
              alt={page.alt}
              fill
              sizes={i === 0 ? '(min-width: 640px) 50vw, 100vw' : '(min-width: 640px) 25vw, 50vw'}
              className="object-cover hover:scale-105 transition-transform duration-300"
              priority={i < 4}
            />
          </button>
        ))}
      </div>

      {activeIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center"
          onClick={close}
        >
          {/* Close */}
          <button
            onClick={close}
            className="absolute top-4 right-4 text-white/70 hover:text-white text-3xl leading-none"
            aria-label="Close"
          >
            ×
          </button>

          {/* Prev */}
          <button
            onClick={(e) => { e.stopPropagation(); prev(); }}
            className="absolute left-4 text-white/70 hover:text-white text-4xl leading-none px-2 py-4"
            aria-label="Previous"
          >
            ‹
          </button>

          {/* Image */}
          <div
            className="relative max-h-[90vh] max-w-[90vw] aspect-[4/5]"
            style={{ height: '90vh' }}
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={pages[activeIndex].src}
              alt={pages[activeIndex].alt}
              fill
              sizes="90vw"
              className="object-contain"
              priority
            />
          </div>

          {/* Next */}
          <button
            onClick={(e) => { e.stopPropagation(); next(); }}
            className="absolute right-4 text-white/70 hover:text-white text-4xl leading-none px-2 py-4"
            aria-label="Next"
          >
            ›
          </button>

          {/* Counter */}
          <p className="absolute bottom-4 text-white/50 text-sm">
            {activeIndex + 1} / {pages.length}
          </p>
        </div>
      )}
    </>
  );
}
