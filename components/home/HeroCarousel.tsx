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
      duration: 35, // Sedikit lebih lambat untuk kehalusan ekstra di layar high-refresh-rate (90Hz/120Hz HP modern)
      watchDrag: true, // Memastikan swipe gesture di HP sangat responsif
    },
    [
      Autoplay({
        delay: 5000,
        stopOnInteraction: false, // Menjaga carousel tetap berputar meskipun pengguna melakukan swipe
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
    <section className="relative h-screen w-full overflow-hidden bg-black text-white touch-pan-y">
      
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
                  className="block md:hidden w-full h-full object-cover object-center opacity-80 transition-transform duration-700 ease-out"
                  loading={index === 0 ? "eager" : "lazy"}
                />

                {/* GAMBAR UNTUK DESKTOP (Landscape/Horizontal) */}
                <img
                  src={item.imageDesktop}
                  alt={item.title}
                  className="hidden md:block w-full h-full object-cover object-center opacity-85 transition-transform duration-700 ease-out"
                  loading={index === 0 ? "eager" : "lazy"}
                />
                
              </div>

              {/* ─── DUAL LAYER OVERLAY UNTUK KETERBACAAN TEKS ─── */}
              {/* Di mobile, gradient diarahkan dari bawah (to-t) lebih tebal untuk mengamankan teks dan tombol */}
              <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/40 to-transparent md:bg-linear-to-r md:from-black/90 md:via-black/50 md:to-transparent z-1" />

              {/* ─── CONTENT WITH FADE-IN ANIMATION ─── */}
              {/* Di mobile: Menggunakan items-end dengan pb-28 agar konten terdorong ke bawah, menghindari tabrakan jika ada header/navbar atas */}
              <div className="relative z-10 h-full flex items-end md:items-center px-6 md:px-16 lg:px-24 pb-28 md:pb-0">
                <div 
                  className={`w-full max-w-3xl transform transition-all duration-700 delay-100 ${
                    selectedIndex === index ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
                  }`}
                >

                  <p className="uppercase tracking-[3px] md:tracking-[5px] text-[10px] md:text-sm font-semibold text-gray-400">
                    Jaecoo Surabaya Center
                  </p>

                  {/* Ukuran font disesuaikan: 3xl di HP layar kecil, 4xl di HP normal, 6xl+ di desktop */}
                  <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mt-2 md:mt-4 leading-[1.2] md:leading-tight tracking-tight drop-shadow-lg">
                    {item.title}
                  </h1>

                  <p className="mt-3 md:mt-6 text-gray-300 text-sm md:text-lg lg:text-xl max-w-xl font-light drop-shadow-md leading-relaxed">
                    {item.subtitle}
                  </p>

                  {/* Tombol dibuat melebar penuh di mobile (full-width) agar sangat mudah di-tap jempol */}
                  <div className="mt-6 md:mt-8 w-full sm:w-auto">
                    <a
                      href={item.href}
                      target={item.href.startsWith("http") ? "_blank" : "_self"}
                      rel="noopener noreferrer"
                      className="inline-block w-full sm:w-auto text-center bg-white text-black px-8 py-3.5 rounded-full font-semibold shadow-lg hover:bg-neutral-200 active:scale-98 transition-all duration-200 text-sm md:text-base"
                    >
                      {item.buttonText}
                    </a>
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>

      {/* ─── ACTIVE INDICATOR (DOTS) ─── */}
      {/* Posisi bottom disesuaikan (bottom-6) dan ukuran sedikit lebih ringkas di mobile agar tidak bertabrakan dengan tombol action */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 md:gap-3 z-20 bg-black/40 backdrop-blur-md px-4 py-2 md:px-5 md:py-2.5 rounded-full border border-white/10 shadow-xl">
        {carouselData.map((item, index) => (
          <button
            key={item.id}
            onClick={() => scrollTo(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={`h-2 rounded-full transition-all duration-300 ${
              selectedIndex === index 
                ? "w-6 md:w-8 bg-white" 
                : "w-2 md:w-2.5 bg-white/40 hover:bg-white/70"
            }`}
          />
        ))}
      </div>

    </section>
  );
}