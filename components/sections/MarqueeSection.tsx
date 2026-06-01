import React from "react";
import Marquee from "../ui/Marquee";

export default function MarqueeSection() {
  const brandList = [
    "Ferrari",
    "Alfa Romeo",
    "Lancia",
    "Maserati",
    "Lamborghini",
    "Bizzarrini",
    "Fiat",
    "Abarth",
    "Iso Rivolta",
    "Cisitalia",
  ];

  return (
    <section className="bg-cream">
      <Marquee items={brandList} />
    </section>
  );
}
