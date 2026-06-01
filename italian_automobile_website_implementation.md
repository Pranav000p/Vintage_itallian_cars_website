# 🇮🇹 Guida all'Implementazione — Sito Web Showroom Automobili d'Epoca Italiane

---

## 📌 Panoramica del Progetto

**Nome del Sito:** `Classico Italiano — Showroom Automobili d'Epoca`
**Lingua:** Italiano
**Framework:** Next.js 14 (App Router) + TypeScript
**Obiettivo:** Landing page lussuosa e unica per un concessionario di automobili vintage italiane

---

## 🎨 Tema e Paletta Colori

### Concept Estetico: **"Crema da Museo"**
> Ispirato ai musei d'arte italiani, ai manifesti di gara degli anni '50 e alla carta ingiallita dell'archivio. NON buio, NON scuro — caldo, dorato, musealizzato.

### Palette Principale

```css
:root {
  /* Sfondi */
  --color-cream:       #F5EFE0;   /* Crema calda — sfondo principale */
  --color-parchment:   #EDE3CC;   /* Pergamena — sezioni alternate */
  --color-ivory:       #FAF7F2;   /* Avorio — card, modal */

  /* Accenti */
  --color-rosso:       #C0392B;   /* Rosso Ferrari — accento primario */
  --color-oro:         #B8860B;   /* Oro antico — titoli e decorazioni */
  --color-verde:       #2E5D4B;   /* Verde scuro italiano — accento secondario */

  /* Tipografia */
  --color-ink:         #1C1409;   /* Inchiostro seppia — testo principale */
  --color-muted:       #6B5A3E;   /* Marrone smorzato — testo secondario */
  --color-border:      #D4C5A9;   /* Bordo pergamena */

  /* Effetti */
  --color-shadow:      rgba(28, 20, 9, 0.12);
  --color-overlay:     rgba(245, 239, 224, 0.85);
}
```

---

## 🔤 Tipografia

```css
/* Coppie di Font — Google Fonts + Adobe */
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&family=DM+Mono:wght@300;400&display=swap');

/* Titoli Principali: Cormorant Garamond — elegante, vintage */
--font-display: 'Cormorant Garamond', Georgia, serif;

/* Corpo Testo: Libre Baskerville — leggibile, classico */
--font-body: 'Libre Baskerville', Times New Roman, serif;

/* Dettagli / Etichette: DM Mono — contrasto moderno */
--font-mono: 'DM Mono', monospace;
```

---

## 📦 Dipendenze e Librerie

```json
{
  "dependencies": {
    "next": "^14.2.0",
    "react": "^18.3.0",
    "typescript": "^5.4.0",

    "framer-motion": "^11.2.0",
    "motion": "^10.18.0",

    "@radix-ui/react-dialog": "^1.1.0",
    "@radix-ui/react-navigation-menu": "^1.2.0",
    "@radix-ui/react-accordion": "^1.2.0",
    "@radix-ui/react-toast": "^1.2.0",

    "embla-carousel-react": "^8.1.0",
    "embla-carousel-autoplay": "^8.1.0",

    "gsap": "^3.12.5",
    "@gsap/react": "^2.1.1",

    "lenis": "^1.1.7",

    "react-intersection-observer": "^9.13.0",

    "react-hook-form": "^7.51.0",
    "zod": "^3.23.0",
    "@hookform/resolvers": "^3.3.4",

    "clsx": "^2.1.1",
    "tailwind-merge": "^2.3.0",
    "tailwindcss-animate": "^1.0.7",

    "lucide-react": "^0.395.0",

    "next-themes": "^0.3.0"
  }
}
```

---

## 🗂️ Struttura del Progetto

