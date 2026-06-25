"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { KickoffButton } from "./Cta";

const links = [
  { label: "Problemet", href: "#problemet" },
  { label: "Lösningen", href: "#losningen" },
  { label: "Effekten", href: "#effekten" },
  { label: "Så funkar det", href: "#sa-funkar-det" },
  { label: "Paket", href: "#paket" },
];

export function MaklareNav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-bone/85 backdrop-blur-xl border-b border-ink/10"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="container-edit">
        <div className="flex items-center justify-between h-[68px]">
          {/* Logo */}
          <Link href="/" className="group flex items-baseline gap-1">
            <span
              className={`font-display text-[22px] tracking-tight font-medium transition-colors duration-500 ${
                scrolled ? "text-ink" : "text-ivory"
              }`}
            >
              Bostads
              <span
                className={`italic-display font-medium transition-colors duration-500 ${
                  scrolled ? "text-ink" : "text-brass-light"
                }`}
                style={{ fontVariationSettings: '"SOFT" 100, "WONK" 1' }}
              >
                video
              </span>
            </span>
            <span
              className={`font-mono text-[11px] tracking-widest pb-0.5 transition-colors duration-500 ${
                scrolled ? "text-brass-deep" : "text-brass-light"
              }`}
            >
              /24
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-9">
            {links.map((link, i) => (
              <a
                key={link.href}
                href={link.href}
                className={`group flex items-baseline gap-1.5 text-[13px] transition-colors duration-300 ${
                  scrolled
                    ? "text-ink/75 hover:text-ink"
                    : "text-ivory/75 hover:text-ivory"
                }`}
              >
                <span
                  className={`font-mono text-[9px] tracking-widest transition-colors duration-300 ${
                    scrolled
                      ? "text-fog/70 group-hover:text-brass"
                      : "text-ivory/40 group-hover:text-brass-light"
                  }`}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="font-sans">{link.label}</span>
              </a>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden lg:block">
            <KickoffButton size="sm" tone={scrolled ? "light" : "dark"} />
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`lg:hidden p-2 -mr-2 transition-colors duration-500 ${
              scrolled ? "text-ink" : "text-ivory"
            }`}
            aria-label="Meny"
          >
            {mobileOpen ? (
              <X size={22} strokeWidth={1.5} />
            ) : (
              <Menu size={22} strokeWidth={1.5} />
            )}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="lg:hidden pb-6 pt-2 border-t border-ink/10 space-y-1">
            {links.map((link, i) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="flex items-baseline gap-3 py-3 text-ink"
              >
                <span className="font-mono text-[10px] tracking-widest text-fog">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="font-display text-lg">{link.label}</span>
              </a>
            ))}
            <KickoffButton size="sm" className="w-full mt-4" />
          </div>
        )}
      </div>
    </header>
  );
}
