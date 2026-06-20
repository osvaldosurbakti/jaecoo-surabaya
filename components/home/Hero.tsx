export default function Hero() {
  return (
    <section className="min-h-screen flex items-center px-8 relative overflow-hidden bg-black text-white">
      
      {/* ─── VIDEO BACKGROUND CONTAINER ─── */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
        <iframe
          // Menambahkan parameter autoplay, loop, mute, playlist, controls, dll agar cocok jadi background
          src="https://www.youtube.com/embed/qEfjAK4gVhU?autoplay=1&mute=1&loop=1&playlist=qEfjAK4gVhU&controls=0&rel=0&showinfo=0&iv_load_policy=3&modestbranding=1"
          title="Get ready for an adventure with the JAECOO J7"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          className="absolute top-1/2 left-1/2 w-screen h-[56.25vw] min-h-screen min-w-[177.77vh] -translate-x-1/2 -translate-y-1/2 object-cover opacity-60"
        />
      </div>

      {/* ─── OVERLAY GRADIENT (Membuat Teks Tetap Terbaca) ─── */}
      <div className="absolute inset-0 bg-linear-to-r from-black via-black/60 to-transparent z-1" />

      {/* ─── CONTENT CONTAINER ─── */}
      <div className="relative z-10 max-w-3xl">
        <p className="uppercase tracking-[5px] text-sm text-gray-400">
          Premium SUV Experience
        </p>

        <h1 className="text-5xl md:text-7xl font-bold mt-5 leading-tight">
          Discover
          <br />
          The New Era
          <br />
          Of Jaecoo
        </h1>

        <p className="mt-6 text-gray-300 max-w-xl">
          Rasakan pengalaman berkendara SUV premium dengan teknologi modern bersama Jaecoo Surabaya.
        </p>

        <div className="flex gap-4 mt-8">
          <a
            href="#contact"
            className="bg-white text-black px-7 py-3 rounded-full font-semibold hover:bg-gray-200 transition-colors"
          >
            Booking Test Drive
          </a>

          <a
            href="cars"
            className="border border-white/40 px-7 py-3 rounded-full hover:bg-white/10 transition-colors"
          >
            Explore Cars
          </a>
        </div>
      </div>

    </section>
  );
}