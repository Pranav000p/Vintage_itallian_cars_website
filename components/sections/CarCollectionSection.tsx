"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Badge from "../ui/Badge";
import Button from "../ui/Button";
import { cn } from "@/lib/utils";
import { X, FileText, Settings, Award, Layers } from "lucide-react";

interface Car {
  id: string;
  marca: string;
  modello: string;
  anno: number;
  motore: string;
  potenza: string;
  prezzo: string;
  immagine: string;
  descrizione: string;
  // Dati di registro aggiuntivi per il Ledger di Fabbrica
  chassis: string;
  engineNum: string;
  carburetors: string;
  weight: string;
  wheelbase: string;
  productionQty: string;
  historyLog: string[];
}

const CARS_DATA: Car[] = [
  {
    id: "ferrari-250-gto",
    marca: "Ferrari",
    modello: "250 GTO",
    anno: 1962,
    motore: "V12 Colombo · 3.0 Litri",
    potenza: "300 CV",
    prezzo: "Trattativa Riservata",
    immagine: "/images/hero/hero-car.png",
    descrizione: "La quintessenza del collezionismo automobilistico mondiale. Solo 36 esemplari prodotti, vincitrice di tre campionati del mondo consecutivi GT.",
    chassis: "3757GT",
    engineNum: "168Comp/62",
    carburetors: "6x Weber 38 DCN",
    weight: "950 kg (a secco)",
    wheelbase: "2400 mm",
    productionQty: "36 unità",
    historyLog: [
      "24 Ore di Le Mans 1962 (2° Assoluto, 1° Classe GT)",
      "Targa Florio 1963 (1° di Classe GT)",
      "Tourist Trophy Goodwood 1962 (Vittoria di Innes Ireland)"
    ]
  },
  {
    id: "lamborghini-miura",
    marca: "Lamborghini",
    modello: "Miura SV",
    anno: 1968,
    motore: "V12 Trasversale · 4.0 Litri",
    potenza: "385 CV",
    prezzo: "Trattativa Riservata",
    immagine: "/images/cars/lamborghini-miura.png",
    descrizione: "La prima vera supercar con motore centrale posteriore trasversale. Icona rivoluzionaria disegnata da Marcello Gandini per Bertone.",
    chassis: "4824SV",
    engineNum: "30612",
    carburetors: "4x Weber 40 IDL 3C",
    weight: "1245 kg (a secco)",
    wheelbase: "2500 mm",
    productionQty: "150 unità (SV)",
    historyLog: [
      "Salone dell'Automobile di Ginevra 1971 (Presentazione Ufficiale SV)",
      "Vincitrice Concorso d'Eleganza Villa d'Este 2018 (Best of Show)",
      "Certificazione Lamborghini Polo Storico 2021"
    ]
  },
  {
    id: "ferrari-275-gtb",
    marca: "Ferrari",
    modello: "275 GTB",
    anno: 1965,
    motore: "V12 Transassiale · 3.3 Litri",
    potenza: "280 CV",
    prezzo: "Trattativa Riservata",
    immagine: "/images/cars/ferrari-275-gtb.png",
    descrizione: "Capolavoro assoluto firmato Pininfarina. Una delle berlinette gran turismo stradali più eleganti, veloci e desiderate di sempre.",
    chassis: "07851GT",
    engineNum: "213/GTB",
    carburetors: "3x Weber 40 DCZ6 (o 6x opzionali)",
    weight: "1100 kg (a secco)",
    wheelbase: "2400 mm",
    productionQty: "450 unità (2-biellette)",
    historyLog: [
      "Rally di Monte Carlo 1966 (Ufficiale Scuderia Ferrari)",
      "1000 km di Monza 1965 (3° Assoluto)",
      "Certificazione di autenticità Classiche Ferrari (Libro Rosso)"
    ]
  },
];

