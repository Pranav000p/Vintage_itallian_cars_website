import HeroSection from "@/components/sections/HeroSection";
import IntroSection from "@/components/sections/IntroSection";
import MarqueeSection from "@/components/sections/MarqueeSection";
import CarCollectionSection from "@/components/sections/CarCollectionSection";
import HeritageSection from "@/components/sections/HeritageSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import CtaSection from "@/components/sections/CtaSection";
import PageTransition from "@/components/layout/PageTransition";

export default function Home() {
  return (
    <PageTransition>
      <main className="min-h-screen">
        <HeroSection />
        <IntroSection />
        <MarqueeSection />
        <CarCollectionSection />
        <HeritageSection />
        <TestimonialsSection />
        <CtaSection />
      </main>
    </PageTransition>
  );
}
