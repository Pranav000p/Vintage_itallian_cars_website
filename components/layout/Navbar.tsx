"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import Button from "../ui/Button";
import { Menu, X, Sun, Moon } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    // Rileva tema iniziale
    const isDark = document.documentElement.classList.contains("dark");
    setTheme(isDark ? "dark" : "light");

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    if (theme === "light") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setTheme("dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setTheme("light");
    }
  };

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-40 transition-all duration-500 border-b",
          isScrolled
            ? "bg-cream/95 backdrop-blur-md border-border py-4 shadow-sm"
            : "bg-transparent border-transparent py-6"
        )}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="group flex flex-col">
            <span className="font-display text-2xl font-semibold tracking-wide text-ink group-hover:text-rosso transition-colors duration-300">
              {siteConfig.nome}
            </span>
            <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-muted -mt-1 group-hover:text-ink transition-colors duration-300">
              Milano · Fondato nel {siteConfig.anno_fondazione}
            </span>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-10">
            {siteConfig.nav.map((link, idx) => (
              <Link
                key={idx}
                href={link.href}
                className="font-mono text-[11px] uppercase tracking-widest text-muted hover:text-rosso transition-colors duration-200 relative py-1 group"
              >
                {link.etichetta}
                <span className="absolute bottom-0 left-0 w-full h-[1px] bg-rosso scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100" />
              </Link>
            ))}
          </nav>

          {/* Right Button / Mobile Trigger */}
          <div className="flex items-center gap-4">
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="p-2 border border-border/80 hover:border-rosso rounded-sm text-ink hover:text-rosso transition-all duration-300 flex items-center justify-center h-9 w-9 bg-ivory/10 shadow-sm relative overflow-hidden group"
              aria-label="Cambia tema"
              data-cursor-label={theme === "light" ? "NOTTE" : "LUCE"}
            >
              <div className="relative h-4 w-4">
                <Sun className={cn("absolute inset-0 h-4 w-4 transition-transform duration-500", theme === "dark" ? "scale-0 rotate-90" : "scale-100 rotate-0")} />
                <Moon className={cn("absolute inset-0 h-4 w-4 transition-transform duration-500", theme === "light" ? "scale-0 -rotate-90" : "scale-100 rotate-0")} />
              </div>
            </button>

            <Button
              href="/contattaci"
              variant="outline"
              className="hidden md:inline-flex py-2 px-5 border-border hover:border-rosso"
            >
              Prenota Visita
            </Button>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="md:hidden p-2 text-ink hover:text-rosso transition-colors"
              aria-label="Apri menu"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu using pure CSS transitions */}
      <div
        className={cn(
          "fixed inset-0 z-50 bg-[#1c1409]/50 transition-opacity duration-300 pointer-events-auto md:hidden",
          isMobileMenuOpen ? "opacity-100 block" : "opacity-0 hidden"
        )}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      <div
        className={cn(
          "fixed right-0 top-0 bottom-0 w-80 z-50 bg-cream border-l border-border p-8 flex flex-col justify-between transition-transform duration-300 ease-out md:hidden",
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div>
          <div className="flex items-center justify-between mb-12">
            <div className="flex flex-col">
              <span className="font-display text-xl font-bold tracking-wide text-ink">
                {siteConfig.nome}
              </span>
              <span className="font-mono text-[8px] uppercase tracking-wider text-muted -mt-0.5">
                Milano
              </span>
            </div>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-2 text-ink hover:text-rosso transition-colors"
              aria-label="Chiudi menu"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          <nav className="flex flex-col gap-6">
            {siteConfig.nav.map((link, idx) => (
              <Link
                key={idx}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="font-display text-2xl italic text-ink hover:text-rosso transition-colors duration-200"
              >
                {link.etichetta}
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex flex-col gap-6 border-t border-border pt-8">
          <div className="flex justify-between items-center px-2">
            <span className="font-mono text-[10px] uppercase tracking-wider text-muted font-bold">Tema Visivo</span>
            <button
              onClick={toggleTheme}
              className="flex items-center gap-2 py-1.5 px-3 border border-border rounded-sm font-mono text-[9px] uppercase tracking-widest text-ink hover:text-rosso transition-colors"
            >
              {theme === "light" ? (
                <>
                  <Moon className="h-3.5 w-3.5 text-oro" /> Notte
                </>
              ) : (
                <>
                  <Sun className="h-3.5 w-3.5 text-oro" /> Luce
                </>
              )}
            </button>
          </div>

          <Button
            href="/contattaci"
            onClick={() => setIsMobileMenuOpen(false)}
            className="w-full"
          >
            Prenota Visita
          </Button>
          <div className="text-center font-mono text-[9px] text-muted uppercase tracking-widest">
            {siteConfig.contatti.telefono}
          </div>
        </div>
      </div>
    </>
  );
}
