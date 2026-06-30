"use client";

import { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image"; 
import { carouselData } from "@/data/carousel";
import { salesProfile } from "@/data/sales";

export default function HeroCarousel() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      duration: 35,
      watchDrag: true,
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

  const salesPhone = salesProfile?.phone || "6281292081113";
  const salesName = salesProfile?.name || "Adrian";
  
  const waMessage = encodeURIComponent(
    `Halo ${salesName}, saya melihat promo di website Jaecoo Jatim dan ingin bertanya mengenai info diskon, simulasi kredit, serta pemesanan unit.`
  );
  const dynamicWaLink = `https://wa.me/${salesPhone}?text=${waMessage}`;

  return (
    <section className="relative h-screen w-full overflow-hidden bg-black text-white touch-pan-y">
      
      {/* ─── CAROUSEL WRAPPER ─── */}
      <div ref={emblaRef} className="overflow-hidden h-full w-full">
        <div className="flex h-full">
          {carouselData.map((item, index) => {
            
            const isWhatsAppLink = item.href.includes("whatsapp.com") || item.href.includes("api.whatsapp.com") || item.href.includes("wa.me");
            const finalHref = isWhatsAppLink ? dynamicWaLink : item.href;

            return (
              <div key={item.id} className="relative min-w-full h-full select-none">
                
{/* ─── IMAGE CONTAINER RESPONSIVE ─── */}
<div className="absolute inset-0 w-full h-full bg-neutral-950">
  
  {/* 2. Optimasi Gambar Mobile dengan Next.js Image */}
  <div className="block md:hidden relative w-full h-full">
    <Image
      src={item.imageMobile}
      alt={`${item.title} - Jaecoo Surabaya`}
      fill
      // BERTAHU NEXT.JS: Di desktop (min-width: 768px), gambar ini berukuran 0px (hidden)
      sizes="(min-width: 768px) 0px, 100vw"
      priority={index === 0} 
      className="object-cover object-center opacity-100"
    />
  </div>

  {/* 3. Optimasi Gambar Desktop dengan Next.js Image */}
  <div className="hidden md:block relative w-full h-full">
    <Image
      src={item.imageDesktop}
      alt={`${item.title} - Jaecoo Jawa Timur`}
      fill
      // BERTAHU NEXT.JS: Di mobile (max-width: 767px), gambar ini berukuran 0px (hidden)
      sizes="(max-width: 767px) 0px, 100vw"
      priority={index === 0} 
      className="object-cover object-center opacity-100"
    />
  </div>
  
</div>

                {/* ─── BUTTON CONTENT ─── */}
                <div className="absolute inset-x-0 bottom-24 md:bottom-28 z-10 flex justify-center px-6">
                  <div 
                    className={`w-full max-w-xs sm:max-w-md transform transition-all duration-1000 flex justify-center ${
                      selectedIndex === index ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
                    }`}
                  >
                    <a
                      href={finalHref}
                      target={finalHref.startsWith("http") ? "_blank" : "_self"}
                      rel="noopener noreferrer"
                      className="inline-block w-full sm:w-auto text-center bg-white hover:bg-emerald-500 hover:text-white text-black px-8 py-4 rounded-none font-black text-xs uppercase tracking-[2px] shadow-[0_10px_30px_rgba(0,0,0,0.5)] active:scale-98 transition-all duration-300 relative group overflow-hidden"
                    >
                      <span className="absolute top-0 -left-full w-full h-full bg-linear-to-r from-transparent via-white/30 to-transparent group-hover:left-full transition-all duration-1000" />
                      {item.buttonText}
                    </a>
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