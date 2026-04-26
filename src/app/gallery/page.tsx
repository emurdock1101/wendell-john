"use client";

import { useState, useEffect } from "react";

/* ── Ambient effects (lighter versions) ── */
function GalleryBats() {
  return (
    <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
      {[...Array(3)].map((_, i) => (
        <div
          key={i}
          className="absolute animate-bat"
          style={{
            top: `${10 + i * 15}%`,
            animationDelay: `${i * 7}s`,
            animationDuration: `${20 + i * 5}s`,
          }}
        >
          <svg width="28" height="16" viewBox="0 0 36 20" fill="none">
            <path
              d="M18 8 C14 2, 6 0, 0 4 C4 6, 6 4, 10 8 C8 10, 6 8, 4 10 C8 10, 12 12, 18 10 C24 12, 28 10, 32 10 C30 8, 28 10, 26 8 C30 4, 32 6, 36 4 C30 0, 22 2, 18 8Z"
              fill="#1a1a1a"
              opacity="0.5"
            />
          </svg>
        </div>
      ))}
    </div>
  );
}

const CAPTIONS = [
  "Caught mid-snack. Classic.",
  "The stance of a man who just caught a rare Pokémon.",
  "You can't tell he's bald in this one.",
  "Somewhere between mile 6 and mile 12.",
  "This is his 'I need sauce' face.",
  "Zouk mode: activated.",
  "The eyes of a man who has opinions about global warming.",
  "Plotting his next long walk.",
  "Sonic Adventure 2 energy radiating from this photo.",
];

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [imageCount, setImageCount] = useState(0);

  useEffect(() => {
    // Check which images exist (1-9)
    let count = 0;
    const checks = Array.from({ length: 9 }, (_, i) => {
      const img = new Image();
      return new Promise<boolean>((resolve) => {
        img.onload = () => resolve(true);
        img.onerror = () => resolve(false);
        img.src = `/gallery/${i + 1}.jpg`;
      });
    });
    Promise.all(checks).then((results) => {
      // Also check png
      const pngChecks = Array.from({ length: 9 }, (_, i) => {
        const img = new Image();
        return new Promise<boolean>((resolve) => {
          img.onload = () => resolve(true);
          img.onerror = () => resolve(false);
          img.src = `/gallery/${i + 1}.png`;
        });
      });
      Promise.all(pngChecks).then((pngResults) => {
        count = results.filter(Boolean).length + pngResults.filter(Boolean).length;
        setImageCount(Math.max(count, 9)); // Expect 9
      });
    });
  }, []);

  return (
    <main className="min-h-screen bg-[#0a0a0a] relative overflow-x-hidden">
      <GalleryBats />

      {/* Header */}
      <header className="relative z-20 py-12 px-4 text-center border-b border-gray-800/30">
        <a href="/" className="text-gray-600 hover:text-red-700 text-sm font-serif transition-colors">
          ← Return to the darkness
        </a>
        <h1 className="font-gothic text-4xl md:text-6xl font-black text-gray-100 mt-6 animate-flicker">
          The <span className="text-red-800">Gallery</span>
        </h1>
        <p className="text-gray-500 font-serif italic mt-3">
          Visual evidence of John Wendell Murdock&rsquo;s existence
        </p>
        <p className="text-gray-700 text-xs mt-2">
          {imageCount > 0 ? `${imageCount} artifacts recovered` : "Awaiting photographic evidence..."}
        </p>
      </header>

      {/* Gallery Grid */}
      <section className="relative z-20 max-w-5xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {Array.from({ length: 9 }, (_, i) => (
            <div
              key={i}
              className="group relative aspect-square bg-gray-950 border border-gray-800/30 rounded-xl overflow-hidden cursor-pointer hover:border-red-900/40 transition-all duration-500 animate-pulse-red"
              style={{ animationDelay: `${i * 0.3}s` }}
              onClick={() => setSelectedImage(i)}
            >
              {/* Try both jpg and png */}
              <picture>
                <source srcSet={`/gallery/${i + 1}.jpg`} type="image/jpeg" />
                <source srcSet={`/gallery/${i + 1}.png`} type="image/png" />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`/gallery/${i + 1}.png`}
                  alt={`John Wendell Murdock — Photo ${i + 1}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    // If png fails, try jpg; if both fail, show placeholder
                    if (target.src.endsWith('.png')) {
                      target.src = `/gallery/${i + 1}.jpg`;
                    } else {
                      target.style.display = 'none';
                    }
                  }}
                />
              </picture>

              {/* Dark overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Caption on hover */}
              <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                <p className="text-white/80 text-sm font-serif italic">
                  {CAPTIONS[i % CAPTIONS.length]}
                </p>
              </div>

              {/* Number badge */}
              <div className="absolute top-3 left-3 w-8 h-8 bg-red-900/60 backdrop-blur rounded-full flex items-center justify-center text-white text-xs font-gothic">
                {i + 1}
              </div>

              {/* Placeholder if no image */}
              <div className="absolute inset-0 flex items-center justify-center text-gray-700 font-gothic text-6xl pointer-events-none">
                🦇
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 cursor-pointer"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-3xl max-h-[90vh] animate-fadeIn">
            <picture>
              <source srcSet={`/gallery/${selectedImage + 1}.jpg`} type="image/jpeg" />
              <source srcSet={`/gallery/${selectedImage + 1}.png`} type="image/png" />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`/gallery/${selectedImage + 1}.png`}
                alt={`John Wendell Murdock — Photo ${selectedImage + 1}`}
                className="max-h-[80vh] rounded-xl border-2 border-red-900/30 shadow-2xl object-contain"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  if (target.src.endsWith('.png')) {
                    target.src = `/gallery/${selectedImage + 1}.jpg`;
                  }
                }}
              />
            </picture>
            <p className="text-center text-gray-400 font-serif italic mt-4 text-lg">
              {CAPTIONS[selectedImage % CAPTIONS.length]}
            </p>
            <button
              className="absolute -top-3 -right-3 w-10 h-10 bg-red-900 hover:bg-red-800 rounded-full text-white font-bold text-lg flex items-center justify-center transition-colors cursor-pointer"
              onClick={(e) => { e.stopPropagation(); setSelectedImage(null); }}
            >
              ✕
            </button>
            {/* Nav arrows */}
            <button
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-14 w-10 h-10 bg-gray-900/80 hover:bg-red-900/80 rounded-full text-white flex items-center justify-center transition-colors cursor-pointer"
              onClick={(e) => { e.stopPropagation(); setSelectedImage((selectedImage - 1 + 9) % 9); }}
            >
              ‹
            </button>
            <button
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-14 w-10 h-10 bg-gray-900/80 hover:bg-red-900/80 rounded-full text-white flex items-center justify-center transition-colors cursor-pointer"
              onClick={(e) => { e.stopPropagation(); setSelectedImage((selectedImage + 1) % 9); }}
            >
              ›
            </button>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="relative z-20 border-t border-gray-800/30 py-8 px-4 text-center">
        <a href="/" className="text-gray-600 hover:text-red-700 font-serif transition-colors">
          ← Back to the main crypt
        </a>
        <p className="text-gray-800 text-xs mt-4">
          All photographs taken without the subject&rsquo;s full awareness.
          Probably.
        </p>
      </footer>
    </main>
  );
}
