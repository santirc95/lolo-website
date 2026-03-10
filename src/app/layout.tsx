import type { Metadata, Viewport } from "next";
import Script from "next/script";
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
    default: "Anillos de compromiso con diamantes | LOLŌ México",
    template: "%s | LOLŌ",
  },
  description:
    "Anillos de compromiso personalizados con diamantes certificados y asesoría experta en México. Diseña una pieza única con LOLŌ.",
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
    title: "Anillos de compromiso con diamantes | LOLŌ México",
    description:
      "Anillos de compromiso personalizados con diamantes certificados y asesoría experta en México. Diseña una pieza única con LOLŌ.",
    images: [
      {
        url: "https://lolomexico.com/images/OG/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "LOLŌ - Joyería fina",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Anillos de compromiso con diamantes | LOLŌ México",
    description:
      "Anillos de compromiso personalizados con diamantes certificados y asesoría experta en México. Diseña una pieza única con LOLŌ.",
    images: ["https://lolomexico.com/images/OG/twitter-image.png"],
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

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "JewelryStore",
      "@id": `${SITE_CONFIG.url}/#jewelry-store`,
      name: SITE_CONFIG.name,
      description:
        "Anillos de compromiso personalizados con diamantes naturales y de laboratorio.",
      url: SITE_CONFIG.url,
      priceRange: "$$$",
      image: "https://lolomexico.com/images/OG/opengraph-image.png",
      address: {
        "@type": "PostalAddress",
        addressCountry: "MX",
      },
      areaServed: {
        "@type": "Country",
        name: "Mexico",
      },
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "customer service",
        url: `https://wa.me/${SITE_CONFIG.whatsapp.number}`,
        availableLanguage: ["Spanish"],
      },
      sameAs: [SITE_CONFIG.social.instagram],
    },
    {
      "@type": "Service",
      "@id": `${SITE_CONFIG.url}/#service`,
      name: "Diseño de Anillos de Compromiso Personalizados",
      description:
        "Diseño y creación personalizada de anillos de compromiso con diamantes naturales y de laboratorio.",
      provider: {
        "@type": "JewelryStore",
        "@id": `${SITE_CONFIG.url}/#jewelry-store`,
      },
      areaServed: {
        "@type": "Country",
        name: "Mexico",
      },
      serviceType: "Custom Engagement Ring Design",
    },
  ],
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
            __html: JSON.stringify(structuredData),
          }}
        />
      </head>
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased`}>
        {children}
        <GoogleAnalytics gaId="G-0V7WRP90CV" />
        <Script id="microsoft-clarity" strategy="afterInteractive">
          {`(function(c,l,a,r,i,t,y){
            c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
            t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
            y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
          })(window, document, "clarity", "script", "vtqmp13v01");`}
        </Script>
      </body>
    </html>
  );
}
