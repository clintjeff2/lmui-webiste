"use client";

import Image from "next/image";
import { useState } from "react";
import type { Testimonial } from "@/data/testimonials";
import { Reveal } from "./Reveal";
import { TestimonialCarousel } from "./TestimonialCarousel";
import { VisualPanel } from "./VisualPanel";

export function TestimonialsSection({ items }: { items: Testimonial[] }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeTestimonial = items[activeIndex] ?? items[0];

  return (
    <div className="container testimonials-layout">
      <div>
        <Reveal>
          <span className="eyebrow">In their words</span>
        </Reveal>
        <Reveal delay={0.06}>
          <h2 className="headline" style={{ marginTop: 16, marginBottom: 36 }}>
            Ask a student what "hands-on" means here.
          </h2>
        </Reveal>
        <Reveal delay={0.12}>
          <TestimonialCarousel items={items} onIndexChange={setActiveIndex} />
        </Reveal>
      </div>
      <Reveal delay={0.18} className="testimonials-visual">
        {activeTestimonial?.image && (
          <Image
            key={activeTestimonial.image}
            src={activeTestimonial.image}
            alt=""
            fill
            sizes="(max-width: 980px) 100vw, 40vw"
            style={{ objectFit: "cover" }}
          />
        )}
        <VisualPanel pattern="concentric" tone="gold" className="testimonials-visual__panel" monogram />
      </Reveal>
    </div>
  );
}