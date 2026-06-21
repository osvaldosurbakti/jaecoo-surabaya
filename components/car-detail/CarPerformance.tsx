"use client";

import { CarType } from "@/data/cars";

export default function CarPerformance({ car }: { car: CarType }) {
  if (!car.specs.totalPower) return null;

  return (
    <div className="border border-neutral-900 bg-neutral-900/10 backdrop-blur-md p-8 md:p-10 my-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-center relative">
      <div className="absolute -top-px left-8 right-8 h-px bg-linear-to-r from-transparent via-neutral-700 to-transparent" />
      <div>
        <p className="text-[10px] text-neutral-500 uppercase tracking-widest mb-2 font-medium">Max Output</p>
        <p className="text-xl md:text-3xl font-black text-emerald-400">{car.specs.totalPower}</p>
      </div>
      <div className="border-l border-neutral-900">
        <p className="text-[10px] text-neutral-500 uppercase tracking-widest mb-2 font-medium">Max Torque</p>
        <p className="text-xl md:text-3xl font-black text-neutral-100">{car.specs.totalTorque}</p>
      </div>
      <div className="border-l border-neutral-900">
        <p className="text-[10px] text-neutral-500 uppercase tracking-widest mb-2 font-medium">Akselerasi (0-100 km/h)</p>
        <p className="text-xl md:text-3xl font-black text-transparent bg-clip-text bg-linear-to-r from-white via-neutral-200 to-neutral-400">
          {car.specs.acceleration || "N/A"}
        </p>
      </div>
      <div className="border-l border-neutral-900">
        <p className="text-[10px] text-neutral-500 uppercase tracking-widest mb-2 font-medium">EV Driving Range</p>
        <p className="text-xl md:text-3xl font-black text-emerald-400">{car.specs.pureEvRange || "N/A"}</p>
      </div>
    </div>
  );
}