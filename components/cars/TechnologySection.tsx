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
    <section className="py-32 px-6 md:px-16 bg-neutral-950 border-t border-neutral-900/60 relative overflow-hidden">
      {/* Ambient Luxury Lighting Effect */}
      <div className="absolute top-1/3 right-1/4 w-125 h-125 bg-emerald-500/2 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-100 h-100 bg-teal-500/1 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* EDITORIAL HEADER SECTION */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-24 border-b border-neutral-900 pb-12">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-4">
              <span className="h-px w-6 bg-emerald-500 block" />
              <span className="text-[9px] font-bold tracking-[6px] text-emerald-400 uppercase">
                Engineering Masterpiece
              </span>
            </div>
            <h2 className="text-4xl md:text-6xl font-light uppercase tracking-tight text-white leading-none">
              Innovation <br />
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
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 border border-neutral-900 divide-y divide-y-reverse sm:divide-y-0 sm:divide-x divide-neutral-900 bg-neutral-900/10">
          {technologies.map((item) => (
            <div
              key={item.title}
              className="p-8 relative group transition-all duration-700 flex flex-col justify-between overflow-hidden min-h-95 hover:bg-neutral-900/20"
            >
              {/* Subtle Glowing Gradient Overlay on Hover */}
              <div className="absolute inset-0 bg-linear-to-b from-emerald-500/1 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

              {/* Top Accent Line on Hover */}
              <div className="absolute top-0 left-0 w-0 h-px bg-linear-to-r from-emerald-500 to-teal-400 group-hover:w-full transition-all duration-700 ease-out" />
              
              {/* Content Area */}
              <div className="relative z-10">
                {/* Large Background Watermark Number */}
                <div className="absolute -top-6 -right-4 text-7xl md:text-8xl font-black text-neutral-900/30 select-none tracking-tighter group-hover:text-emerald-500/5 transition-colors duration-700 font-mono">
                  {item.no}
                </div>

                <span className="text-[10px] font-bold tracking-widest text-emerald-500/80 uppercase block mb-1">
                  {item.subtitle}
                </span>
                
                <h3 className="text-lg font-black uppercase tracking-wider text-white mt-1 mb-4 group-hover:text-emerald-400 transition-colors duration-300">
                  {item.title}
                </h3>

                <p className="text-neutral-400 text-xs font-light leading-relaxed pr-4">
                  {item.description}
                </p>
              </div>

              {/* Bottom Target Highlight */}
              <div className="border-t border-neutral-900/60 pt-6 mt-12 relative z-10 flex items-center justify-between">
                <div>
                  <span className="text-[9px] uppercase tracking-[3px] text-neutral-600 block font-semibold">
                    Core Capability
                  </span>
                  <span className="text-xs text-neutral-300 font-medium mt-1 block tracking-wide">
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