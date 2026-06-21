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

  // Fungsi untuk menutup menu mobile saat link diklik
  const closeMenu = () => setIsOpen(false);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 px-6 md:px-16 py-5 flex justify-between items-center ${
        isScrolled 
          ? "bg-neutral-950/80 border-b border-neutral-900 backdrop-blur-lg py-4" 
          : "bg-linear-to-b from-black/50 to-transparent backdrop-blur-xs"
      }`}
    >
      {/* BRAND LOGO */}
      <Link href="/" className="group flex items-center gap-2 z-50">
        <span className="h-2 w-2 bg-emerald-500 rounded-full group-hover:scale-150 transition-transform duration-300" />
        <h1 className="text-sm md:text-base font-black tracking-[4px] text-white uppercase">
          JAECOO <span className="text-emerald-400 font-light">SURABAYA CENTER</span>
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
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden text-white focus:outline-none z-50 flex flex-col justify-between h-4 w-6"
        aria-label="Toggle Menu"
      >
        <span className={`h-0.5 w-full bg-white transition-all duration-300 transform origin-left ${isOpen ? "rotate-45 -translate-y-0.5" : ""}`} />
        <span className={`h-0.5 w-full bg-white transition-all duration-300 ${isOpen ? "opacity-0" : ""}`} />
        <span className={`h-0.5 w-full bg-white transition-all duration-300 transform origin-left ${isOpen ? "-rotate-45 translate-y-0.5" : ""}`} />
      </button>

      {/* MOBILE MENU OVERLAY */}
      <div
        className={`fixed inset-0 h-screen w-screen bg-neutral-950 flex flex-col justify-center items-center transition-all duration-500 ease-in-out md:hidden ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Mobile Links */}
        <div className="flex flex-col gap-8 text-center text-lg uppercase tracking-[4px] font-black">
          <Link 
            href="/" 
            onClick={closeMenu}
            className={`${pathname === "/" ? "text-emerald-400" : "text-white"}`}
          >
            Home
          </Link>
          <Link 
            href="/cars" 
            onClick={closeMenu}
            className={`${pathname?.startsWith("/cars") ? "text-emerald-400" : "text-white"} hover:text-emerald-400 transition-colors`}
          >
            Cars
          </Link>
          <Link 
            href="/contact" 
            onClick={closeMenu}
            className={`${pathname === "/contact" ? "text-emerald-400" : "text-white"} hover:text-emerald-400 transition-colors`}
          >
            Contact
          </Link>

          <a
            href="https://wa.me/?text=Halo%20Jaecoo%20Surabaya,%20saya%20ingin%20bertanya%20mengenai%20lini%20mobil%20Jaecoo."
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeMenu}
            className="mt-6 bg-emerald-500 text-black px-8 py-4 text-xs font-bold uppercase tracking-widest"
          >
            Hubungi via WhatsApp
          </a>
        </div>
      </div>
    </nav>
  );
}