```
classico-italiano/
├── app/
│   ├── layout.tsx                  # Layout radice con font, metadata, providers
│   ├── page.tsx                    # Homepage (Landing Page Principale)
│   ├── chi-siamo/
│   │   └── page.tsx                # Pagina "Chi Siamo"
│   ├── contattaci/
│   │   └── page.tsx                # Pagina "Contattaci"
│   ├── termini-di-utilizzo/
│   │   └── page.tsx                # Termini di Utilizzo
│   └── privacy-e-cookie/
│       └── page.tsx                # Privacy e Cookie Policy
│
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   └── PageTransition.tsx
│   ├── sections/
│   │   ├── HeroSection.tsx
│   │   ├── IntroSection.tsx
│   │   ├── CarCollectionSection.tsx
│   │   ├── HeritageSection.tsx
│   │   ├── TestimonialsSection.tsx
│   │   └── CtaSection.tsx
│   ├── ui/
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── Badge.tsx
│   │   ├── Marquee.tsx
│   │   ├── RevealText.tsx
│   │   └── SectionDivider.tsx
│   └── providers/
│       ├── SmoothScrollProvider.tsx
│       └── GlobalDataProvider.tsx
│
├── lib/
│   ├── site-config.ts              # ⭐ ISTANZA GLOBALE — tutti i dati del sito
│   ├── utils.ts
│   └── animations.ts
│
├── styles/
│   └── globals.css
│
└── public/
    └── images/
        ├── hero/
        ├── cars/
        └── about/
```

---

## ⭐ Istanza Globale dei Dati (`lib/site-config.ts`)

> **IMPORTANTE:** Tutti i dati di contatto, social, indirizzi ecc. vivono qui. Modificare una sola volta → aggiornamento automatico su tutto il sito.

```typescript
// lib/site-config.ts

export const siteConfig = {
  // ─── Identità ───────────────────────────────────────────────
  nome: "Classico Italiano",
  slogan: "L'Arte di Guidare la Storia",
  descrizione: "Dal 1962, custodi delle più raffinate automobili d'epoca italiane.",
  logo: "/images/logo.svg",
  anno_fondazione: 1962,

  // ─── Contatti ───────────────────────────────────────────────
  contatti: {
    telefono: "+39 02 4821 6070",
    telefono_formattato: "02 4821 6070",
    email_info: "info@classicoitaliano.it",
    email_vendite: "vendite@classicoitaliano.it",
    email_assistenza: "assistenza@classicoitaliano.it",
    whatsapp: "+393334821607",
  },

  // ─── Indirizzi ──────────────────────────────────────────────
  indirizzi: {
    showroom: {
      via: "Via Monte Napoleone, 28",
      citta: "Milano",
      cap: "20121",
      provincia: "MI",
      paese: "Italia",
      completo: "Via Monte Napoleone, 28 — 20121 Milano (MI)",
      maps_url: "https://maps.google.com/?q=Via+Monte+Napoleone+28+Milano",
    },
    officina: {
      via: "Via Tortona, 54",
      citta: "Milano",
      cap: "20144",
      provincia: "MI",
      paese: "Italia",
      completo: "Via Tortona, 54 — 20144 Milano (MI)",
    },
  },

  // ─── Orari ──────────────────────────────────────────────────
  orari: {
    feriali: "Lunedì – Venerdì: 09:00 – 18:30",
    sabato: "Sabato: 10:00 – 16:00",
    domenica: "Domenica: Solo su appuntamento",
  },

  // ─── Social ─────────────────────────────────────────────────
  social: [
    {
      nome: "Instagram",
      url: "https://instagram.com/classicoitaliano",
      handle: "@classicoitaliano",
      icon: "instagram",
    },
    {
      nome: "Facebook",
      url: "https://facebook.com/classicoitaliano",
      handle: "Classico Italiano",
      icon: "facebook",
    },
    {
      nome: "YouTube",
      url: "https://youtube.com/@classicoitaliano",
      handle: "Classico Italiano",
      icon: "youtube",
    },
    {
      nome: "LinkedIn",
      url: "https://linkedin.com/company/classicoitaliano",
      handle: "Classico Italiano",
      icon: "linkedin",
    },
  ],

  // ─── SEO ────────────────────────────────────────────────────
  seo: {
    title: "Classico Italiano — Showroom Automobili d'Epoca",
    description:
      "Scopri la nostra selezione esclusiva di automobili d'epoca italiane. Ferrari, Alfa Romeo, Lancia, Maserati — pezzi unici restaurati con cura artigianale.",
    keywords: [
      "auto d'epoca italiane",
      "Ferrari vintage",
      "Alfa Romeo classica",
      "showroom auto storiche Milano",
      "automobili d'epoca",
    ],
    og_image: "/images/og-cover.jpg",
    canonical: "https://www.classicoitaliano.it",
  },

  // ─── Link Navigazione ───────────────────────────────────────
  nav: [
    { etichetta: "Collezione", href: "#collezione" },
    { etichetta: "Chi Siamo", href: "/chi-siamo" },
    { etichetta: "Patrimonio", href: "#patrimonio" },
    { etichetta: "Contattaci", href: "/contattaci" },
  ],

  // ─── Link Footer ────────────────────────────────────────────
  footer_links: {
    azienda: [
      { etichetta: "Chi Siamo", href: "/chi-siamo" },
      { etichetta: "La Nostra Storia", href: "/chi-siamo#storia" },
      { etichetta: "Il Team", href: "/chi-siamo#team" },
      { etichetta: "Contattaci", href: "/contattaci" },
    ],
    legale: [
      { etichetta: "Termini di Utilizzo", href: "/termini-di-utilizzo" },
      { etichetta: "Privacy & Cookie Policy", href: "/privacy-e-cookie" },
      { etichetta: "Note Legali", href: "/note-legali" },
    ],
    servizi: [
      { etichetta: "Acquisto Auto", href: "#collezione" },
      { etichetta: "Vendita & Consignment", href: "/contattaci#vendita" },
      { etichetta: "Restauro", href: "/contattaci#restauro" },
      { etichetta: "Perizie e Valutazioni", href: "/contattaci#perizie" },
    ],
  },
} as const;

export type SiteConfig = typeof siteConfig;
```

