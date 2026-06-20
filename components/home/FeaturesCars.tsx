"use client";

import { useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react"; // Pastikan sudah install lucide-react sebelumnya
import { cars } from "@/data/cars";

export default function FeaturedCars() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    duration: 30,
  });

  // Fungsi navigasi tombol panah kiri & kanan
  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  return (
    <section id="cars" className="py-24 px-6 md:px-12 bg-black text-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* ─── HEADER WITH NAVIGATION BUTTONS ─── */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <p className="uppercase tracking-[5px] text-xs md:text-sm font-semibold text-emerald-500">
              Our Vehicles
            </p>
            <h2 className="text-4xl md:text-5xl font-bold mt-3 tracking-tight">
              Explore Jaecoo Models
            </h2>
          </div>

          {/* TOMBOL NAVIGASI (Hanya muncul di desktop/tablet untuk kenyamanan user) */}
          <div className="hidden md:flex gap-3">
            <button
              onClick={scrollPrev}
              className="p-3 rounded-full border border-white/20 hover:bg-white hover:text-black transition-all active:scale-95"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={scrollNext}
              className="p-3 rounded-full border border-white/20 hover:bg-white hover:text-black transition-all active:scale-95"
              aria-label="Next slide"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* ─── CAROUSEL CONTAINER ─── */}
        <div ref={emblaRef} className="overflow-hidden cursor-grab active:cursor-grabbing">
          {/* Menggunakan margin negatif untuk mengompensasi padding antar slide */}
          <div className="flex -ml-4 md:-ml-6">
            {cars.map((car) => (
              <div
                key={car.id}
                className="min-w-0 flex-[0_0_88%] md:flex-[0_0_47%] lg:flex-[0_0_33.33%] pl-4 md:pl-6"
              >
                {/* CARD CONTAINER */}
                <div className="bg-neutral-900/60 border border-neutral-800/60 rounded-3xl overflow-hidden group h-full flex flex-col justify-between hover:border-neutral-700 hover:bg-neutral-900 transition-all duration-300 shadow-xl">
                  
                  <div>
{/* IMAGE LINKED TO DETAILS */}
<Link href={`/cars/${car.slug}`} className="relative block h-65 md:h-70 overflow-hidden bg-black">
  <Image
    src={car.image}
    alt={car.name}
    fill
    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
    quality={95}
    // Menggunakan object-contain agar gambar mengecil pas di dalam kotak, sisa ruang jadi hitam
    className="object-contain object-center group-hover:scale-102 transition-transform duration-700 ease-out"
    priority={car.id <= 3}
  />
</Link>

                    {/* CONTENT AREA */}
                    <div className="p-6">
                      <span className="inline-block text-xs font-semibold uppercase tracking-wider text-emerald-400 bg-emerald-950/40 px-2.5 py-1 rounded-md border border-emerald-900/50">
                        {car.category}
                      </span>

                      <Link href={`/cars/${car.slug}`}>
                        <h3 className="text-2xl font-bold mt-4 group-hover:text-emerald-400 transition-colors duration-300">
                          {car.name}
                        </h3>
                      </Link>

                      <p className="text-gray-400 mt-3 text-sm leading-relaxed line-clamp-3 font-light">
                        {car.shortDescription}
                      </p>
                    </div>
                  </div>

                  {/* BUTTON ACTION AREA (Selalu menempel di paling bawah kartu) */}
                  <div className="px-6 pb-6 pt-2">
                    <Link
                      href={`/cars/${car.slug}`}
                      className="inline-flex items-center justify-center w-full md:w-auto border border-white/20 px-6 py-3 rounded-full text-sm font-medium group-hover:bg-white group-hover:text-black group-hover:border-white transition-all duration-300 shadow-sm text-center"
                    >
                      View Details
                    </Link>
                  </div>

                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ─── BOTTOM CALL TO ACTION (CTA) ─── */}
        <div className="mt-14 text-center">
          <a
            href="#contact"
            className="inline-block bg-white text-black px-10 py-4 rounded-full font-semibold shadow-lg hover:bg-neutral-200 hover:scale-105 active:scale-95 transition-all duration-200"
          >
            Book Test Drive
          </a>
        </div>

      </div>
    </section>
  );
}