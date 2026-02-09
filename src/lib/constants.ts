export const SITE_CONFIG = {
  name: "LOLŌ",
  tagline: "Anillos de compromiso a tu medida",
  description:
    "Diseñamos y creamos anillos de compromiso personalizados con diamantes certificados y metales preciosos. Asesoría experta y proceso transparente.",
  url: "https://www.lolojoyeria.com",
  whatsapp: {
    number: "5215512345678",
    message:
      "Hola, me interesa saber más sobre los anillos de compromiso personalizados de LOLŌ.",
  },
  social: {
    instagram: "https://www.instagram.com/lolojoyeria",
  },
} as const;

export const NAV_LINKS = [
  { label: "Proceso", href: "#proceso" },
  { label: "Testimonios", href: "#testimonios" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Preguntas frecuentes", href: "#faq" },
] as const;

export function getWhatsAppUrl(customMessage?: string): string {
  const message = customMessage || SITE_CONFIG.whatsapp.message;
  return `https://wa.me/${SITE_CONFIG.whatsapp.number}?text=${encodeURIComponent(message)}`;
}
