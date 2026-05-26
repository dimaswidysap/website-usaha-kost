import type { Metadata } from "next";
import { Home } from "lucide-react";
import ImageSlider from "@/components/ImageSlider/ImageSlider";
import { WhatsApp } from "@/components/icons/whatsApp";
import Image from "next/image";
import Footer from "@/components/footer/footer";
import {
  MapPin,
  Wifi,
  Droplets,
  Zap,
  Wind,
  Car,
  Toilet,
  Table,
  Bed,
  Sofa,
} from "lucide-react";

export const metadata: Metadata = {
  title:
    "Kost Jiwan Madiun – Bu Wiji Kost | Fasilitas Lengkap, Harga Terjangkau",
  description:
    "Cari kost di Jiwan Madiun? Bu Wiji Kost menawarkan kamar bersih & strategis dengan WiFi gratis, listrik token gratis, kamar mandi dalam, dan parkir luas. 2 kamar tersedia — hubungi sekarang!",
  keywords: [
    "kost jiwan",
    "kost madiun",
    "kost jiwan madiun",
    "kost dekat alun-alun madiun",
    "bu wiji kost",
  ],
  openGraph: {
    title: "Kost Jiwan Madiun – Bu Wiji Kost",
    description:
      "Kamar kost nyaman di Jiwan, Madiun. WiFi, listrik & air gratis, kamar mandi dalam. 2 kamar tersedia!",
    type: "website",
  },
};

const amenities = [
  {
    icon: <Wifi size={22} />,
    title: "WiFi Kecepatan Tinggi",
    desc: "Internet fiber optik 20 Mbps.",
  },
  {
    icon: <Droplets size={22} />,
    title: "Air Bersih Gratis",
    desc: "Pasokan air ditanggung pemilik kost.",
  },
  {
    icon: <Zap size={22} />,
    title: "Listrik Token Gratis",
    desc: "Listrik token ditanggung pemilik kost.",
  },
  {
    icon: <Wind size={22} />,
    title: "Kipas Angin",
    desc: "Setiap kamar dilengkapi satu kipas angin.",
  },
  {
    icon: <Car size={22} />,
    title: "Parkir Luas",
    desc: "Area parkir motor luas.",
  },
  {
    icon: <Toilet size={22} />,
    title: "Kamar Mandi Dalam",
    desc: "Setiap kamar dilengkapi kamar mandi dalam.",
  },
  {
    icon: <Table size={22} />,
    title: "Meja Belajar",
    desc: "Setiap kamar dilengkapi meja belajar.",
  },
  {
    icon: <Bed size={22} />,
    title: "Kasur Springbed",
    desc: "Setiap kamar dilengkapi tempat tidur yang nyaman.",
  },
  {
    icon: <Sofa size={22} />,
    title: "Kursi",
    desc: "Setiap kamar dilengkapi kursi.",
  },
];

