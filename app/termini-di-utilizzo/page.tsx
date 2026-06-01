import React from "react";

export const dynamic = 'force-dynamic';

import PageTransition from "@/components/layout/PageTransition";
import { siteConfig } from "@/lib/site-config";
import SectionDivider from "@/components/ui/SectionDivider";

export default function TerminiDiUtilizzo() {
  return (
    <PageTransition>
      <main className="min-h-screen pt-32 pb-24 bg-cream">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center flex flex-col gap-3 mb-12">
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-oro font-semibold">
              Note Legali
            </span>
            <h1 className="font-display text-4xl md:text-5xl font-light text-ink">
              Termini di <span className="italic font-normal text-rosso">Utilizzo</span>
            </h1>
            <SectionDivider className="py-4" />
          </div>

          <div className="bg-ivory border border-border p-8 md:p-12 rounded-sm shadow-md flex flex-col gap-8 text-xs md:text-sm text-ink/80 leading-relaxed font-body">
            <div className="absolute inset-0 bg-perg-pattern pointer-events-none opacity-[0.02]" />

            <section className="flex flex-col gap-3">
              <h2 className="font-display text-xl font-semibold text-ink border-b border-border/40 pb-2">
                1. Accettazione dei Termini
              </h2>
              <p>
                L'accesso e l'uso del sito web <strong>{siteConfig.nome}</strong> (il "Sito") sono soggetti all'accettazione e al rispetto dei presenti Termini di Utilizzo. Accedendo al Sito, l'utente dichiara di aver letto, compreso e accettato senza riserve tali termini.
              </p>
            </section>

            <section className="flex flex-col gap-3">
              <h2 className="font-display text-xl font-semibold text-ink border-b border-border/40 pb-2">
                2. Servizi e Trattativa Riservata
              </h2>
              <p>
                Le automobili d'epoca visualizzate sul Sito appartengono alla collezione privata o a mandati fiduciari gestiti da {siteConfig.nome}. Le specifiche tecniche, le foto e le quotazioni storiche fornite hanno scopo puramente informativo e non costituiscono un'offerta vincolante. Tutte le quotazioni vengono rilasciate su "Trattativa Riservata" e formalizzate esclusivamente tramite contratto scritto firmato presso il nostro showroom di {siteConfig.indirizzi.showroom.citta}.
              </p>
            </section>

            <section className="flex flex-col gap-3">
              <h2 className="font-display text-xl font-semibold text-ink border-b border-border/40 pb-2">
                3. Proprietà Intellettuale
              </h2>
              <p>
                Tutti i contenuti presenti sul Sito — inclusi testi, cataloghi storici, grafiche, marchi, illustrazioni, layout a griglia asimmetrica e fotografie professionali delle automobili — sono di proprietà esclusiva di {siteConfig.nome} o concessi su licenza. Ne è vietata qualsiasi riproduzione, distribuzione o alterazione senza l'autorizzazione esplicita scritta del Titolare.
              </p>
            </section>

            <section className="flex flex-col gap-3">
              <h2 className="font-display text-xl font-semibold text-ink border-b border-border/40 pb-2">
                4. Responsabilità e Collegamenti Esterni
              </h2>
              <p>
                {siteConfig.nome} si impegna a garantire la correttezza delle informazioni storiche ed archivistiche pubblicate, tuttavia declina ogni responsabilità per eventuali imprecisioni tecniche o refusi editoriali. Il Sito può contenere collegamenti ipertestuali a siti esterni o mappe stradali (come Google Maps), sui quali {siteConfig.nome} non esercita alcun controllo e non si assume alcuna responsabilità circa la loro affidabilità o sicurezza.
              </p>
            </section>

            <section className="flex flex-col gap-3">
              <h2 className="font-display text-xl font-semibold text-ink border-b border-border/40 pb-2">
                5. Legge Applicabile e Foro Competente
              </h2>
              <p>
                I presenti Termini di Utilizzo sono regolati ed interpretati in conformità alla <strong>legge dello Stato Italiano</strong>. Per qualsiasi controversia derivante dall'interpretazione o esecuzione delle presenti note legali sarà competente in via esclusiva il <strong>Tribunale di Milano</strong>, in conformità con la sede legale sita in {siteConfig.indirizzi.showroom.via}, {siteConfig.indirizzi.showroom.citta}.
              </p>
            </section>

            <section className="flex flex-col gap-3">
              <h2 className="font-display text-xl font-semibold text-ink border-b border-border/40 pb-2">
                6. Contatti Legali
              </h2>
              <p>
                Per qualsiasi domanda o chiarimento riguardante i presenti Termini di Utilizzo, l'utente può inviare una comunicazione formale all'indirizzo email: <a href={`mailto:${siteConfig.contatti.email_info}`} className="text-rosso hover:underline font-mono">{siteConfig.contatti.email_info}</a>.
              </p>
            </section>
          </div>
        </div>
      </main>
    </PageTransition>
  );
}
