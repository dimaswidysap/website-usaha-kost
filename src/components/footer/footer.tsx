// Footer — Bu Wiji Kost

import { Home, MapPin, Phone } from "lucide-react";
import { Instagram } from "@/components/icons/instagram";

// TikTok tidak ada di lucide-react, pakai SVG custom
function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.75a4.85 4.85 0 0 1-1.01-.06z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="w-full bg-shadow text-background">
      <div className="max-w-7xl mx-auto px-8 md:px-16">
        {/* ── Main content ── */}
        <div className="py-14 grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-6">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-primary/20 border border-primary/30 flex items-center justify-center">
                <Home className="h-4 w-4 text-primary" />
              </div>
              <span className="text-lg font-black font-poppins tracking-tight">
                Bu Wiji Kost
              </span>
            </div>
            <p className="text-background/50 text-sm font-montserrat leading-relaxed max-w-[220px]">
              Hunian nyaman dan strategis di Madiun. Bersih, aman, dan
              terjangkau.
            </p>

            {/* Social */}
            <div className="flex items-strat gap-3 mt-1 flex-col ">
              <span className="text-background/90 text-sm font-montserrat leading-relaxed">
                Website ini dibuat oleh
              </span>
              <div className="flex gap-2">
                <a
                  href="https://www.instagram.com/dimaswidysaputraa/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="
                  w-9 h-9 rounded-xl border border-background/10
                  bg-background/5 hover:bg-primary hover:border-primary
                  flex items-center justify-center
                  text-background/50 hover:text-primary-foreground
                  transition-all duration-200
                "
                >
                  <Instagram />
                </a>
                <a
                  href="https://www.tiktok.com/@dimaswidysap"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="TikTok"
                  className="
                  w-9 h-9 rounded-xl border border-background/10
                  bg-background/5 hover:bg-primary hover:border-primary
                  flex items-center justify-center
                  text-background/50 hover:text-primary-foreground
                  transition-all duration-200
                "
                >
                  <TikTokIcon className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Kontak */}
          <div className="flex flex-col gap-4">
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-background/40 font-montserrat">
              Kontak
            </h3>
            <ul className="flex flex-col gap-3">
              <li>
                <a
                  href="https://wa.me/+6282264326766"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 text-sm text-background/70 hover:text-primary transition-colors duration-150 font-montserrat"
                >
                  <Phone size={13} className="shrink-0" />
                  +62 822-6432-6766
                </a>
              </li>
            </ul>
          </div>

          {/* Alamat */}
          <div className="flex flex-col gap-4">
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-background/40 font-montserrat">
              Alamat
            </h3>
            <address className="not-italic flex items-start gap-2.5 text-sm text-background/70 font-montserrat leading-relaxed">
              <MapPin size={13} className="shrink-0 mt-0.5" />
              Jl. Karyawati, Jiwan, Kec. Jiwan
              <br />
              Madiun, Jawa Timur 63131
            </address>
            <a
              href="https://maps.app.goo.gl/Y4S42svah1LhptSa7"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-primary font-semibold font-montserrat hover:underline w-fit"
            >
              Lihat di Google Maps →
            </a>
          </div>
        </div>

        {/* ── Bottom bar ── */}
        <div className="border-t border-background/10 py-5 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-xs text-background/30 font-montserrat">
            © {new Date().getFullYear()} Bu Wiji Kost. All rights reserved.
          </p>
          <p className="text-xs text-background/20 font-montserrat">
            Madiun, Jawa Timur
          </p>
        </div>
      </div>
    </footer>
  );
}