export default function Beranda() {
  return (
    <main className="w-full bg-primary overflow-hidden">
      {/* ════════════════════════════════════════════
          HERO — Gambar utama + CTA
      ════════════════════════════════════════════ */}
      <header className="w-full relative h-screen" role="banner">
        {/* Background image slider */}
        <figure className="absolute inset-0 w-full h-full" aria-hidden="true">
          <div className="w-full h-full relative overflow-hidden">
            <ImageSlider />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent" />
          </div>
        </figure>

        {/* Hero content */}
        <div className="relative z-10 h-full w-full flex flex-col justify-end pb-20 px-8 md:px-16 max-w-7xl mx-auto">
          {/* Availability badge */}
          <p className="mb-5">
            <span className="inline-flex items-center gap-2 bg-background/10 backdrop-blur-sm border border-white/20 text-white text-xs font-semibold px-3 py-1.5 rounded-full font-montserrat uppercase tracking-[0.15em]">
              <span className="inline-flex h-2 w-2 rounded-full bg-primary animate-ping" />
              <span className="inline-flex h-2 w-2 rounded-full bg-primary absolute" />
              2 Kamar Tersedia
            </span>
          </p>

          {/* Brand identity */}
          <div className="flex items-center gap-3 mb-3">
            <div
              className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-primary/20 backdrop-blur-sm border border-primary/40 flex items-center justify-center"
              aria-hidden="true"
            >
              <Home className="h-5 w-5 md:h-6 md:w-6 text-primary" />
            </div>
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-white/60 font-montserrat">
              Tempat Kost
            </span>
          </div>

          {/* ── H1: satu per halaman, mengandung kata kunci utama ── */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black font-poppins text-white leading-[0.95] mb-4">
            Bu Wiji
            <br />
            <span className="text-primary">Kost Jiwan</span>
          </h1>

          <p className="text-white/60 text-sm md:text-base font-montserrat mb-8 max-w-sm leading-relaxed">
            Hunian nyaman, bersih, dan strategis di Jiwan, Madiun. Fasilitas
            lengkap untuk kehidupan kost yang menyenangkan.
          </p>

          {/* CTA WhatsApp */}
          <a
            href="https://wa.me/+6282264326766"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Hubungi Bu Wiji Kost via WhatsApp"
            className="
              group inline-flex items-center gap-2.5
              bg-background text-primary-foreground
              hover:bg-background/90
              font-bold text-sm font-montserrat
              px-6 py-3.5 rounded-2xl
              w-fit transition-all duration-200
              shadow-lg shadow-background/30
              hover:shadow-primary/50 hover:scale-[1.02]
            "
          >
            <WhatsApp className="h-4 w-4 md:h-5 md:w-5" />
            Hubungi Saya
          </a>
        </div>

        {/* Bottom curve — menyambung ke section berikutnya */}
        <div
          className="absolute bottom-0 left-0 right-0 h-5 bg-primary rounded-t-[5rem] z-20"
          aria-hidden="true"
        />
      </header>

      {/* ════════════════════════════════════════════
          KONTEN UTAMA — Lokasi & Fasilitas
      ════════════════════════════════════════════ */}
      <div className="w-full max-w-7xl mx-auto font-montserrat">
        <article className="w-full bg-background rounded-t-[5rem] overflow-hidden">
          {/* ── LOKASI ───────────────────────────────── */}
          <section
            className="px-8 md:px-16 pt-16 pb-12"
            aria-labelledby="heading-lokasi"
          >
            <header className="mb-6">
              <p className="flex items-center gap-2 mb-2">
                <MapPin size={16} className="text-primary" aria-hidden="true" />
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                  Lokasi
                </span>
              </p>
              {/* ── H2: sub-judul lokasi ── */}
              <h2
                id="heading-lokasi"
                className="text-3xl md:text-4xl font-bold text-foreground mb-1"
              >
                Temukan Kost Jiwan Kami
              </h2>
            </header>

            {/* Peta lokasi */}
            <a
              href="https://www.google.com/maps/search/?api=1&query=-7.623736,111.492725"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Buka lokasi Bu Wiji Kost di Google Maps"
              className="inline-flex w-full h-[420px] rounded-3xl overflow-hidden border border-border shadow-sm relative"
            >
              <figure className="w-full h-full relative">
                <Image
                  src="assets/homeAssets/location.png"
                  alt="Peta lokasi Bu Wiji Kost di Jl. Karyawati, Jiwan, Madiun"
                  fill
                  style={{ objectFit: "cover" }}
                  unoptimized
                />
                <figcaption className="absolute z-50 inset-0 pointer-events-none flex items-center justify-center">
                  <span className="bg-accent text-primary-foreground rounded-full px-4 py-2 text-sm font-semibold shadow-lg flex items-center gap-1.5">
                    <MapPin size={14} aria-hidden="true" />
                    Lokasi Kost
                  </span>
                </figcaption>
              </figure>
            </a>

            {/* Alamat */}
            <address className="not-italic mt-4 flex flex-wrap gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-1.5">
                <MapPin size={13} className="shrink-0" aria-hidden="true" />
                Jl. Karyawati, Jiwan, Kec. Jiwan, Madiun
              </span>
              <span className="text-border" aria-hidden="true">
                ·
              </span>
              <span>5 menit dari Alun-Alun Kota Madiun</span>
            </address>
          </section>

          {/* Divider */}
          <hr className="mx-8 md:mx-16 border-border" />

          {/* ── FASILITAS ─────────────────────────────── */}
          <section
            className="px-8 md:px-16 py-16"
            aria-labelledby="heading-fasilitas"
          >
            <header className="mb-10">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                Fasilitas
              </span>
              {/* ── H2: sub-judul fasilitas ── */}
              <h2
                id="heading-fasilitas"
                className="text-3xl md:text-4xl font-bold text-foreground mt-1"
              >
                Yang Anda Dapatkan
              </h2>
              <p className="text-muted-foreground text-sm mt-2 max-w-lg">
                Semua fasilitas berikut sudah termasuk dalam harga sewa bulanan
                tanpa biaya tambahan.
              </p>
            </header>

            {/* Grid fasilitas */}
            <ul
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 list-none p-0 m-0"
              role="list"
            >
              {amenities.map((item, i) => (
                <li
                  key={i}
                  className="
                    group relative flex flex-col gap-3 p-6
                    rounded-2xl border border-border bg-card
                    hover:border-primary/40 hover:shadow-md
                    transition-all duration-200
                  "
                >
                  {/* Icon */}
                  <div
                    className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0 group-hover:bg-accent group-hover:text-primary-foreground transition-colors duration-200"
                    aria-hidden="true"
                  >
                    {item.icon}
                  </div>

                  {/* ── H3: nama fasilitas ── */}
                  <div>
                    <h3 className="font-semibold text-foreground text-sm leading-snug mb-1">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground text-xs leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </section>
        </article>
      </div>

      {/* Footer */}
      <Footer />
    </main>
  );
}
