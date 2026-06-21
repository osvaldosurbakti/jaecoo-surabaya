"use client";

import { CarType } from "@/data/cars";

export default function CarTechSpecs({ car }: { car: CarType }) {
  return (
    <div className="grid md:grid-cols-2 gap-16">
      {/* Fitur Unggulan */}
      <div className="bg-neutral-900/20 p-6 md:p-8 border border-neutral-900">
        <h2 className="text-lg font-bold uppercase tracking-wider mb-6 pb-3 border-b border-neutral-800 flex items-center gap-2">
          <span className="h-1.5 w-1.5 bg-emerald-500 block"></span> Highlight Features
        </h2>
        <ul className="space-y-4">
          {car.features.map((feature: string, index: number) => (
            <li key={index} className="flex items-start gap-3 text-neutral-300 font-light text-sm md:text-base">
              <span className="text-emerald-400 font-bold mt-0.5 text-xs">✓</span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Tabel Spesifikasi */}
      <div className="p-2">
        <h2 className="text-lg font-bold uppercase tracking-wider mb-6 pb-3 border-b border-neutral-800 flex items-center gap-2">
          <span className="h-1.5 w-1.5 bg-neutral-400 block"></span> Technical Specifications
        </h2>
        <div className="space-y-2 text-sm">
          <div className="flex justify-between items-center py-3 border-b border-neutral-900">
            <span className="text-neutral-500 uppercase tracking-wider text-[11px]">Engine / Powertrain</span>
            <span className="font-medium text-right max-w-xs text-neutral-200">{car.specs.engine}</span>
          </div>
          <div className="flex justify-between items-center py-3 border-b border-neutral-900">
            <span className="text-neutral-500 uppercase tracking-wider text-[11px]">Transmission</span>
            <span className="font-medium text-right text-neutral-200">{car.specs.transmission}</span>
          </div>
          <div className="flex justify-between items-center py-3 border-b border-neutral-900">
            <span className="text-neutral-500 uppercase tracking-wider text-[11px]">Drivetrain</span>
            <span className="font-medium text-right text-neutral-200">{car.specs.drive}</span>
          </div>
          <div className="flex justify-between items-center py-3 border-b border-neutral-900">
            <span className="text-neutral-500 uppercase tracking-wider text-[11px]">Seating Capacity</span>
            <span className="font-medium text-right text-neutral-200">{car.specs.seats}</span>
          </div>
          {car.specs.combinedRange && (
            <div className="flex justify-between items-center py-3 border-b border-neutral-900">
              <span className="text-neutral-500 tracking-wider text-[11px] uppercase">Total Combined Range</span>
              <span className="font-semibold text-emerald-400 text-right">{car.specs.combinedRange}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}