---

## 🖥️ Sezione Hero — Layout Unico (NON immagine con testo sopra)

### Concept: **"Split Cinematografico"**
La hero è divisa in **due pannelli asimmetrici** con un numero tipografico gigante come elemento visivo:

```
┌──────────────────┬──────────────────────┐
│                  │                      │
│  CLASSICO        │  [Contatore Anno]    │
│  ITALIANO        │  1962                │
│                  │  ──────────────      │
│  [Testo slogan]  │  [Immagine auto      │
│  [CTA buttons]   │   ritagliata su      │
│                  │   sfondo pergamena]  │
│                  │                      │
│  ● Scroll down   │  [Badges marchi]     │
└──────────────────┴──────────────────────┘
```

**Caratteristiche Hero:**
- Pannello sinistro: sfondo crema con testo editoriale, grande numero anno in filigrana
- Pannello destro: texture pergamena, immagine auto su sfondo neutro (stile catalogo museo)
- Linea divisoria verticale con ornamento a freccia vintage
- Testo titolo in Cormorant Garamond italic con animazione `reveal` per lettere
- Counter animato dell'anno di fondazione
- Badge marchi auto (Ferrari, Alfa Romeo, Lancia, Maserati) con hover in rosso
- Nessun video, nessun parallax pesante — solo eleganza tipografica

```tsx
// components/sections/HeroSection.tsx

import { motion, useScroll, useTransform } from "framer-motion";
import { siteConfig } from "@/lib/site-config";

// Animazione: ogni parola del titolo entra con stagger da sotto
const titleVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const wordVariants = {
  hidden: { y: 60, opacity: 0, rotateX: -30 },
  visible: {
    y: 0,
    opacity: 1,
    rotateX: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};
```

---

## 📄 Pagine Richieste

### 1. Homepage (`/`)

**Sezioni in ordine:**

| Sezione | Layout | Descrizione |
|---|---|---|
| `HeroSection` | Split asimmetrico | Due pannelli, titolo editoriale, auto catalogo |
| `IntroSection` | Testo centrato con ornamenti | Paragrafo istituzionale con decorazioni vintage |
| `MarqueSection` | Marquee animato | Scorrimento continuo dei marchi: Ferrari · Alfa Romeo · Lancia · Maserati · Lamborghini |
| `CarCollectionSection` | Grid irregolare stile magazine | Card auto con anno, marca, cilindrata — hover con overlay scheda tecnica |
| `HeritageSection` | Timeline orizzontale | Milestones aziendali dal 1962 ad oggi |
| `TestimonialsSection` | Bento grid asimmetrico | Citazioni clienti con stile cartolina vintage |
| `CtaSection` | Full-width con texture | "Prenota una visita al nostro showroom" |

