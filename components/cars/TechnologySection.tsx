"use client";

const technologies = [
  {
    no: "01",
    title: "Super Hybrid System",
    subtitle: "Triple-Engine Powerhouse",
    description: "Arsitektur Plug-in Hybrid generasi terbaru yang memadukan mesin turbo dengan dual motor listrik. Menghasilkan efisiensi radikal tanpa mengorbankan traksi instan.",
    highlight: "1,300+ Km Total Range",
  },
  {
    no: "02",
    title: "Advanced Driving Assistance",
    subtitle: "Autonomous Level 2+",
    description: "Perisai virtual tak terlihat yang terus memindai jalanan melalui radar sensorik cerdas. Membantu pengereman darurat otomatis dan koreksi jalur secara presisi.",
    highlight: "Dynamic ADAS Shield",
  },
  {
    no: "03",
    title: "Smart Connectivity",
    subtitle: "Curved Dual Smart Screen",
    description: "Pusat komando digital kabin beresolusi tinggi yang melengkung elegan. Terintegrasi mulus dengan asisten suara AI pintar dan pembaruan sistem berkala via OTA.",
    highlight: "24.6\" Immersive Display",
  },
  {
    no: "04",
    title: "Premium Safety Tech",
    subtitle: "Military-Grade Defense",
    description: "Struktur sasis monokok yang dibangun menggunakan baja berkekuatan ultra-tinggi, mengitari ruang kabin dan memproteksi baterai inti dari segala sudut benturan.",
    highlight: "High-Strength Steel Body",
  }
];

export default function TechnologySection() {
  return (
    // Mengurangi padding luar di mobile (py-16 px-4) agar hemat ruang visual layar HP
    <section className="py-16 md:py-32 px-4 sm:px-8 md:px-16 bg-neutral-950 border-t border-neutral-900/60 relative overflow-hidden">
      {/* Ambient Luxury Lighting Effect */}
      <div className="absolute top-1/3 right-1/4 w-72 h-72 md:w-125 md:h-125 bg-emerald-500/2 blur-[100px] md:blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-60 h-60 md:w-100 md:h-100 bg-teal-500/1 blur-[90px] md:blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* EDITORIAL HEADER SECTION */}
        {/* Mengurangi margin bawah di mobile (mb-10) agar tidak terlalu renggang */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 md:gap-8 mb-10 md:mb-24 border-b border-neutral-900 pb-8 md:pb-12">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-3 md:mb-4">
              <span className="h-px w-6 bg-emerald-500 block" />
              <span className="text-[9px] font-bold tracking-[4px] md:tracking-[6px] text-emerald-400 uppercase">
                Engineering Masterpiece
              </span>
            </div>
            {/* Responsif ukuran teks h2 agar proporsional di HP */}
            <h2 className="text-3xl md:text-6xl font-light uppercase tracking-tight text-white leading-tight md:leading-none">
              Innovation <br className="hidden sm:block" />
              <span className="font-black text-transparent bg-clip-text bg-linear-to-r from-neutral-100 via-neutral-300 to-neutral-500">& Technology</span>
            </h2>
          </div>
          <div className="max-w-md lg:text-right">
            <p className="text-neutral-500 text-xs md:text-sm font-light leading-relaxed">
              Eksplorasi ekosistem teknologi cerdas Jaecoo yang dirancang bukan hanya untuk memikat mata, namun untuk mendefinisikan ulang kasta kenyamanan berkendara urban modern.
            </p>
          </div>
        </div>

        {/* HIGH-END GRID SYSTEM */}
        {/* 
          - Grid: 1 kolom di mobile, 2 kolom di tablet (sm), dan 4 kolom di desktop (lg)
          - Divide: Mengatur arah garis pembatas secara dinamis sesuai jumlah kolom grid (divide-y menjadi divide-x)
        */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border border-neutral-900 divide-y sm:divide-y-0 sm:divide-x divide-neutral-900 bg-neutral-900/10">
          {technologies.map((item) => (
            <div
              key={item.title}
              // Menurunkan min-h di mobile agar tidak terlalu kosong, p-6 di mobile naik ke p-8 di desktop
              className="p-6 md:p-8 relative group transition-all duration-700 flex flex-col justify-between overflow-hidden min-h-70 sm:min-h-95 hover:bg-neutral-900/20"
            >
              {/* Subtle Glowing Gradient Overlay on Hover */}
              <div className="absolute inset-0 bg-linear-to-b from-emerald-500/1 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

              {/* Top Accent Line on Hover */}
              <div className="absolute top-0 left-0 w-0 h-px bg-linear-to-r from-emerald-500 to-teal-400 group-hover:w-full transition-all duration-700 ease-out" />
              
              {/* Content Area */}
              <div className="relative z-10">
                {/* 
                  Watermark angka disesuaikan posisinya di mobile (top-0 right-0) dan ukuran text-6xl 
                  agar tidak menimpa teks judul utama pada layar HP sempit
                */}
                <div className="absolute -top-2 -right-2 text-6xl md:text-8xl font-black text-neutral-900/30 select-none tracking-tighter group-hover:text-emerald-500/5 transition-colors duration-700 font-mono">
                  {item.no}
                </div>

                <span className="text-[9px] md:text-[10px] font-bold tracking-widest text-emerald-500/80 uppercase block mb-1">
                  {item.subtitle}
                </span>
                
                <h3 className="text-base md:text-lg font-black uppercase tracking-wider text-white mt-1 mb-3 md:mb-4 group-hover:text-emerald-400 transition-colors duration-300">
                  {item.title}
                </h3>

                <p className="text-neutral-400 text-xs font-light leading-relaxed pr-2 md:pr-4">
                  {item.description}
                </p>
              </div>

              {/* Bottom Target Highlight */}
              {/* Menurunkan margin top (mt-6 md:mt-12) agar seimbang dengan min-h baru versi mobile */}
              <div className="border-t border-neutral-900/60 pt-4 md:pt-6 mt-6 md:mt-12 relative z-10 flex items-center justify-between">
                <div>
                  <span className="text-[8px] md:text-[9px] uppercase tracking-[2px] md:tracking-[3px] text-neutral-600 block font-semibold">
                    Core Capability
                  </span>
                  <span className="text-xs text-neutral-300 font-medium mt-0.5 block tracking-wide">
                    {item.highlight}
                  </span>
                </div>
                {/* Premium Small Aesthetic Corner Graphic */}
                <div className="h-1.5 w-1.5 border-r border-b border-neutral-700 group-hover:border-emerald-400 group-hover:translate-x-0.5 group-hover:translate-y-0.5 transition-all duration-500" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}