"use client";

import React from "react";
import { useInView } from "react-intersection-observer";
import { cn } from "@/lib/utils";
import SectionDivider from "../ui/SectionDivider";

export default function IntroSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-24 px-6 bg-cream flex flex-col items-center justify-center text-center relative overflow-hidden">
      {/* Elemento filigrana decorativo */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-display text-[15rem] text-border/10 select-none pointer-events-none font-bold italic">
        Italia
      </div>

      <div
        ref={ref}
        className={cn(
          "max-w-3xl mx-auto relative z-10 flex flex-col items-center gap-6 transition-all duration-1000 ease-out transform",
          inView ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
        )}
      >
        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-oro">
          La Nostra Filosofia
        </span>
        
        <h2 className="font-display text-3xl md:text-5xl font-light italic leading-snug text-ink">
          “Un'automobile d'epoca italiana non è semplicemente un mezzo di trasporto, ma una scultura in movimento, un'opera d'arte creata per sfidare il tempo.”
        </h2>
        
        <div className="h-[1px] w-16 bg-rosso/60 my-4" />
        
        <p className="font-mono text-xs uppercase tracking-widest text-muted">
          Archivio Storico Classico Italiano
        </p>

        <SectionDivider withStar={true} className="w-full max-w-md py-6" />
      </div>
    </section>
  );
}
