import type { NextConfig } from "next";

const nextConfig: NextConfig = {
images: {
    // Daftarkan angka 95 di sini agar Next.js mengizinkannya
    qualities: [75,90, 95],
  },};

export default nextConfig;
