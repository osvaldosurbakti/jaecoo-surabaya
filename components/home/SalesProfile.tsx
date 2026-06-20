"use client";

import Image from "next/image";
import { Award, CheckCircle2, MapPin, Phone, User } from "lucide-react";
import { SiInstagram } from '@icons-pack/react-simple-icons';
import { salesProfile } from "@/data/sales";

export default function SalesProfile() {
  // Pengecekan apakah data sales sudah diisi atau masih menggunakan dummy/kosong
  const hasImage = salesProfile?.image && salesProfile.image !== "" && salesProfile.image !== "/placeholder.jpg";
  const hasInstagram = salesProfile?.instagram && salesProfile.instagram !== "#";

  return (
    <section id="consultant" className="py-24 px-6 md:px-12 bg-neutral-950 text-white overflow-hidden">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
        
        {/* ─── IMAGE / FALLBACK AVATAR CONTAINER ─── */}
        <div className="relative h-112.5 md:h-125 w-full rounded-3xl overflow-hidden bg-linear-to-b from-neutral-900 to-neutral-950 border border-neutral-800/80 flex items-center justify-center group shadow-2xl">
          
          {hasImage ? (
            /* Tampilan jika foto sales sudah siap */
            <Image
              src={salesProfile.image}
              alt={salesProfile.name || "Sales Consultant"}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover group-hover:scale-102 transition-transform duration-700 ease-out"
              priority
            />
          ) : (
            /* Tampilan Premium Fallback jika foto belum ada */
            <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center bg-[radial-gradient(ellipse_at_top,var(--tw-gradient-stops))] from-neutral-900 via-neutral-950 to-neutral-950">
              <div className="p-6 rounded-full bg-neutral-900 border border-neutral-800 text-neutral-500 mb-4 group-hover:text-emerald-400 group-hover:border-emerald-500/30 transition-all duration-500 shadow-inner">
                <User className="w-20 h-20 stroke-[1.2]" />
              </div>
              <p className="text-sm font-semibold tracking-widest uppercase text-neutral-500">
                Official Consultant
              </p>
              <div className="w-12 h-px bg-neutral-800 my-3 group-hover:w-20 transition-all duration-500 group-hover:bg-emerald-500/50" />
              <p className="text-xs text-neutral-600 max-w-xs font-light">
                Foto konsultan resmi Jaecoo Surabaya akan segera tersedia untuk kenyamanan komunikasi Anda.
              </p>
            </div>
          )}

          {/* Aksentuasi elegan di sudut box foto */}
          <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-neutral-900/80 border border-white/5 text-[10px] uppercase tracking-wider font-semibold text-gray-400 backdrop-blur-md">
            <Award className="w-3.5 h-3.5 text-emerald-400" /> Verified Sales
          </div>
        </div>

        {/* ─── CONTENT AREA ─── */}
        <div className="flex flex-col justify-center">
          <p className="uppercase tracking-[5px] text-xs md:text-sm font-semibold text-emerald-500">
            Your Consultant
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mt-4 tracking-tight">
            {salesProfile?.name ? `Meet ${salesProfile.name}` : "Meet Our Consultant"}
          </h2>

          {/* Info Posisi & Showroom dengan Ikon */}
          <div className="mt-4 flex flex-col gap-2 text-gray-400 text-sm font-light">
            <p className="flex items-center gap-2 text-gray-300 font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              {salesProfile?.position || "Senior Account Officer"}
            </p>
            <p className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-neutral-500 shrink-0" />
              {salesProfile?.showroom || "Dealer Resmi Jaecoo Surabaya"}
            </p>
          </div>

          <p className="mt-6 text-gray-400 leading-relaxed font-light text-base md:text-lg">
            {salesProfile?.description || 
              "Dapatkan layanan personal kelas premium untuk setiap pembelian unit Jaecoo. Hubungi konsultan kami untuk info spesifikasi, simulasi kredit terbaik, jaminan garansi resmi, serta pengaturan jadwal test drive langsung ke rumah atau kantor Anda."}
          </p>

          {/* ─── SERVICES WITH CHECK ICONS ─── */}
          <div className="mt-8 grid sm:grid-cols-2 gap-3.5">
            {(salesProfile?.services && salesProfile.services.length > 0
              ? salesProfile.services
              : [
                  "Konsultasi Unit & Spesifikasi",
                  "Test Drive Unit ke Lokasi Anda",
                  "Simulasi Kredit DP Rendah / Angsuran Ringan",
                  "Proses Trade-In (Tukar Tambah) Semua Merk",
                  "Layanan Aftersales & Klaim Asuransi",
                  "Pengiriman Unit Tepat Waktu"
                ]
            ).map((item) => (
              <div key={item} className="flex items-start gap-3 text-gray-300 text-sm">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span className="font-light">{item}</span>
              </div>
            ))}
          </div>

          {/* ─── CALL TO ACTION BUTTONS ─── */}
          <div className="flex flex-wrap gap-4 mt-10">
            <a
              href={salesProfile?.whatsapp || "https://api.whatsapp.com/send?phone=628xxxxxxxxxx&text=Halo%20Jaecoo%20Surabaya..."}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-white text-black px-8 py-3.5 rounded-full font-semibold shadow-lg hover:bg-neutral-200 hover:scale-105 active:scale-95 transition-all duration-200 w-full sm:w-auto text-center text-sm"
            >
              <Phone className="w-4 h-4 fill-black" />
              Chat WhatsApp
            </a>

            {hasInstagram && (
              <a
                href={salesProfile.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 border border-white/20 px-8 py-3.5 rounded-full text-sm font-medium hover:bg-white/5 hover:border-white/40 transition-all duration-200 w-full sm:w-auto text-center"
              >
                <SiInstagram className="w-4 h-4 text-gray-400" />
                Instagram
              </a>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}