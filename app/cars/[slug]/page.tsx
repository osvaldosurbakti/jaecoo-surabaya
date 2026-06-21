"use client";

import { cars, CarType } from "@/data/cars";
import Link from "next/link";
import { useParams, notFound } from "next/navigation";
import { useEffect, useState } from "react";

// Import komponen hasil pemecahan kita
import CarHero from "@/components/car-detail/CarHero";
import CarPerformance from "@/components/car-detail/CarPerformance";
import CarVideo from "@/components/car-detail/CarVideo";
import CarTechSpecs from "@/components/car-detail/CarTechSpecs";

export default function CarDetailPage() {
  const params = useParams();
  const [isLoaded, setIsLoaded] = useState(false);

  const car = cars.find((c: CarType) => c.slug === params.slug);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  if (!car) {
    notFound();
  }

  return (
    <main className="bg-neutral-950 text-white min-h-screen pt-28 pb-24 px-6 md:px-16 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* TOP NAVIGATION */}
        <div className="mb-12">
          <Link 
            href="/cars" 
            className="text-xs uppercase tracking-[3px] text-neutral-400 hover:text-emerald-400 transition-colors duration-300 flex items-center gap-2 group w-fit"
          >
            <span className="group-hover:-translate-x-1 transition-transform duration-300">←</span> Kembali ke Lini Kendaraan
          </Link>
        </div>

        {/* 1. HERO SHOWCASE COMPONENT */}
        <CarHero car={car} isLoaded={isLoaded} />

        {/* 2. PERFORMANCE HIGHLIGHT GRID */}
        <CarPerformance car={car} />

        {/* 3. CINEMATIC VIDEO SHOWCASE (BARU) */}
        <CarVideo car={car} />

        {/* 4. FITUR UNGGULAN & DETAIL SPESIFIKASI */}
        <CarTechSpecs car={car} />

      </div>
    </main>
  );
}