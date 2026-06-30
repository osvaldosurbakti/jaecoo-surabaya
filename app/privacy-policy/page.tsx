// app/privacy-policy/page.tsx
import Link from "next/link";

export const metadata = {
  title: "Privacy Policy - Jaecoo Jatim",
  description: "Kebijakan Privasi website resmi Jaecoo Jatim.",
};

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-black text-white py-24 px-6 md:px-12">
      <div className="max-w-4xl mx-auto prose prose-invert">
        <h1 className="text-3xl md:text-5xl font-bold mb-8 text-emerald-500 uppercase tracking-wide">
          Privacy Policy
        </h1>
        <p className="text-gray-400 text-sm mb-6">Terakhir diperbarui: Juni 2026</p>

        <section className="space-y-6 text-gray-300 leading-relaxed font-light">
          <p>
            Selamat datang di <strong>Jaecoo Jatim</strong> (https://jaecoojatim.id). Kami sangat menghargai privasi Anda dan berkomitmen untuk melindungi data pribadi Anda sesuai dengan peraturan perundang-undangan yang berlaku di Indonesia, termasuk Undang-Undang Perlindungan Data Pribadi (UU PDP).
          </p>

          <h2 className="text-xl font-bold mt-8 text-white uppercase tracking-wider">
            1. Informasi yang Kami Kumpulkan
          </h2>
          <p>Kami mengumpulkan informasi dari Anda dengan dua cara:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Informasi yang Anda Berikan Secara Sukarela:</strong> Ketika Anda menghubungi kami melalui WhatsApp atau formulir pemesanan/test drive, kami dapat menerima data berupa nama, nomor telepon, dan informasi kendaraan yang Anda tanyakan.
            </li>
            <li>
              <strong>Informasi yang Dikumpulkan Secara Otomatis:</strong> Kami menggunakan alat analisis pihak ketiga seperti <em>Google Analytics</em> untuk mengumpulkan data standar log internet dan pola perilaku pengunjung secara anonim (seperti jenis browser, lama kunjungan, dan halaman yang diakses).
            </li>
          </ul>

          <h2 className="text-xl font-bold mt-8 text-white uppercase tracking-wider">
            2. Penggunaan Informasi
          </h2>
          <p>Informasi yang kami kumpulkan digunakan untuk keperluan berikut:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Memproses pertanyaan Anda mengenai unit mobil Jaecoo, simulasi kredit, brosur, atau jadual test drive.</li>
            <li>Memberikan pelayanan informasi promosi terbaru seputar Jaecoo di wilayah Surabaya dan Jawa Timur.</li>
            <li>Meningkatkan performa dan kenyamanan navigasi website kami berdasarkan data Google Analytics.</li>
          </ul>

          <h2 className="text-xl font-bold mt-8 text-white uppercase tracking-wider">
            3. Perlindungan dan Berbagi Data
          </h2>
          <p>
            Kami menjamin bahwa <strong>kami tidak akan pernah menjual, menyewakan, atau membagikan data pribadi Anda</strong> kepada pihak ketiga di luar jaringan diler resmi Jaecoo demi kepentingan komersial tanpa izin Anda. Data Anda dijaga kerahasiaannya secara profesional.
          </p>

          <h2 className="text-xl font-bold mt-8 text-white uppercase tracking-wider">
            4. Cookies
          </h2>
          <p>
            Website ini menggunakan kuki (<em>cookies</em>) untuk meningkatkan pengalaman berselancar Anda dan menyediakan data analitik bagi kami untuk kebutuhan optimalisasi iklan (seperti Google Ads & Meta Ads). Anda dapat mengatur browser Anda untuk menolak kuki jika diinginkan.
          </p>

          <h2 className="text-xl font-bold mt-8 text-white uppercase tracking-wider">
            5. Hubungi Kami
          </h2>
          <p>
            Jika Anda memiliki pertanyaan mengenai Kebijakan Privasi ini, Anda dapat menghubungi kami kembali melalui halaman kontak utama kami atau nomor WhatsApp yang tertera di website ini.
          </p>
        </section>

        <div className="mt-12 pt-6 border-t border-neutral-800">
          <Link href="/" className="text-emerald-400 hover:underline text-sm">
            ← Kembali ke Halaman Utama
          </Link>
        </div>
      </div>
    </main>
  );
}