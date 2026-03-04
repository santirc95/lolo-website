export const SITE_CONFIG = {
  name: "LOLŌ",
  tagline: "Anillos de compromiso a tu medida",
  description:
    "Diseñamos y creamos anillos de compromiso personalizados con diamantes certificados y metales preciosos. Asesoría experta y proceso transparente.",
  url: "https://www.lolojoyeria.com",
  whatsapp: {
    number: "525512778853",
    message:
      "Hola, estoy buscando un anillo de compromiso personalizado y me gustaría más información.",
  },
  social: {
    instagram: "https://www.instagram.com/lolo.mexico/",
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
