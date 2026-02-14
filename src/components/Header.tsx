"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { NAV_LINKS, SITE_CONFIG, getWhatsAppUrl } from "@/lib/constants";

const EASE_LUXURY: [number, number, number, number] = [0.22, 1, 0.36, 1];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const closeMobile = useCallback(() => setMobileOpen(false), []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#faf8f5]/70 backdrop-blur-md border-b border-[#d4b896]/30">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <Link
          href="/"
          className="font-display text-2xl tracking-wider text-charcoal focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4a3160]/50 focus-visible:ring-offset-2"
        >
          {SITE_CONFIG.name}
        </Link>

        {/* Desktop nav */}
        <nav
          aria-label="Navegación principal"
          className="hidden items-center gap-6 md:flex"
        >
          {/* Pill glass wrapper for links */}
          <div className="rounded-full bg-gradient-to-r from-[#d4b896]/60 via-[#4a3160]/20 to-[#d4b896]/60 p-[1px]">
            <div className="flex items-center gap-1 rounded-full bg-[#faf8f5]/80 backdrop-blur-md px-2 py-1.5">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="group relative px-4 py-1.5 text-sm tracking-wide text-[#8a8078] transition-colors duration-200
                             hover:text-[#4a3160]
                             focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4a3160]/50 focus-visible:rounded-full"
                >
                  {link.label}
                  <span className="absolute inset-x-4 -bottom-0 h-[1.5px] origin-left scale-x-0 rounded-full bg-[#4a3160]/40 transition-transform duration-200 ease-out group-hover:scale-x-100" />
                </a>
              ))}
            </div>
          </div>

          {/* CTA */}
          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-liquid btn-liquid--primary px-5 py-2.5 text-sm font-medium
                       focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4a3160]/50 focus-visible:ring-offset-2"
          >
            Empieza tu diseño
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          type="button"
          className="relative z-10 flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden
                     focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4a3160]/50 focus-visible:rounded-lg"
          onClick={() => setMobileOpen((prev) => !prev)}
          aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={mobileOpen}
        >
          <span
            className={`block h-0.5 w-5 rounded-full bg-charcoal transition-all duration-200 ease-out ${
              mobileOpen ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-5 rounded-full bg-charcoal transition-all duration-200 ease-out ${
              mobileOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-5 rounded-full bg-charcoal transition-all duration-200 ease-out ${
              mobileOpen ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile menu panel */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.nav
            aria-label="Navegación móvil"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: EASE_LUXURY }}
            className="overflow-hidden border-t border-[#d4b896]/20 bg-[#faf8f5]/95 backdrop-blur-md md:hidden"
          >
            <div className="flex flex-col items-center gap-5 px-6 py-8">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={closeMobile}
                  className="text-base tracking-wide text-[#8a8078] transition-colors duration-200 hover:text-[#4a3160]
                             focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4a3160]/50 focus-visible:rounded"
                >
                  {link.label}
                </a>
              ))}
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMobile}
                className="btn-liquid btn-liquid--primary mt-2 px-6 py-3 text-sm font-medium
                           focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4a3160]/50 focus-visible:ring-offset-2"
              >
                Hablar con un experto
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
