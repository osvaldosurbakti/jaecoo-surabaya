"use client";

import Link from "next/link";
import { SiInstagram, SiFacebook, SiWhatsapp, SiTiktok } from "@icons-pack/react-simple-icons";
import { salesProfile } from "@/data/sales";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  // Memastikan fallback aman untuk tautan media sosial sales
  const whatsappLink = salesProfile?.whatsapp || "#";
  const instagramLink = salesProfile?.instagram || "#";
  const facebookLink = salesProfile?.facebook || "#";
  const tiktokLink = salesProfile?.tiktok || "#";

  return (
    <footer className="bg-black border-t border-neutral-950 py-10 px-4 sm:px-8 md:px-16 text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col gap-10">
        
        {/* MAIN COMPACT ROW */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8 pb-8 border-b border-neutral-900/60">
          
          {/* BRAND IDENTITY */}
          <div className="max-w-xs">
            <div className="flex items-center gap-2 mb-2">
              <span className="h-1.5 w-1.5 bg-emerald-500 rounded-full" />
              <h2 className="font-black text-xs tracking-[4px] uppercase">
                JAECOO <span className="text-emerald-400 font-light">SURABAYA CENTER</span>
              </h2>
            </div>
            <p className="text-neutral-600 text-[11px] font-light leading-relaxed">
              Premium urban off-road consultant partner wilayah Jawa Timur.
            </p>
          </div>

          {/* COMPACT CONTENT GROUP */}
          <div className="flex flex-wrap gap-x-12 gap-y-6 items-start">
            
            {/* MINI NAVIGATION */}
            <div>
              <span className="text-[9px] font-bold tracking-[2px] text-neutral-600 uppercase block mb-2.5">
                Links
              </span>
              <div className="flex gap-4 text-[11px] font-light text-neutral-400">
                <Link href="/" className="hover:text-emerald-400 transition-colors">Home</Link>
                <Link href="/cars" className="hover:text-emerald-400 transition-colors">Cars</Link>
                <Link href="/contact" className="hover:text-emerald-400 transition-colors">Contact</Link>
              </div>
            </div>

            {/* SHOWROOM HOURS */}
            <div>
              <span className="text-[9px] font-bold tracking-[2px] text-neutral-600 uppercase block mb-2.5">
                Hours
              </span>
              <p className="text-[11px] font-light text-neutral-400">
                Senin - Minggu <span className="text-neutral-600 mx-1">•</span> 08:30 - 17:00 WIB
              </p>
            </div>

            {/* SALES SOCIAL CONNECT */}
            <div>
              <span className="text-[9px] font-bold tracking-[2px] text-neutral-600 uppercase block mb-2">
                Connect With Sales
              </span>
              <div className="flex items-center gap-4 text-neutral-500">
                <a 
                  href={whatsappLink} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-emerald-400 transition-colors"
                  aria-label="Chat WhatsApp Sales"
                >
                  <SiWhatsapp size={14} />
                </a>
                <a 
                  href={instagramLink} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-emerald-400 transition-colors"
                  aria-label="Instagram Sales"
                >
                  <SiInstagram size={14} />
                </a>
                <a 
                  href={tiktokLink} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-emerald-400 transition-colors"
                  aria-label="TikTok Sales"
                >
                  <SiTiktok size={14} />
                </a>
                <a 
                  href={facebookLink} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-emerald-400 transition-colors"
                  aria-label="Facebook Sales"
                >
                  <SiFacebook size={14} />
                </a>
              </div>
            </div>

          </div>
        </div>

        {/* BOTTOM METADATA & CREDITS */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-[10px] text-neutral-600 tracking-wider font-light">
          
          <div className="flex flex-wrap justify-center sm:justify-start items-center gap-x-3 gap-y-1">
            <span>© {currentYear} JAECOO SURABAYA CENTER.</span>
            <span className="hidden sm:inline text-neutral-900">|</span>
            <Link 
              href="/privacy-policy" 
              className="hover:text-neutral-400 transition-colors underline underline-offset-2 decoration-neutral-900"
            >
              Privacy Policy
            </Link>
          </div>

          <div className="font-mono text-[9px] tracking-widest text-neutral-700">
            Created By{" "}
            <a
              href="https://osvaldosurbakti.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-600 hover:text-emerald-400 font-bold transition-colors duration-300 border-b border-neutral-900 hover:border-emerald-500/30 pb-0.5"
            >
              OS
            </a>
          </div>

        </div>

      </div>
    </footer>
  );
}