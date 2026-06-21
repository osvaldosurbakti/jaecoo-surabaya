"use client";

import { MapPin, Navigation } from "lucide-react";
import { salesProfile } from "@/data/sales";

export default function Location() {
  const googleMapsDirectionUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    salesProfile.showroom + " " + salesProfile.address
  )}`;

  return (
    <div className="py-20 px-6 md:px-12 w-full relative overflow-hidden h-full flex flex-col justify-between">
      {/* Efek Cahaya Latar Belakang Tipis */}
      <div className="absolute bottom-0 left-10 w-72 h-72 bg-emerald-500/2 blur-[100px] rounded-full pointer-events-none" />

      {/* ATAS: INFORMASI TEXT */}
      <div className="relative z-10 w-full mb-12">
        <div className="flex items-center gap-2 mb-4">
          <span className="h-px w-6 bg-emerald-500 block" />
          <span className="text-[10px] font-bold tracking-[5px] text-emerald-400 uppercase">
            Showroom Location
          </span>
        </div>

        <h2 className="text-3xl md:text-5xl font-light uppercase tracking-tight text-white leading-none">
          Visit <br />
          <span className="font-black text-transparent bg-clip-text bg-linear-to-r from-neutral-100 to-neutral-400">
            {salesProfile.showroom}
          </span>
        </h2>

        <p className="text-neutral-500 text-xs md:text-sm font-light leading-relaxed mt-6 max-w-xl">
          Saksikan secara langsung kemewahan autentik lini SUV Jaecoo, nikmati atmosfer *lounge* eksklusif kami, dan jadwalkan uji kemudi personal bersama konsultan ahli kami di pusat kota Surabaya.
        </p>

        {/* DETAIL ALAMAT */}
        <div className="mt-8 border-t border-b border-neutral-900/80 py-5 flex items-start gap-4 group">
          <div className="p-3 bg-neutral-900 border border-neutral-800 text-emerald-400 group-hover:border-emerald-500/30 transition-colors duration-500 shrink-0">
            <MapPin size={16} className="stroke-[1.5]" />
          </div>
          <div>
            <span className="text-[10px] uppercase tracking-widest text-neutral-600 block font-bold">
              Official Address
            </span>
            <p className="text-neutral-300 text-xs md:text-sm font-light leading-relaxed mt-1">
              {salesProfile.address}
            </p>
          </div>
        </div>

        {/* TOMBOL RUTE NAVIGASI */}
        <div className="mt-6">
          <a
            href={googleMapsDirectionUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-transparent hover:bg-white text-neutral-300 hover:text-black border border-neutral-800 hover:border-white px-6 py-3.5 text-xs font-bold uppercase tracking-[2px] transition-all duration-300 group"
          >
            <Navigation size={12} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
            Get Directions
          </a>
        </div>
      </div>

      {/* BAWAH: GOOGLE MAPS INTERAKTIF (DARK THEME) */}
      <div className="relative group w-full mt-auto">
        {/* Decorative Corner Accents */}
        <div className="absolute -top-2 -left-2 w-4 h-4 border-t border-l border-neutral-800 group-hover:border-emerald-500/40 transition-colors duration-500" />
        <div className="absolute -bottom-2 -right-2 w-4 h-4 border-b border-r border-neutral-800 group-hover:border-emerald-500/40 transition-colors duration-500" />

        <div className="border border-neutral-900 bg-neutral-900/10 p-1.5 rounded-none h-75 md:h-85 w-full relative overflow-hidden backdrop-blur-xs">
          <iframe
            className="w-full h-full border-0 filter invert-92 hue-rotate-180 contrast-105 opacity-80 group-hover:opacity-100 transition-opacity duration-700"
            src={salesProfile.mapsEmbedUrl}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Showroom Location Map"
          />
        </div>
      </div>
    </div>
  );
}