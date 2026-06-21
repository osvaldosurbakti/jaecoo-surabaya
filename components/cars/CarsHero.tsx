"use client";

import { useEffect, useState } from "react";
import { salesProfile } from "@/data/sales";

export default function CarsHero() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // Mengambil nomor telepon dan nama dari salesProfile data
  const salesPhone = salesProfile?.phone || "6281292081113";
  const salesName = salesProfile?.name || "Rian";

  // Pesan WhatsApp otomatis spesifik untuk halaman utama kendaraan
  const waMessage = encodeURIComponent(
    `Halo ${salesName}, saya melihat katalog kendaraan Jaecoo Surabaya dan ingin berkonsultasi mengenai jadwal Test Drive.`
  );
  const waLink = `https://wa.me/${salesPhone}?text=${waMessage}`;

  return (
    <section className="relative min-h-[90vh] md:h-screen w-full overflow-hidden bg-black flex items-end pb-12 md:pb-24 px-5 sm:px-8 md:px-16 touch-pan-y">
      
      {/* Container Video Background Lokal - Jauh lebih cepat, stabil, & bebas buram */}
      <div className="absolute inset-0 w-full h-full pointer-events-none select-none z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover opacity-60 md:opacity-70 scale-105 transition-opacity duration-1000"
        >
          <source src="/videos/hybridsystem.webm" type="video/webm" />
          {/* Anda bisa menambahkan fallback .mp4 di bawah ini jika suatu saat membutuhkannya */}
          {/* <source src="/video/hybridsystem.mp4" type="video/mp4" /> */}
        </video>
      </div>

      {/* Overlay Gradasi Premium - Mengubah bg-linear-to menjadi bg-gradient-to */}
      <div className="absolute inset-0 bg-linear-to-t from-black via-black/75 md:via-black/40 to-black/40 z-10" />
      <div className="absolute inset-0 bg-linear-to-r from-black/60 via-transparent to-transparent z-10 hidden md:block" />

      {/* Konten Utama */}
      <div className="relative max-w-7xl mx-auto w-full z-20 flex flex-col justify-end h-full mt-20 md:mt-0">
        
        {/* Grid Animasi Teks */}
        <div className={`transition-all duration-1000 ease-out transform ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          <div className="flex items-center gap-2 md:gap-3">
            <span className="h-0.5 w-6 md:w-8 bg-emerald-500 inline-block"></span>
            <p className="uppercase tracking-[3px] md:tracking-[6px] text-[10px] md:text-sm text-emerald-400 font-semibold">
              The Future of PHEV Technology
            </p>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-8xl font-light mt-3 md:mt-4 tracking-tight text-white uppercase font-sans leading-tight">
            Explore <br className="block md:hidden" />
            <strong className="font-extrabold text-transparent bg-clip-text bg-linear-to-r from-white to-gray-400">Our Vehicles</strong>
          </h1>

          <p className="text-gray-300 mt-3 md:mt-6 max-w-2xl text-xs sm:text-sm md:text-xl font-light leading-relaxed drop-shadow-md">
            Saksikan kombinasi sempurna antara ketangguhan SUV off-road cerdas dengan efisiensi energi super dari JAECOO.
          </p>
        </div>

        {/* Baris Tombol Komponen Tambahan & Spek Singkat */}
        <div className={`mt-6 md:mt-10 pt-4 md:pt-8 border-t border-white/10 flex flex-col md:flex-row gap-6 md:gap-8 md:items-center justify-between transition-all duration-1000 delay-300 ease-out transform ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto order-2 md:order-1">
            <a 
              href="#models" 
              className="bg-white text-black hover:bg-neutral-200 text-center px-8 py-3.5 rounded-none text-xs md:text-sm font-bold uppercase tracking-wider transition-all duration-300 shadow-xl"
            >
              Lihat Model
            </a>
            <a 
              href={waLink} 
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black/40 text-white backdrop-blur-xs hover:bg-white hover:text-black border border-white/40 hover:border-white text-center px-8 py-3.5 rounded-none text-xs md:text-sm font-medium uppercase tracking-wider transition-all duration-300"
            >
              Test Drive
            </a>
          </div>

          {/* Mini Highlight Specs */}
          {/* rounded-xl pada mobile diubah menjadi rounded-none agar konsisten dengan bahasa desain diler */}
          <div className="flex justify-between md:justify-start gap-4 md:gap-8 text-white/90 order-1 md:order-2 bg-neutral-900/30 md:bg-transparent p-3 md:p-0 rounded-none border border-white/5 md:border-none backdrop-blur-xs md:backdrop-blur-none">
            <div>
              <p className="text-[10px] text-gray-400 uppercase tracking-wider">Super Hybrid</p>
              <p className="text-base md:text-2xl font-bold text-emerald-400">PHEV Tech</p>
            </div>
            <div className="border-l border-white/20 pl-4 md:pl-8">
              <p className="text-[10px] text-gray-400 uppercase tracking-wider">Driving Range</p>
              <p className="text-base md:text-2xl font-bold">1,300+ Km</p>
            </div>
            <div className="border-l border-white/20 pl-4 md:pl-8">
              <p className="text-[10px] text-gray-400 uppercase tracking-wider">Drive Mode</p>
              <p className="text-base md:text-2xl font-bold">AWD</p>
            </div>
          </div>

        </div>

      </div>

    </section>
  );
}