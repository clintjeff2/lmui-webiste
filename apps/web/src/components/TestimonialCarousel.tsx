"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import type { Testimonial } from "@/data/testimonials";

export function TestimonialCarousel({
  items,
  onIndexChange,
}: {
  items: Testimonial[];
  onIndexChange?: (index: number) => void;
}) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % items.length), 6000);
    return () => clearInterval(id);
  }, [paused, items.length]);

  useEffect(() => {
    onIndexChange?.(index);
  }, [index, onIndexChange]);

  const current = items[index];

  return (
    <div
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      style={{ position: "relative" }}
    >
      <div style={{ minHeight: 220 }}>
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -24 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
              <div
                style={{
                  position: "relative",
                  width: 96,
                  height: 96,
                  marginBottom: 20,
                  borderRadius: "50%",
                  overflow: "hidden",
                  display: "grid",
                  placeItems: "center",
                }}
              >
                {current.image && (
                  <Image
                    src={current.image}
                    alt=""
                    fill
                    sizes="96px"
                    style={{ objectFit: "cover" }}
                  />
                )}
                <svg
                  width="42"
                  height="32"
                  viewBox="0 0 42 32"
                  fill="none"
                  style={{ position: "relative", zIndex: 1, opacity: 0.5 }}
                >
                  <path
                    d="M0 32V19.4C0 8.2 6.3 1.4 17.5 0L19 5.4C11.6 7.2 8.4 11.6 8.4 17.6H17.5V32H0ZM24.5 32V19.4C24.5 8.2 30.8 1.4 42 0L43.5 5.4C36.1 7.2 32.9 11.6 32.9 17.6H42V32H24.5Z"
                    fill="var(--gold-500)"
                  />
                </svg>
              </div>
            <p
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(1.3rem, 2.2vw, 1.75rem)",
                lineHeight: 1.4,
                color: "var(--navy-900)",
                maxWidth: 760,
              }}
            >
              {current.quote}
            </p>
            <div style={{ marginTop: 24, fontSize: "0.9rem" }}>
              <span style={{ fontWeight: 600, color: "var(--navy-900)" }}>{current.name}</span>
              <span style={{ color: "var(--muted)" }}> — {current.detail}</span>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div style={{ display: "flex", gap: 8, marginTop: 32 }}>
        {items.map((_, i) => (
          <button
            key={i}
            aria-label={`Show testimonial ${i + 1}`}
            onClick={() => setIndex(i)}
            style={{
              width: i === index ? 28 : 8,
              height: 8,
              borderRadius: 999,
              border: "none",
              background: i === index ? "var(--gold-500)" : "var(--line-strong)",
              transition: "width 0.35s var(--ease-out), background 0.35s",
            }}
          />
        ))}
      </div>
    </div>
  );
}
