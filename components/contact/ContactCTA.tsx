"use client";

import { MessageSquare } from "lucide-react";
import { salesProfile } from "@/data/sales";

export default function ContactCTA() {
  // Fallback link aman agar tidak crash jika data belum terisi
  const whatsappLink = salesProfile?.whatsapp || "#";

  return (
    // Mengurangi padding di mobile (py-16) dan memaksimalkan di desktop (py-28)
    <section className="py-16 md:py-28 px-4 sm:px-8 bg-neutral-950 border-t border-neutral-900/60 relative overflow-hidden">
      
      {/* Center Ambient Glow - Efek pendaran cahaya mewah tepat di belakang konten */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 md:w-120 md:h-120 bg-emerald-500/3 blur-[100px] md:blur-[150px] rounded-full pointer-events-none animate-pulse duration-4000" />

      <div className="max-w-5xl mx-auto relative group">
        
        {/* Architectural Border Accents - Siku ikonik diler mewah */}
        <div className="absolute -top-2 -left-2 w-4 h-4 border-t border-l border-neutral-800 group-hover:border-emerald-500/30 transition-colors duration-500" />
        <div className="absolute -bottom-2 -right-2 w-4 h-4 border-b border-r border-neutral-800 group-hover:border-emerald-500/30 transition-colors duration-500" />

        {/* Kotak Utama: Mengubah rounded-3xl menjadi kotak tajam (rounded-none) eksklusif */}
        <div className="text-center bg-neutral-900/20 border border-neutral-900/80 py-12 px-6 md:py-20 md:px-12 backdrop-blur-xs relative z-10">
          
          {/* Subtitle dengan hairline emerald */}
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="h-px w-4 bg-emerald-500 block" />
            <span className="text-[10px] font-bold tracking-[4px] md:tracking-[5px] text-emerald-400 uppercase">
              Ready To Drive Jaecoo?
            </span>
            <span className="h-px w-4 bg-emerald-500 block" />
          </div>

          {/* Title dengan gradasi teks */}
          <h2 className="text-3xl md:text-6xl font-light uppercase tracking-tight text-white leading-none">
            Let's Start <br className="md:hidden" />
            <span className="font-black text-transparent bg-clip-text bg-linear-to-r from-neutral-100 to-neutral-400">
              Your Journey
            </span>
          </h2>

          {/* Deskripsi Menyesuaikan Domisili Utama Surabaya */}
          <p className="text-neutral-500 text-xs md:text-sm font-light leading-relaxed mt-6 max-w-xl mx-auto">
            Miliki pertanyaan seputar spesifikasi teknis, simulasi kredit eksklusif, atau ketersediaan unit di Surabaya? Hubungi konsultan resmi kami sekarang untuk layanan personal terbaik.
          </p>

          {/* Tombol Aksi Premium */}
          <div className="mt-10">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-white hover:bg-emerald-500 text-black px-8 py-4 text-xs font-black uppercase tracking-[2px] transition-all duration-300 relative group/btn overflow-hidden rounded-none shadow-lg"
            >
              {/* Efek kilatan cahaya saat tombol di-hover */}
              <span className="absolute top-0 -left-full w-full h-full bg-linear-to-r from-transparent via-white/30 to-transparent group-hover/btn:left-full transition-all duration-1000" />
              
              <MessageSquare size={13} className="text-black" />
              Chat With {salesProfile.name}
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}