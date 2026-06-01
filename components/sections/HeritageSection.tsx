"use client";

import React from "react";
import { useInView } from "react-intersection-observer";
import { cn } from "@/lib/utils";

interface Milestone {
  anno: string;
  titolo: string;
  descrizione: string;
}

const MILESTONES: Milestone[] = [
  {
    anno: "1962",
    titolo: "La Fondazione",
    descrizione: "Giovanni Castiglione apre la prima officina milanese dedicata alle gran turismo italiane d'epoca.",
  },
  {
    anno: "1978",
    titolo: "Eccellenza del Restauro",
    descrizione: "Inaugurazione della sede tecnica di Via Tortona, polo d'eccellenza per le perizie artigianali certificate.",
  },
  {
    anno: "1995",
    titolo: "Riconoscimento Storico",
    descrizione: "La collezione di Classico Italiano viene insignita del patrocinio per la conservazione del patrimonio industriale.",
  },
  {
    anno: "2012",
    titolo: "Quadrilatero della Moda",
    descrizione: "Apertura dello showroom esclusivo in Via Monte Napoleone a Milano, punto di incontro per collezionisti globali.",
  },
  {
    anno: "2024",
    titolo: "Archivio Digitale",
    descrizione: "Digitalizzazione completa dell'archivio storico cartaceo con dati di produzione, registri di gara e schede tecniche.",
  },
];

export default function HeritageSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="patrimonio" className="py-24 px-6 bg-parchment/20 border-b border-border relative overflow-hidden">
      {/* Texture pergamena */}
      <div className="absolute inset-0 bg-perg-pattern pointer-events-none opacity-[0.03]" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Intestazione Sezione */}
        <div className="text-center max-w-2xl mx-auto mb-20 flex flex-col gap-3">
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-oro">
            Il Nostro Patrimonio
          </span>

          <h2 className="font-display text-4xl md:text-5xl font-light text-ink">
            Una Storia Scritta <span className="italic font-normal text-rosso">su Asfalto</span>
          </h2>
          <div className="h-[1px] w-12 bg-rosso mx-auto mt-2" />
        </div>

        {/* Timeline Responsiva: Orizzontale su desktop, Verticale su mobile */}
        <div
          ref={ref}
          className="hidden md:flex justify-between items-start relative py-12"
        >
          {/* Linea orizzontale di collegamento */}
          <div className="absolute top-[60px] left-4 right-4 h-[1px] bg-border/80 z-0" />

          {MILESTONES.map((item, idx) => (
            <div
              key={idx}
              className={cn(
                "flex-1 px-4 flex flex-col items-center text-center relative z-10 group transition-all duration-700 ease-out transform",
                inView ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
              )}
              style={{
                transitionDelay: `${idx * 150}ms`,
              }}
            >
              {/* Anno */}
              <div className="font-mono text-2xl font-light text-rosso mb-4 transition-transform duration-300 group-hover:scale-110">
                {item.anno}
              </div>

              {/* Punto di connessione */}
              <div className="h-4 w-4 rounded-full border border-oro bg-cream flex items-center justify-center mb-6 shadow-sm relative">
                <div className="h-1.5 w-1.5 rounded-full bg-oro scale-0 group-hover:scale-100 transition-transform duration-300" />
              </div>

              {/* Contenuto */}
              <h3 className="font-display text-lg font-semibold text-ink mb-2">
                {item.titolo}
              </h3>
              <p className="text-muted text-[11px] leading-relaxed max-w-[180px]">
                {item.descrizione}
              </p>
            </div>
          ))}
        </div>

        {/* Layout Mobile: Verticale */}
        <div 
          className={cn(
            "md:hidden flex flex-col gap-12 relative pl-6 border-l border-border/80 transition-all duration-1000 ease-out transform",
            inView ? "translate-x-0 opacity-100" : "-translate-x-6 opacity-0"
          )}
        >
          {MILESTONES.map((item, idx) => (
            <div key={idx} className="relative flex flex-col gap-2">
              {/* Punto di connessione mobile */}
              <div className="absolute -left-[31px] top-1.5 h-3 w-3 rounded-full border border-oro bg-cream flex items-center justify-center">
                <div className="h-1 w-1 bg-oro rounded-full" />
              </div>

              <div className="font-mono text-lg font-light text-rosso">
                {item.anno}
              </div>
              <h3 className="font-display text-xl font-semibold text-ink">
                {item.titolo}
              </h3>
              <p className="text-muted text-xs leading-relaxed">
                {item.descrizione}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
