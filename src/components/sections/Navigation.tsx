"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { navLinks } from "@/lib/data";
import { ProvfilmTrigger } from "@/components/forms/ProvfilmTrigger";

export function Navigation() {
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
      {/* Top utility strip — only shows when not scrolled */}
      <div
        className={`overflow-hidden transition-all duration-500 bg-ink text-ivory ${
          scrolled ? "max-h-0" : "max-h-10"
        }`}
      >
        <div className="container-edit flex items-center justify-between py-2.5">
          <div className="flex items-center gap-2">
            <span className="live-dot" />
            <span className="font-mono text-[10px] tracking-[0.22em] uppercase text-ivory/80">
              Lanserar i Göteborg — bokar för hela Sverige & Norge
            </span>
          </div>
          <span className="hidden sm:block font-mono text-[10px] tracking-[0.22em] uppercase text-ivory/60">
            EST. 2025
          </span>
        </div>
      </div>

      {/* Main nav */}
      <div className="container-edit">
        <div className="flex items-center justify-between h-[68px]">
          {/* Logo */}
          <a href="#" className="group flex items-baseline gap-1">
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
          </a>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-9">
            {navLinks.map((link, i) => (
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
            <ProvfilmTrigger size="sm" variant={scrolled ? "primary" : "inverse"} />
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`lg:hidden p-2 -mr-2 transition-colors duration-500 ${
              scrolled ? "text-ink" : "text-ivory"
            }`}
            aria-label="Menu"
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
            {navLinks.map((link, i) => (
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
            <ProvfilmTrigger className="w-full mt-4" />
          </div>
        )}
      </div>
    </header>
  );
}
