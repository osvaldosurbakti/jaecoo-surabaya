export default function Hero() {
  return (
    <section className="min-h-screen flex items-center px-6 md:px-16 relative overflow-hidden bg-black text-white">
      
      {/* ─── VIDEO BACKGROUND CONTAINER ─── */}
      {/* Ditambahkan select-none dan mematikan pointer-events total agar tidak mengganggu touch-scroll di HP */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none select-none z-0">
        <iframe
          src="https://www.youtube.com/embed/qEfjAK4gVhU?autoplay=1&mute=1&loop=1&playlist=qEfjAK4gVhU&controls=0&rel=0&showinfo=0&iv_load_policy=3&modestbranding=1&playsinline=1"
          title="Get ready for an adventure with the JAECOO J7"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          referrerPolicy="strict-origin-when-cross-origin"
          // Dioptimasi menggunakan kombinasi object-cover & scale untuk memastikan video menutup layar HP maupun Desktop tanpa celah hitam
          className="absolute top-1/2 left-1/2 min-w-full min-h-full w-[177.77vh] h-[56.25vw] -translate-x-1/2 -translate-y-1/2 object-cover scale-125 md:scale-100 opacity-50 md:opacity-60"
        />
      </div>

      {/* ─── OVERLAY GRADIENT (Membuat Teks Tetap Terbaca di HP) ─── */}
      {/* Menggunakan bg-black/50 ke atas di mobile, dan linear gradient di desktop agar transisi video mulus */}
      <div className="absolute inset-0 bg-black/50 md:bg-linear-to-r md:from-black md:via-black/70 md:to-transparent z-1" />

      {/* ─── CONTENT CONTAINER ─── */}
      {/* Ditambahkan margin-top kecil untuk kompensasi jika ada mobile navbar */}
      <div className="relative z-10 max-w-3xl mt-12 md:mt-0 w-full">
        <p className="uppercase tracking-[3px] md:tracking-[5px] text-xs md:text-sm text-gray-400 font-medium">
          Premium SUV Experience
        </p>

        {/* Ukuran teks disesuaikan: 4xl di mobile, 5xl di tablet, 7xl di desktop */}
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mt-4 md:mt-5 leading-[1.15] md:leading-tight tracking-tight">
          Discover
          <br />
          The New Era
          <br />
          Of Jaecoo
        </h1>

        <p className="mt-4 md:mt-6 text-sm md:text-base text-gray-300 max-w-xl leading-relaxed">
          Rasakan pengalaman berkendara SUV premium dengan teknologi modern bersama JAECOO Surabaya.
        </p>

        {/* ─── BUTTONS (Mobile Stacked / Desktop Flex) ─── */}
        {/* Di layar HP, tombol akan menumpuk vertikal (flex-col) agar jempol lebih mudah menekan (tappable area lebih besar) */}
        <div className="flex flex-col sm:flex-row gap-3 md:gap-4 mt-8 md:mt-10 w-full sm:w-auto">
          <a
            href="/contact"
            className="bg-white text-black px-7 py-3.5 rounded-full font-semibold hover:bg-gray-200 transition-colors text-center text-sm md:text-base shadow-lg"
          >
            Booking Test Drive
          </a>

          <a
            href="cars"
            className="border border-white/40 px-7 py-3.5 rounded-full hover:bg-white/10 transition-colors text-center text-sm md:text-base backdrop-blur-xs"
          >
            Explore Cars
          </a>
        </div>
      </div>

    </section>
  );
}