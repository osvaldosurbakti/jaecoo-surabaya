"use client";

import Image from "next/image";
import { Mail, Phone, MapPin, Check } from "lucide-react";
import { SiInstagram } from "@icons-pack/react-simple-icons";
import { FaFacebook } from 'react-icons/fa';

import { salesProfile } from "@/data/sales";

export default function SalesContact() {
  return (
    <section id="sales" className="py-32 px-6 md:px-16 bg-neutral-950 border-t border-neutral-900/40 relative overflow-hidden">
      {/* Background Decorative Ambient */}
      <div className="absolute top-1/2 left-0 w-100 h-100 bg-emerald-500/2 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* SISI KIRI: PREMIUM IMAGE CONTAINER */}
          <div className="lg:col-span-5 relative group order-last lg:order-first">
            {/* Architectural Border Accents */}
            <div className="absolute -top-3 -left-3 w-6 h-6 border-t border-l border-neutral-800 group-hover:border-emerald-500/30 transition-colors duration-500" />
            <div className="absolute -bottom-3 -right-3 w-6 h-6 border-b border-r border-neutral-800 group-hover:border-emerald-500/30 transition-colors duration-500" />
            
            <div className="relative h-120 md:h-145 w-full bg-neutral-900 border border-neutral-900 p-2 overflow-hidden">
              <div className="relative w-full h-full overflow-hidden">
                <Image
                  src={salesProfile.image}
                  alt={salesProfile.name}
                  fill
                  sizes="(max-w-7xl) 100vw"
                  priority
                  className="object-cover filter grayscale hover:grayscale-0 transition-all duration-700 ease-out scale-100 group-hover:scale-102"
                />
              </div>
            </div>
          </div>

          {/* SISI KANAN: EXECUTIVE PROFILE TEXT */}
          <div className="lg:col-span-7 relative z-10">
            <div className="flex items-center gap-2 mb-4">
              <span className="h-px w-6 bg-emerald-500 block" />
              <span className="text-[10px] font-bold tracking-[5px] text-emerald-400 uppercase">
                Your Consultant
              </span>
            </div>

            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight text-white leading-none">
              {salesProfile.name}
            </h2>
            
            <div className="mt-3 flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-xs font-mono tracking-widest text-neutral-500 uppercase">
              <span className="text-emerald-400 font-medium">{salesProfile.position}</span>
              <span className="hidden sm:inline text-neutral-800">•</span>
              <span>{salesProfile.showroom}</span>
            </div>

            <p className="mt-8 text-neutral-400 text-sm md:text-base font-light leading-relaxed pr-6">
              "{salesProfile.description}"
            </p>

            {/* SERVICES IN DETAIL */}
            <div className="mt-10 border-t border-neutral-900 pt-8">
              <span className="text-[10px] font-bold tracking-widest text-neutral-600 uppercase block mb-4">
                Exclusive Capabilities & Services
              </span>
              <div className="grid sm:grid-cols-2 gap-3">
                {salesProfile.services.map((service) => (
                  <div key={service} className="flex items-center gap-3 text-xs md:text-sm text-neutral-300 font-light">
                    <span className="flex items-center justify-center h-4 w-4 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                      <Check size={10} className="stroke-3" />
                    </span>
                    {service}
                  </div>
                ))}
              </div>
            </div>

            {/* CORE CONTACT HAirlINES */}
            <div className="mt-10 border-t border-b border-neutral-900 py-6 space-y-4">
              <div className="flex items-center gap-4 text-xs md:text-sm text-neutral-400 hover:text-white transition-colors duration-300 group">
                <Phone size={16} className="text-neutral-600 group-hover:text-emerald-400 transition-colors" />
                <a href={`tel:+${salesProfile.phone}`} className="font-light tracking-wide">+{salesProfile.phone}</a>
              </div>
              <div className="flex items-center gap-4 text-xs md:text-sm text-neutral-400 hover:text-white transition-colors duration-300 group">
                <Mail size={16} className="text-neutral-600 group-hover:text-emerald-400 transition-colors" />
                <a href={`mailto:${salesProfile.email}`} className="font-light tracking-wide">{salesProfile.email}</a>
              </div>
              <div className="flex items-start gap-4 text-xs md:text-sm text-neutral-400">
                <MapPin size={16} className="text-neutral-600 mt-0.5" />
                <span className="font-light leading-relaxed pr-8">{salesProfile.address}</span>
              </div>
            </div>

            {/* ACTION TRIGGERS */}
            <div className="flex flex-wrap items-center gap-4 mt-10">
              <a
                href={salesProfile.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto bg-white hover:bg-emerald-500 text-black hover:text-black px-10 py-4.5 text-xs font-black uppercase tracking-[3px] transition-all duration-300 relative group overflow-hidden text-center shadow-lg"
              >
                {/* Micro hover interaction light */}
                <span className="absolute top-0 -left-full w-full h-full bg-linear-to-r from-transparent via-white/30 to-transparent group-hover:left-full transition-all duration-1000" />
                Initiate Chat
              </a>

              <div className="flex items-center gap-3 w-full sm:w-auto justify-center sm:justify-start mt-4 sm:mt-0">
                <a
                  href={salesProfile.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 border border-neutral-800 hover:border-neutral-500 hover:bg-neutral-900 text-neutral-400 hover:text-white transition-all duration-300 rounded-none"
                  aria-label="Instagram Profile"
                >
                  <SiInstagram size={16} />
                </a>

                <a
                  href={salesProfile.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 border border-neutral-800 hover:border-neutral-500 hover:bg-neutral-900 text-neutral-400 hover:text-white transition-all duration-300 rounded-none"
                  aria-label="Facebook Profile"
                >
                  <FaFacebook size={16} />
                </a>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}