"use client";

import { useState } from "react";
import { Calendar, Check } from "lucide-react";
import { cars } from "@/data/cars";
import { salesProfile } from "@/data/sales";

export default function TestDriveForm() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    car: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const text = `Halo ${salesProfile.name}, saya ingin menjadwalkan Test Drive unit Jaecoo.

Nama Lengkap:
${form.name}

Nomor WhatsApp:
${form.phone}

Model Unit:
${form.car}

Pesan Tambahan:
${form.message || "-"}
`;

    const whatsappUrl = `${salesProfile.whatsapp}?text=${encodeURIComponent(text)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    // Menyelaraskan padding, border-t, dan background warna agar identik dengan Location.tsx
    <section id="test-drive" className="bg-neutral-950 border-t border-neutral-900/60 relative">
      <div className="py-20 px-6 md:px-12 w-full relative overflow-hidden h-full flex flex-col justify-between">
        {/* Efek Cahaya Latar Belakang Tipis */}
        <div className="absolute top-0 right-10 w-72 h-72 bg-emerald-500/2 blur-[100px] rounded-full pointer-events-none" />

        {/* ATAS: INFORMASI TEXT */}
        <div className="relative z-10 w-full mb-12">
          <div className="flex items-center gap-2 mb-4">
            <span className="h-px w-6 bg-emerald-500 block" />
            <span className="text-[10px] font-bold tracking-[5px] text-emerald-400 uppercase">
              Exclusive Experience
            </span>
          </div>

          <h2 className="text-3xl md:text-5xl font-light uppercase tracking-tight text-white leading-none">
            Book A <br />
            <span className="font-black text-transparent bg-clip-text bg-linear-to-r from-neutral-100 to-neutral-400">
              Private Test Drive
            </span>
          </h2>

          <p className="text-neutral-500 text-xs md:text-sm font-light leading-relaxed mt-6 max-w-xl">
            Rasakan langsung performa mekanis superior dan kecerdasan kabin premium Jaecoo. Isi formulir reservasi di bawah ini untuk mengatur waktu uji kemudi eksklusif Anda.
          </p>
        </div>

        {/* BAWAH: PREMIUM MINIMALIST FORM */}
        <div className="relative group w-full mt-auto">
          {/* Decorative Corner Accents - Identik dengan aksen peta di Location.tsx */}
          <div className="absolute -top-2 -left-2 w-4 h-4 border-t border-l border-neutral-800 group-hover:border-emerald-500/40 transition-colors duration-500" />
          <div className="absolute -bottom-2 -right-2 w-4 h-4 border-b border-r border-neutral-800 group-hover:border-emerald-500/40 transition-colors duration-500" />

          {/* Mengubah rounded-3xl menjadi kotak tajam (rounded-none) yang elegan */}
          <form
            onSubmit={handleSubmit}
            className="border border-neutral-900 bg-neutral-900/10 p-5 md:p-6 rounded-none space-y-4 backdrop-blur-xs"
          >
            {/* Input Nama */}
            <div className="relative">
              <input
                required
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Nama Lengkap"
                className="w-full bg-neutral-950/60 border border-neutral-900 focus:border-neutral-700 text-neutral-200 text-xs md:text-sm px-4 py-3.5 outline-none rounded-none transition-all placeholder:text-neutral-600 font-light"
              />
            </div>

            {/* Input Nomor Telepon */}
            <div className="relative">
              <input
                required
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="Nomor WhatsApp (Contoh: 081234567xxx)"
                className="w-full bg-neutral-950/60 border border-neutral-900 focus:border-neutral-700 text-neutral-200 text-xs md:text-sm px-4 py-3.5 outline-none rounded-none transition-all placeholder:text-neutral-600 font-light"
              />
            </div>

            {/* Select Pilihan Mobil */}
            <div className="relative">
              <select
                required
                name="car"
                value={form.car}
                onChange={handleChange}
                className="w-full bg-neutral-950/60 border border-neutral-900 focus:border-neutral-700 text-neutral-300 text-xs md:text-sm px-4 py-3.5 outline-none rounded-none transition-all font-light appearance-none cursor-pointer"
              >
                <option value="" className="bg-neutral-950 text-neutral-600">
                  Pilih Model Jaecoo
                </option>
                {cars.map((car) => (
                  <option key={car.id} value={car.name} className="bg-neutral-950 text-neutral-300">
                    {car.name}
                  </option>
                ))}
              </select>
              {/* Custom Arrow indicator untuk menggantikan default arrow select browser */}
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-neutral-600">
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>

            {/* Textarea Pesan */}
            <div className="relative">
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Pesan Tambahan (Rencana waktu kunjung, pertanyaan skema kredit, dsb)"
                rows={3} // Menurunkan dari 5 ke 3 agar seimbang tinggi kotaknya dengan map di sebelah
                className="w-full bg-neutral-950/60 border border-neutral-900 focus:border-neutral-700 text-neutral-200 text-xs md:text-sm px-4 py-3.5 outline-none rounded-none transition-all placeholder:text-neutral-600 font-light resize-none"
              />
            </div>

            {/* Tombol Submit Premium */}
            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-3 bg-white hover:bg-emerald-500 text-black px-6 py-3.5 text-xs font-black uppercase tracking-[2px] transition-all duration-300 rounded-none group cursor-pointer"
            >
              <Calendar size={13} className="text-black" />
              Book Test Drive
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}