"use client";

import { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { carouselData } from "@/data/carousel";

export default function HeroCarousel() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      duration: 30, // Transisi slide yang lebih halus
    },
    [
      Autoplay({
        delay: 5000,
        stopOnInteraction: false,
      }),
    ]
  );

  // Melacak slide mana yang sedang aktif untuk animasi teks
  const onSelect = useCallback((emblaApi: any) => {
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect(emblaApi);
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  // Fungsi agar indikator (dots) bisa diklik
  const scrollTo = useCallback(
    (index: number) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi]
  );

  return (
    <section className="relative h-screen w-full overflow-hidden bg-black text-white">
      
      {/* ─── CAROUSEL WRAPPER ─── */}
      <div ref={emblaRef} className="overflow-hidden h-full w-full">
        <div className="flex h-full">
          {carouselData.map((item, index) => (
            <div key={item.id} className="relative min-w-full h-full select-none">
              
              {/* ─── IMAGE CONTAINER RESPONSIVE ─── */}
              <div className="absolute inset-0 w-full h-full bg-neutral-950 flex justify-center items-center">
                
                {/* GAMBAR UNTUK MOBILE (Portrait/Vertikal) */}
                <img
                  src={item.imageMobile}
                  alt={item.title}
                  className="block md:hidden w-full h-full object-cover object-center opacity-85 transition-transform duration-700 ease-out"
                  loading={index === 0 ? "eager" : "lazy"}
                />

                {/* GAMBAR UNTUK DESKTOP (Landscape/Horizontal) */}
                <img
                  src={item.imageDesktop}
                  alt={item.title}
                  // Memakai object-cover agar gambar landscape memenuhi layar dengan cantik
                  className="hidden md:block w-full h-full object-cover object-center opacity-85 transition-transform duration-700 ease-out"
                  loading={index === 0 ? "eager" : "lazy"}
                />
                
              </div>

              {/* ─── DUAL LAYER OVERLAY UNTUK KETERBACAAN TEKS ─── */}
              <div className="absolute inset-0 bg-linear-to-r from-black/90 via-black/40 to-transparent z-1" />
              <div className="absolute inset-0 bg-linear-to-t from-black/70 via-transparent to-transparent z-1 md:hidden" />

              {/* ─── CONTENT WITH FADE-IN ANIMATION ─── */}
              <div className="relative z-10 h-full flex items-center px-6 md:px-16 lg:px-24">
                <div 
                  className={`max-w-3xl transform transition-all duration-700 delay-100 ${
                    selectedIndex === index ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
                  }`}
                >

                  <p className="uppercase tracking-[5px] text-xs md:text-sm font-semibold text-gray-400">
                    Jaecoo Surabaya Center
                  </p>

                  <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mt-4 leading-tight tracking-tight drop-shadow-lg">
                    {item.title}
                  </h1>

                  <p className="mt-6 text-gray-300 text-base md:text-lg lg:text-xl max-w-xl font-light drop-shadow-md">
                    {item.subtitle}
                  </p>

                  <a
                    href={item.href}
                    // Buka tab baru jika link mengarah ke luar (seperti WhatsApp)
                    target={item.href.startsWith("http") ? "_blank" : "_self"}
                    rel="noopener noreferrer"
                    className="inline-block mt-8 bg-white text-black px-8 py-3.5 rounded-full font-semibold shadow-lg hover:bg-neutral-200 hover:scale-105 active:scale-95 transition-all duration-200"
                  >
                    {item.buttonText}
                  </a>
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>

      {/* ─── ACTIVE INDICATOR (DOTS) ─── */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-3 z-20 bg-black/30 backdrop-blur-md px-5 py-2.5 rounded-full border border-white/10 shadow-xl">
        {carouselData.map((item, index) => (
          <button
            key={item.id}
            onClick={() => scrollTo(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={`h-2.5 rounded-full transition-all duration-300 ${
              selectedIndex === index 
                ? "w-8 bg-white" // Indikator memanjang saat aktif
                : "w-2.5 bg-white/40 hover:bg-white/70"
            }`}
          />
        ))}
      </div>

    </section>
  );
}