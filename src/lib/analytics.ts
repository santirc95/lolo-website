export function trackWhatsAppClick() {
  if (typeof window !== "undefined" && (window as any).gtag) {
    (window as any).gtag("event", "whatsapp_click", {
      event_category: "engagement",
      event_label: "whatsapp_contact",
      value: 1,
    });
  }
}

export function trackStyleVideoPlay(styleName: string) {
  if (typeof window !== "undefined" && (window as any).gtag) {
    (window as any).gtag("event", "style_video_play", {
      style_name: styleName,
    });
  }
}

export function trackStyleVideoComplete(styleName: string) {
  if (typeof window !== "undefined" && (window as any).gtag) {
    (window as any).gtag("event", "style_video_complete", {
      style_name: styleName,
    });
  }
}

export function trackCutView(cutName: string) {
  if (typeof window !== "undefined" && (window as any).gtag) {
    (window as any).gtag("event", "cut_view", {
      cut_name: cutName,
    });
  }
}
