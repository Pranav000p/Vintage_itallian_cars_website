"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import { siteConfig } from "@/lib/site-config";
import Button from "../ui/Button";
import Image from "next/image";
import gsap from "gsap";

// ─── Floating dust particle for ambient atmosphere ─────────────────
function DustParticle({ delay, size, x, duration }: { delay: number; size: number; x: number; duration: number }) {
  return (
    <div
      className="absolute rounded-full bg-oro/20 pointer-events-none"
      style={{
        width: size,
        height: size,
        left: `${x}%`,
        bottom: "-5%",
        animation: `floatUp ${duration}s ease-in ${delay}s infinite`,
      }}
    />
  );
}

// ─── Ornamental SVG ring ───────────────────────────────────────────
function OrnamentalRing() {
  return (
    <svg
      className="absolute w-[280px] h-[280px] lg:w-[420px] lg:h-[420px] opacity-[0.08] animate-spin-slow pointer-events-none"
      viewBox="0 0 200 200"
      fill="none"
    >
      <circle cx="100" cy="100" r="90" stroke="var(--color-oro)" strokeWidth="0.5" />
      <circle cx="100" cy="100" r="80" stroke="var(--color-oro)" strokeWidth="0.3" strokeDasharray="4 8" />
      <circle cx="100" cy="100" r="70" stroke="var(--color-border)" strokeWidth="0.3" />
      {/* Compass ticks */}
      {Array.from({ length: 36 }).map((_, i) => {
        const angle = (i * 10 * Math.PI) / 180;
        const r1 = i % 9 === 0 ? 62 : 66;
        const r2 = 70;
        return (
          <line
            key={i}
            x1={100 + r1 * Math.cos(angle)}
            y1={100 + r1 * Math.sin(angle)}
            x2={100 + r2 * Math.cos(angle)}
            y2={100 + r2 * Math.sin(angle)}
            stroke="var(--color-oro)"
            strokeWidth={i % 9 === 0 ? "0.8" : "0.3"}
          />
        );
      })}
      {/* Decorative arcs */}
      <path d="M 100 15 A 85 85 0 0 1 185 100" stroke="var(--color-oro)" strokeWidth="0.4" fill="none" strokeDasharray="2 6" />
      <path d="M 100 185 A 85 85 0 0 1 15 100" stroke="var(--color-oro)" strokeWidth="0.4" fill="none" strokeDasharray="2 6" />
    </svg>
  );
}

