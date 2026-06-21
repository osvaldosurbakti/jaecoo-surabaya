"use client";

import Link from "next/link";

export default function CarsCTA() {
  // Pesan WhatsApp otomatis yang dipersonalisasi agar terkesan profesional
  const waMessage = encodeURIComponent(
    "Halo Rian, saya tertarik untuk menjadwalkan Test Drive / berkonsultasi mengenai unit Jaecoo."
  );
  const waLink = `https://wa.me/6282231222887?text=${waMessage}`;

  return (
    <section className="py-32 px-6 md:px-16 bg-neutral-950 text-center relative overflow-hidden border-t border-neutral-900/40">
      {/* Efek Ambient Glow Hijau di Latar Belakang Center */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-125 h-62.5 bg-emerald-500/4 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        
        {/* SUB-HEADER */}
        <div className="flex items-center justify-center gap-2 mb-6">
          <span className="h-px w-4 bg-emerald-500 block" />
          <span className="text-[10px] font-bold tracking-[6px] text-emerald-400 uppercase">
            Exclusive Invitation
          </span>
          <span className="h-px w-4 bg-emerald-500 block" />
        </div>

        {/* MAIN HEADLINE */}
        <h2 className="text-4xl md:text-7xl font-black uppercase tracking-tight text-white leading-none mb-6">
          Ready to Experience <br />
          <span className="text-transparent bg-clip-text bg-linear-to-r from-neutral-200 via-neutral-400 to-neutral-600">
            The Next Luxury?
          </span>
        </h2>

        {/* SUPPORTING TEXT */}
        <p className="text-neutral-400 text-xs md:text-base font-light max-w-lg mx-auto leading-relaxed mb-12">
          Rasakan langsung sensasi berkendara premium dan teknologi mutakhir. Jadwalkan sesi *private test drive* Anda bersama **Jaecoo Surabaya Center** hari ini.
        </p>

        {/* PREMIUM INTERACTIVE CTA BUTTON */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          {/* TOMBOL UTAMA: WHATSAPP */}
          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto bg-emerald-500 hover:bg-emerald-600 text-black px-10 py-5 text-xs font-black uppercase tracking-[3px] transition-all duration-300 relative group overflow-hidden shadow-xl shadow-emerald-950/20"
          >
            {/* Efek Kilatan Shimmer Saat Hover */}
            <span className="absolute top-0 -left-full w-full h-full bg-linear-to-r from-transparent via-white/20 to-transparent group-hover:left-full transition-all duration-1000 ease-in-out" />
            
            Request Test Drive
          </a>

          {/* TOMBOL SEKUNDER: DIUBAH KE HALAMAN/SECTION CONTACT SALES */}
          <Link
            href="/#contact"
            className="w-full sm:w-auto bg-transparent hover:bg-neutral-900 text-neutral-300 hover:text-white border border-neutral-800 hover:border-neutral-700 px-10 py-5 text-xs font-bold uppercase tracking-[3px] transition-all duration-300 block text-center"
          >
            Contact Our Sales
          </Link>
        </div>


      </div>
    </section>
  );
}