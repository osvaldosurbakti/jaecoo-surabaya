"use client";

const items = [
  {
    title: "Avant-Garde Premium Design",
    desc: "Siluet tangguh khas Urban Off-Road yang dipadukan dengan garis desain eksterior yang anggun, menciptakan impresi kemewahan mutlak di setiap sudut jalanan kota.",
    tag: "Aesthetics"
  },
  {
    title: "First-Class Driving Comfort",
    desc: "Sistem suspensi adaptif CDC yang dipadukan dengan kesenyapan kabin superior dan jok kulit premium, dirancang khusus untuk kenyamanan komutasi harian maupun petualangan jarak jauh.",
    tag: "Ergonomics"
  },
  {
    title: "Seamless Smart Experience",
    desc: "Ekosistem kokpit pintar berbasis AI yang mengerti kebutuhan Anda. Menghubungkan navigasi, hiburan, dan asisten berkendara dalam satu kendali yang intuitif.",
    tag: "Intelligence"
  }
];

export default function WhyJaecoo() {
  return (
    // Mengurangi padding vertikal (py-16) dan horizontal (px-4) di mobile agar hemat ruang visual
    <section className="py-16 md:py-32 px-4 sm:px-8 md:px-16 bg-black relative overflow-hidden border-t border-neutral-900/40">
      {/* Aksesori Cahaya Latar Belakang yang Sangat Halus */}
      <div className="absolute bottom-0 right-0 w-60 h-60 md:w-75 md:h-75 bg-emerald-500/1 blur-[90px] md:blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Mengurangi gap antar kolom di mobile (gap-10) agar layout mengalir alami */}
        <div className="grid lg:grid-cols-12 gap-10 md:gap-16 items-start">
          
          {/* SISI KIRI: STICKY EDITORIAL HEADER */}
          <div className="lg:col-span-4 lg:sticky lg:top-36">
            <div className="flex items-center gap-2 mb-3 md:mb-4">
              <span className="h-1.5 w-1.5 bg-emerald-500 block rounded-full animate-pulse" />
              <span className="text-[9px] font-bold tracking-[4px] md:tracking-[6px] text-emerald-400 uppercase">
                The Brand Philosophy
              </span>
            </div>
            {/* Responsif ukuran teks h2 (text-3xl ke text-5xl) agar pas di layar HP */}
            <h2 className="text-3xl md:text-5xl font-light uppercase tracking-tight text-white leading-tight">
              Why Choose <br />
              <span className="font-black text-transparent bg-clip-text bg-linear-to-r from-neutral-100 to-neutral-500">
                Jaecoo.
              </span>
            </h2>
            {/* Mengurangi margin top (mt-4) dan ukuran font di mobile agar lebih ringkas */}
            <p className="text-neutral-500 text-xs md:text-sm font-light leading-relaxed mt-4 md:mt-6 pr-0 md:pr-4">
              Lebih dari sekadar kendaraan, Jaecoo adalah pernyataan visi masa depan mengenai mobilitas yang tangguh, cerdas, dan tanpa kompromi.
            </p>
          </div>

          {/* SISI KANAN: PREMIUM VERTICAL STACK */}
          <div className="lg:col-span-8 border-t border-neutral-900">
            {items.map((item, index) => (
              <div
                key={item.title}
                // Menurunkan padding vertikal di mobile (py-6) dan meratakan padding horizontal agar rapi
                className="py-6 md:py-10 border-b border-neutral-900 flex flex-col md:flex-row md:items-start justify-between gap-4 md:gap-6 group hover:bg-neutral-900/10 transition-colors duration-500 px-2 md:px-4 -mx-2 md:-mx-4"
              >
                {/* Penomoran & Tag - Ditata sejajar (flex-row) saat mobile dan vertikal/blok di desktop */}
                <div className="flex items-center justify-between md:justify-start gap-4 md:w-1/4">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono text-neutral-600 group-hover:text-emerald-500 transition-colors duration-300">
                      (0{index + 1})
                    </span>
                    {/* Tag hanya muncul mencolok, di mobile ukurannya disesuaikan */}
                    <span className="text-[8px] md:text-[9px] font-bold tracking-widest text-neutral-400 uppercase bg-neutral-900 px-2 py-0.5 md:px-2.5 md:py-1 border border-neutral-800">
                      {item.tag}
                    </span>
                  </div>
                  
                  {/* Dekorasi tanda panah kecil premium yang hanya muncul di mobile sebagai penanda list bisa di-hover/klik */}
                  <div className="md:hidden text-neutral-700 group-hover:text-emerald-400 group-hover:translate-x-1 transition-all duration-300">
                    →
                  </div>
                </div>

                {/* Konten Utama */}
                <div className="md:w-3/4">
                  {/* Skalasi teks judul dari text-base ke text-xl */}
                  <h3 className="text-base md:text-xl font-black uppercase tracking-wider text-white group-hover:text-emerald-400 transition-colors duration-300">
                    {item.title}
                  </h3>
                  {/* Pengondisian margin top dan padding kanan yang pas di mobile */}
                  <p className="text-neutral-400 text-xs md:text-sm font-light leading-relaxed mt-2 md:mt-3 pr-0 md:pr-6">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}