// ─── Main Hero Section ─────────────────────────────────────────────
export default function HeroSection() {
  const [yearCount, setYearCount] = useState(1900);
  const sectionRef = useRef<HTMLElement>(null);
  const leftPanelRef = useRef<HTMLDivElement>(null);
  const rightPanelRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const taglineRef = useRef<HTMLSpanElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const carRef = useRef<HTMLDivElement>(null);
  const badgesRef = useRef<HTMLDivElement>(null);

  const shimmerLineRef = useRef<HTMLDivElement>(null);
  const founderRef = useRef<HTMLDivElement>(null);
  const mousePos = useRef({ x: 0, y: 0 });
  const rafId = useRef<number>(0);

  // ── Mouse parallax for the car ──────────────────────────────────
  const handleMouseMove = useCallback((e: MouseEvent) => {
    const { clientX, clientY, view } = e;
    if (!view) return;
    mousePos.current = {
      x: (clientX / view.innerWidth - 0.5) * 2,
      y: (clientY / view.innerHeight - 0.5) * 2,
    };
  }, []);

  useEffect(() => {
    const animateParallax = () => {
      if (carRef.current) {
        const { x, y } = mousePos.current;
        gsap.to(carRef.current, {
          x: x * 18,
          y: y * 10,
          rotateY: x * 2,
          duration: 1.2,
          ease: "power2.out",
        });
      }
      rafId.current = requestAnimationFrame(animateParallax);
    };

    window.addEventListener("mousemove", handleMouseMove);
    rafId.current = requestAnimationFrame(animateParallax);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(rafId.current);
    };
  }, [handleMouseMove]);

  // ── Year counter ────────────────────────────────────────────────
  useEffect(() => {
    let start = 1900;
    const end = siteConfig.anno_fondazione;
    const duration = 1.5;
    const increment = Math.ceil((end - start) / (duration * 60));

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setYearCount(end);
        clearInterval(timer);
      } else {
        setYearCount(start);
      }
    }, 1000 / 60);

    return () => clearInterval(timer);
  }, []);

  // ── GSAP cinematic entrance timeline ────────────────────────────
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

      // Phase 1: Left panel slides in
      tl.fromTo(
        leftPanelRef.current,
        { xPercent: -8, opacity: 0 },
        { xPercent: 0, opacity: 1, duration: 1.0 },
        0.1
      );

      // Phase 2: Tagline letter-by-letter reveal
      if (taglineRef.current) {
        const text = taglineRef.current.textContent || "";
        taglineRef.current.innerHTML = "";
        text.split("").forEach((char) => {
          const span = document.createElement("span");
          span.textContent = char === " " ? "\u00A0" : char;
          span.style.display = "inline-block";
          span.style.opacity = "0";
          span.style.transform = "translateY(8px)";
          taglineRef.current!.appendChild(span);
        });

        tl.to(
          taglineRef.current.querySelectorAll("span"),
          {
            opacity: 1,
            y: 0,
            duration: 0.04,
            stagger: 0.03,
            ease: "power2.out",
          },
          0.4
        );
      }

      // Phase 3: Headline words reveal with clip-path
      if (headlineRef.current) {
        const lines = headlineRef.current.querySelectorAll(".hero-line");
        tl.fromTo(
          lines,
          { clipPath: "inset(0 100% 0 0)", opacity: 0 },
          {
            clipPath: "inset(0 0% 0 0)",
            opacity: 1,
            duration: 0.9,
            stagger: 0.15,
            ease: "expo.out",
          },
          0.5
        );
      }

      // Phase 4: Golden shimmer underline
      tl.fromTo(
        shimmerLineRef.current,
        { scaleX: 0, opacity: 0 },
        { scaleX: 1, opacity: 1, duration: 0.8, ease: "expo.out" },
        1.1
      );

      // Phase 5: Description fades up
      tl.fromTo(
        descRef.current,
        { opacity: 0, y: 24 },
        { opacity: 1, y: 0, duration: 0.7 },
        1.3
      );

      // Phase 6: Buttons stagger in
      if (buttonsRef.current) {
        tl.fromTo(
          buttonsRef.current.children,
          { opacity: 0, y: 20, scale: 0.95 },
          { opacity: 1, y: 0, scale: 1, duration: 0.5, stagger: 0.12 },
          1.5
        );
      }

      // Phase 7: Right panel — car entrance
      tl.fromTo(
        rightPanelRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.8 },
        0.3
      );

      tl.fromTo(
        carRef.current,
        { scale: 1.15, opacity: 0, x: 80 },
        { scale: 1, opacity: 1, x: 0, duration: 1.4, ease: "expo.out" },
        0.5
      );

      // Phase 8: Badges slide up
      if (badgesRef.current) {
        tl.fromTo(
          badgesRef.current.children,
          { opacity: 0, y: 16 },
          { opacity: 1, y: 0, duration: 0.4, stagger: 0.08 },
          1.7
        );
      }

      // Phase 9: Founder badge
      tl.fromTo(
        founderRef.current,
        { opacity: 0, x: -20 },
        { opacity: 1, x: 0, duration: 0.6 },
        1.9
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // ── Dust particles config ───────────────────────────────────────
  const particles = Array.from({ length: 14 }, (_, i) => ({
    delay: Math.random() * 8,
    size: Math.random() * 3 + 1.5,
    x: Math.random() * 100,
    duration: Math.random() * 8 + 10,
  }));

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen pt-24 md:pt-0 flex flex-col md:flex-row overflow-hidden border-b border-border bg-cream"
    >


      {/* ── Subtle parchment texture ── */}
      <div className="absolute inset-0 bg-perg-pattern pointer-events-none opacity-[0.03]" />

      {/* ── Floating dust particles ── */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {particles.map((p, i) => (
          <DustParticle key={i} {...p} />
        ))}
      </div>

      {/* ═══════════ LEFT PANEL ═══════════ */}
      <div
        ref={leftPanelRef}
        className="flex-1 px-8 md:px-16 flex flex-col justify-center gap-8 py-12 md:py-0 border-r border-border/60 relative opacity-0"
        style={{ perspective: "800px" }}
      >
        {/* Tagline */}
        <div className="flex flex-col gap-3">
          <span
            ref={taglineRef}
            className="font-mono text-xs uppercase tracking-[0.3em] text-oro font-semibold"
          >
            {siteConfig.slogan}
          </span>

          {/* Headline with line-by-line clip-path reveal */}
          <h1
            ref={headlineRef}
            className="font-display text-5xl lg:text-7xl font-light leading-tight text-ink"
          >
            <span className="hero-line block overflow-hidden">
              L&apos;eleganza
            </span>
            <span className="hero-line block overflow-hidden">
              <span className="italic font-normal text-rosso inline-block relative">
                senza tempo
                {/* Golden shimmer underline */}
                <span
                  ref={shimmerLineRef}
                  className="absolute -bottom-1 left-0 right-0 h-[2px] origin-left"
                  style={{
                    background:
                      "linear-gradient(90deg, transparent, var(--color-oro), var(--color-oro), transparent)",
                    transform: "scaleX(0)",
                  }}
                />
              </span>
            </span>
            <span className="hero-line block overflow-hidden">
              delle auto d&apos;epoca.
            </span>
          </h1>
        </div>

        {/* Description */}
        <p
          ref={descRef}
          className="text-muted text-sm md:text-base leading-relaxed max-w-md opacity-0"
        >
          {siteConfig.descrizione} Curiamo il restauro, la perizia e la vendita
          delle più storiche vetture italiane. Ogni auto nel nostro showroom
          racconta una leggenda automobilistica.
        </p>

        {/* CTA Buttons */}
        <div ref={buttonsRef} className="flex flex-wrap gap-4 mt-2">
          <Button href="#collezione" variant="primary">
            Esplora Collezione
          </Button>
          <Button href="/contattaci" variant="outline">
            Prenota Visita
          </Button>
        </div>

        {/* Founded badge */}
        <div
          ref={founderRef}
          className="absolute bottom-6 left-8 md:left-16 flex items-center gap-3 opacity-0"
        >
          <div className="h-[1px] w-8 bg-border hero-divider-line" />
          <span className="font-mono text-[10px] uppercase tracking-widest text-muted">
            Custodi dal {yearCount}
          </span>
        </div>
      </div>

      {/* ═══════════ RIGHT PANEL ═══════════ */}
      <div
        ref={rightPanelRef}
        className="flex-1 bg-parchment/30 relative flex flex-col justify-center items-center py-16 px-6 md:px-12 opacity-0"
      >
        {/* Ornamental spinning ring */}
        <OrnamentalRing />

        {/* Pulsing glow behind car */}
        <div className="absolute w-64 h-64 lg:w-96 lg:h-96 rounded-full opacity-[0.06] pointer-events-none hero-glow" />

        {/* Car Image — mouse-parallax container */}
        <div
          ref={carRef}
          className="relative w-full max-w-lg aspect-[16/10] z-10"
          style={{ transformStyle: "preserve-3d" }}
        >
          <Image
            src="/images/hero/hero-car.png"
            alt="Ferrari 250 GTO 1962"
            fill
            priority
            className="object-contain drop-shadow-[0_20px_35px_rgba(28,20,9,0.18)] transition-[filter] duration-700 hover:drop-shadow-[0_30px_60px_rgba(28,20,9,0.28)]"
          />
        </div>

        {/* Brand badges — staggered entrance */}
        <div
          ref={badgesRef}
          className="absolute bottom-6 flex gap-6 text-[10px] font-mono uppercase tracking-[0.2em] text-muted z-10"
        >
          {["Ferrari", "Alfa Romeo", "Lancia", "Maserati"].map((brand, i) => (
            <React.Fragment key={brand}>
              {i > 0 && <span className="text-border">·</span>}
              <span className="hover:text-rosso transition-colors duration-300 cursor-default relative group">
                {brand}
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-rosso transition-all duration-300 group-hover:w-full" />
              </span>
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
