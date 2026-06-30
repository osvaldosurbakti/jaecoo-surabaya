"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  // Efek untuk mengubah background navbar saat discroll ke bawah
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // SCROLL LOCK: Mengunci layar utama agar tidak bisa digeser ke atas/bawah saat menu mobile terbuka
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Fungsi untuk menutup menu mobile saat link diklik
  const closeMenu = () => setIsOpen(false);

  return (
    <nav
      // KUNCI UTAMA: z-50 dipastikan menempel di sini untuk mengunci posisi di atas video z-0 / z-10
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 px-5 md:px-16 py-4 md:py-5 flex justify-between items-center ${
        isScrolled 
          ? "bg-neutral-950/90 border-b border-neutral-900 backdrop-blur-lg py-3.5 md:py-4" 
          : "bg-linear-to-b from-black/70 via-black/30 to-transparent"
      }`}
    >
      {/* BRAND LOGO */}
      {/* Menambahkan text-[11px] agar nama diler panjang Anda tidak patah menjadi dua baris di HP layar kecil */}
      <Link href="/" onClick={closeMenu} className="group flex items-center gap-2 z-50 select-none">
        <span className="h-2 w-2 bg-emerald-500 rounded-full group-hover:scale-150 transition-transform duration-300" />
        <h1 className="text-[11px] sm:text-xs md:text-sm font-black tracking-[3px] md:tracking-[4px] text-white uppercase whitespace-nowrap">
          JAECOO <span className="text-emerald-400 font-black">JATIM</span>
        </h1>
      </Link>

      {/* DESKTOP NAVIGATION (Hidden on Mobile) */}
      <div className="hidden md:flex items-center gap-10 text-xs uppercase tracking-[2px] font-bold">
        <Link 
          href="/" 
          className={`transition-colors duration-300 ${pathname === "/" ? "text-emerald-400" : "text-neutral-400 hover:text-white"}`}
        >
          Home
        </Link>
        <Link 
          href="/cars" 
          className={`transition-colors duration-300 ${pathname?.startsWith("/cars") ? "text-emerald-400" : "text-neutral-400 hover:text-white"}`}
        >
          Cars
        </Link>
        <Link 
          href="/contact" 
          className={`transition-colors duration-300 ${pathname === "/contact" ? "text-emerald-400" : "text-neutral-400 hover:text-white"}`}
        >
          Contact
        </Link>
      </div>

      {/* DESKTOP CTA BUTTON */}
      <div className="hidden md:flex">
        <a
          href="https://wa.me/?text=Halo%20Jaecoo%20Surabaya,%20saya%20ingin%20bertanya%20mengenai%20lini%20mobil%20Jaecoo."
          target="_blank"
          rel="noopener noreferrer"
          className="bg-transparent text-white hover:bg-white hover:text-black border border-neutral-700 hover:border-white px-6 py-2.5 text-[11px] font-bold uppercase tracking-widest transition-all duration-300"
        >
          WhatsApp
        </a>
      </div>

      {/* MOBILE HAMBURGER BUTTON (Hidden on Desktop) */}
      {/* Dioptimasi menggunakan origin-center dan koordinat translate agar rotasi menyilang (X) saat diklik terlihat sangat presisi */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden text-white focus:outline-none z-50 flex flex-col justify-center items-center h-8 w-8 relative"
        aria-label="Toggle Menu"
      >
        <span className={`h-0.5 w-6 bg-white transition-all duration-300 absolute ${isOpen ? "rotate-45" : "-translate-y-1.5"}`} />
        <span className={`h-0.5 w-6 bg-white transition-all duration-300 absolute ${isOpen ? "opacity-0" : ""}`} />
        <span className={`h-0.5 w-6 bg-white transition-all duration-300 absolute ${isOpen ? "-rotate-45" : "translate-y-1.5"}`} />
      </button>

      {/* MOBILE MENU OVERLAY */}
      {/* Menggunakan z-40 agar berada tepat di bawah tombol pemicu burger (z-50), menghindari masalah kedipan elemen */}
      <div
        className={`fixed inset-0 h-screen w-screen bg-neutral-950 flex flex-col justify-center items-center transition-all duration-500 ease-in-out md:hidden z-40 ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Mobile Links */}
        <div className="flex flex-col gap-6 text-center text-base uppercase tracking-[4px] font-black w-full px-8">
          <Link 
            href="/" 
            onClick={closeMenu}
            className={`py-2 transition-colors ${pathname === "/" ? "text-emerald-400" : "text-white"}`}
          >
            Home
          </Link>
          <Link 
            href="/cars" 
            onClick={closeMenu}
            className={`py-2 transition-colors ${pathname?.startsWith("/cars") ? "text-emerald-400" : "text-white"}`}
          >
            Cars
          </Link>
          <Link 
            href="/contact" 
            onClick={closeMenu}
            className={`py-2 transition-colors ${pathname === "/contact" ? "text-emerald-400" : "text-white"}`}
          >
            Contact
          </Link>

          {/* Tombol CTA dibuat melengkung full-rounded agar senada dengan tombol-tombol pada section catalog dan profile */}
          <div className="mt-4">
            <a
              href="https://wa.me/?text=Halo%20Jaecoo%20Surabaya,%20saya%20ingin%20bertanya%20mengenai%20lini%20mobil%20Jaecoo."
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
              className="inline-block w-full bg-emerald-500 text-black py-4 rounded-full text-xs font-bold uppercase tracking-widest shadow-lg active:scale-95 transition-transform"
            >
              Hubungi via WhatsApp
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}