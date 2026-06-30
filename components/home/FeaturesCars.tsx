"use client";

import { useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react"; 
import { cars } from "@/data/cars";

export default function FeaturedCars() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    duration: 30,
    watchDrag: true, // Memaksimalkan akurasi swipe gesture di layar sentuh HP
  });

  // Fungsi navigasi tombol panah kiri & kanan
  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  return (
    <section id="cars" className="py-16 md:py-24 px-5 md:px-12 bg-black text-white overflow-hidden touch-pan-y">
      <div className="max-w-7xl mx-auto">
        
        {/* ─── HEADER WITH NAVIGATION BUTTONS ─── */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 md:mb-12 gap-4">
          <div>
            <p className="uppercase tracking-[3px] md:tracking-[5px] text-[10px] md:text-sm font-semibold text-emerald-500">
              Our Vehicles
            </p>
            <h2 className="text-3xl md:text-5xl font-bold mt-2 md:mt-3 tracking-tight">
              Explore Jaecoo Models
            </h2>
          </div>

          {/* TOMBOL NAVIGASI (Disembunyikan di HP karena user mobile lebih natural menggunakan gesture swipe) */}
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
        <div ref={emblaRef} className="overflow-hidden cursor-grab active:cursor-grabbing raw-touch">
          {/* Menggunakan gap yang disesuaikan: pl-4 di mobile untuk efisiensi ruang, md:pl-6 di desktop */}
          <div className="flex -ml-4 md:-ml-6">
            {cars.map((car, index) => (
              <div
                key={car.id}
                // Diubah ke 85% di mobile agar sisa slide berikutnya mengintip pas (15%), memberi petunjuk visual kalau ini bisa digeser
                className="min-w-0 flex-[0_0_85%] md:flex-[0_0_47%] lg:flex-[0_0_33.33%] pl-4 md:pl-6"
              >
                {/* CARD CONTAINER */}
                <div className="bg-neutral-900/50 border border-neutral-800/60 rounded-3xl overflow-hidden group h-full flex flex-col justify-between hover:border-neutral-700 hover:bg-neutral-900 transition-all duration-300 shadow-xl">
                  
                  <div>
                    {/* IMAGE LINKED TO DETAILS */}
                    {/* Mengganti h-65 menjadi aspect ratio dinamis agar proporsi gambar mobil tetap konsisten di semua resolusi HP */}
                    <Link href={`/cars/${car.slug}`} className="relative block aspect-16/11 md:aspect-16/10 overflow-hidden bg-neutral-950 p-4">
                      <Image
                        src={car.image}
                        alt={car.name}
                        fill
                        sizes="(max-width: 640px) 85vw, (max-width: 1024px) 50vw, 33vw"
                        quality={90}
                        // Menggunakan object-contain + p-4 di atas agar gambar render mobil diler tidak terpotong bagian bumper/spionnya
                        className="object-contain object-center p-2 group-hover:scale-102 transition-transform duration-500 ease-out"
                        priority={index < 3}
                      />
                    </Link>

                    {/* CONTENT AREA */}
                    <div className="p-5 md:p-6">
                      <span className="inline-block text-[10px] md:text-xs font-semibold uppercase tracking-wider text-emerald-400 bg-emerald-950/40 px-2.5 py-1 rounded-md border border-emerald-900/50">
                        {car.category}
                      </span>

                      <Link href={`/cars/${car.slug}`}>
                        <h3 className="text-xl md:text-2xl font-bold mt-3 md:mt-4 group-hover:text-emerald-400 transition-colors duration-300">
                          {car.name}
                        </h3>
                      </Link>

                      <p className="text-gray-400 mt-2 md:mt-3 text-xs md:text-sm leading-relaxed line-clamp-3 font-light">
                        {car.shortDescription}
                      </p>
                    </div>
                  </div>

                  {/* BUTTON ACTION AREA (Selalu menempel di paling bawah kartu) */}
                  <div className="px-5 pb-5 md:px-6 md:pb-6 pt-1">
                    <Link
                      href={`/cars/${car.slug}`}
                      // Mengoptimasi area sentuh tombol (py-3.5) di mobile agar pas dengan standar kenyamanan jempol
                      className="inline-flex items-center justify-center w-full border border-white/20 px-6 py-3.5 md:py-3 rounded-full text-sm font-medium group-hover:bg-white group-hover:text-black group-hover:border-white transition-all duration-300 text-center"
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
        <div className="mt-10 md:mt-14 text-center px-4">
          <a
            href="contact"
            className="inline-block w-full sm:w-auto bg-white text-black px-10 py-4 rounded-full font-semibold shadow-lg hover:bg-neutral-200 active:scale-98 transition-all duration-200 text-sm md:text-base"
          >
            Book Test Drive
          </a>
        </div>

      </div>
    </section>
  );
}