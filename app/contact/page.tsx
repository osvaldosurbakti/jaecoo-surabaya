"use client";

import ContactHero from "@/components/contact/ContactHero";
import SalesContact from "@/components/contact/SalesContact";
import TestDriveForm from "@/components/contact/TestDriveForm";
import Location from "@/components/contact/Location";
import ContactCTA from "@/components/contact/ContactCTA";

export default function ContactPage() {
  return (
    <main className="bg-neutral-950 min-h-screen antialiased selection:bg-emerald-500 selection:text-black">
      {/* 1. HERO SECTION */}
      <ContactHero />

      {/* 2. EXECUTIVE CONSULTANT PROFILE */}
      <SalesContact />

      {/* 3. COMBINED LAYOUT: LOCATION & TEST DRIVE (SIDE BY SIDE) */}
      <section className="bg-neutral-950 border-t border-neutral-900/60 relative">
        {/* Garis Pembatas Vertikal Tipis di Tengah Grid (Hanya Muncul di Layar Besar) */}
        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-neutral-900/60 -translate-x-1/2 hidden lg:block z-20" />

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-stretch divide-y lg:divide-y-0 lg:divide-x divide-neutral-900/80">
          
          {/* SISI KIRI: LOKASI & PETA INTERAKTIF */}
          <div className="w-full">
            {/* Note: Pastikan di dalam komponen <Location /> Anda menghapus padding atas/bawah yang terlalu tebal (misal py-32 menjadi py-16 atau py-20) agar proporsinya pas */}
            <Location />
          </div>

          {/* SISI KANAN: FORMULIR BOOKING TEST DRIVE */}
          <div className="w-full bg-neutral-900/10 backdrop-blur-xs">
            {/* Note: Sesuaikan juga padding internal di <TestDriveForm /> agar seimbang dengan sisi kiri */}
            <TestDriveForm />
          </div>

        </div>
      </section>

      {/* 4. CLOSING CTA SECTION */}
      <ContactCTA />
    </main>
  );
}