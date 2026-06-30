"use client";

export default function ContactHero() {
  return (
    // Mengubah min-h-[85vh] menjadi dinamis min-h-[75vh] di mobile agar pas dalam satu viewport layar HP
    <section className="relative min-h-[75vh] md:min-h-[85vh] flex items-center px-4 sm:px-8 md:px-16 bg-neutral-950 overflow-hidden pt-24 md:pt-20">
      {/* LUXURY AMBIENT BACKGROUND EFFECTS */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,var(--tw-gradient-stops))] from-neutral-900/40 via-neutral-950 to-neutral-950 z-0" />
      
      {/* Emerald Neon Glow Spot (Disesuaikan ukurannya di mobile agar tidak memakan memori/performa browser HP) */}
      <div className="absolute top-1/4 right-[-20%] md:right-[-10%] w-72 h-72 md:w-150 md:h-150 bg-emerald-500/3 blur-[100px] md:blur-[160px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-4 w-60 h-60 md:w-75 md:h-75 bg-neutral-900/40 blur-[90px] md:blur-[100px] rounded-full pointer-events-none" />

      {/* Decorative Minimalist Grid Line (Aksen Arsitektural) */}
      <div className="absolute left-6 md:left-16 top-0 bottom-0 w-px bg-neutral-900/40 pointer-events-none hidden sm:block" />

      {/* MAIN CONTENT CONTAINER */}
      <div className="relative z-10 max-w-7xl mx-auto w-full sm:pl-8">
        
        {/* SUB-HEADLINE */}
        <div className="flex items-center gap-2 md:gap-3 mb-4 md:mb-6">
          <span className="h-px w-4 md:w-6 bg-emerald-500 block" />
          {/* Menyesuaikan tracking text agar tidak terlalu melar di layar HP sempit */}
          <p className="uppercase tracking-[3px] md:tracking-[6px] text-[9px] md:text-xs font-bold text-emerald-400">
            Conscious Luxury • Contact Center
          </p>
        </div>

        {/* HERO TITLE (EDITORIAL STYLE) */}
        {/* Responsif ukuran teks dari text-3xl ke text-8xl agar judul "Your Jaecoo Journey" tidak terpotong patah per huruf */}
        <h1 className="text-3xl sm:text-5xl md:text-8xl font-light uppercase tracking-tight text-white leading-[1.1] md:leading-[1.05] max-w-5xl">
          Let’s Begin <br />
          <span className="font-black text-transparent bg-clip-text bg-linear-to-r from-neutral-100 via-neutral-300 to-neutral-500">
            Your Jaecoo Journey.
          </span>
        </h1>

        {/* SUPPORTING DESCRIPTION */}
        {/* Skalasi ukuran teks dari text-xs ke text-base */}
        <p className="mt-4 md:mt-8 text-neutral-400 text-xs md:text-base font-light max-w-2xl leading-relaxed pr-0 md:pr-4">
          Butuh informasi spesifik mengenai skema kepemilikan, spesifikasi mekanis, atau penawaran eksklusif wilayah Surabaya? Konsultan ahli kami siap memandu Anda melalui layanan komunikasi personal berstandar tinggi.
        </p>

{/* INTERACTIVE ACTIONS */}
<div className="flex flex-col sm:flex-row items-center gap-3 md:gap-4 mt-8 md:mt-12 w-full sm:w-auto">
  
  {/* Tombol Utama -> Menuju ke SalesContact */}
  <a
    href="#sales-contact" 
    className="w-full sm:w-auto bg-emerald-500 hover:bg-emerald-600 text-black px-8 md:px-10 py-3.5 md:py-4.5 text-[11px] md:text-xs font-black uppercase tracking-[2px] md:tracking-[3px] transition-all duration-300 relative group overflow-hidden shadow-xl shadow-emerald-950/10 text-center rounded-none"
  >
    <span className="absolute top-0 -left-full w-full h-full bg-linear-to-r from-transparent via-white/20 to-transparent group-hover:left-full transition-all duration-1000" />
    Connect With Sales
  </a>

  {/* Tombol Sekunder -> Menuju ke Location */}
  <a
    href="#showroom-location"
    className="w-full sm:w-auto border border-neutral-800 hover:border-neutral-500 bg-neutral-900/20 hover:bg-neutral-900 text-neutral-300 hover:text-white px-8 md:px-10 py-3.5 md:py-4.5 text-[11px] md:text-xs font-bold uppercase tracking-[2px] md:tracking-[3px] transition-all duration-300 text-center rounded-none"
  >
    Locate Showroom
  </a>
</div>

      </div>

      {/* BOTTOM DECORATIVE HAIRLINE */}
      <div className="absolute bottom-0 left-4 right-4 md:left-6 md:right-6 h-px bg-linear-to-r from-transparent via-neutral-900 to-transparent" />
    </section>
  );
}