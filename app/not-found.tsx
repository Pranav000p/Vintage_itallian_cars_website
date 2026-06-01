import React from "react";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

export const dynamic = 'force-dynamic';

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-cream px-6">
      <div className="text-center flex flex-col items-center gap-6 max-w-md">
        {/* Ornamental 404 */}
        <div className="flex items-center gap-4">
          <div className="h-[1px] w-12 bg-border" />
          <span className="font-display text-8xl font-light text-ink/20">404</span>
          <div className="h-[1px] w-12 bg-border" />
        </div>

        <h1 className="font-display text-3xl font-light text-ink">
          Pagina <span className="italic text-rosso">non trovata</span>
        </h1>

        <p className="text-muted text-sm leading-relaxed">
          La pagina che stai cercando potrebbe essere stata spostata o non esiste più nel nostro archivio storico.
        </p>

        <Link
          href="/"
          className="inline-flex items-center font-mono text-xs uppercase tracking-widest py-3 px-6 border border-border text-ink hover:border-rosso hover:text-rosso transition-all duration-300"
        >
          Torna alla Collezione
        </Link>

        <span className="font-mono text-[9px] uppercase tracking-widest text-muted mt-4">
          {siteConfig.nome} · Milano
        </span>
      </div>
    </main>
  );
}
