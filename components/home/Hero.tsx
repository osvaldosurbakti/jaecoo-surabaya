import Image from 'next/image';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center px-6 md:px-16 relative overflow-hidden bg-black text-white">
      
      {/* ─── VIDEO BACKGROUND CONTAINER ─── */}
      {/* 1. Menambahkan preload="none" agar video tidak membebani LCP saat pertama kali dimuat */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none select-none z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="none" // <-- Perbaikan Performance: Mencegah video memblokir loading awal
          className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto -translate-x-1/2 -translate-y-1/2 object-cover opacity-50 md:opacity-60"
        >
          <source src="/videos/jaecoo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* ─── OVERLAY GRADIENT ─── */}
      <div className="absolute inset-0 bg-black/50 md:bg-linear-to-r md:from-black md:via-black/70 md:to-transparent z-1" />

      {/* ─── CONTENT CONTAINER ─── */}
      <div className="relative z-10 max-w-3xl mt-12 md:mt-0 w-full">
        {/* Perbaikan Aksesibilitas: Mengubah text-gray-400 ke text-gray-300 agar kontras warna lebih tinggi */}
        <p className="uppercase tracking-[3px] md:tracking-[5px] text-xs md:text-sm text-gray-300 font-medium">
          Premium SUV Experience
        </p>

        {/* 2. Perbaikan SEO: Memasukkan keyword lokal "Surabaya" ke dalam H1 agar Googlebot langsung mengindeksnya */}
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mt-4 md:mt-5 leading-[1.15] md:leading-tight tracking-tight">
          Discover
          <br />
          The New Era
          <br />
          Of Jaecoo <span className="text-gray-300 md:block text-3xl sm:text-4xl md:text-5xl font-semibold">Surabaya</span>
        </h1>

        <p className="mt-4 md:mt-6 text-sm md:text-base text-gray-300 max-w-xl leading-relaxed">
          Rasakan pengalaman berkendara SUV premium dengan teknologi modern bersama JAECOO Surabaya. Dapatkan penawaran harga, promo, dan test drive resmi di Jawa Timur.
        </p>

        {/* ─── BUTTONS ─── */}
        <div className="flex flex-col sm:flex-row gap-3 md:gap-4 mt-8 md:mt-10 w-full sm:w-auto">
          <a
            href="/contact"
            className="bg-white text-black px-7 py-3.5 rounded-full font-semibold hover:bg-gray-200 transition-colors text-center text-sm md:text-base shadow-lg"
          >
            Booking Test Drive
          </a>

          <a
            href="/cars"
            className="border border-white/40 px-7 py-3.5 rounded-full hover:bg-white/10 transition-colors text-center text-sm md:text-base backdrop-blur-xs"
          >
            Explore Cars
          </a>
        </div>
      </div>

    </section>
  );
}