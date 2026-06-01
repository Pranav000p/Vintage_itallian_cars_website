import React from "react";

export const dynamic = 'force-dynamic';

import PageTransition from "@/components/layout/PageTransition";
import { siteConfig } from "@/lib/site-config";
import SectionDivider from "@/components/ui/SectionDivider";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import { ShieldCheck, Flame, Compass, MapPin, Phone, Mail } from "lucide-react";

const valori = [
  {
    titolo: "Passione Artigianale",
    descrizione: "La meccanica d'epoca non si ripara, si comprende. I nostri artigiani dedicano centinaia di ore a ricreare componenti fedeli ai disegni storici originali.",
    iconName: "flame" as const,
  },
  {
    titolo: "Rarità Certificata",
    descrizione: "Ogni vettura viene sottoposta ad esami incrociati sui numeri di telaio, motore e registri storici per attestarne l'autenticità assoluta al 100%.",
    iconName: "shield" as const,
  },
  {
    titolo: "Restauro Conservativo",
    descrizione: "Crediamo nella conservazione della patina originale. Il nostro obiettivo è proteggere il fascino storico senza snaturare la sensazione di guida dell'epoca.",
    iconName: "compass" as const,
  },
];

const team = [
  { nome: "Giovanni Castiglione", ruolo: "Fondatore & Direttore Storico" },
  { nome: "Carlo Brambilla", ruolo: "Capo Restauratore Meccanico" },
  { nome: "Elena Viscardi", ruolo: "Specialista Provenienza & Archivi" },
];

function ValoreIcon({ name }: { name: string }) {
  switch (name) {
    case "flame": return <Flame className="h-6 w-6 text-rosso" />;
    case "shield": return <ShieldCheck className="h-6 w-6 text-rosso" />;
    case "compass": return <Compass className="h-6 w-6 text-rosso" />;
    default: return null;
  }
}

