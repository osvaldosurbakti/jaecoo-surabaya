"use client";

import Image from "next/image";
import { Award, CheckCircle2, MapPin, Phone, User } from "lucide-react";
import { SiInstagram, SiTiktok, SiFacebook } from '@icons-pack/react-simple-icons';
import { salesProfile } from "@/data/sales";

export default function SalesProfile() {
  // Pengecekan ketersediaan gambar sales
  const hasImage = salesProfile?.image && salesProfile.image !== "" && salesProfile.image !== "/placeholder.jpg";
  
  // Pengecekan dinamis untuk masing-masing media sosial pendukung
  const hasInstagram = salesProfile?.instagram && salesProfile.instagram !== "#" && salesProfile.instagram !== "";
  const hasTiktok = salesProfile?.tiktok && salesProfile.tiktok !== "#" && salesProfile.tiktok !== "";
  const hasFacebook = salesProfile?.facebook && salesProfile.facebook !== "#" && salesProfile.facebook !== "";

  // Memastikan format tautan TikTok valid meskipun data input tidak diawali 'https://'
  const getTiktokUrl = (url: string) => {
    if (!url) return "#";
    return url.startsWith("http") ? url : `https://${url}`;
  };

  return (
    <section id="consultant" className="py-16 md:py-24 px-5 md:px-12 bg-neutral-950 text-white overflow-hidden">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 lg:gap-16 items-center">
        
        {/* ─── IMAGE / FALLBACK AVATAR CONTAINER ─── */}
        <div className="relative aspect-4/5 md:aspect-auto md:h-125 w-full rounded-3xl overflow-hidden bg-linear-to-b from-neutral-900 to-neutral-950 border border-neutral-800/80 flex items-center justify-center group shadow-2xl">
          
          {hasImage ? (
            <Image
              src={salesProfile.image}
              alt={salesProfile.name || "Sales Consultant"}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 500px"
              className="object-cover object-top group-hover:scale-102 transition-transform duration-700 ease-out"
              priority
            />
          ) : (
            <div className="absolute inset-0 flex flex-col items-center justify-center p-6 md:p-8 text-center bg-[radial-gradient(ellipse_at_top,var(--tw-gradient-stops))] from-neutral-900 via-neutral-950 to-neutral-950">
              <div className="p-5 md:p-6 rounded-full bg-neutral-900 border border-neutral-800 text-neutral-500 mb-4 group-hover:text-emerald-400 group-hover:border-emerald-500/30 transition-all duration-500 shadow-inner">
                <User className="w-14 h-14 md:w-20 md:h-20 stroke-[1.2]" />
              </div>
              <p className="text-xs md:text-sm font-semibold tracking-widest uppercase text-neutral-500">
                Official Consultant
              </p>
              <div className="w-12 h-px bg-neutral-800 my-3 group-hover:w-20 transition-all duration-500 group-hover:bg-emerald-500/50" />
              <p className="text-[11px] md:text-xs text-neutral-600 max-w-xs font-light leading-relaxed">
                Foto konsultan resmi Jaecoo Surabaya akan segera tersedia untuk kenyamanan komunikasi Anda.
              </p>
            </div>
          )}

          {/* Aksentuasi lencana verifikasi sales */}
          <div className="absolute top-3 left-3 md:top-4 md:left-4 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-neutral-900/90 border border-white/5 text-[9px] md:text-[10px] uppercase tracking-wider font-semibold text-gray-400 backdrop-blur-md select-none">
            <Award className="w-3 md:w-3.5 h-3 md:h-3.5 text-emerald-400" /> Verified Sales
          </div>
        </div>

        {/* ─── CONTENT AREA ─── */}
        <div className="flex flex-col justify-center mt-2 md:mt-0">
          <p className="uppercase tracking-[3px] md:tracking-[5px] text-[10px] md:text-sm font-semibold text-emerald-500">
            Your Consultant
          </p>

          <h2 className="text-3xl md:text-5xl font-bold mt-2 md:mt-4 tracking-tight">
            {salesProfile?.name ? `Meet ${salesProfile.name}` : "Meet Our Consultant"}
          </h2>

          {/* Info Posisi & Showroom */}
          <div className="mt-3 md:mt-4 flex flex-col gap-1.5 text-gray-400 text-xs md:text-sm font-light">
            <p className="flex items-center gap-2 text-gray-300 font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              {salesProfile?.position || "Jaecoo Sales Consultant"}
            </p>
            <p className="flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5 text-neutral-500 shrink-0" />
              {salesProfile?.showroom || "Jaecoo Gubeng Surabaya"}
            </p>
          </div>

          <p className="mt-4 md:mt-6 text-gray-400 leading-relaxed font-light text-sm md:text-base">
            {salesProfile?.description || 
              "Saya siap membantu Anda mendapatkan informasi terbaru mengenai unit Jaecoo, promo, konsultasi kendaraan, hingga proses test drive."}
          </p>

          {/* ─── SERVICES WITH CHECK ICONS ─── */}
          <div className="mt-6 md:mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3">
            {(salesProfile?.services && salesProfile.services.length > 0
              ? salesProfile.services
              : [
                  "Informasi unit terbaru",
                  "Konsultasi kendaraan",
                  "Booking test drive",
                  "Info promo & penawaran terbaik"
                ]
            ).map((item) => (
              <div key={item} className="flex items-start gap-2.5 text-gray-300 text-xs md:text-sm">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span className="font-light leading-snug">{item}</span>
              </div>
            ))}
          </div>

          {/* ─── CALL TO ACTION BUTTONS ─── */}
          {/* WhatsApp sebagai tombol utama berlatar putih pekat */}
          <div className="mt-8 md:mt-10 w-full flex flex-col gap-3">
            <a
              href={salesProfile?.whatsapp || `https://wa.me/${salesProfile?.phone}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-white text-black px-8 py-3.5 rounded-full font-bold shadow-lg hover:bg-neutral-200 active:scale-98 transition-all duration-200 w-full text-center text-sm uppercase tracking-wider"
            >
              <Phone className="w-4 h-4 fill-black" />
              Chat WhatsApp
            </a>

            {/* Baris Media Sosial Pendukung (Akan otomatis menyesuaikan grid jika salah satu kosong) */}
            {(hasInstagram || hasTiktok || hasFacebook) && (
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 w-full">
                {hasInstagram && (
                  <a
                    href={salesProfile.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 border border-neutral-800 bg-neutral-900/30 px-4 py-3 rounded-full text-xs font-semibold text-gray-300 hover:text-white hover:bg-neutral-900 hover:border-neutral-700 active:scale-98 transition-all duration-200 text-center"
                  >
                    <SiInstagram className="w-3.5 h-3.5" />
                    Instagram
                  </a>
                )}

                {hasTiktok && (
                  <a
                    href={getTiktokUrl(salesProfile.tiktok)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 border border-neutral-800 bg-neutral-900/30 px-4 py-3 rounded-full text-xs font-semibold text-gray-300 hover:text-white hover:bg-neutral-900 hover:border-neutral-700 active:scale-98 transition-all duration-200 text-center"
                  >
                    <SiTiktok className="w-3.5 h-3.5" />
                    TikTok
                  </a>
                )}

                {hasFacebook && (
                  <a
                    href={salesProfile.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 border border-neutral-800 bg-neutral-900/30 px-4 py-3 rounded-full text-xs font-semibold text-gray-300 hover:text-white hover:bg-neutral-900 hover:border-neutral-700 active:scale-98 transition-all duration-200 text-center"
                  >
                    <SiFacebook className="w-3.5 h-3.5" />
                    Facebook
                  </a>
                )}
              </div>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}