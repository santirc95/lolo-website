import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";
import { SITE_CONFIG } from "@/lib/constants";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#FAF7F2",
};

export const metadata: Metadata = {
  title: {
    default: "LOLŌ | Anillos de compromiso con diamantes",
    template: "%s | LOLŌ",
  },
  description:
    "Diseñamos anillos de compromiso únicos con diamantes certificados y asesoría personalizada.",
  metadataBase: new URL(SITE_CONFIG.url),
  keywords: [
    "anillos de compromiso",
    "anillos de compromiso personalizados",
    "joyería fina",
    "diamantes certificados",
    "anillos a medida",
    "engagement rings Mexico",
    "joyería artesanal",
    "anillos de compromiso México",
    "LOLŌ",
  ],
  authors: [{ name: SITE_CONFIG.name }],
  creator: SITE_CONFIG.name,
  openGraph: {
    type: "website",
    locale: "es_MX",
    url: SITE_CONFIG.url,
    siteName: SITE_CONFIG.name,
    title: "LOLŌ | Anillos de compromiso con diamantes",
    description:
      "Diseñamos anillos de compromiso únicos con diamantes certificados y asesoría personalizada.",
  },
  twitter: {
    card: "summary_large_image",
    title: "LOLŌ | Anillos de compromiso con diamantes",
    description:
      "Diseñamos anillos de compromiso únicos con diamantes certificados y asesoría personalizada.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "JewelryStore",
              name: SITE_CONFIG.name,
              description: SITE_CONFIG.description,
              url: SITE_CONFIG.url,
              priceRange: "$$$",
              address: {
                "@type": "PostalAddress",
                addressCountry: "MX",
              },
              sameAs: [SITE_CONFIG.social.instagram],
            }),
          }}
        />
      </head>
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased`}>
        {children}
        <GoogleAnalytics gaId="G-0V7WRP90CV" />
      </body>
    </html>
  );
}
