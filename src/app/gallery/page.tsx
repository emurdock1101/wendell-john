"use client";

import { useState } from "react";

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

  return (
    <main className="min-h-screen bg-[#0a0a0a] relative overflow-x-hidden">
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
        <p className="text-gray-700 text-xs mt-2">10 artifacts recovered</p>
      </header>

      {/* Nancy — Featured */}
      <section className="relative z-20 max-w-5xl mx-auto px-4 pt-12 pb-6">
        <div className="max-w-sm mx-auto">
          <div
            className="relative bg-gray-950 rounded-2xl overflow-hidden cursor-pointer border-2 border-pink-500/60 shadow-[0_0_30px_rgba(236,72,153,0.3),0_0_60px_rgba(236,72,153,0.15)] hover:shadow-[0_0_40px_rgba(236,72,153,0.5),0_0_80px_rgba(236,72,153,0.25)] transition-all duration-500 hover:scale-105 group"
            onClick={() => setSelectedImage(9)}
          >
            {/* Ornate gold corners */}
            <div className="absolute top-1 left-1 w-10 h-10 border-t-3 border-l-3 border-yellow-400 z-30" />
            <div className="absolute top-1 right-1 w-10 h-10 border-t-3 border-r-3 border-yellow-400 z-30" />
            <div className="absolute bottom-1 left-1 w-10 h-10 border-b-3 border-l-3 border-yellow-400 z-30" />
            <div className="absolute bottom-1 right-1 w-10 h-10 border-b-3 border-r-3 border-yellow-400 z-30" />

            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/gallery/chansey.png"
              alt="Nancy — John's Girlfriend"
              className="w-full aspect-square object-contain bg-pink-950/20 p-4 transition-transform duration-700 group-hover:scale-110"
            />

            {/* Label */}
            <div className="absolute bottom-0 left-0 right-0 z-30 bg-gradient-to-t from-black/90 via-black/60 to-transparent p-4 text-center">
              <p className="text-pink-400 font-gothic text-lg font-bold">
                💕 Nancy 💕
              </p>
              <p className="text-gray-400 font-serif italic text-sm">
                John&rsquo;s Girlfriend — <span className="text-pink-300">Normal</span> Type
              </p>
            </div>

            {/* Hearts badge */}
            <div className="absolute top-3 right-3 z-30 text-2xl animate-heartbeat">
              💖
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="relative z-20 max-w-5xl mx-auto px-4 py-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {Array.from({ length: 9 }, (_, i) => (
            <div
              key={i}
              className="group relative aspect-square bg-gray-950 border border-gray-800/30 rounded-xl overflow-hidden cursor-pointer hover:border-red-900/40 transition-all duration-500 animate-pulse-red"
              style={{ animationDelay: `${i * 0.3}s` }}
              onClick={() => setSelectedImage(i)}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`/gallery/${i + 1}.png`}
                alt={`John Wendell Murdock — Photo ${i + 1}`}
                className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110 relative z-10"
              />

              {/* Dark overlay on hover */}
              <div className="absolute inset-0 z-20 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Caption on hover */}
              <div className="absolute bottom-0 left-0 right-0 z-30 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                <p className="text-white/80 text-sm font-serif italic">
                  {CAPTIONS[i % CAPTIONS.length]}
                </p>
              </div>

              {/* Number badge */}
              <div className="absolute top-3 left-3 z-30 w-8 h-8 bg-red-900/60 backdrop-blur rounded-full flex items-center justify-center text-white text-xs font-gothic">
                {i + 1}
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
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={selectedImage === 9 ? "/gallery/chansey.png" : `/gallery/${selectedImage + 1}.png`}
              alt={selectedImage === 9 ? "Nancy — John's Girlfriend" : `John Wendell Murdock — Photo ${selectedImage + 1}`}
              className={`max-h-[80vh] rounded-xl shadow-2xl object-contain ${
                selectedImage === 9
                  ? "border-2 border-pink-500/60 shadow-[0_0_40px_rgba(236,72,153,0.4)]"
                  : "border-2 border-red-900/30"
              }`}
            />
            <p className="text-center text-gray-400 font-serif italic mt-4 text-lg">
              {selectedImage === 9
                ? "Nancy. The love of John's life. She's a Chansey. He doesn't see the issue."
                : CAPTIONS[selectedImage % CAPTIONS.length]}
            </p>
            <button
              className="absolute -top-3 -right-3 w-10 h-10 bg-red-900 hover:bg-red-800 rounded-full text-white font-bold text-lg flex items-center justify-center transition-colors cursor-pointer"
              onClick={(e) => { e.stopPropagation(); setSelectedImage(null); }}
            >
              ✕
            </button>
            <button
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-14 w-10 h-10 bg-gray-900/80 hover:bg-red-900/80 rounded-full text-white flex items-center justify-center transition-colors cursor-pointer"
              onClick={(e) => { e.stopPropagation(); setSelectedImage((selectedImage - 1 + 10) % 10); }}
            >
              ‹
            </button>
            <button
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-14 w-10 h-10 bg-gray-900/80 hover:bg-red-900/80 rounded-full text-white flex items-center justify-center transition-colors cursor-pointer"
              onClick={(e) => { e.stopPropagation(); setSelectedImage((selectedImage + 1) % 10); }}
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
          All photographs taken without the subject&rsquo;s full awareness. Probably.
        </p>
      </footer>
    </main>
  );
}
