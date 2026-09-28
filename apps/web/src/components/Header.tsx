"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import type { School } from "@/data/schools";
import { APPLY_URL, NAV_LINKS } from "@/lib/site";
import { Logo } from "./Logo";

export function Header({ schools }: { schools: School[] }) {
  const [scrolled, setScrolled] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();
  const wrapRef = useRef<HTMLDivElement>(null);

  // The header has `backdrop-filter`, which per spec makes it the
  // containing block for any `position: fixed` descendant — so the mobile
  // drawer would get clipped to the header's own height instead of the
  // viewport if rendered inline. Portaling to <body> sidesteps that
  // entirely. `mounted` just guards document access during SSR.
  useEffect(() => setMounted(true), []);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 12);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMegaOpen(false);
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    function onClick(e: MouseEvent) {
      if (wrapRef.current && !wrapRef.current.contains(e.target as Node)) {
        setMegaOpen(false);
      }
    }
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return (
    <>
      <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 60,
        background: scrolled ? "rgba(8, 19, 42, 0.94)" : "rgba(8, 19, 42, 0.86)",
        backdropFilter: "blur(14px)",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.08)" : "1px solid transparent",
        transition: "background 0.3s, border-color 0.3s",
      }}
    >
      <div
        className="container"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: scrolled ? 68 : 84,
          transition: "height 0.3s var(--ease-out)",
        }}
      >
        <Link href="/" aria-label="Landmark Metropolitan University Institute — home">
          <Logo light />
        </Link>

        <nav
          ref={wrapRef}
          style={{ display: "flex", alignItems: "center", gap: 36 }}
          className="header-nav"
        >
          {NAV_LINKS.map((link) =>
            link.label === "Academics" ? (
              <div key={link.href} style={{ position: "relative" }}>
                <button
                  onClick={() => setMegaOpen((v) => !v)}
                  style={{
                    background: "none",
                    border: "none",
                    color: "rgba(255,255,255,0.88)",
                    fontSize: "0.92rem",
                    fontWeight: 500,
                    display: "flex",
                    alignItems: "center",
                    gap: 6,
                  }}
                >
                  Academics
                  <svg
                    width="10"
                    height="6"
                    viewBox="0 0 10 6"
                    style={{ transform: megaOpen ? "rotate(180deg)" : "none", transition: "transform 0.25s" }}
                  >
                    <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.4" fill="none" />
                  </svg>
                </button>
                <AnimatePresence>
                  {megaOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -8, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -8, scale: 0.98 }}
                      transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
                      style={{
                        position: "absolute",
                        top: "calc(100% + 20px)",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: 620,
                        background: "var(--white)",
                        borderRadius: "var(--radius-md)",
                        boxShadow: "0 30px 60px -20px rgba(8,19,42,0.4)",
                        padding: 28,
                        display: "grid",
                        gridTemplateColumns: "1fr 1fr",
                        gap: "4px 24px",
                      }}
                    >
                      {schools.map((s) => (
                        <Link
                          key={s.slug}
                          href={s.route}
                          style={{
                            display: "block",
                            padding: "12px 10px",
                            borderRadius: 8,
                          }}
                          className="mega-item"
                        >
                          <div style={{ color: "var(--navy-900)", fontWeight: 600, fontSize: "0.94rem" }}>
                            {s.shortName}
                          </div>
                          <div style={{ color: "var(--muted)", fontSize: "0.82rem", marginTop: 2 }}>
                            {s.tagline}
                          </div>
                        </Link>
                      ))}
                      <div style={{ gridColumn: "1 / -1", marginTop: 8, paddingTop: 16, borderTop: "1px solid var(--line)" }}>
                        <Link href="/academics" className="btn btn--ghost-link" style={{ color: "var(--navy-900)" }}>
                          View all 150+ programs <span className="arrow">→</span>
                        </Link>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                style={{ color: "rgba(255,255,255,0.88)", fontSize: "0.92rem", fontWeight: 500 }}
              >
                {link.label}
              </Link>
            ),
          )}
        </nav>

        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <a href={APPLY_URL} target="_blank" rel="noopener noreferrer" className="btn btn--gold btn--sm apply-btn-desktop">
            Apply Now
          </a>
          <button
            aria-label="Open menu"
            onClick={() => setMobileOpen(true)}
            className="mobile-menu-btn"
            style={{ background: "none", border: "none", color: "white", display: "none" }}
          >
            <svg width="26" height="18" viewBox="0 0 26 18" fill="none">
              <path d="M0 1H26M0 9H26M0 17H26" stroke="currentColor" strokeWidth="1.6" />
            </svg>
          </button>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .mega-item:hover { background: var(--paper-alt); }
        @media (max-width: 900px) {
          .header-nav { display: none !important; }
          .apply-btn-desktop { display: none !important; }
          .mobile-menu-btn { display: inline-flex !important; }
        }
      ` }} />
      </header>

      {mounted &&
        createPortal(
          <AnimatePresence>
            {mobileOpen && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                style={{
                  position: "fixed",
                  inset: 0,
                  background: "rgba(8,19,42,0.6)",
                  zIndex: 70,
                }}
                onClick={() => setMobileOpen(false)}
              >
                <motion.div
                  initial={{ x: "100%" }}
                  animate={{ x: 0 }}
                  exit={{ x: "100%" }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  onClick={(e) => e.stopPropagation()}
                  style={{
                    position: "absolute",
                    right: 0,
                    top: 0,
                    bottom: 0,
                    width: "min(360px, 86vw)",
                    background: "var(--navy-900)",
                    padding: "28px 28px 40px",
                    display: "flex",
                    flexDirection: "column",
                    gap: 6,
                  }}
                >
                  <div style={{ display: "flex", justifyContent: "flex-end", marginBottom: 20 }}>
                    <button
                      aria-label="Close menu"
                      onClick={() => setMobileOpen(false)}
                      style={{ background: "none", border: "none", color: "white" }}
                    >
                      <svg width="20" height="20" viewBox="0 0 20 20">
                        <path d="M1 1L19 19M19 1L1 19" stroke="currentColor" strokeWidth="1.6" />
                      </svg>
                    </button>
                  </div>
                  {NAV_LINKS.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      style={{
                        color: "white",
                        fontFamily: "var(--font-display)",
                        fontSize: "1.6rem",
                        padding: "12px 0",
                        borderBottom: "1px solid rgba(255,255,255,0.1)",
                      }}
                    >
                      {link.label}
                    </Link>
                  ))}
                  <a
                    href={APPLY_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn--gold"
                    style={{ marginTop: 28, textAlign: "center" }}
                  >
                    Apply Now
                  </a>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>,
          document.body,
        )}
    </>
  );
}
