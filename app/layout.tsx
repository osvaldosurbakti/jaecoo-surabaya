import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import "./globals.css";

// 1. Import file keyword yang tadi kamu buat
import { SEO_KEYWORDS, SEO_DATA } from "./config/seo.config"; 

// 2. Gunakan datanya di objek metadata bawaan Next.js
export const metadata: Metadata = {
  metadataBase: new URL("https://jaecoojatim.id"), // Menggunakan domain asli websitemu
  title: SEO_DATA.title,
  description: SEO_DATA.description,
  keywords: SEO_KEYWORDS, // <-- Memanggil array keyword dari file eksternal
  openGraph: {
    title: SEO_DATA.title,
    description: SEO_DATA.description,
    url: SEO_DATA.url,
    siteName: "Jaecoo Jatim",
    images: [
      {
        url: SEO_DATA.image,
        width: 1200,
        height: 630,
        alt: "Jaecoo Surabaya",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className="scroll-smooth" data-scroll-behavior="smooth">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}