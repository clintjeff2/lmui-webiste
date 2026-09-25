import type { Metadata } from "next";
import { Button } from "@/components/Button";
import { Reveal, RevealGroup, RevealItem } from "@/components/Reveal";
import { VisualPanel } from "@/components/VisualPanel";
import { campusGallery, leadership, milestones, pillars } from "@/data/about";
import { APPLY_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "About — Landmark Metropolitan University Institute",
  description: "118 years of training practitioners, not just graduates.",
};

export default function AboutPage() {
  return (
    <main>
      <section className="section" style={{ paddingBottom: 40 }}>
        <div className="container">
          <Reveal>
            <span className="eyebrow">About Landmark</span>
          </Reveal>
          <Reveal delay={0.06}>
            <h1 className="headline--display" style={{ marginTop: 20, maxWidth: 820 }}>
              118 years of training practitioners, not just graduates.
            </h1>
          </Reveal>
          <Reveal delay={0.14}>
            <p className="lede" style={{ marginTop: 24 }}>
              Founded in 1908 as an evening technical institute for the city's working professionals,
              Landmark has spent over a century refusing to separate education from practice.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ---------------- PILLARS ---------------- */}
      <section className="section--tight section--paper-alt">
        <div className="container">
          <RevealGroup className="about-pillars">
            {pillars.map((p) => (
              <RevealItem key={p.title} className="about-pillar">
                <h3>{p.title}</h3>
                <p>{p.description}</p>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      {/* ---------------- LEADERSHIP ---------------- */}
      <section className="section">
        <div className="container">
          <Reveal>
            <span className="eyebrow">Leadership</span>
          </Reveal>
          <Reveal delay={0.06}>
            <h2 className="headline" style={{ marginTop: 16, marginBottom: 48 }}>
              Who's steering it.
            </h2>
          </Reveal>
          <RevealGroup className="leadership-grid">
            {leadership.map((l, i) => (
              <RevealItem key={l.name} className="leader-card">
                <div className="leader-card__visual">
                  <VisualPanel pattern={(["grid", "diagonal", "radial", "wave"] as const)[i % 4]} tone="navy" />
                </div>
                <h3 className="leader-card__name">{l.name}</h3>
                <div className="leader-card__title">{l.title}</div>
                <p className="leader-card__bio">{l.bio}</p>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      {/* ---------------- TIMELINE ---------------- */}
      <section className="section section--navy">
        <div className="container">
          <Reveal>
            <span className="eyebrow">History</span>
          </Reveal>
          <Reveal delay={0.06}>
            <h2 className="headline" style={{ marginTop: 16, marginBottom: 56 }}>
              A short history of a long habit.
            </h2>
          </Reveal>
          <RevealGroup className="timeline">
            {milestones.map((m) => (
              <RevealItem key={m.year} className="timeline-row">
                <div className="timeline-row__year">{m.year}</div>
                <div className="timeline-row__desc">{m.description}</div>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      {/* ---------------- CAMPUS GALLERY ---------------- */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <div>
              <Reveal>
                <span className="eyebrow">Campuses</span>
              </Reveal>
              <Reveal delay={0.06}>
                <h2 className="headline" style={{ marginTop: 16 }}>
                  Six campuses. One metropolitan region.
                </h2>
              </Reveal>
            </div>
          </div>
          <RevealGroup className="gallery-bento">
            {campusGallery.map((tile) => (
              <RevealItem key={tile.label} className={`gallery-tile gallery-tile--${tile.size}`}>
                <VisualPanel pattern={tile.pattern} tone="navy" className="gallery-tile__visual" />
                <div className="gallery-tile__label">{tile.label}</div>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      <section className="cta-banner-simple">
        <div className="container" style={{ textAlign: "center" }}>
          <Reveal>
            <h2 className="headline" style={{ color: "white", margin: "0 auto", maxWidth: 640 }}>
              Come see it before you commit to it.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <div style={{ marginTop: 28 }}>
              <Button href={APPLY_URL} variant="gold">
                Apply Now
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      <style dangerouslySetInnerHTML={{ __html: `
        .about-pillars { display: grid; grid-template-columns: repeat(3, 1fr); gap: 32px; }
        .about-pillar h3 { font-size: 1.3rem; margin-bottom: 12px; }
        .about-pillar p { color: var(--muted); font-size: 0.92rem; line-height: 1.65; }

        .leadership-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 24px; }
        .leader-card__visual { position: relative; aspect-ratio: 4/5; border-radius: var(--radius-md); overflow: hidden; margin-bottom: 16px; }
        .leader-card__name { font-size: 1rem; margin-bottom: 4px; }
        .leader-card__title { font-size: 0.8rem; color: var(--garnet-500); font-weight: 600; margin-bottom: 10px; }
        .leader-card__bio { font-size: 0.86rem; color: var(--muted); line-height: 1.55; }

        .timeline { max-width: 760px; }
        .timeline-row {
          display: grid; grid-template-columns: 100px 1fr; gap: 24px; padding: 22px 0;
          border-top: 1px solid rgba(255,255,255,0.12);
        }
        .timeline-row:last-child { border-bottom: 1px solid rgba(255,255,255,0.12); }
        .timeline-row__year { font-family: var(--font-display); color: var(--gold-400); font-size: 1.2rem; }
        .timeline-row__desc { color: rgba(255,255,255,0.78); line-height: 1.6; }

        .gallery-bento {
          display: grid; grid-template-columns: repeat(4, 1fr); grid-auto-rows: 160px; gap: 16px;
        }
        .gallery-tile { position: relative; border-radius: var(--radius-md); overflow: hidden; }
        .gallery-tile--lg { grid-column: span 2; grid-row: span 2; }
        .gallery-tile--md { grid-column: span 2; grid-row: span 1; }
        .gallery-tile--sm { grid-column: span 1; grid-row: span 1; }
        .gallery-tile__visual { position: absolute; inset: 0; transition: transform 0.6s var(--ease-out); }
        .gallery-tile:hover .gallery-tile__visual { transform: scale(1.08); }
        .gallery-tile__label {
          position: absolute; left: 0; right: 0; bottom: 0; padding: 16px;
          background: linear-gradient(180deg, transparent, rgba(8,19,42,0.85));
          color: white; font-size: 0.86rem; font-weight: 500;
        }

        .cta-banner-simple { background: var(--navy-900); padding: 90px 0; }

        @media (max-width: 980px) {
          .about-pillars { grid-template-columns: 1fr; }
          .leadership-grid { grid-template-columns: repeat(2, 1fr); }
          .gallery-bento { grid-template-columns: repeat(2, 1fr); }
          .gallery-tile--lg { grid-column: span 2; }
          .gallery-tile--md { grid-column: span 2; }
        }
        @media (max-width: 560px) {
          .leadership-grid { grid-template-columns: 1fr; }
        }
      ` }} />
    </main>
  );
}
