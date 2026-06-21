"use client";

export default function ContactHero() {
  return (
    <section className="relative min-h-[85vh] flex items-center px-6 md:px-16 bg-neutral-950 overflow-hidden pt-20">
      {/* LUXURY AMBIENT BACKGROUND EFFECTS */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,var(--tw-gradient-stops))] from-neutral-900/40 via-neutral-950 to-neutral-950 z-0" />
      
      {/* Emerald Neon Glow Spot */}
      <div className="absolute top-1/4 right-[-10%] w-150 h-150 bg-emerald-500/3 blur-[160px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-75 h-75 bg-neutral-900/40 blur-[100px] rounded-full pointer-events-none" />

      {/* Decorative Minimalist Grid Line (Aksen Arsitektural) */}
      <div className="absolute left-6 md:left-16 top-0 bottom-0 w-px bg-neutral-900/40 pointer-events-none hidden sm:block" />

      {/* MAIN CONTENT CONTAINER */}
      <div className="relative z-10 max-w-7xl mx-auto w-full sm:pl-8">
        
        {/* SUB-HEADLINE */}
        <div className="flex items-center gap-3 mb-6">
          <span className="h-px w-6 bg-emerald-500 block" />
          <p className="uppercase tracking-[6px] text-[10px] md:text-xs font-bold text-emerald-400">
            Conscious Luxury • Contact Center
          </p>
        </div>

        {/* HERO TITLE (EDITORIAL STYLE) */}
        <h1 className="text-4xl md:text-8xl font-light uppercase tracking-tight text-white leading-[1.05] max-w-5xl">
          Let’s Begin <br />
          <span className="font-black text-transparent bg-clip-text bg-linear-to-r from-neutral-100 via-neutral-300 to-neutral-500">
            Your Jaecoo Journey.
          </span>
        </h1>

        {/* SUPPORTING DESCRIPTION */}
        <p className="mt-8 text-neutral-400 text-sm md:text-base font-light max-w-2xl leading-relaxed pr-4">
          Butuh informasi spesifik mengenai skema kepemilikan, spesifikasi mekanis, atau penawaran eksklusif wilayah Surabaya? Konsultan ahli kami siap memandu Anda melalui layanan komunikasi personal berstandar tinggi.
        </p>

        {/* INTERACTIVE ACTIONS */}
        <div className="flex flex-col sm:flex-row items-center gap-4 mt-12 w-full sm:w-auto">
          {/* Tombol Utama */}
          <a
            href="#contact" // Menuju ke section profile sales & maps yang tadi kita buat
            className="w-full sm:w-auto bg-emerald-500 hover:bg-emerald-600 text-black px-10 py-4.5 text-xs font-black uppercase tracking-[3px] transition-all duration-300 relative group overflow-hidden shadow-xl shadow-emerald-950/10 text-center"
          >
            {/* Shimmer effect */}
            <span className="absolute top-0 -left-full w-full h-full bg-linear-to-r from-transparent via-white/20 to-transparent group-hover:left-full transition-all duration-1000" />
            Connect With Sales
          </a>

          {/* Tombol Sekunder */}
          <a
            href="#contact"
            className="w-full sm:w-auto border border-neutral-800 hover:border-neutral-500 bg-neutral-900/20 hover:bg-neutral-900 text-neutral-300 hover:text-white px-10 py-4.5 text-xs font-bold uppercase tracking-[3px] transition-all duration-300 text-center"
          >
            Locate Showroom
          </a>
        </div>

      </div>

      {/* BOTTOM DECORATIVE HAIRLINE */}
      <div className="absolute bottom-0 left-6 right-6 h-px bg-linear-to-r from-transparent via-neutral-900 to-transparent" />
    </section>
  );
}