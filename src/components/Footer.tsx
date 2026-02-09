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

          <div className="flex flex-col items-center gap-4 md:flex-row md:gap-6">
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm transition-colors hover:text-white"
            >
              WhatsApp
            </a>
            <a
              href={SITE_CONFIG.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm transition-colors hover:text-white"
            >
              Instagram
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
