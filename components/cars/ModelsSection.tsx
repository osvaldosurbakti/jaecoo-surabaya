import { cars } from "@/data/cars";
import Image from "next/image";
import Link from "next/link";

export default function ModelsSection() {
  return (
    <section id="models" className="py-24 px-8 md:px-16 bg-neutral-950 text-white scroll-mt-20">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="h-px w-6 bg-emerald-500"></span>
              <p className="text-xs uppercase tracking-[4px] text-emerald-400 font-semibold">
                Intelligence Premium SUV
              </p>
            </div>
            <h2 className="text-4xl md:text-5xl font-light uppercase tracking-tight">
              Our <strong className="font-extrabold text-transparent bg-clip-text bg-linear-to-r from-white to-gray-400">Lineup Models</strong>
            </h2>
          </div>
          <p className="text-gray-400 max-w-md text-sm font-light leading-relaxed">
            Daftar harga resmi OTR Jaecoo Surabaya. Dapatkan penawaran eksklusif dan jadwalkan uji kemudi langsung.
          </p>
        </div>

        {/* Grid Model */}
        <div className="grid md:grid-cols-2 gap-10">
          {cars.map((car) => {
            // Logika untuk menampilkan harga (jika 1 varian tampilkan langsung, jika 2 varian tampilkan rentang harganya)
            const standardPriceText = car.prices.length > 1 
              ? `${car.prices[0].formatted} - ${car.prices[1].formatted}`
              : car.prices[0].formatted;

            return (
              <div
                key={car.id}
                className="group relative bg-neutral-900/40 border border-neutral-800/80 hover:border-neutral-700 transition-all duration-500 flex flex-col justify-between overflow-hidden"
              >
                
                {/* Bagian Atas: Kategori, Nama, & Harga Resmi */}
                <div className="p-8 pb-0 z-20">
                  <div className="flex justify-between items-start gap-2">
                    <span className="text-[10px] font-bold tracking-[3px] text-emerald-400 uppercase bg-emerald-500/10 px-2.5 py-1">
                      {car.category}
                    </span>
                    {/* Tampilan Varian info kecil jika ada beberapa tipe */}
                    {car.prices.length > 1 && (
                      <span className="text-[10px] text-gray-500 uppercase tracking-wider">
                        {car.prices.length} Variants Available
                      </span>
                    )}
                  </div>

                  <h3 className="text-3xl md:text-4xl font-extrabold mt-4 tracking-tight uppercase">
                    {car.name}
                  </h3>

                  {/* INFO HARGA SEBAGAIPENUNJANG UTAMA */}
                  <div className="mt-2 flex flex-col">
                    <span className="text-xs text-gray-500 uppercase tracking-wider">Mulai Dari</span>
                    <span className="text-xl font-bold text-transparent bg-clip-text bg-linear-to-r from-emerald-400 to-teal-200">
                      {standardPriceText}
                    </span>
                  </div>

                  <p className="text-gray-400 mt-3 text-sm font-light line-clamp-2 leading-relaxed">
                    {car.shortDescription}
                  </p>
                </div>

                {/* Bagian Tengah: Visual Mobil */}
                <div className="relative h-64 md:h-72 w-full overflow-hidden my-4">
                  <Image
                    src={car.image}
                    alt={car.name}
                    fill
                    sizes="(max-w-768px) 100vw, 50vw"
                    className="object-contain p-4 group-hover:scale-103 transition-transform duration-700 ease-out"
                  />
                </div>

                {/* Bagian Bawah: Spek Kunci & Tombol Kembar */}
                <div className="p-8 pt-0 z-20 w-full">
                  
                  {/* Grid Spek Singkat */}
                  <div className="grid grid-cols-3 gap-2 py-4 my-2 border-t border-b border-neutral-800/60 text-center">
                    <div>
                      <p className="text-[9px] text-neutral-500 uppercase tracking-wider">Powertrain</p>
                      <p className="text-xs font-semibold mt-1 text-neutral-300 truncate">{car.engineType}</p>
                    </div>
                    <div className="border-l border-neutral-800">
                      <p className="text-[9px] text-neutral-500 uppercase tracking-wider">Drive Mode</p>
                      <p className="text-xs font-semibold mt-1 text-neutral-300 truncate">{car.driveType}</p>
                    </div>
                    <div className="border-l border-neutral-800">
                      <p className="text-[9px] text-neutral-500 uppercase tracking-wider">Transmission</p>
                      <p className="text-xs font-semibold mt-1 text-neutral-300 truncate">{car.transmission}</p>
                    </div>
                  </div>

                  {/* PERUBAHAN TOMBOL: SESUAI REQUEST UTAMA WEB JAECOO */}
                  <div className="mt-6 grid grid-cols-2 gap-4">
                    <a
                      href={`https://wa.me/?text=Halo%20Jaecoo%20Surabaya,%20saya%20ingin%20menjadwalkan%20Test%20Drive%20untuk%20${encodeURIComponent(car.name)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-transparent text-white hover:bg-white hover:text-black border border-neutral-700 hover:border-white py-3 rounded-none text-center text-xs font-bold uppercase tracking-wider transition-all duration-300"
                    >
                      Test Drive
                    </a>
                    <Link
                      href={`/cars/${car.slug}`}
                      className="bg-white text-black hover:bg-neutral-800 hover:text-white border border-white hover:border-neutral-800 py-3 rounded-none text-center text-xs font-bold uppercase tracking-wider transition-all duration-300"
                    >
                      Learn More
                    </Link>
                  </div>

                </div>

                {/* Efek Glow Tipis pada Hover */}
                <div className="absolute inset-0 bg-linear-to-b from-transparent to-emerald-950/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}