export default function ChiSiamo() {
  return (
    <PageTransition>
      <main className="min-h-screen pt-32 pb-24 bg-cream">
        <div className="max-w-5xl mx-auto px-6">
          
          {/* Page Hero */}
          <div className="text-center flex flex-col gap-4 mb-16">
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-oro font-semibold">
              Dal {siteConfig.anno_fondazione}
            </span>
            <h1 className="font-display text-4xl md:text-6xl font-light text-ink">
              Custodi della <span className="italic font-normal text-rosso">Storia</span>
            </h1>
            <p className="text-muted text-sm max-w-xl mx-auto leading-relaxed mt-2">
              Da oltre sessant&apos;anni, Classico Italiano seleziona, restaura e certifica i più importanti capolavori dell&apos;ingegneria automobilistica italiana d&apos;epoca.
            </p>
            <SectionDivider className="py-8" />
          </div>

          {/* Citazione Fondatore */}
          <div className="relative bg-ivory border border-border p-8 md:p-12 rounded-sm shadow-md mb-20 text-center">
            <div className="absolute inset-0 bg-perg-pattern pointer-events-none opacity-[0.03]" />
            <span className="absolute top-4 left-6 text-oro text-4xl font-display font-light">&ldquo;</span>
            <p className="font-display text-xl md:text-2xl italic text-ink/90 leading-relaxed max-w-3xl mx-auto relative z-10">
              Guidare un&apos;auto d&apos;epoca italiana significa dialogare con la mente dei grandi designer e ingegneri degli anni &apos;50 e &apos;60. Il nostro compito è far sì che questa conversazione non si interrompa mai.
            </p>
            <div className="h-[1px] w-12 bg-rosso mx-auto my-6" />
            <h3 className="font-display font-semibold text-ink">Giovanni Castiglione</h3>
            <p className="font-mono text-[9px] uppercase tracking-wider text-muted mt-0.5">Fondatore di Classico Italiano</p>
          </div>

          {/* I Nostri Valori */}
          <div className="mb-24">
            <h2 className="font-display text-3xl font-light text-ink text-center mb-12">
              I Pilastri di <span className="italic font-normal text-rosso">Eccellenza</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {valori.map((item, idx) => (
                <Card key={idx} variant="ivory" className="flex flex-col gap-4 text-center items-center">
                  <div className="h-12 w-12 rounded-full border border-border flex items-center justify-center bg-cream shadow-sm mb-2">
                    <ValoreIcon name={item.iconName} />
                  </div>
                  <h3 className="font-display text-xl font-semibold text-ink">{item.titolo}</h3>
                  <p className="text-muted text-xs leading-relaxed">{item.descrizione}</p>
                </Card>
              ))}
            </div>
          </div>

          {/* Il Team */}
          <div className="mb-24">
            <h2 className="font-display text-3xl font-light text-ink text-center mb-12">
              La Nostra <span className="italic font-normal text-rosso">Maestria</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {team.map((t, idx) => (
                <div key={idx} className="bg-ivory border border-border p-6 rounded-sm text-center relative flex flex-col items-center">
                  <div className="absolute inset-0 bg-perg-pattern pointer-events-none opacity-[0.03]" />
                  <div className="h-16 w-16 rounded-full border border-border/80 bg-parchment/40 flex items-center justify-center font-display text-xl text-oro font-bold italic mb-4">
                    {t.nome.split(" ").map(n => n[0]).join("")}
                  </div>
                  <h3 className="font-display text-lg font-semibold text-ink">{t.nome}</h3>
                  <p className="font-mono text-[9px] uppercase tracking-widest text-muted mt-1">{t.ruolo}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Showroom & Officina Details */}
          <div className="bg-ivory border border-border p-8 md:p-12 rounded-sm shadow-md grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="absolute inset-0 bg-perg-pattern pointer-events-none opacity-[0.02]" />
            
            <div className="flex flex-col gap-4">
              <Badge variant="gold" className="self-start">Milano Showroom</Badge>
              <h3 className="font-display text-2xl font-light text-ink">{siteConfig.indirizzi.showroom.via}</h3>
              <p className="text-muted text-xs leading-relaxed">
                Il nostro showroom centrale sorge in un raffinato stabile nel cuore del Quadrilatero della Moda a Milano, progettato per accogliere collezionisti da tutto il mondo in un ambiente museale protetto e riservato.
              </p>
              <div className="flex flex-col gap-2 text-xs text-muted mt-2 font-mono">
                <span className="flex items-center gap-2"><MapPin className="h-3.5 w-3.5 text-oro" /> {siteConfig.indirizzi.showroom.completo}</span>
                <span className="flex items-center gap-2"><Phone className="h-3.5 w-3.5 text-oro" /> {siteConfig.contatti.telefono}</span>
                <span className="flex items-center gap-2"><Mail className="h-3.5 w-3.5 text-oro" /> {siteConfig.contatti.email_info}</span>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <Badge variant="rosso" className="self-start">Officina &amp; Restauro</Badge>
              <h3 className="font-display text-2xl font-light text-ink">{siteConfig.indirizzi.officina.via}</h3>
              <p className="text-muted text-xs leading-relaxed">
                Il polo tecnologico e di restauro storico si trova nello storico distretto di Tortona. Qui lavorano i nostri maestri artigiani con accesso a attrezzature di precisione d&apos;epoca e archivi metallurgici storici.
              </p>
              <div className="flex flex-col gap-2 text-xs text-muted mt-2 font-mono">
                <span className="flex items-center gap-2"><MapPin className="h-3.5 w-3.5 text-rosso" /> {siteConfig.indirizzi.officina.completo}</span>
                <span className="flex items-center gap-2"><Phone className="h-3.5 w-3.5 text-rosso" /> {siteConfig.contatti.telefono}</span>
                <span className="flex items-center gap-2"><Mail className="h-3.5 w-3.5 text-rosso" /> {siteConfig.contatti.email_assistenza}</span>
              </div>
            </div>
          </div>

        </div>
      </main>
    </PageTransition>
  );
}