---

### 2. Chi Siamo (`/chi-siamo`)

```
Sezioni:
├── PageHero — Titolo su sfondo pergamena + citazione fondatore
├── StoriaSection — Timeline verticale con foto archivio
├── ValoriSection — 3 colonne con icone vintage (accuratezza, passione, rarità)
├── TeamSection — Card fotografiche team con nomi e ruoli
└── ShowroomSection — Foto showroom + indirizzo da siteConfig
```

**Dati da `siteConfig`:** `siteConfig.contatti`, `siteConfig.indirizzi.showroom`, `siteConfig.anno_fondazione`

---

### 3. Contattaci (`/contattaci`)

```
Layout: Due colonne
├── Colonna Sinistra:
│   ├── Titolo + descrizione
│   ├── Info da siteConfig.contatti
│   ├── Orari da siteConfig.orari
│   ├── Indirizzi da siteConfig.indirizzi
│   └── Link social da siteConfig.social
│
└── Colonna Destra:
    └── Form di contatto
        ├── Nome e Cognome
        ├── Email
        ├── Telefono
        ├── Interesse: [Acquisto / Vendita / Restauro / Perizia / Altro]
        ├── Messaggio
        └── Submit con animazione
```

**Validazione:** `react-hook-form` + `zod`

---

### 4. Termini di Utilizzo (`/termini-di-utilizzo`)

**Sezioni legali in italiano:**
- Accettazione dei Termini
- Utilizzo del Sito
- Proprietà Intellettuale
- Limitazione di Responsabilità
- Legge Applicabile (Diritto Italiano)
- Foro Competente (Tribunale di Milano)
- Contatti (`siteConfig.contatti.email_info`)

---

### 5. Privacy & Cookie Policy (`/privacy-e-cookie`)

**Conforme al GDPR (Regolamento UE 2016/679):**
- Titolare del Trattamento (da `siteConfig`)
- Dati Raccolti
- Finalità del Trattamento
- Base Giuridica
- Conservazione dei Dati
- Diritti dell'Interessato
- Cookie Tecnici e Analitici
- Contatto DPO: `siteConfig.contatti.email_info`

---

## 🧭 Navbar

```tsx
// Layout: Logo a sinistra | Links al centro | CTA a destra

<nav>
  <Logo /> {/* siteConfig.nome */}
  <NavLinks /> {/* siteConfig.nav */}
  <CTAButton label="Prenota Visita" href="/contattaci" />
  <MobileMenuButton />
</nav>
```

**Comportamento:**
- Trasparente all'inizio, diventa `cream/95` con `backdrop-blur` allo scroll
- Transizione: `framer-motion` `AnimatePresence` per menu mobile
- Bordo inferiore: linea oro `1px` con opacity che aumenta allo scroll
- Menu mobile: slide da destra con overlay scuro semitrasparente

---

## 🦶 Footer

```
┌─────────────────────────────────────────────────────┐
│  [Logo + Slogan]                                     │
│  [Descrizione breve]                                 │
│  [Social Icons — da siteConfig.social]               │
├──────────────┬──────────────┬───────────────────────┤
│  Azienda     │  Servizi     │  Contatti             │
│  (link)      │  (link)      │  telefono             │
│              │              │  email                │
│              │              │  indirizzo            │
├──────────────┴──────────────┴───────────────────────┤
│  © 2024 Classico Italiano — P.IVA 02481607021       │
│  [Termini di Utilizzo] · [Privacy & Cookie]         │
└─────────────────────────────────────────────────────┘
```

**Dati da `siteConfig`:** tutti i link, contatti, social, indirizzi

---

## ✨ Animazioni e Transizioni

### Scroll Animations (Framer Motion)

