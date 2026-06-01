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
    { etichetta: "Collezione", href: "/#collezione" },
    { etichetta: "Chi Siamo", href: "/chi-siamo" },
    { etichetta: "Patrimonio", href: "/#patrimonio" },
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
      { etichetta: "Acquisto Auto", href: "/#collezione" },
      { etichetta: "Vendita & Consignment", href: "/contattaci#vendita" },
      { etichetta: "Restauro", href: "/contattaci#restauro" },
      { etichetta: "Perizie e Valutazioni", href: "/contattaci#perizie" },
    ],
  },
} as const;

export type SiteConfig = typeof siteConfig;
