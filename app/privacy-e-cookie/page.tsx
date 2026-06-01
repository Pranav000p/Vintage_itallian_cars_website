import React from "react";

export const dynamic = 'force-dynamic';

import PageTransition from "@/components/layout/PageTransition";
import { siteConfig } from "@/lib/site-config";
import SectionDivider from "@/components/ui/SectionDivider";

export default function PrivacyECookie() {
  return (
    <PageTransition>
      <main className="min-h-screen pt-32 pb-24 bg-cream">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center flex flex-col gap-3 mb-12">
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-oro font-semibold">
              Regolamento UE 2016/679
            </span>
            <h1 className="font-display text-4xl md:text-5xl font-light text-ink">
              Privacy & <span className="italic font-normal text-rosso">Cookie Policy</span>
            </h1>
            <SectionDivider className="py-4" />
          </div>

          <div className="bg-ivory border border-border p-8 md:p-12 rounded-sm shadow-md flex flex-col gap-8 text-xs md:text-sm text-ink/80 leading-relaxed font-body">
            <div className="absolute inset-0 bg-perg-pattern pointer-events-none opacity-[0.02]" />

            <section className="flex flex-col gap-3">
              <h2 className="font-display text-xl font-semibold text-ink border-b border-border/40 pb-2">
                1. Titolare del Trattamento dei Dati
              </h2>
              <p>
                Il Titolare del trattamento dei dati raccolti tramite questo Sito è <strong>{siteConfig.nome}</strong>, con sede legale e showroom in <em>{siteConfig.indirizzi.showroom.completo}</em>. Per qualsiasi richiesta relativa alla privacy o per esercitare i tuoi diritti, puoi contattare il nostro Responsabile della Protezione dei Dati (DPO) all'indirizzo email: <a href={`mailto:${siteConfig.contatti.email_info}`} className="text-rosso hover:underline font-mono">{siteConfig.contatti.email_info}</a>.
              </p>
            </section>

            <section className="flex flex-col gap-3">
              <h2 className="font-display text-xl font-semibold text-ink border-b border-border/40 pb-2">
                2. Tipologia di Dati Raccolti
              </h2>
              <p>
                Raccogliamo ed elaboriamo esclusivamente i dati personali forniti volontariamente dagli utenti nel modulo della pagina "Contattaci", ovvero: <strong>Nome, Cognome, Indirizzo Email, Numero di Telefono e opzione di Interesse Tecnico</strong>. Raccogliamo inoltre dati di navigazione tecnici anonimi necessari per il corretto funzionamento del Sito (come l'indirizzo IP, dati del browser e informazioni di scorrimento tramite il sistema di smooth scroll Lenis).
              </p>
            </section>

            <section className="flex flex-col gap-3">
              <h2 className="font-display text-xl font-semibold text-ink border-b border-border/40 pb-2">
                3. Finalità e Base Giuridica del Trattamento
              </h2>
              <p>
                I dati raccolti vengono trattati per le seguenti finalità:
              </p>
              <ul className="list-disc pl-6 flex flex-col gap-1.5 mt-1">
                <li><strong>Risposta alle richieste di informazioni:</strong> per fornirti cataloghi storici, schede d'epoca e preventivi personalizzati basati sulla tua opzione di interesse (acquisto, vendita, restauro o perizia).</li>
                <li><strong>Base Giuridica:</strong> il trattamento si basa sull'esecuzione di misure precontrattuali o contrattuali adottate su richiesta dell'interessato (Art. 6 par. 1 lett. b GDPR) e sul legittimo interesse del titolare a rispondere alle richieste dei collezionisti.</li>
              </ul>
            </section>

            <section className="flex flex-col gap-3">
              <h2 className="font-display text-xl font-semibold text-ink border-b border-border/40 pb-2">
                4. Conservazione dei Dati e Sicurezza
              </h2>
              <p>
                I dati personali saranno conservati per il tempo strettamente necessario all'evasione della tua richiesta o in conformità agli obblighi di legge (massimo 10 anni in caso di transazioni commerciali o mandati storici). {siteConfig.nome} adotta rigorose misure di sicurezza tecniche ed organizzative, come la crittografia HTTPS dei dati e la protezione dei server, al fine di prevenire accessi non autorizzati o perdite accidentali di dati.
              </p>
            </section>

            <section className="flex flex-col gap-3">
              <h2 className="font-display text-xl font-semibold text-ink border-b border-border/40 pb-2">
                5. Diritti dell'Interessato (GDPR)
              </h2>
              <p>
                In conformità con il Regolamento Europeo 2016/679, hai il diritto in qualsiasi momento di:
              </p>
              <ul className="list-disc pl-6 flex flex-col gap-1.5 mt-1">
                <li>Accedere ai tuoi dati personali in nostro possesso (Art. 15 GDPR).</li>
                <li>Chiedere la rettifica di dati inesatti o l'integrazione di quelli incompleti (Art. 16 GDPR).</li>
                <li>Chiedere la cancellazione ("Diritto all'oblio") dei tuoi dati (Art. 17 GDPR).</li>
                <li>Opporti al trattamento o chiederne la limitazione (Art. 18 e 21 GDPR).</li>
                <li>Esercitare il diritto alla portabilità dei dati (Art. 20 GDPR).</li>
              </ul>
              <p className="mt-2">
                Puoi esercitare tali diritti inviando un'email a <a href={`mailto:${siteConfig.contatti.email_info}`} className="text-rosso hover:underline font-mono">{siteConfig.contatti.email_info}</a>. Hai inoltre il diritto di proporre reclamo all'Autorità Garante per la Protezione dei Dati Personali italiana.
              </p>
            </section>

            <section className="flex flex-col gap-3">
              <h2 className="font-display text-xl font-semibold text-ink border-b border-border/40 pb-2">
                6. Cookie Policy e Monitoraggio
              </h2>
              <p>
                Questo Sito utilizza esclusivamente <strong>cookie tecnici e analitici anonimi</strong> necessari per consentire la corretta navigazione, ottimizzare l'esperienza tipografica ed eseguire misurazioni aggregate e anonime sull'utilizzo delle pagine (tramite Google Fonts o analytics autogestiti). Non utilizziamo alcun cookie di profilazione o tracciamento invasivo per scopi pubblicitari. Puoi gestire e disabilitare i cookie direttamente dalle impostazioni del tuo browser in qualsiasi momento.
              </p>
            </section>
          </div>
        </div>
      </main>
    </PageTransition>
  );
}
