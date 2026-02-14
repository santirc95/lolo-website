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
    <header className="pointer-events-none fixed top-3 left-0 right-0 z-50">
      <div className="pointer-events-auto relative mx-auto max-w-6xl px-4">
        {/* ── Gradient border pill ── */}
        <div
          className="rounded-full bg-gradient-to-r from-[#d4b896]/60 via-[#4a3160]/20 to-[#d4b896]/60 p-[1px]
                     shadow-[0_8px_32px_rgba(0,0,0,0.08)]"
        >
          {/* ── Inner glass pill ── */}
          <div className="flex h-14 items-center justify-between rounded-full bg-[#faf8f5]/75 backdrop-blur-md px-5">
            {/* Logo */}
            <Link
              href="/"
              className="font-display text-xl tracking-wider text-charcoal
                         focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4a3160]/50 focus-visible:ring-offset-2 focus-visible:rounded"
            >
              {SITE_CONFIG.name}
            </Link>

            {/* Desktop nav — center + right */}
            <nav
              aria-label="Navegación principal"
              className="hidden items-center gap-6 md:flex"
            >
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="group relative text-sm tracking-wide text-[#8a8078] transition-colors duration-200
                             hover:text-[#4a3160]
                             focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4a3160]/50 focus-visible:rounded"
                >
                  {link.label}
                  <span className="absolute inset-x-0 -bottom-1 h-[1.5px] origin-left scale-x-0 rounded-full bg-[#4a3160]/40 transition-transform duration-200 ease-out group-hover:scale-x-100" />
                </a>
              ))}

              {/* CTA */}
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-liquid btn-liquid--primary ml-2 px-5 py-2 text-sm font-medium
                           focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4a3160]/50 focus-visible:ring-offset-2"
              >
                Empieza tu diseño
              </a>
            </nav>

            {/* Mobile hamburger */}
            <button
              type="button"
              className="flex h-9 w-9 flex-col items-center justify-center gap-1.5 md:hidden
                         focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4a3160]/50 focus-visible:rounded-full"
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
        </div>

        {/* ── Mobile dropdown panel ── */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.nav
              aria-label="Navegación móvil"
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25, ease: EASE_LUXURY }}
              className="mt-2 overflow-hidden rounded-2xl bg-gradient-to-b from-[#d4b896]/40 via-[#4a3160]/10 to-[#d4b896]/30 p-[1px]
                         shadow-[0_12px_40px_rgba(0,0,0,0.1)] md:hidden"
            >
              <div className="rounded-[calc(1rem-1px)] bg-[#faf8f5]/95 backdrop-blur-md px-6 py-8">
                {/* Navigation links */}
                <div className="flex flex-col items-center gap-5">
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
                </div>

                {/* ── Separator ── */}
                <div className="mx-auto my-6 h-[1px] w-2/3 bg-gradient-to-r from-transparent via-[#d4b896]/40 to-transparent" />

                {/* ── Acciones rápidas ── */}
                <p className="mb-4 text-center text-xs uppercase tracking-[0.28em] text-[#4a3160]/50">
                  Acciones rápidas
                </p>
                <div className="flex flex-col gap-3">
                  <a
                    href={getWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={closeMobile}
                    className="btn-liquid btn-liquid--primary w-full px-6 py-3 text-center text-sm font-medium
                               focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4a3160]/50 focus-visible:ring-offset-2"
                  >
                    Empieza tu diseño
                  </a>
                  <a
                    href="#estilos"
                    onClick={closeMobile}
                    className="btn-liquid btn-liquid--ghost w-full px-6 py-3 text-center text-sm font-medium
                               focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4a3160]/50 focus-visible:ring-offset-2"
                  >
                    Conocer estilos
                  </a>
                </div>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