export default function CarCollectionSection() {
  const [activeLedgerCar, setActiveLedgerCar] = useState<Car | null>(null);

  // Esc chiude il modal del registro
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveLedgerCar(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <section id="collezione" className="py-24 px-6 bg-cream border-b border-border relative overflow-hidden">
      {/* Texture pergamena */}
      <div className="absolute inset-0 bg-perg-pattern pointer-events-none opacity-[0.03]" />

      <div className="max-w-7xl mx-auto">
        
        {/* Intestazione Sezione */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 border-b border-border/40 pb-8 relative z-10">
          <div className="flex flex-col gap-3">
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-oro">
              Capolavori Disponibili
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-light text-ink">
              La Collezione <span className="italic font-normal text-rosso">Privata</span>
            </h2>
          </div>
          <p className="text-muted text-xs md:text-sm max-w-md leading-relaxed">
            Ogni vettura presente nella nostra collezione è stata sottoposta a un processo di verifica storica pluriennale e a restauro conservativo certificato.
          </p>
        </div>

        {/* Griglia Asimmetrica Stile Magazine */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 relative z-10">
          
          {/* Card 1: Ferrari 250 GTO (Spanning full-width equivalent) */}
          <div className="md:col-span-2">
            <div className="group relative bg-ivory border border-border/80 overflow-hidden flex flex-col lg:flex-row items-center rounded-sm transition-all duration-300 hover:shadow-xl hover:shadow-ink/5">
              <div className="absolute inset-0 bg-perg-pattern pointer-events-none opacity-[0.03]" />
              
              {/* Filigrana Disegno Meccanico in SVG (Blueprint) */}
              <svg 
                className="absolute right-0 bottom-0 w-80 h-80 text-oro/5 pointer-events-none transition-all duration-700 ease-out transform group-hover:scale-110 group-hover:rotate-12 group-hover:text-oro/15 z-0" 
                viewBox="0 0 100 100" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="0.15"
              >
                <circle cx="50" cy="50" r="45" strokeDasharray="1 1" />
                <circle cx="50" cy="50" r="35" />
                <circle cx="50" cy="50" r="12" />
                <line x1="5" y1="50" x2="95" y2="50" />
                <line x1="50" y1="5" x2="50" y2="95" />
                <rect x="20" y="20" width="60" height="60" strokeDasharray="2 2" />
                <path d="M 50,15 L 55,25 L 45,25 Z M 50,85 L 55,75 L 45,75 Z M 15,50 L 25,55 L 25,45 Z M 85,50 L 75,55 L 75,45 Z" />
              </svg>
              
              {/* Immagine */}
              <div className="w-full lg:w-3/5 p-8 lg:p-12 relative flex items-center justify-center bg-parchment/20 z-10">
                <span className="absolute top-6 left-6 font-mono text-2xl font-light text-border/60 select-none">
                  {CARS_DATA[0].anno}
                </span>
                <div className="relative w-full aspect-[16/10] transition-transform duration-500 group-hover:scale-105">
                  <Image
                    src={CARS_DATA[0].immagine}
                    alt={`${CARS_DATA[0].marca} ${CARS_DATA[0].modello}`}
                    fill
                    className="object-contain drop-shadow-[0_15px_30px_rgba(28,20,9,0.14)]"
                  />
                </div>
              </div>

              {/* Dettagli */}
              <div className="w-full lg:w-2/5 p-8 lg:p-12 flex flex-col gap-6 border-t lg:border-t-0 lg:border-l border-border/65 z-10 bg-ivory/80 backdrop-blur-[1px]">
                <div className="flex flex-col gap-2">
                  <Badge variant="rosso">{CARS_DATA[0].marca}</Badge>
                  <h3 className="font-display text-3xl font-light text-ink">
                    {CARS_DATA[0].modello}
                  </h3>
                </div>

                <p className="text-muted text-xs leading-relaxed">
                  {CARS_DATA[0].descrizione}
                </p>

                <div className="grid grid-cols-2 gap-4 border-y border-border/40 py-4 font-mono text-[10px] uppercase tracking-wider text-ink/80">
                  <div>
                    <span className="text-muted block mb-0.5">Motore</span>
                    <strong>{CARS_DATA[0].motore}</strong>
                  </div>
                  <div>
                    <span className="text-muted block mb-0.5">Potenza</span>
                    <strong>{CARS_DATA[0].potenza}</strong>
                  </div>
                </div>

                <div className="flex items-center justify-between gap-4 mt-2">
                  <button
                    onClick={() => setActiveLedgerCar(CARS_DATA[0])}
                    className="flex items-center gap-1.5 font-mono text-[9px] uppercase tracking-widest text-oro hover:text-rosso transition-colors font-bold border border-oro/30 hover:border-rosso py-1.5 px-3 rounded-sm bg-cream/10"
                    data-cursor-label="LEDGER"
                  >
                    <FileText className="h-3 w-3" /> Registro Fabbrica
                  </button>
                  <span className="font-mono text-xs uppercase tracking-widest text-rosso font-semibold">
                    {CARS_DATA[0].prezzo}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: Lamborghini Miura (Asymmetric Left) */}
          <div className="flex flex-col justify-between">
            <div className="group relative bg-ivory border border-border/80 overflow-hidden flex flex-col rounded-sm h-full justify-between transition-all duration-300 hover:shadow-lg hover:shadow-ink/5">
              <div className="absolute inset-0 bg-perg-pattern pointer-events-none opacity-[0.03]" />
              
              {/* Filigrana Disegno Meccanico in SVG (Blueprint) */}
              <svg 
                className="absolute right-0 bottom-0 w-72 h-72 text-oro/5 pointer-events-none transition-all duration-700 ease-out transform group-hover:scale-110 group-hover:rotate-6 group-hover:text-oro/15 z-0" 
                viewBox="0 0 100 100" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="0.15"
              >
                <circle cx="50" cy="50" r="40" />
                <circle cx="30" cy="50" r="10" />
                <circle cx="70" cy="50" r="10" />
                <line x1="5" y1="50" x2="95" y2="50" />
                <rect x="15" y="15" width="70" height="70" strokeDasharray="1 1" />
              </svg>

              {/* Immagine */}
              <div className="w-full p-8 relative flex items-center justify-center bg-parchment/15 min-h-[300px] z-10">
                <span className="absolute top-6 left-6 font-mono text-2xl font-light text-border/60 select-none">
                  {CARS_DATA[1].anno}
                </span>
                <div className="relative w-full aspect-[16/10] transition-transform duration-500 group-hover:scale-105">
                  <Image
                    src={CARS_DATA[1].immagine}
                    alt={`${CARS_DATA[1].marca} ${CARS_DATA[1].modello}`}
                    fill
                    className="object-contain drop-shadow-[0_12px_20px_rgba(28,20,9,0.12)]"
                  />
                </div>
              </div>

              {/* Dettagli */}
              <div className="p-8 flex flex-col gap-6 border-t border-border/60 bg-ivory/90 backdrop-blur-[1px] z-10">
                <div className="flex flex-col gap-2">
                  <Badge variant="gold">{CARS_DATA[1].marca}</Badge>
                  <h3 className="font-display text-2xl font-light text-ink">
                    {CARS_DATA[1].modello}
                  </h3>
                </div>

                <p className="text-muted text-xs leading-relaxed min-h-[60px]">
                  {CARS_DATA[1].descrizione}
                </p>

                <div className="grid grid-cols-2 gap-4 border-y border-border/40 py-3.5 font-mono text-[10px] uppercase tracking-wider text-ink/80">
                  <div>
                    <span className="text-muted block mb-0.5">Motore</span>
                    <strong>{CARS_DATA[1].motore}</strong>
                  </div>
                  <div>
                    <span className="text-muted block mb-0.5">Potenza</span>
                    <strong>{CARS_DATA[1].potenza}</strong>
                  </div>
                </div>

                <div className="flex items-center justify-between gap-4 mt-2">
                  <button
                    onClick={() => setActiveLedgerCar(CARS_DATA[1])}
                    className="flex items-center gap-1.5 font-mono text-[9px] uppercase tracking-widest text-oro hover:text-rosso transition-colors font-bold border border-oro/30 hover:border-rosso py-1.5 px-3 rounded-sm bg-cream/10"
                    data-cursor-label="LEDGER"
                  >
                    <FileText className="h-3 w-3" /> Registro Fabbrica
                  </button>
                  <span className="font-mono text-xs uppercase tracking-widest text-rosso font-semibold">
                    {CARS_DATA[1].prezzo}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Card 3: Ferrari 275 GTB (Asymmetric Right - offset vertically) */}
          <div className="flex flex-col justify-between lg:translate-y-8">
            <div className="group relative bg-ivory border border-border/80 overflow-hidden flex flex-col rounded-sm h-full justify-between transition-all duration-300 hover:shadow-lg hover:shadow-ink/5">
              <div className="absolute inset-0 bg-perg-pattern pointer-events-none opacity-[0.03]" />
              
              {/* Filigrana Disegno Meccanico in SVG (Blueprint) */}
              <svg 
                className="absolute right-0 bottom-0 w-72 h-72 text-oro/5 pointer-events-none transition-all duration-700 ease-out transform group-hover:scale-110 group-hover:rotate-6 group-hover:text-oro/15 z-0" 
                viewBox="0 0 100 100" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="0.15"
              >
                <circle cx="50" cy="50" r="40" />
                <rect x="25" y="25" width="50" height="50" strokeDasharray="3 3" />
                <line x1="50" y1="5" x2="50" y2="95" strokeDasharray="1 1" />
                <line x1="5" y1="50" x2="95" y2="50" strokeDasharray="1 1" />
                <circle cx="50" cy="50" r="2" fill="currentColor" />
              </svg>

              {/* Immagine */}
              <div className="w-full p-8 relative flex items-center justify-center bg-parchment/15 min-h-[300px] z-10">
                <span className="absolute top-6 left-6 font-mono text-2xl font-light text-border/60 select-none">
                  {CARS_DATA[2].anno}
                </span>
                <div className="relative w-full aspect-[16/10] transition-transform duration-500 group-hover:scale-105">
                  <Image
                    src={CARS_DATA[2].immagine}
                    alt={`${CARS_DATA[2].marca} ${CARS_DATA[2].modello}`}
                    fill
                    className="object-contain drop-shadow-[0_12px_20px_rgba(28,20,9,0.12)]"
                  />
                </div>
              </div>

              {/* Dettagli */}
              <div className="p-8 flex flex-col gap-6 border-t border-border/60 bg-ivory/90 backdrop-blur-[1px] z-10">
                <div className="flex flex-col gap-2">
                  <Badge variant="rosso">{CARS_DATA[2].marca}</Badge>
                  <h3 className="font-display text-2xl font-light text-ink">
                    {CARS_DATA[2].modello}
                  </h3>
                </div>

                <p className="text-muted text-xs leading-relaxed min-h-[60px]">
                  {CARS_DATA[2].descrizione}
                </p>

                <div className="grid grid-cols-2 gap-4 border-y border-border/40 py-3.5 font-mono text-[10px] uppercase tracking-wider text-ink/80">
                  <div>
                    <span className="text-muted block mb-0.5">Motore</span>
                    <strong>{CARS_DATA[2].motore}</strong>
                  </div>
                  <div>
                    <span className="text-muted block mb-0.5">Potenza</span>
                    <strong>{CARS_DATA[2].potenza}</strong>
                  </div>
                </div>

                <div className="flex items-center justify-between gap-4 mt-2">
                  <button
                    onClick={() => setActiveLedgerCar(CARS_DATA[2])}
                    className="flex items-center gap-1.5 font-mono text-[9px] uppercase tracking-widest text-oro hover:text-rosso transition-colors font-bold border border-oro/30 hover:border-rosso py-1.5 px-3 rounded-sm bg-cream/10"
                    data-cursor-label="LEDGER"
                  >
                    <FileText className="h-3 w-3" /> Registro Fabbrica
                  </button>
                  <span className="font-mono text-xs uppercase tracking-widest text-rosso font-semibold">
                    {CARS_DATA[2].prezzo}
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* --- MODAL DEL REGISTRO DI FABBRICA INTERATTIVO (LEDGER) --- */}
      {activeLedgerCar && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0a0907]/75 backdrop-blur-sm animate-fade-up select-text">
          <div 
            className="relative w-full max-w-2xl bg-cream border-double border-4 border-muted/60 p-6 md:p-10 rounded-sm shadow-2xl relative overflow-hidden transition-all duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Pattern e grana della carta interna */}
            <div className="absolute inset-0 bg-perg-pattern pointer-events-none opacity-[0.03]" />
            <div className="absolute inset-0 bg-cream pointer-events-none mix-blend-multiply opacity-[0.01]" />

            {/* Pulsante di chiusura */}
            <button
              onClick={() => setActiveLedgerCar(null)}
              className="absolute top-4 right-4 p-2 text-muted hover:text-rosso transition-colors border border-border/40 hover:border-rosso rounded-sm bg-ivory/20"
              aria-label="Chiudi registro"
            >
              <X className="h-4 w-4" />
            </button>

            {/* Intestazione Ledger certificato */}
            <div className="text-center mb-8 border-b border-border/80 pb-6">
              <span className="font-mono text-[8px] uppercase tracking-[0.3em] text-oro font-bold block mb-1">
                REGISTRO TECNICO NAZIONALE VEICOLI STORICI
              </span>
              <h3 className="font-display text-2xl md:text-3xl font-light text-ink">
                Scheda di Certificazione <span className="italic font-normal text-rosso">Storica</span>
              </h3>
              <p className="font-mono text-[8px] text-muted uppercase tracking-widest mt-1">
                Milano · Officina Meccanica di precisione Giovanni Castiglione
              </p>
            </div>

            {/* Dati Tabella Griglia del Ledger */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 text-xs md:text-sm font-mono border-b border-border/40 pb-6 mb-6">
              <div className="flex justify-between border-b border-border/30 pb-1.5">
                <span className="text-muted uppercase">Costruttore:</span>
                <span className="text-ink font-bold">{activeLedgerCar.marca}</span>
              </div>
              <div className="flex justify-between border-b border-border/30 pb-1.5">
                <span className="text-muted uppercase">Modello:</span>
                <span className="text-ink font-bold">{activeLedgerCar.modello}</span>
              </div>
              <div className="flex justify-between border-b border-border/30 pb-1.5">
                <span className="text-muted uppercase">Anno Fabbrica:</span>
                <span className="text-ink font-bold">{activeLedgerCar.anno}</span>
              </div>
              <div className="flex justify-between border-b border-border/30 pb-1.5">
                <span className="text-muted uppercase">N. Telaio (Chassis):</span>
                <span className="text-rosso font-bold">{activeLedgerCar.chassis}</span>
              </div>
              <div className="flex justify-between border-b border-border/30 pb-1.5">
                <span className="text-muted uppercase">N. Motore (Engine):</span>
                <span className="text-ink font-bold">{activeLedgerCar.engineNum}</span>
              </div>
              <div className="flex justify-between border-b border-border/30 pb-1.5">
                <span className="text-muted uppercase">Alimentazione:</span>
                <span className="text-ink font-bold">{activeLedgerCar.carburetors}</span>
              </div>
              <div className="flex justify-between border-b border-border/30 pb-1.5">
                <span className="text-muted uppercase">Passo (Wheelbase):</span>
                <span className="text-ink font-bold">{activeLedgerCar.wheelbase}</span>
              </div>
              <div className="flex justify-between border-b border-border/30 pb-1.5">
                <span className="text-muted uppercase">Peso a secco:</span>
                <span className="text-ink font-bold">{activeLedgerCar.weight}</span>
              </div>
              <div className="flex justify-between border-b border-border/30 pb-1.5 md:col-span-2">
                <span className="text-muted uppercase">Produzione Totale:</span>
                <span className="text-ink font-bold">{activeLedgerCar.productionQty}</span>
              </div>
            </div>

            {/* Storico Provenienza e Gare */}
            <div className="mb-8">
              <h4 className="font-mono text-[9px] uppercase tracking-widest text-oro font-bold mb-3 flex items-center gap-1.5">
                <Award className="h-3.5 w-3.5" /> Ruolo Storico & Cronologia Gare
              </h4>
              <ul className="flex flex-col gap-2 font-mono text-[10px] text-muted">
                {activeLedgerCar.historyLog.map((log, i) => (
                  <li key={i} className="flex items-start gap-2 bg-ivory/50 p-2 border border-border/20 rounded-sm">
                    <span className="text-rosso">✦</span>
                    <span>{log}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Ceralacca Sigillo Timbro (Wax Stamp) in background style */}
            <div className="absolute bottom-6 right-8 opacity-75 pointer-events-none select-none animate-stamp-pop">
              <div className="h-16 w-16 md:h-20 md:w-20 rounded-full border-4 border-dashed border-rosso/30 flex flex-col items-center justify-center font-mono text-[6px] md:text-[8px] text-rosso/40 font-bold rotate-[-12deg]">
                <span>ARCHIVIO</span>
                <span>ORIGINALE</span>
                <span className="text-[10px] mt-0.5">★</span>
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="flex flex-wrap gap-4 items-center justify-between border-t border-border/80 pt-6">
              <span className="font-mono text-[10px] text-muted uppercase">
                Stato: Restauro Certificato ASI
              </span>
              <div className="flex gap-3">
                <Button 
                  onClick={() => {
                    setActiveLedgerCar(null);
                    window.print();
                  }}
                  variant="outline" 
                  className="py-2 px-4 text-[9px]"
                >
                  Stampa Scheda
                </Button>
                <Button 
                  href={`/contattaci?interesse=acquisto&vettura=${encodeURIComponent(activeLedgerCar.marca + ' ' + activeLedgerCar.modello)}`}
                  variant="primary" 
                  className="py-2 px-4 text-[9px]"
                >
                  Richiedi Consulenza Privata
                </Button>
              </div>
            </div>

          </div>
        </div>
      )}
    </section>
  );
}
