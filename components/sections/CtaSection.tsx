"use client";

import React from "react";
import { useInView } from "react-intersection-observer";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/lib/site-config";
import Button from "../ui/Button";

export default function CtaSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-24 px-6 bg-parchment/35 relative overflow-hidden text-center border-b border-border">
      {/* Pattern pergamena */}
      <div className="absolute inset-0 bg-perg-pattern pointer-events-none opacity-[0.05]" />
      
      {/* Glow centrale per un tocco dorato lussuoso */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[400px] w-[400px] bg-oro/5 rounded-full blur-[100px] pointer-events-none" />

      <div
        ref={ref}
        className={cn(
          "max-w-3xl mx-auto relative z-10 flex flex-col items-center gap-6 transition-all duration-1000 ease-out transform",
          inView ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
        )}
      >
        <span className="font-mono text-xs uppercase tracking-[0.3em] text-oro font-semibold">
          Esperienza Esclusiva
        </span>
        
        <h2 className="font-display text-4xl md:text-6xl font-light text-ink leading-tight">
          Vivi il Mito da Vicino. <br />
          <span className="italic font-normal text-rosso">Prenota una Visita.</span>
        </h2>
        
        <p className="text-muted text-sm max-w-lg leading-relaxed mt-2">
          Il nostro showroom di {siteConfig.indirizzi.showroom.citta} in {siteConfig.indirizzi.showroom.via} riceve collezionisti e appassionati esclusivamente su appuntamento privato per garantire la massima riservatezza.
        </p>

        <div className="flex flex-wrap gap-4 justify-center mt-6">
          <Button href="/contattaci" variant="primary" className="px-8 py-4">
            Richiedi Appuntamento
          </Button>
          <Button href={`tel:${siteConfig.contatti.telefono}`} variant="outline" className="px-8 py-4">
            Chiama Showroom
          </Button>
        </div>

        <div className="mt-8 font-mono text-[9px] uppercase tracking-widest text-muted">
          Orari feriali: {siteConfig.orari.feriali}
        </div>
      </div>
    </section>
  );
}
