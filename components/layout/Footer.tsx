"use client";

import React from "react";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import { ArrowUp } from "lucide-react";

export default function Footer() {
  const getSocialIcon = (name: string) => {
    switch (name.toLowerCase()) {
      case "instagram":
        return (
          <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
          </svg>
        );
      case "facebook":
        return (
          <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
          </svg>
        );
      case "youtube":
        return (
          <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M23.498 6.163a3.003 3.003 0 00-2.11-2.11C19.518 3.545 12 3.545 12 3.545s-7.519 0-9.388.508a3.003 3.003 0 00-2.11 2.11C0 8.033 0 12 0 12s0 3.967.502 5.837a3.003 3.003 0 002.11 2.11c1.87.507 9.388.507 9.388.507s7.518 0 9.388-.507a3.003 3.003 0 002.11-2.11C24 15.967 24 12 24 12s0-3.967-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
          </svg>
        );
      case "linkedin":
        return (
          <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
          </svg>
        );
      default:
        return null;
    }
  };


  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-parchment/40 border-t border-border pt-16 pb-8 px-6 relative overflow-hidden">
      {/* Texture decorativa pergamena */}
      <div className="absolute inset-0 bg-perg-pattern pointer-events-none opacity-[0.04]" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Brand Col */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            <Link href="/" className="flex flex-col">
              <span className="font-display text-3xl font-bold tracking-wide text-ink italic">
                {siteConfig.nome}
              </span>
              <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-muted -mt-0.5">
                L'Arte di Guidare la Storia
              </span>
            </Link>
            <p className="text-muted text-xs max-w-sm leading-relaxed">
              {siteConfig.descrizione} Custodiamo la memoria industriale, la passione ingegneristica e l'estetica italiana senza tempo.
            </p>
            {/* Socials */}
            <div className="flex items-center gap-3">
              {siteConfig.social.map((soc, idx) => (
                <a
                  key={idx}
                  href={soc.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-8 w-8 flex items-center justify-center border border-border text-ink/75 hover:bg-rosso hover:text-cream hover:border-rosso rounded-sm transition-all duration-300"
                  aria-label={soc.nome}
                >
                  {getSocialIcon(soc.nome)}
                </a>
              ))}
            </div>
          </div>

          {/* Links Col 1: Azienda */}
          <div className="flex flex-col gap-4">
            <h4 className="font-mono text-xs uppercase tracking-widest text-ink font-semibold">
              Azienda
            </h4>
            <ul className="flex flex-col gap-2">
              {siteConfig.footer_links.azienda.map((link, idx) => (
                <li key={idx}>
                  <Link
                    href={link.href}
                    className="text-xs text-muted hover:text-rosso transition-colors duration-200"
                  >
                    {link.etichetta}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Links Col 2: Servizi */}
          <div className="flex flex-col gap-4">
            <h4 className="font-mono text-xs uppercase tracking-widest text-ink font-semibold">
              Servizi
            </h4>
            <ul className="flex flex-col gap-2">
              {siteConfig.footer_links.servizi.map((link, idx) => (
                <li key={idx}>
                  <Link
                    href={link.href}
                    className="text-xs text-muted hover:text-rosso transition-colors duration-200"
                  >
                    {link.etichetta}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Links Col 3: Contatti */}
          <div className="flex flex-col gap-4">
            <h4 className="font-mono text-xs uppercase tracking-widest text-ink font-semibold">
              Contatti
            </h4>
            <div className="flex flex-col gap-3 text-xs text-muted">
              <div>
                <p className="font-mono text-[9px] uppercase tracking-wider text-ink/75">Showroom</p>
                <a
                  href={siteConfig.indirizzi.showroom.maps_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-rosso transition-colors"
                >
                  {siteConfig.indirizzi.showroom.completo}
                </a>
              </div>
              <div>
                <p className="font-mono text-[9px] uppercase tracking-wider text-ink/75">Telefono</p>
                <a href={`tel:${siteConfig.contatti.telefono}`} className="hover:text-rosso transition-colors">
                  {siteConfig.contatti.telefono}
                </a>
              </div>
              <div>
                <p className="font-mono text-[9px] uppercase tracking-wider text-ink/75">Email</p>
                <a href={`mailto:${siteConfig.contatti.email_info}`} className="hover:text-rosso transition-colors">
                  {siteConfig.contatti.email_info}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border/80 pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-[11px] text-muted">
            <span>© {new Date().getFullYear()} Classico Italiano. P.IVA 02481607021.</span>
            <div className="flex items-center gap-4">
              {siteConfig.footer_links.legale.map((link, idx) => (
                <Link
                  key={idx}
                  href={link.href}
                  className="hover:text-rosso transition-colors duration-200"
                >
                  {link.etichetta}
                </Link>
              ))}
            </div>
          </div>

          {/* Torna Su */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-muted hover:text-rosso transition-colors duration-200"
          >
            <span>Torna Su</span>
            <span className="h-6 w-6 flex items-center justify-center border border-border rounded-sm hover:border-rosso">
              <ArrowUp className="h-3 w-3" />
            </span>
          </button>
        </div>
      </div>
    </footer>
  );
}
