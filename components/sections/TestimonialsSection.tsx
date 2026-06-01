"use client";

import React from "react";
import { useInView } from "react-intersection-observer";
import { cn } from "@/lib/utils";

interface Testimonial {
  citazione: string;
  autore: string;
  luogo: string;
  ruolo: string;
  auto: string;
  data: string;
  span?: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    citazione: "Il livello di accuratezza nel restauro filologico del mio Ferrari 275 GTB è stato semplicemente sbalorditivo. Hanno saputo preservare la patina e l'anima originale del motore V12 Colombo, riconsegnandomi un capolavoro da concorso d'eleganza.",
    autore: "Alessandro Beltrame",
    luogo: "Londra, UK",
    ruolo: "Collezionista GTO",
    auto: "Ferrari 275 GTB",
    data: "Maggio 2025",
    span: "md:col-span-2",
  },
  {
    citazione: "Cercavo un'Alfa Romeo Giulietta Spider che avesse una storia documentata e trasparente. Lo staff di Classico Italiano mi ha accompagnato passo dopo passo, dandomi accesso a disegni tecnici originali dell'epoca.",
    autore: "Sophia Kael",
    luogo: "Monaco di Baviera",
    ruolo: "Appassionata Spider",
    auto: "Alfa Romeo Giulietta Spider",
    data: "Ottobre 2024",
  },
  {
    citazione: "La perizia storica sul mio telaio sportivo Maserati è stata dettagliatissima. Hanno rintracciato le vecchie targhe di gara degli anni '60, confermando l'autenticità totale e raddoppiando il valore stimato della vettura.",
    autore: "Matteo Visentin",
    luogo: "Milano, Italia",
    ruolo: "Membro ASI Gold",
    auto: "Maserati Ghibli 1967",
    data: "Gennaio 2026",
  },
];

export default function TestimonialsSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-24 px-6 bg-cream border-b border-border">
      <div className="max-w-7xl mx-auto">
        
        {/* Intestazione */}
        <div className="text-center max-w-2xl mx-auto mb-16 flex flex-col gap-3">
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-oro">
            Storie di Collezionisti
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-light text-ink">
            Esperienze <span className="italic font-normal text-rosso">da Sogno</span>
          </h2>
          <div className="h-[1px] w-12 bg-rosso mx-auto mt-2" />
        </div>

        {/* Bento Grid Asimmetrica */}
        <div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {TESTIMONIALS.map((item, idx) => (
            <div
              key={idx}
              className={cn(
                "group relative bg-ivory border border-border/80 p-8 rounded-sm shadow-md shadow-ink/5 hover:shadow-lg transition-all duration-700 ease-out transform flex flex-col justify-between overflow-hidden min-h-[250px]",
                inView ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0",
                item.span || ""
              )}
              style={{
                transitionDelay: `${idx * 150}ms`,
              }}
            >
              {/* Pattern pergamena */}
              <div className="absolute inset-0 bg-perg-pattern pointer-events-none opacity-[0.03]" />
              
              {/* Effetto timbro postale vintage nell'angolo in alto a destra */}
              <div className="absolute top-4 right-4 h-12 w-12 rounded-full border-2 border-dashed border-oro/30 flex items-center justify-center font-mono text-[7px] text-oro/40 rotate-12 select-none pointer-events-none">
                CLASSICO
              </div>

              {/* Citazione */}
              <p className="font-display text-lg italic text-ink/90 leading-relaxed mb-8 relative z-10">
                “{item.citazione}”
              </p>

              {/* Autore e Dettagli */}
              <div className="border-t border-border/40 pt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 relative z-10">
                <div>
                  <h4 className="font-display font-bold text-ink text-sm">
                    {item.autore}
                  </h4>
                  <p className="font-mono text-[9px] uppercase tracking-wider text-muted mt-0.5">
                    {item.ruolo} · {item.luogo}
                  </p>
                </div>

                <div className="text-right sm:text-right flex flex-col items-end">
                  <span className="font-mono text-[9px] uppercase tracking-widest text-rosso font-semibold px-2 py-0.5 border border-rosso/20 bg-rosso/5 rounded-sm">
                    {item.auto}
                  </span>
                  <span className="font-mono text-[8px] text-muted mt-1">
                    {item.data}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