```typescript
// lib/animations.ts

export const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
};

export const fadeInLeft = {
  initial: { opacity: 0, x: -40 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.7, ease: "easeOut" },
};

export const scaleReveal = {
  initial: { opacity: 0, scale: 0.92 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.8, ease: [0.34, 1.56, 0.64, 1] },
};

export const staggerContainer = {
  animate: {
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};
```

### Transizioni tra Pagine

```tsx
// components/layout/PageTransition.tsx
// Effetto: curtain wipe verticale in oro, poi rivela la nuova pagina

const curtainVariants = {
  initial: { scaleY: 0, originY: 0 },
  animate: { scaleY: 1, transition: { duration: 0.4, ease: "easeIn" } },
  exit:    { scaleY: 0, originY: 1, transition: { duration: 0.4, ease: "easeOut", delay: 0.1 } },
};
```

### Smooth Scroll

```tsx
// components/providers/SmoothScrollProvider.tsx
// Usare Lenis per smooth scroll nativo

import Lenis from "lenis";
import { useEffect } from "react";

export function SmoothScrollProvider({ children }) {
  useEffect(() => {
    const lenis = new Lenis({ lerp: 0.08, smoothWheel: true });
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
    return () => lenis.destroy();
  }, []);
  return <>{children}</>;
}
```

---

## 🃏 Componente Card Auto

```tsx
// Struttura card collezione:
<CarCard>
  <div class="card-year">1965</div>           {/* Anno in overlay top-left */}
  <img src="..." alt="Ferrari 275 GTB" />
  <div class="card-overlay">                  {/* Appare su hover */}
    <span class="badge">Ferrari</span>
    <h3>275 GTB</h3>
    <p class="spec">V12 · 3.3L · 280 CV</p>
    <p class="price">Su richiesta</p>
    <button>Scopri di più →</button>
  </div>
</CarCard>
```

**Hover effect:** l'overlay sale da sotto con `translateY`, sfondo crema semitrasparente con `backdrop-blur`

---

## 📱 Breakpoint Responsivi

```css
/* Tailwind breakpoints utilizzati */
sm:  640px   /* Smartphone grande */
md:  768px   /* Tablet portrait */
lg:  1024px  /* Tablet landscape / Desktop piccolo */
xl:  1280px  /* Desktop */
2xl: 1536px  /* Desktop grande */

/* Adattamenti chiave */
- Hero: Split 50/50 → Stack verticale su mobile (auto sopra, testo sotto)
- Grid collezione: 3 col → 2 col → 1 col
- Footer: 4 col → 2 col → 1 col
- Navbar: Full → Hamburger su mobile
- Timeline heritage: Orizzontale → Verticale su mobile
```

---

## 🛠️ Configurazione Tailwind

```javascript
// tailwind.config.ts
module.exports = {
  theme: {
    extend: {
      colors: {
        cream:     "#F5EFE0",
        parchment: "#EDE3CC",
        ivory:     "#FAF7F2",
        rosso:     "#C0392B",
        oro:       "#B8860B",
        verde:     "#2E5D4B",
        ink:       "#1C1409",
        muted:     "#6B5A3E",
        border:    "#D4C5A9",
      },
      fontFamily: {
        display: ["Cormorant Garamond", "Georgia", "serif"],
        body:    ["Libre Baskerville", "Times New Roman", "serif"],
        mono:    ["DM Mono", "monospace"],
      },
      animation: {
        marquee:     "marquee 30s linear infinite",
        "fade-up":   "fadeUp 0.6s ease forwards",
        shimmer:     "shimmer 2s linear infinite",
      },
      keyframes: {
        marquee:  { "0%": { transform: "translateX(0)" }, "100%": { transform: "translateX(-50%)" } },
        fadeUp:   { "0%": { opacity: 0, transform: "translateY(20px)" }, "100%": { opacity: 1, transform: "translateY(0)" } },
        shimmer:  { "0%": { backgroundPosition: "-200% 0" }, "100%": { backgroundPosition: "200% 0" } },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
```

---

## 📋 Checklist Implementazione

