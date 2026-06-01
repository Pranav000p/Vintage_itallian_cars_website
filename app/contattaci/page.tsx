"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import PageTransition from "@/components/layout/PageTransition";
import { siteConfig } from "@/lib/site-config";
import Button from "@/components/ui/Button";
import SectionDivider from "@/components/ui/SectionDivider";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Phone, Mail, Clock, MapPin, Send, CheckCircle2, FileCode2 } from "lucide-react";

// Schema di validazione in perfetto italiano
const contactFormSchema = z.object({
  nome: z.string().min(3, "Il nome deve contenere almeno 3 caratteri"),
  email: z.string().email("Inserisci un indirizzo email valido"),
  telefono: z.string().min(8, "Inserisci un numero di telefono valido"),
  interesse: z.enum(["acquisto", "vendita", "restauro", "perizia", "altro"]),
  messaggio: z.string().min(10, "Il messaggio deve contenere almeno 10 caratteri"),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

function ContattaciForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  
  // Rileva se è stata passata una vettura tramite URL Query (es. da Collezione o Hero)
  const searchParams = useSearchParams();
  const vetturaQuery = searchParams.get("vettura") || "";

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      nome: "",
      email: "",
      telefono: "",
      interesse: (searchParams.get("interesse") as any) || "acquisto",
      messaggio: vetturaQuery ? `Desidero ricevere maggiori dettagli storici e perizie d'epoca relative alla vettura ${vetturaQuery}.` : "",
    },
  });

  // Watch dei valori in tempo reale per popolare l'Invitation Telegram
  const watchedNome = watch("nome");
  const watchedEmail = watch("email");
  const watchedTelefono = watch("telefono");
  const watchedInteresse = watch("interesse");

  const onSubmit = (data: ContactFormValues) => {
    setIsLoading(true);
    // Simula invio form al server
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
      // Non resettiamo subito per consentire la visualizzazione del telegramma stampato ("SIGILLATO")
    }, 1500);
  };

  const handleResetForm = () => {
    setIsSubmitted(false);
    reset({
      nome: "",
      email: "",
      telefono: "",
      interesse: "acquisto",
      messaggio: "",
    });
  };

  // Mappa delle descrizioni dei servizi per il Telegramma
  const getInteresseLabel = (val: string) => {
    switch (val) {
      case "acquisto": return "ACQUISTO DI VETTURA";
      case "vendita": return "VALUTAZIONE & CONSIGNMENT";
      case "restauro": return "CONSULENZA RESTAURO";
      case "perizia": return "CERTIFICAZIONE DI ORIGINE";
      default: return "CONSULENZA GENERALE";
    }
  };

  return (
    <main className="min-h-screen pt-32 pb-24 bg-cream">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center flex flex-col gap-3 mb-16">
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-oro font-semibold">
            Consulenza Privata
          </span>
          <h1 className="font-display text-4xl md:text-6xl font-light text-ink">
            Richiedi un <span className="italic font-normal text-rosso">Invito Showroom</span>
          </h1>
          <p className="text-muted text-sm max-w-xl mx-auto leading-relaxed mt-1">
            Hai domande su una vettura in catalogo, desideri valutare la tua auto d'epoca o pianificare un restauro? Il nostro team di esperti è a tua disposizione.
          </p>
          <SectionDivider className="py-8" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Colonna Sinistra (7 col): Modulo di Contatto reattivo */}
          <div className="lg:col-span-7">
            <div className="bg-ivory border-double border-4 border-border p-8 md:p-10 rounded-sm shadow-lg relative">
              <div className="absolute inset-0 bg-perg-pattern pointer-events-none opacity-[0.03]" />
              
              <h3 className="font-display text-2xl font-light text-ink border-b border-border/40 pb-4 mb-8">
                Invia una <span className="italic text-rosso">Richiesta</span>
              </h3>

              {isSubmitted ? (
                <div className="flex flex-col items-center justify-center py-12 text-center gap-4 animate-fade-up">
                  <CheckCircle2 className="h-16 w-16 text-verde animate-bounce" />
                  <h4 className="font-display text-2xl font-semibold text-ink">Richiesta Inviata con Successo!</h4>
                  <p className="text-muted text-xs max-w-sm leading-relaxed">
                    Il tuo Telegramma di invito è stato sigillato ed inserito nei nostri registri. Riceverai risposta privata da Giovanni Castiglione entro 24 ore.
                  </p>
                  <Button onClick={handleResetForm} variant="outline" className="mt-4">
                    Invia un altro messaggio
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
                  {/* Nome e Cognome */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="nome" className="font-mono text-[10px] uppercase tracking-wider text-ink font-semibold">
                      Nome e Cognome *
                    </label>
                    <input
                      type="text"
                      id="nome"
                      className={`bg-cream border p-3 rounded-sm font-body text-xs text-ink focus:outline-none focus:border-rosso transition-colors ${
                        errors.nome ? "border-rosso" : "border-border"
                      }`}
                      placeholder="Es. Conte Alessandro Rossi"
                      {...register("nome")}
                      data-cursor-label="NOME"
                    />
                    {errors.nome && (
                      <span className="font-mono text-[9px] text-rosso tracking-wide mt-1">
                        {errors.nome.message}
                      </span>
                    )}
                  </div>

                  {/* Contatti Grid (Email + Telefono) */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Email */}
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="email" className="font-mono text-[10px] uppercase tracking-wider text-ink font-semibold">
                        Indirizzo Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        className={`bg-cream border p-3 rounded-sm font-body text-xs text-ink focus:outline-none focus:border-rosso transition-colors ${
                          errors.email ? "border-rosso" : "border-border"
                        }`}
                        placeholder="nome@esempio.it"
                        {...register("email")}
                        data-cursor-label="EMAIL"
                      />
                      {errors.email && (
                        <span className="font-mono text-[9px] text-rosso tracking-wide mt-1">
                          {errors.email.message}
                        </span>
                      )}
                    </div>

                    {/* Telefono */}
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="telefono" className="font-mono text-[10px] uppercase tracking-wider text-ink font-semibold">
                        Numero di Telefono *
                      </label>
                      <input
                        type="tel"
                        id="telefono"
                        className={`bg-cream border p-3 rounded-sm font-body text-xs text-ink focus:outline-none focus:border-rosso transition-colors ${
                          errors.telefono ? "border-rosso" : "border-border"
                        }`}
                        placeholder="+39 333 1234567"
                        {...register("telefono")}
                        data-cursor-label="TELEFONO"
                      />
                      {errors.telefono && (
                        <span className="font-mono text-[9px] text-rosso tracking-wide mt-1">
                          {errors.telefono.message}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Interesse */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="interesse" className="font-mono text-[10px] uppercase tracking-wider text-ink font-semibold">
                      Servizio di Interesse *
                    </label>
                    <select
                      id="interesse"
                      className="bg-cream border border-border p-3 rounded-sm font-body text-xs text-ink focus:outline-none focus:border-rosso cursor-pointer transition-colors"
                      {...register("interesse")}
                      data-cursor-label="SERVIZIO"
                    >
                      <option value="acquisto">Acquisto di una Vettura Storica</option>
                      <option value="vendita">Vendita & Consignment Storico</option>
                      <option value="restauro">Consulenza Restauro Conservativo</option>
                      <option value="perizia">Perizia e Valutazione ASI Gold</option>
                      <option value="altro">Altro</option>
                    </select>
                  </div>

                  {/* Messaggio */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="messaggio" className="font-mono text-[10px] uppercase tracking-wider text-ink font-semibold">
                      Il Tuo Messaggio *
                    </label>
                    <textarea
                      id="messaggio"
                      rows={5}
                      className={`bg-cream border p-3 rounded-sm font-body text-xs text-ink focus:outline-none focus:border-rosso transition-colors resize-none ${
                        errors.messaggio ? "border-rosso" : "border-border"
                      }`}
                      placeholder="Descrivi dettagliatamente il tipo di vettura o assistenza ricercata..."
                      {...register("messaggio")}
                      data-cursor-label="TESTO"
                    />
                    {errors.messaggio && (
                      <span className="font-mono text-[9px] text-rosso tracking-wide mt-1">
                        {errors.messaggio.message}
                      </span>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="relative inline-flex items-center justify-center font-mono text-xs uppercase tracking-widest transition-all duration-300 py-3.5 px-6 overflow-hidden border bg-rosso text-cream border-rosso hover:bg-cream hover:text-rosso hover:border-rosso disabled:opacity-50 disabled:cursor-not-allowed mt-4"
                    data-cursor-label="INVIA"
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      {isLoading ? "Sigillatura Telegramma..." : "Invia Telegramma d'Invito"}
                      {!isLoading && <Send className="h-3.5 w-3.5" />}
                    </span>
                    {!isLoading && (
                      <span className="absolute inset-0 w-full h-full bg-cream transition-transform duration-300 transform scale-x-0 origin-left z-0 hover:scale-x-100" />
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Colonna Destra (5 col): Telegramma Storico Generato in Tempo Reale */}
          <div className="lg:col-span-5 flex flex-col gap-10">
            
            {/* Telegram Component Card */}
            <div className="relative bg-parchment/65 border-dashed border-2 border-border/80 p-6 md:p-8 rounded-sm shadow-md overflow-hidden transition-all duration-300">
              {/* Texture carta d'epoca */}
              <div className="absolute inset-0 bg-perg-pattern pointer-events-none opacity-[0.04]" />
              
              {/* Wax Seal Stamp (Sigillo in Ceralacca) */}
              <div className="absolute top-6 right-6 z-20 select-none pointer-events-none">
                {isSubmitted ? (
                  /* Wax seal timbrato ad alta intensità Rosso Ferrari */
                  <div className="h-16 w-16 md:h-20 md:w-20 bg-rosso rounded-full flex flex-col items-center justify-center border-2 border-double border-cream/40 shadow-md text-cream font-mono text-[5px] md:text-[7px] text-center font-bold tracking-widest uppercase rotate-[-12deg] animate-stamp-pop">
                    <span>SIGILLATO</span>
                    <span className="text-[12px] my-0.5">✦</span>
                    <span>VALIDATO</span>
                  </div>
                ) : (
                  /* Wax seal spento tratteggiato prima dell'invio */
                  <div className="h-16 w-16 md:h-20 md:w-20 border border-dashed border-border/60 rounded-full flex flex-col items-center justify-center text-border/60 font-mono text-[5px] md:text-[6px] text-center font-bold uppercase rotate-[-8deg] opacity-60">
                    <span>DA SIGILLARE</span>
                    <span className="text-[8px] my-0.5">⚙</span>
                    <span>INVITO</span>
                  </div>
                )}
              </div>

              {/* Intestazione Telegramma */}
              <div className="border-b border-border/60 pb-4 mb-6">
                <div className="flex items-center gap-1.5 mb-1">
                  <FileCode2 className="h-4 w-4 text-oro shrink-0" />
                  <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-oro font-bold">
                    MINISTERO DELLE POSTE E TELEGRAFI
                  </span>
                </div>
                <h4 className="font-mono text-[14px] font-bold text-ink uppercase tracking-wider">
                  TELEGRAMMA DI CONVOCAZIONE PRIVATA
                </h4>
              </div>

                {/* Campi e testi dinamici del Telegramma */}
                <div className="flex flex-col gap-4 font-mono text-[11px] leading-relaxed text-ink/90 uppercase tracking-wide">
                  <div className="flex justify-between border-b border-border/20 pb-1">
                    <span className="text-muted">MITTENTE:</span>
                    <span className="font-bold text-rosso">CLASSICO ITALIANO MILANO</span>
                  </div>
                  
                  <div className="flex justify-between border-b border-border/20 pb-1">
                    <span className="text-muted">DESTINATARIO:</span>
                    <span className="font-bold border-b border-dotted border-border/80 grow text-right">
                      {watchedNome ? watchedNome : "..................................."}
                    </span>
                  </div>

                  <div className="flex justify-between border-b border-border/20 pb-1">
                    <span className="text-muted">TELEFONO:</span>
                    <span className="font-bold border-b border-dotted border-border/80 grow text-right">
                      {watchedTelefono ? watchedTelefono : "..................................."}
                    </span>
                  </div>

                  <div className="flex justify-between border-b border-border/20 pb-1">
                    <span className="text-muted">EMAIL RECAPITO:</span>
                    <span className="font-bold border-b border-dotted border-border/80 grow text-right select-all lowercase">
                      {watchedEmail ? watchedEmail : "..................................."}
                    </span>
                  </div>

                  <div className="flex justify-between border-b border-border/20 pb-1">
                    <span className="text-muted">RICHIESTA SERVIZIO:</span>
                    <span className="font-bold text-oro">
                      {getInteresseLabel(watchedInteresse)}
                    </span>
                  </div>

                  {vetturaQuery && (
                    <div className="flex justify-between border-b border-border/20 pb-1">
                      <span className="text-muted">VETTURA FOCUS:</span>
                      <span className="font-bold text-rosso">{vetturaQuery}</span>
                    </div>
                  )}

                  <div className="mt-4 bg-cream/30 p-3 border border-border/40 rounded-sm leading-relaxed text-[10px]">
                    <p className="text-muted mb-2 font-bold text-[8px] tracking-widest">REGISTRI NOTE D'UFFICIO:</p>
                    <p className="italic">
                      STOP · CONVOCAZIONE PRESSO LO SHOWROOM CENTRALE DI VIA MONTE NAPOLEONE · ACCESSO RIGIDAMENTE SU APPUNTAMENTO PRIVATO · CERTIFICAZIONE ASI E REGISTRO Colombo INCLUSI · STOP
                    </p>
                  </div>
                </div>

                {/* Piè di pagina coupon */}
                <div className="border-t border-border/50 pt-4 mt-6 flex justify-between items-center font-mono text-[8px] text-muted">
                  <span>SERIE N: CL-{(new Date().getFullYear())}-{(Math.floor(1000 + Math.random() * 9000))}</span>
                  <span>MILANO CENTRALE</span>
                </div>
              </div>

              {/* Box Info Ufficiali Fisiche */}
              <div className="flex flex-col gap-6 bg-ivory border border-border p-6 rounded-sm shadow-md relative">
                <div className="absolute inset-0 bg-perg-pattern pointer-events-none opacity-[0.03]" />
                
                <h3 className="font-display text-xl font-light text-ink border-b border-border/40 pb-3">
                  Sedi & <span className="italic text-rosso">Recapiti</span>
                </h3>

                <div className="flex flex-col gap-4 text-xs text-muted font-mono">
                  <div className="flex items-start gap-2">
                    <MapPin className="h-3.5 w-3.5 text-oro shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold block text-ink text-[9px] uppercase tracking-wider">Showroom Milano</span>
                      <a href={siteConfig.indirizzi.showroom.maps_url} target="_blank" rel="noopener" className="hover:text-rosso transition-colors text-[10px]">
                        {siteConfig.indirizzi.showroom.completo}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-2">
                    <Phone className="h-3.5 w-3.5 text-oro shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold block text-ink text-[9px] uppercase tracking-wider">Telefono</span>
                      <a href={`tel:${siteConfig.contatti.telefono}`} className="hover:text-rosso transition-colors text-[10px]">
                        {siteConfig.contatti.telefono}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-2">
                    <Clock className="h-3.5 w-3.5 text-oro shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold block text-ink text-[9px] uppercase tracking-wider">Orari Ricevimento</span>
                      <span className="text-[10px]">{siteConfig.orari.feriali}</span>
                    </div>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>
      </main>
    );
}

export default function Contattaci() {
  return (
    <PageTransition>
      <Suspense fallback={
        <main className="min-h-screen pt-32 pb-24 bg-cream flex items-center justify-center">
          <div className="flex flex-col items-center gap-4 text-center">
            <div className="h-10 w-10 rounded-full border-2 border-dashed border-oro animate-spin" />
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-oro animate-pulse">
              Caricamento Telegramma...
            </span>
          </div>
        </main>
      }>
        <ContattaciForm />
      </Suspense>
    </PageTransition>
  );
}
