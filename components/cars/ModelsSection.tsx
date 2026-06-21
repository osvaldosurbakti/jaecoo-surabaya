"use client";

import { cars } from "@/data/cars";
import { salesProfile } from "@/data/sales";
import Image from "next/image";
import Link from "next/link";

export default function ModelsSection() {
  // Mengambil nomor telepon dan nama dari salesProfile data
  const salesPhone = salesProfile?.phone || "6281292081113";
  const salesName = salesProfile?.name || "Rian";

  return (
    // Mengurangi padding luar di mobile (px-4 sm:px-8) agar kartu diler mendapat ruang maksimal
    <section id="models" className="py-16 md:py-24 px-4 sm:px-8 md:px-16 bg-neutral-950 text-white scroll-mt-16 md:scroll-mt-20">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 md:mb-16 gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2 md:mb-3">
              <span className="h-px w-6 bg-emerald-500"></span>
              <p className="text-[10px] md:text-xs uppercase tracking-[3px] md:tracking-[4px] text-emerald-400 font-semibold">
                Intelligence Premium SUV
              </p>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-light uppercase tracking-tight">
              Our <strong className="font-extrabold text-transparent bg-clip-text bg-linear-to-r from-white to-gray-400">Lineup Models</strong>
            </h2>
          </div>
          <p className="text-gray-400 max-w-md text-xs md:text-sm font-light leading-relaxed">
            Daftar harga resmi OTR Jaecoo Surabaya. Dapatkan penawaran eksklusif dan jadwalkan uji kemudi langsung.
          </p>
        </div>

        {/* Grid Model - Berubah menjadi 1 kolom di mobile dan 2 kolom mulai layar desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
          {cars.map((car) => {
            const standardPriceText = car.prices.length > 1 
              ? `${car.prices[0].formatted} - ${car.prices[1].formatted}`
              : car.prices[0].formatted;

            // Membuat pesan WhatsApp dinamis khusus berdasarkan model mobil di dalam loop .map()
            const waMessage = encodeURIComponent(
              `Halo ${salesName}, saya tertarik dengan unit Jaecoo ${car.name}. Boleh dibantu info promo dan jadwal Test Drive di Surabaya?`
            );
            const waLink = `https://wa.me/${salesPhone}?text=${waMessage}`;

            return (
              <div
                key={car.id}
                className="group relative bg-neutral-900/30 border border-neutral-800/60 hover:border-neutral-700 transition-all duration-500 flex flex-col justify-between overflow-hidden rounded-none"
              >
                
                {/* Bagian Atas: Kategori, Nama, & Harga Resmi */}
                <div className="p-5 md:p-8 pb-0 z-20">
                  <div className="flex justify-between items-center gap-2">
                    <span className="text-[9px] md:text-[10px] font-bold tracking-[2px] md:tracking-[3px] text-emerald-400 uppercase bg-emerald-500/10 px-2 py-0.5 md:px-2.5 md:py-1">
                      {car.category}
                    </span>
                    {car.prices.length > 1 && (
                      <span className="text-[9px] md:text-[10px] text-gray-500 uppercase tracking-wider">
                        {car.prices.length} Variants
                      </span>
                    )}
                  </div>

                  {/* Penyesuaian ukuran teks judul tipe mobil di mobile */}
                  <h3 className="text-2xl md:text-4xl font-extrabold mt-3 md:mt-4 tracking-tight uppercase text-white">
                    {car.name}
                  </h3>

                  {/* Informasi Harga */}
                  <div className="mt-2 flex flex-col">
                    <span className="text-[10px] md:text-xs text-gray-500 uppercase tracking-wider">Mulai Dari</span>
                    <span className="text-lg md:text-xl font-bold text-transparent bg-clip-text bg-linear-to-r from-emerald-400 to-teal-200">
                      {standardPriceText}
                    </span>
                  </div>

                  <p className="text-gray-400 mt-2 md:mt-3 text-xs md:text-sm font-light line-clamp-2 leading-relaxed">
                    {car.shortDescription}
                  </p>
                </div>

                {/* Bagian Tengah: Visual Mobil */}
                <div className="relative h-44 sm:h-52 md:h-72 w-full overflow-hidden my-2 md:my-4">
                  <Image
                    src={car.image}
                    alt={car.name}
                    fill
                    priority={car.id === cars[0]?.id} // Prioritaskan loading gambar pertama untuk performa LCP
                    sizes="(max-w-768px) 100vw, 50vw"
                    className="object-contain p-2 md:p-4 group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                </div>

                {/* Bagian Bawah: Spek Kunci & Tombol Kembar */}
                <div className="p-5 md:p-8 pt-0 z-20 w-full">
                  
                  {/* Grid Spek Singkat */}
                  <div className="grid grid-cols-3 gap-1 py-3 border-t border-b border-neutral-800/60 text-center">
                    <div>
                      <p className="text-[8px] md:text-[9px] text-neutral-500 uppercase tracking-wider">Powertrain</p>
                      <p className="text-[11px] md:text-xs font-semibold mt-0.5 text-neutral-300 truncate px-1">{car.engineType}</p>
                    </div>
                    <div className="border-l border-neutral-800">
                      <p className="text-[8px] md:text-[9px] text-neutral-500 uppercase tracking-wider">Drive Mode</p>
                      <p className="text-[11px] md:text-xs font-semibold mt-0.5 text-neutral-300 truncate px-1">{car.driveType}</p>
                    </div>
                    <div className="border-l border-neutral-800">
                      <p className="text-[8px] md:text-[9px] text-neutral-500 uppercase tracking-wider">Transmission</p>
                      <p className="text-[11px] md:text-xs font-semibold mt-0.5 text-neutral-300 truncate px-1">{car.transmission}</p>
                    </div>
                  </div>

                  {/* Tombol Aksi - Menumpuk vertikal di mobile, kembali berjejer horizontal di desktop */}
                  <div className="mt-4 md:mt-6 flex flex-col sm:flex-row gap-2.5 md:grid md:grid-cols-2 md:gap-4">
                    <Link
                      href={`/cars/${car.slug}`}
                      className="w-full bg-white text-black hover:bg-neutral-800 hover:text-white border border-white hover:border-neutral-800 py-3 rounded-none text-center text-xs font-bold uppercase tracking-wider transition-all duration-300 order-1 sm:order-2"
                    >
                      Learn More
                    </Link>
                    <a
                      href={waLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full bg-transparent text-white hover:bg-white hover:text-black border border-neutral-700 hover:border-white py-3 rounded-none text-center text-xs font-bold uppercase tracking-wider transition-all duration-300 order-2 sm:order-1"
                    >
                      Test Drive
                    </a>
                  </div>

                </div>

                {/* Efek Glow Tipis pada Hover */}
                <div className="absolute inset-0 bg-linear-to-b from-transparent to-emerald-950/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}