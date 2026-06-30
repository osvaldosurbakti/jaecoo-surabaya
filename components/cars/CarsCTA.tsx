"use client";

import Link from "next/link";
import { salesProfile } from "@/data/sales";

export default function CarsCTA() {
  // Mengambil nomor telepon dari salesProfile, jika kosong akan menggunakan fallback nomor yang Anda tentukan
  const salesPhone = salesProfile?.phone || "6281292081113";
  const salesName = salesProfile?.name || "Rian";

  // Pesan WhatsApp otomatis yang dipersonalisasi dinamis sesuai nama sales
  const waMessage = encodeURIComponent(
    `Halo ${salesName}, saya tertarik untuk menjadwalkan Test Drive / berkonsultasi mengenai unit Jaecoo.`
  );
  
  // Menggunakan link wa.me resmi dengan nomor dinamis
  const waLink = `https://wa.me/${salesPhone}?text=${waMessage}`;

  return (
    <section className="py-24 md:py-32 px-6 md:px-16 bg-neutral-950 text-center relative overflow-hidden border-t border-neutral-900/40">
      {/* Efek Ambient Glow Hijau di Latar Belakang Center */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-125 h-62.5 bg-emerald-500/4 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        
        {/* SUB-HEADER */}
        <div className="flex items-center justify-center gap-2 mb-6">
          <span className="h-px w-4 bg-emerald-500 block" />
          <span className="text-[10px] font-bold tracking-[5px] md:tracking-[6px] text-emerald-400 uppercase">
            Exclusive Invitation
          </span>
          <span className="h-px w-4 bg-emerald-500 block" />
        </div>

        {/* MAIN HEADLINE */}
        {/* Mengoptimasi ukuran teks di mobile (text-3xl) agar tidak menumpuk terlalu ekstrem di layar HP kecil */}
        <h2 className="text-3xl md:text-7xl font-black uppercase tracking-tight text-white leading-tight md:leading-none mb-6">
          Ready to Experience <br className="hidden sm:block" />
          <span className="text-transparent bg-clip-text bg-linear-to-r from-neutral-200 via-neutral-400 to-neutral-600">
            The Next Luxury?
          </span>
        </h2>

        {/* SUPPORTING TEXT */}
        <p className="text-neutral-400 text-xs md:text-base font-light max-w-lg mx-auto leading-relaxed mb-10 md:mb-12 px-2 md:px-0">
          Rasakan langsung sensasi berkendara premium dan teknologi mutakhir. Jadwalkan sesi *private test drive* Anda bersama <strong className="font-semibold text-neutral-200">Jaecoo Jatim</strong> hari ini.
        </p>

        {/* PREMIUM INTERACTIVE CTA BUTTON */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 md:gap-4 w-full max-w-md sm:max-w-none mx-auto">
          {/* TOMBOL UTAMA: WHATSAPP */}
          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto bg-emerald-500 hover:bg-emerald-600 text-black px-10 py-4.5 md:py-5 text-xs font-black uppercase tracking-[3px] transition-all duration-300 relative group overflow-hidden shadow-xl shadow-emerald-950/20 rounded-none text-center"
          >
            {/* Efek Kilatan Shimmer Saat Hover */}
            <span className="absolute top-0 -left-full w-full h-full bg-linear-to-r from-transparent via-white/20 to-transparent group-hover:left-full transition-all duration-1000 ease-in-out" />
            
            Request Test Drive
          </a>

          {/* TOMBOL SEKUNDER: DIUBAH KE HALAMAN/SECTION CONTACT SALES */}
          <Link
            href="/contact" // Diarahkan ke ID #consultant agar pas dengan section SalesProfile Anda sebelumnya
            className="w-full sm:w-auto bg-transparent hover:bg-neutral-900 text-neutral-300 hover:text-white border border-neutral-800 hover:border-neutral-700 px-10 py-4.5 md:py-5 text-xs font-bold uppercase tracking-[3px] transition-all duration-300 block text-center rounded-none"
          >
            Contact Our Sales
          </Link>
        </div>

      </div>
    </section>
  );
}