"use client";

import { CarType } from "@/data/cars";

export default function CarVideo({ car }: { car: CarType }) {
  // Jika mobil tersebut tidak memiliki videoEmbedId, hilangkan section ini secara otomatis
  if (!car.videoEmbedId) return null;

  return (
    <section className="my-20 relative border border-neutral-900 bg-neutral-900/10 backdrop-blur-md p-6 md:p-10">
      <div className="absolute -top-px left-8 right-8 h-px bg-linear-to-r from-transparent via-neutral-800 to-transparent" />
      
      <div className="max-w-5xl mx-auto">
        {/* Header Title Video */}
        <div className="flex items-center gap-3 mb-6">
          <span className="h-2 w-2 bg-emerald-500 animate-pulse block rounded-full" />
          <h2 className="text-xs uppercase tracking-[4px] text-neutral-400 font-bold">
            {car.name} Video Showcase
          </h2>
        </div>

        {/* Responsive Video Wrapper */}
        <div className="relative aspect-video w-full bg-neutral-950 border border-neutral-800 shadow-2xl">
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src={`https://www.youtube.com/embed/${car.videoEmbedId}?rel=0&modestbranding=1`}
            title={`${car.name} Video Review`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
}