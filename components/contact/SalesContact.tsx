"use client";

import Image from "next/image";
import { Mail, Phone, MapPin, Check } from "lucide-react";
import { SiInstagram, SiTiktok } from "@icons-pack/react-simple-icons";
import { FaFacebook } from "react-icons/fa";

import { salesProfile } from "@/data/sales";

export default function SalesContact() {
  // Ambil data link dengan fallback aman agar tidak crash
  const whatsappLink = salesProfile?.whatsapp || "#";
  const instagramLink = salesProfile?.instagram || "#";
  const facebookLink = salesProfile?.facebook || "#";
  const tiktokLink = salesProfile?.tiktok || "#";

  return (
    // Menurunkan padding dari py-32 menjadi py-16 di mobile demi kenyamanan scrolling
    <section id="sales-contact" className="py-16 md:py-32 px-4 sm:px-8 md:px-16 bg-neutral-950 border-t border-neutral-900/40 relative overflow-hidden">
      {/* Background Decorative Ambient */}
      <div className="absolute top-1/2 left-0 w-72 h-72 md:w-100 md:h-100 bg-emerald-500/2 blur-[100px] md:blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-8 md:gap-16 items-center">
          
{/* ─── SISI KIRI: PREMIUM IMAGE CONTAINER ─── */}
<div className="lg:col-span-5 relative group order-first">
  {/* Architectural Border Accents */}
  <div className="absolute -top-2 -left-2 md:-top-3 md:-left-3 w-4 h-4 md:w-6 md:h-6 border-t border-l border-neutral-800 group-hover:border-emerald-500/30 transition-colors duration-500" />
  <div className="absolute -bottom-2 -right-2 md:-bottom-3 md:-right-3 w-4 h-4 md:w-6 md:h-6 border-b border-r border-neutral-800 group-hover:border-emerald-500/30 transition-colors duration-500" />
  
  {/* 
    PERBAIKAN DI SINI:
    Menghapus h-96 dan md:h-145, lalu menggantinya dengan aspect-[1672/941] 
    agar kontainer mengikuti proporsi asli gambar lanskap secara dinamis.
  */}
  <div className="relative aspect-1672/941 w-full bg-neutral-900 border border-neutral-900 p-1.5 md:p-2 overflow-hidden">
    <div className="relative w-full h-full overflow-hidden">
      <Image
        src={salesProfile.image}
        alt={salesProfile.name}
        fill
        sizes="(max-width: 1024px) 100vw, 500px"
        priority
        /* Menggunakan object-cover yang sekarang sudah aman karena rasio kontainer dan gambar sudah sama persis */
        className="object-cover filter grayscale hover:grayscale-0 transition-all duration-700 ease-out scale-100 group-hover:scale-102"
      />
    </div>
  </div>
</div>

          {/* SISI KANAN: EXECUTIVE PROFILE TEXT */}
          <div className="lg:col-span-7 relative z-10">
            <div className="flex items-center gap-2 mb-3 md:mb-4">
              <span className="h-px w-4 md:w-6 bg-emerald-500 block" />
              <span className="text-[9px] md:text-[10px] font-bold tracking-[4px] md:tracking-[5px] text-emerald-400 uppercase">
                Your Consultant
              </span>
            </div>

            <h2 className="text-3xl md:text-6xl font-black uppercase tracking-tight text-white leading-none">
              {salesProfile.name}
            </h2>
            
            <div className="mt-2.5 md:mt-3 flex flex-wrap items-center gap-x-3 gap-y-1.5 text-[11px] md:text-xs font-mono tracking-wider md:tracking-widest text-neutral-500 uppercase">
              <span className="text-emerald-400 font-medium">{salesProfile.position}</span>
              <span className="text-neutral-800">•</span>
              <span>{salesProfile.showroom}</span>
            </div>

            <p className="mt-5 md:mt-8 text-neutral-400 text-xs md:text-base font-light leading-relaxed pr-0 md:pr-6">
              "{salesProfile.description}"
            </p>

            {/* SERVICES IN DETAIL */}
            <div className="mt-8 border-t border-neutral-900 pt-6">
              <span className="text-[9px] md:text-[10px] font-bold tracking-widest text-neutral-600 uppercase block mb-3.5">
                Exclusive Capabilities & Services
              </span>
              <div className="grid sm:grid-cols-2 gap-2.5 md:gap-3">
                {salesProfile.services.map((service) => (
                  <div key={service} className="flex items-center gap-3 text-xs md:text-sm text-neutral-300 font-light">
                    <span className="flex items-center justify-center h-4 w-4 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 shrink-0">
                      <Check size={10} className="stroke-3" />
                    </span>
                    <span className="leading-tight">{service}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CORE CONTACT HAIRLINES */}
            <div className="mt-8 border-t border-b border-neutral-900 py-5 space-y-3.5">
              <div className="flex items-center gap-3.5 text-xs md:text-sm text-neutral-400 hover:text-white transition-colors duration-300 group">
                <Phone size={14} className="text-neutral-600 group-hover:text-emerald-400 transition-colors shrink-0" />
                <a href={`tel:+${salesProfile.phone}`} className="font-light tracking-wide truncate">+{salesProfile.phone}</a>
              </div>
              <div className="flex items-center gap-3.5 text-xs md:text-sm text-neutral-400 hover:text-white transition-colors duration-300 group">
                <Mail size={14} className="text-neutral-600 group-hover:text-emerald-400 transition-colors shrink-0" />
                <a href={`mailto:${salesProfile.email}`} className="font-light tracking-wide truncate">{salesProfile.email}</a>
              </div>
              <div className="flex items-start gap-3.5 text-xs md:text-sm text-neutral-400">
                <MapPin size={14} className="text-neutral-600 mt-0.5 shrink-0" />
                <span className="font-light leading-relaxed pr-2 md:pr-8">{salesProfile.address}</span>
              </div>
            </div>

            {/* ACTION TRIGGERS */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 mt-8 w-full">
              {/* Tombol Utama Chat */}
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto bg-white hover:bg-emerald-500 text-black px-10 py-4 text-xs font-black uppercase tracking-[2px] md:tracking-[3px] transition-all duration-300 relative group overflow-hidden text-center shadow-lg rounded-none"
              >
                <span className="absolute top-0 -left-full w-full h-full bg-linear-to-r from-transparent via-white/30 to-transparent group-hover:left-full transition-all duration-1000" />
                Initiate Chat
              </a>

              {/* Flex row khusus media sosial: Terbagi rata 3 kolom seimbang (Instagram, TikTok, Facebook) */}
              <div className="flex items-center justify-between sm:justify-start gap-2 w-full sm:w-auto">
                {/* INSTAGRAM */}
                <a
                  href={instagramLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 sm:flex-none flex justify-center items-center p-3.5 border border-neutral-800 hover:border-neutral-500 hover:bg-neutral-900 text-neutral-400 hover:text-white transition-all duration-300 rounded-none"
                  aria-label="Instagram Profile"
                >
                  <SiInstagram size={15} />
                </a>

                {/* TIKTOK */}
                <a
                  href={tiktokLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 sm:flex-none flex justify-center items-center p-3.5 border border-neutral-800 hover:border-neutral-500 hover:bg-neutral-900 text-neutral-400 hover:text-white transition-all duration-300 rounded-none"
                  aria-label="TikTok Profile"
                >
                  <SiTiktok size={15} />
                </a>

                {/* FACEBOOK */}
                <a
                  href={facebookLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 sm:flex-none flex justify-center items-center p-3.5 border border-neutral-800 hover:border-neutral-500 hover:bg-neutral-900 text-neutral-400 hover:text-white transition-all duration-300 rounded-none"
                  aria-label="Facebook Profile"
                >
                  <FaFacebook size={15} />
                </a>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}