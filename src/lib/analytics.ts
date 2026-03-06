export function trackWhatsAppClick() {
  if (typeof window !== "undefined" && (window as any).gtag) {
    (window as any).gtag("event", "whatsapp_click", {
      event_category: "engagement",
      event_label: "whatsapp_contact",
      value: 1,
    });
  }
}
