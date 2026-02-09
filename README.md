# LOLŌ — Sitio web oficial

Sitio web de joyería fina LOLŌ, especializado en anillos de compromiso personalizados.

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Fonts:** Inter + Playfair Display (Google Fonts)
- **SEO:** Structured data (JSON-LD), Open Graph, sitemap, robots.txt

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Create production build |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |

## Project Structure

```
src/
├── app/
│   ├── globals.css      # Design tokens & Tailwind config
│   ├── layout.tsx        # Root layout with SEO metadata
│   ├── page.tsx          # Landing page
│   └── sitemap.ts        # Dynamic sitemap
├── components/
│   ├── Header.tsx        # Fixed navigation with mobile menu
│   ├── Hero.tsx          # Hero section with CTAs
│   ├── Process.tsx       # 5-step process section
│   ├── Testimonials.tsx  # Customer testimonials
│   ├── Trust.tsx         # Trust signals & value props
│   ├── FAQ.tsx           # Accordion FAQ with JSON-LD
│   ├── CTABanner.tsx     # Final conversion banner
│   ├── Footer.tsx        # Site footer
│   └── WhatsAppButton.tsx # Floating WhatsApp CTA
└── lib/
    └── constants.ts      # Site config, nav links, WhatsApp helper
```
