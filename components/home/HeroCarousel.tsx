"use client";

import { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { carouselData } from "@/data/carousel";
import { salesProfile } from "@/data/sales"; // 1. Import profil sales resmi

export default function HeroCarousel() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      duration: 35, // Halus di HP layar 90Hz/120Hz
      watchDrag: true, // Gesture swipe responsif
    },
    [
      Autoplay({
        delay: 5000,
        stopOnInteraction: false,
      }),
    ]
  );

  const onSelect = useCallback((emblaApi: any) => {
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect(emblaApi);
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  const scrollTo = useCallback(
    (index: number) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi]
  );

  // 2. Siapkan variabel WhatsApp dinamis berbasis data salesProfile terbaru
  const salesPhone = salesProfile?.phone || "6281292081113";
  const salesName = salesProfile?.name || "Adryan";
  
  const waMessage = encodeURIComponent(
    `Halo ${salesName}, saya melihat promo di website Jaecoo Surabaya Center dan ingin bertanya mengenai info diskon, simulasi kredit, serta pemesanan unit.`
  );
  const dynamicWaLink = `https://wa.me/${salesPhone}?text=${waMessage}`;

  return (
    <section className="relative h-screen w-full overflow-hidden bg-black text-white touch-pan-y">
      
      {/* ─── CAROUSEL WRAPPER ─── */}
      <div ref={emblaRef} className="overflow-hidden h-full w-full">
        <div className="flex h-full">
          {carouselData.map((item, index) => {
            
            // 3. Logika Interseptor: Jika href bawaan data adalah link WA, ganti ke link dinamis salesProfile
            const isWhatsAppLink = item.href.includes("whatsapp.com") || item.href.includes("api.whatsapp.com") || item.href.includes("wa.me");
            const finalHref = isWhatsAppLink ? dynamicWaLink : item.href;

            return (
              <div key={item.id} className="relative min-w-full h-full select-none">
                
                {/* ─── IMAGE CONTAINER RESPONSIVE ─── */}
                <div className="absolute inset-0 w-full h-full bg-neutral-950 flex justify-center items-center">
                  
                  {/* GAMBAR UNTUK MOBILE (Portrait 9:16) */}
                  <img
                    src={item.imageMobile}
                    alt={item.title}
                    className="block md:hidden w-full h-full object-cover object-center opacity-85 scale-101 transition-all duration-700 ease-out"
                    loading={index === 0 ? "eager" : "lazy"}
                  />

                  {/* GAMBAR UNTUK DESKTOP (Landscape 16:9) */}
                  <img
                    src={item.imageDesktop}
                    alt={item.title}
                    className="hidden md:block w-full h-full object-cover object-center opacity-60 scale-101 transition-all duration-700 ease-out"
                    loading={index === 0 ? "eager" : "lazy"}
                  />
                  
                </div>

                {/* ─── DUAL LAYER OVERLAY (Kini Lebih Terang di Mobile) ─── */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent md:bg-gradient-to-r md:from-black/90 md:via-black/40 md:to-transparent z-1" />

                {/* ─── CONTENT WITH FADE-IN ANIMATION ─── */}
                <div className="relative z-10 h-full flex items-end md:items-center px-6 md:px-16 lg:px-24 pb-32 md:pb-0">
                  <div 
                    className={`w-full max-w-3xl transform transition-all duration-1000 ${
                      selectedIndex === index ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
                    }`}
                  >
                    {/* Subtitle dengan hairline emerald diler */}
                    <div className="flex items-center gap-2 mb-3 md:mb-4">
                      <span className="h-px w-4 bg-emerald-500 block" />
                      <p className="uppercase tracking-[4px] md:tracking-[5px] text-[10px] md:text-xs text-emerald-400 font-bold">
                        Jaecoo Surabaya Center
                      </p>
                    </div>

                    {/* Judul Utama */}
                    <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-light uppercase mt-2 md:mt-4 leading-[1.1] tracking-tight text-white drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]">
                      {item.title.split(" ").slice(0, -2).join(" ")}{" "}
                      <span className="font-black text-transparent bg-clip-text bg-gradient-to-r from-neutral-100 to-neutral-400">
                        {item.title.split(" ").slice(-2).join(" ")}
                      </span>
                    </h1>

                    {/* Deskripsi Teks */}
                    <p className="mt-4 md:mt-6 text-neutral-200 text-xs sm:text-sm md:text-lg max-w-xl font-light leading-relaxed drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
                      {item.subtitle}
                    </p>

                    {/* Tombol aksi premium */}
                    <div className="mt-8 w-full sm:w-auto">
                      <a
                        href={finalHref} // Menggunakan link final hasil pengecekan salesProfile
                        target={finalHref.startsWith("http") ? "_blank" : "_self"}
                        rel="noopener noreferrer"
                        className="inline-block w-full sm:w-auto text-center bg-white hover:bg-emerald-500 text-black px-8 py-4 rounded-none font-black text-xs uppercase tracking-[2px] shadow-2xl active:scale-98 transition-all duration-300 relative group overflow-hidden"
                      >
                        <span className="absolute top-0 -left-full w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent group-hover:left-full transition-all duration-1000" />
                        {item.buttonText}
                      </a>
                    </div>
                  </div>
                </div>

              </div>
            );
          })}
        </div>
      </div>

      {/* ─── ACTIVE INDICATOR (DOTS) ─── */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 md:gap-3 z-20 bg-black/40 backdrop-blur-md px-4 py-2 md:px-5 md:py-2.5 rounded-none border border-white/10 shadow-xl">
        {carouselData.map((item, index) => (
          <button
            key={item.id}
            onClick={() => scrollTo(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={`h-1 transition-all duration-300 rounded-none ${
              selectedIndex === index 
                ? "w-6 md:w-8 bg-emerald-500" 
                : "w-2 md:w-3 bg-white/30 hover:bg-white/60"
            }`}
          />
        ))}
      </div>

    </section>
  );
}