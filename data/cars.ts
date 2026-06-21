export interface CarPrice {
  variant: string;
  amount: number;
  formatted: string;
}

export interface CarSpecs {
  engine: string;
  transmission: string;
  drive: string;
  seats: string;
  totalPower?: string;
  totalTorque?: string;
  acceleration?: string;
  batteryCapacity?: string;
  pureEvRange?: string;
  combinedRange?: string;
  charging?: string;
}

export interface CarType {
  id: number;
  slug: string;
  name: string;
  category: string;
  shortDescription: string;
  description: string;
  image: string;
  features: string[];
  engineType: string;
  driveType: string;
  transmission: string;
  prices: CarPrice[];
  specs: CarSpecs;
  brochureUrl?: string; 
  videoEmbedId?: string; // Tambahkan ini untuk menyimpan ID video YouTube
}

export const cars: CarType[] = [
  {
    id: 1,
    slug: "jaecoo-j8-shs-p-ardis",
    name: "Jaecoo J8 SHS-P ARDIS",
    category: "Premium Hybrid SUV",
    shortDescription:
      "Flagship SUV dengan teknologi SHS Plug-in Hybrid dan sistem ARDIS cerdas untuk kenyamanan berkendara kasta tertinggi.",
    description:
      "Jaecoo J8 SHS-P ARDIS menghadirkan kombinasi performa buas, kemewahan kabin layaknya jet pribadi, dan teknologi pintar dalam sebuah SUV premium dengan kabin luas serta fitur keselamatan modern.",
    image: "/cars/j8-shs-p-ardis.jpg",
    features: [
      "SHS Plug-in Hybrid Technology (Triple-Engine Setup)",
      "ARDIS (All-Road Drive Intelligent System) dengan 7 Mode Berkendara",
      "CDC (Continuous Damping Control) Magnetic Suspension",
      "Kabin Mewah 3-Baris dengan Jok Nappa Leather & Pijat otomatis",
      "24.6-inch Curved Dual Smart Screen",
      "14-Speaker Sony Premium Surround Sound System",
    ],
    engineType: "PHEV (1.5T + Dual Motor)",
    driveType: "AWD (ARDIS)",
    transmission: "3-Speed DHT",
    prices: [
      { variant: "SHS-P ARDIS", amount: 838500000, formatted: "Rp 838.500.000" }
    ],
    specs: {
      engine: "1.5L Turbo Gasoline Direct Injection + Dual Electric Motors",
      transmission: "3-Speed Dedicated Hybrid Transmission (DHT)",
      drive: "All-Wheel Drive (AWD) dengan Vector Control",
      seats: "7 Seats (Premium Executive Layout)",
      totalPower: "605 Hp / 445 kW",
      totalTorque: "915 Nm",
      acceleration: "0-100 km/h dalam 4.3 Detik",
      batteryCapacity: "34.4 kWh",
      pureEvRange: "Up to 160 Km",
      combinedRange: "Up to 1,300+ Km",
      charging: "Mendukung DC Fast Charging (30% ke 80% dalam 20 menit)",
    },
    brochureUrl: "/brochure/Flyer-J8-Ardis-SHS-P.pdf",
    videoEmbedId: "BQleT9cL9QQ", // JAECOO J8 SHS ARDIS (Bisa Jadi Genset)
  },
  {
    id: 2,
    slug: "jaecoo-j8-ardis",
    name: "Jaecoo J8 ARDIS",
    category: "Luxury SUV",
    shortDescription:
      "SUV premium bensin dengan desain anggun, mesin turbo bertenaga, dan kemewahan interior tanpa batas.",
    description:
      "Jaecoo J8 ARDIS menawarkan kenyamanan kelas premium dengan teknologi pintar, ruang kabin luas 7-seater, dan fitur keselamatan mutakhir untuk perjalanan modern.",
    image: "/cars/j8-ardis.jpg",
    features: [
      "Powerful 2.0 TGDI Engine",
      "ARDIS (All-Road Drive Intelligent System)",
      "Premium Leather Seats with Ventilation",
      "Sony Premium Audio System",
      "Advanced Driver Assistance System (ADAS)",
    ],
    engineType: "2.0 TGDI Bensin",
    driveType: "AWD (ARDIS)",
    transmission: "7-Speed DCT",
    prices: [
      { variant: "ARDIS", amount: 710400000, formatted: "Rp 710.400.000" }
    ],
    specs: {
      engine: "2.0L Turbo Gasoline Direct Injection",
      transmission: "7-Speed Dual-Clutch Transmission (DCT)",
      drive: "All-Wheel Drive (AWD)",
      seats: "7 Seats",
      totalPower: "249 Hp",
      totalTorque: "385 Nm",
      acceleration: "0-100 km/h dalam 7.9 Detik",
    },
    brochureUrl: "/brochure/Flyer-J8-Ardis.pdf",
    videoEmbedId: "JV7gKDa_ylM", // AJAK JEJE DAN OM MOBI BERTUALANG JAECOO J8 AWD
  },
  {
    id: 3,
    slug: "jaecoo-j5-ev",
    name: "Jaecoo J5 EV",
    category: "Electric SUV",
    shortDescription:
      "SUV full elektrik (BEV) modern dengan desain futuristik, lincah, dan ramah lingkungan untuk mobilitas urban masa depan.",
    description:
      "Jaecoo J5 EV menghadirkan pengalaman berkendara elektrik murni dengan efisiensi energi yang tinggi, desain stylish, kabin minimalis modern, dan asisten berkendara pintar.",
    image: "/cars/j5-ev.jpg",
    features: [
      "100% Battery Electric Vehicle (Zero Emission)",
      "Futuristic Eco-Friendly Design",
      "Intelligent Voice Control & Smart Connectivity",
      "High-Density Battery Safety System",
    ],
    engineType: "BEV (Electric Motor)",
    driveType: "FWD",
    transmission: "Single Speed",
    prices: [
      { variant: "BEV", amount: 292500000, formatted: "Rp 292.500.000" },
      { variant: "BEV Premium", amount: 322500000, formatted: "Rp 322.500.000" }
    ],
    specs: {
      engine: "Permanent Magnet Synchronous Motor",
      transmission: "Single-Speed Automatic",
      drive: "Front-Wheel Drive (FWD)",
      seats: "5 Seats",
      totalPower: "201 Hp",
      totalTorque: "310 Nm",
      pureEvRange: "Up to 420 Km",
      charging: "DC Fast Charging (30% - 80% dalam 28 menit)",
    },
    videoEmbedId: "3IWzGwAowtI", // JAECOO J5 EV (Mirip Evoque)
  },
  {
    id: 4,
    slug: "jaecoo-j7",
    name: "Jaecoo J7",
    category: "Urban Off-Road SUV",
    shortDescription:
      "SUV tangguh dengan pilihan opsi mesin Super Hybrid System (SHS) yang hemat energi atau performa All-Wheel Drive (AWD).",
    description:
      "Jaecoo J7 menawarkan keseimbangan sempurna antara mobilitas kota yang pintar dan ketangguhan semi off-road. Tersedia dalam varian Plug-in Hybrid (SHS) untuk efisiensi radikal, serta varian bensin mekanis AWD untuk cengkeraman medan tangguh.",
    image: "/cars/j7-shs-p.jpg",
    features: [
      "Pilihan Mesin SHS-P (Hybrid) atau AWD Bensin",
      "14.8-inch Center Console Smart Display",
      "Military-Grade High Strength Steel Body",
      "Panoramic Sunroof & Tech-Rich Cabin",
    ],
    engineType: "PHEV / 1.6T Petrol",
    driveType: "FWD / AWD",
    transmission: "DHT / 7DCT",
    prices: [
      { variant: "SHS (Hybrid)", amount: 520400000, formatted: "Rp 520.400.000" },
      { variant: "AWD (Bensin)", amount: 570400000, formatted: "Rp 570.400.000" }
    ],
    specs: {
      engine: "1.5T Plug-in Hybrid (SHS) / 1.6L Turbo Petrol Engine",
      transmission: "Dedicated Hybrid Transmission (DHT) / 7-Speed DCT",
      drive: "Front-Wheel Drive (FWD) / All-Wheel Drive (AWD)",
      seats: "5 Seats",
      totalPower: "Up to 342 Hp (Varian SHS)",
      totalTorque: "Up to 525 Nm (Varian SHS)",
      pureEvRange: "Up to 88 Km (Varian SHS)",
      combinedRange: "Up to 1,200 Km (Varian SHS)",
    },
    videoEmbedId: "gZHqEnhzON0", // In Depth Tour Jaecoo J7 AWD #IIMS2025
  },
];