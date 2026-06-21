"use client";

import { CarType, CarPrice } from "@/data/cars";
import Image from "next/image";

interface CarHeroProps {
  car: CarType;
  isLoaded: boolean;
}

export default function CarHero({ car, isLoaded }: CarHeroProps) {
  return (
    <div className="grid lg:grid-cols-12 gap-12 items-center mb-24">
      {/* Sisi Kiri: Info & Harga */}
      <div className={`lg:col-span-5 transition-all duration-1000 ease-out transform ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        <span className="text-[10px] font-bold tracking-[4px] text-emerald-400 uppercase bg-emerald-500/10 px-3 py-1.5 border border-emerald-500/20">
          {car.category}
        </span>
        
        <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tight mt-6 mb-4 leading-none">
          {car.name}
        </h1>

        <div className="mb-6 p-4 bg-neutral-900/40 border border-neutral-900 backdrop-blur-sm">
          <span className="text-[10px] text-neutral-500 uppercase tracking-widest block mb-2 font-semibold">
            Harga OTR Surabaya & Sekitarnya
          </span>
          <div className="space-y-2">
            {car.prices.map((p: CarPrice, idx: number) => (
              <div key={idx} className="flex items-center justify-between gap-4 border-b border-neutral-800/50 pb-1.5 last:border-none last:pb-0">
                <span className="text-2xl font-black text-transparent bg-clip-text bg-linear-to-r from-emerald-400 to-teal-200">
                  {p.formatted}
                </span>
                {car.prices.length > 1 && (
                  <span className="text-[9px] font-bold text-neutral-300 bg-neutral-800 border border-neutral-700 px-2.5 py-0.5 uppercase tracking-wider">
                    Tipe {p.variant}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>

        <p className="text-neutral-400 text-sm md:text-base font-light leading-relaxed">
          {car.description}
        </p>

        {/* INTERACTION BUTTONS */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <a
            href={`https://wa.me/?text=Halo%20Jaecoo%20Surabaya,%20saya%20tertarik%20dengan%20informasi%20lengkap%20dan%20Test%20Drive%20${encodeURIComponent(car.name)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-emerald-500 hover:bg-emerald-600 text-black py-4 px-6 text-center text-xs font-bold uppercase tracking-widest transition-all duration-300 shadow-lg shadow-emerald-950/20"
          >
            Book Test Drive
          </a>

          {car.brochureUrl ? (
            <a
              href={car.brochureUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-transparent text-white hover:bg-white hover:text-black border border-neutral-800 hover:border-white py-4 px-6 text-center text-xs font-bold uppercase tracking-widest transition-all duration-300"
            >
              View Brochure
            </a>
          ) : (
            <button disabled className="bg-neutral-900 text-neutral-600 border border-neutral-900 py-4 px-6 text-xs font-bold uppercase tracking-widest cursor-not-allowed">
              Brochure Unavailable
            </button>
          )}
        </div>
      </div>

      {/* Sisi Kanan: Visual Mobil */}
      <div className={`lg:col-span-7 relative h-[35vh] md:h-[50vh] w-full transition-all duration-1000 delay-200 ease-out transform ${isLoaded ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"}`}>
        <Image src={car.image} alt={car.name} fill priority className="object-contain" />
        <div className="absolute inset-0 bg-emerald-500/5 blur-[140px] rounded-full pointer-events-none -z-10" />
      </div>
    </div>
  );
}