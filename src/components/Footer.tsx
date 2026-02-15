import { SITE_CONFIG, getWhatsAppUrl } from "@/lib/constants";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-gold/10 bg-charcoal text-white/70">
      <div className="mx-auto max-w-6xl px-5 py-12">
        <div className="flex flex-col items-center gap-8 text-center md:flex-row md:justify-between md:text-left">
          <div>
            <p className="font-display text-xl tracking-wider text-white">
              {SITE_CONFIG.name}
            </p>
            <p className="mt-1 text-sm">{SITE_CONFIG.tagline}</p>
          </div>

          <div className="flex items-center gap-5">
            <a
              href={SITE_CONFIG.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram LOLŌ"
              className="opacity-80 transition-all duration-[250ms] ease-out hover:opacity-100 hover:-translate-y-[1px] hover:drop-shadow-[0_0_6px_rgba(74,49,96,0.35)]"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
                <defs>
                  <linearGradient id="ig-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#d4b896" />
                    <stop offset="50%" stopColor="#4a3160" />
                    <stop offset="100%" stopColor="#d4b896" />
                  </linearGradient>
                </defs>
                <rect x="2" y="2" width="20" height="20" rx="5" stroke="url(#ig-grad)" />
                <circle cx="12" cy="12" r="5" stroke="url(#ig-grad)" />
                <circle cx="17.5" cy="6.5" r="1" fill="url(#ig-grad)" stroke="none" />
              </svg>
            </a>
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp LOLŌ"
              className="opacity-80 transition-all duration-[250ms] ease-out hover:opacity-100 hover:-translate-y-[1px] hover:drop-shadow-[0_0_6px_rgba(74,49,96,0.35)]"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
                <defs>
                  <linearGradient id="wa-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#d4b896" />
                    <stop offset="50%" stopColor="#4a3160" />
                    <stop offset="100%" stopColor="#d4b896" />
                  </linearGradient>
                </defs>
                <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" stroke="url(#wa-grad)" />
                <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Zm0 0a5 5 0 0 0 5 5m0 0h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1Z" stroke="url(#wa-grad)" />
              </svg>
            </a>
          </div>
        </div>

        <div className="mt-8 border-t border-white/10 pt-6 text-center text-xs">
          <p>&copy; {year} {SITE_CONFIG.name}. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