### Fase 1 — Setup Progetto
- [ ] `npx create-next-app@latest classico-italiano --typescript --tailwind --app`
- [ ] Installare tutte le dipendenze dal `package.json` sopra
- [ ] Configurare `tailwind.config.ts` con i colori e font
- [ ] Creare `lib/site-config.ts` con tutti i dati
- [ ] Importare font Google in `app/layout.tsx`
- [ ] Configurare metadata globali da `siteConfig.seo`

### Fase 2 — Layout Globale
- [ ] Creare `Navbar.tsx` con dati da `siteConfig.nav`
- [ ] Creare `Footer.tsx` con tutti i link e contatti da `siteConfig`
- [ ] Configurare `SmoothScrollProvider` con Lenis
- [ ] Implementare `PageTransition` con Framer Motion

### Fase 3 — Homepage
- [ ] `HeroSection` — Split cinematografico
- [ ] `IntroSection` — Testo istituzionale con ornamenti
- [ ] `MarqueeSection` — Scorrimento marchi
- [ ] `CarCollectionSection` — Grid magazine
- [ ] `HeritageSection` — Timeline 1962-oggi
- [ ] `TestimonialsSection` — Bento grid citazioni
- [ ] `CtaSection` — Prenota visita

### Fase 4 — Pagine Interne
- [ ] `/chi-siamo` con tutte le sezioni
- [ ] `/contattaci` con form validato
- [ ] `/termini-di-utilizzo` (contenuto legale)
- [ ] `/privacy-e-cookie` (conforme GDPR)

### Fase 5 — Rifinitura
- [ ] Test responsività su tutti i breakpoint
- [ ] Ottimizzazione immagini con `next/image`
- [ ] `loading="lazy"` su immagini fuori viewport
- [ ] Test accessibilità (contrasto colori, aria-label)
- [ ] SEO: meta tags, og:image, sitemap, robots.txt
- [ ] Performance: Lighthouse score > 90

---

## 🖼️ Asset Necessari (Immagini)

```
public/images/
├── logo.svg                        # Logo vettoriale
├── og-cover.jpg                    # 1200×630 — Open Graph
├── hero/
│   ├── hero-car.png                # Auto principale su sfondo neutro (PNG con trasparenza)
│   └── hero-texture.jpg            # Texture pergamena
├── cars/
│   ├── ferrari-275-gtb.jpg
│   ├── alfa-romeo-giulietta-spider.jpg
│   ├── lancia-stratos.jpg
│   ├── maserati-ghibli-1967.jpg
│   ├── ferrari-250-gt.jpg
│   └── lamborghini-miura.jpg
└── about/
    ├── showroom-exterior.jpg
    ├── showroom-interior.jpg
    └── team.jpg
```

**Raccomandazione immagini:** Usare foto auto su sfondo bianco/neutro per stile catalogo museo. Evitare foto dinamiche d'azione.

---

## 💡 Note Speciali per l'AI

1. **Istanza Globale:** SEMPRE importare `siteConfig` da `@/lib/site-config` per telefono, email, indirizzo, social. MAI hardcodare questi valori nei componenti.

2. **Lingua:** Tutto il contenuto visibile all'utente deve essere in **italiano**. Variabili, commenti e codice restano in inglese.

3. **Colore:** Usare SEMPRE le variabili CSS. Mai usare valori hex diretti nel JSX.

4. **Font:** Titoli H1/H2 → `font-display` (Cormorant Garamond). Body → `font-body` (Libre Baskerville). Label/badge → `font-mono` (DM Mono).

5. **Immagini:** Usare sempre `next/image` con `priority` solo per l'immagine hero.

6. **Accessibilità:** Ogni immagine decorativa ha `alt=""`. Immagini informative hanno alt descrittivo in italiano.

7. **Form:** Il form contatti usa `react-hook-form` + `zod`. Schema validazione con messaggi di errore in italiano.

8. **Transizioni pagina:** `AnimatePresence` wrappa le pagine in `app/layout.tsx` per le transizioni.

---

*Documento generato per implementazione AI — Classico Italiano Showroom © 2024*
