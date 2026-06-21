"use client";

import { useEffect, useState } from "react";

export default function CarsHero() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="relative h-[85vh] md:h-screen w-full overflow-hidden bg-black flex items-end pb-16 md:pb-24 px-8 md:px-16">
      
      {/* Container Video Background - Responsif Aspek Rasio */}
      <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full min-w-[177.77vh] min-h-[56.25vw] aspect-video">
          <iframe
            className="w-full h-full scale-110 object-cover opacity-70 transition-opacity duration-1000"
            src="https://www.youtube.com/embed/TsXWHuQ-31U?autoplay=1&mute=1&loop=1&playlist=TsXWHuQ-31U&controls=0&showinfo=0&rel=0&modestbranding=1&iv_load_policy=3&disablekb=1"
            title="JAECOO Indonesia PHEV Video Background"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      {/* Overlay Gradasi Premium: Gelap di bawah untuk teks, redup di atas untuk Navbar */}
      <div className="absolute inset-0 bg-linear-to-t from-black via-black/40 to-black/30 z-10" />
      <div className="absolute inset-0 bg-linear-to-r from-black/50 via-transparent to-transparent z-10" />

      {/* Konten Utama */}
      <div className="relative max-w-7xl mx-auto w-full z-20 flex flex-col justify-end h-full">
        
        {/* Grid Animasi Teks */}
        <div className={`transition-all duration-1000 ease-out transform ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="flex items-center gap-3">
            <span className="h-0.5 w-8 bg-emerald-500 inline-block"></span>
            <p className="uppercase tracking-[6px] text-xs md:text-sm text-emerald-400 font-semibold">
              The Future of PHEV Technology
            </p>
          </div>

          <h1 className="text-5xl md:text-8xl font-light mt-4 tracking-tight text-white uppercase font-sans">
            Explore <strong className="font-extrabold text-transparent bg-clip-text bg-linear-to-r from-white to-gray-400">Our Vehicles</strong>
          </h1>

          <p className="text-gray-300 mt-6 max-w-2xl text-base md:text-xl font-light leading-relaxed drop-shadow-md">
            Saksikan kombinasi sempurna antara ketangguhan SUV off-road cerdas dengan efisiensi energi super dari JAECOO.
          </p>
        </div>

        {/* Baris Tombol Komponen Tambahan & Spek Singkat */}
        <div className={`mt-10 pt-8 border-t border-white/10 flex flex-col md:flex-row gap-8 md:items-center justify-between transition-all duration-1000 delay-300 ease-out transform ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          
          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4">
            <a 
              href="#models" 
              className="bg-white text-black hover:bg-transparent hover:text-white border border-white px-8 py-3.5 rounded-none text-sm font-bold uppercase tracking-wider transition-all duration-300 shadow-xl"
            >
              Lihat Model
            </a>
            <a 
              href="https://wa.me/" 
              className="bg-transparent text-white hover:bg-white hover:text-black border border-white/40 hover:border-white px-8 py-3.5 rounded-none text-sm font-medium uppercase tracking-wider transition-all duration-300"
            >
              Test Drive
            </a>
          </div>

          {/* Mini Highlight Specs (Membuat kesan web spek mobil premium) */}
          <div className="flex gap-8 text-white/90">
            <div>
              <p className="text-xs text-gray-400 uppercase tracking-wider">Super Hybrid</p>
              <p className="text-xl md:text-2xl font-bold text-emerald-400">PHEV Tech</p>
            </div>
            <div className="border-l border-white/20 pl-8">
              <p className="text-xs text-gray-400 uppercase tracking-wider">Driving Range</p>
              <p className="text-xl md:text-2xl font-bold">1,300+ Km</p>
            </div>
            <div className="border-l border-white/20 pl-8">
              <p className="text-xs text-gray-400 uppercase tracking-wider">Drive Mode</p>
              <p className="text-xl md:text-2xl font-bold">AWD</p>
            </div>
          </div>

        </div>

      </div>

    </section>
  );
}