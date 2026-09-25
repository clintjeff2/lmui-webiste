import type { Metadata } from "next";
import { Button } from "@/components/Button";
import { FaqAccordion } from "@/components/FaqAccordion";
import { Reveal, RevealGroup, RevealItem } from "@/components/Reveal";
import { VisualPanel } from "@/components/VisualPanel";
import { admissionSteps, admissionsFaq, deadlines } from "@/data/admissions";
import { APPLY_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Admissions — Landmark Metropolitan University Institute",
  description: "Need-blind admission. Aid that meets 100% of demonstrated need. Test-optional.",
};

export default function AdmissionsPage() {
  return (
    <main>
      <section className="section admissions-hero">
        <div className="container admissions-hero__grid">
          <div>
            <Reveal>
              <span className="eyebrow">Admissions</span>
            </Reveal>
            <Reveal delay={0.06}>
              <h1 className="headline--display" style={{ marginTop: 20 }}>
                Apply once. Be considered fully.
              </h1>
            </Reveal>
            <Reveal delay={0.14}>
              <p className="lede" style={{ marginTop: 24 }}>
                Need-blind for every domestic applicant. Aid that meets 100% of demonstrated need.
                Test-optional, by design — not as an exception.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <div style={{ display: "flex", gap: 16, marginTop: 36, flexWrap: "wrap" }}>
                <Button href={APPLY_URL} variant="gold">
                  Apply Now
                </Button>
                <Button href="#deadlines" variant="outline-dark">
                  View Deadlines
                </Button>
              </div>
            </Reveal>
          </div>
          <Reveal delay={0.1} className="admissions-hero__visual-wrap">
            <VisualPanel pattern="concentric" tone="navy" monogram className="admissions-hero__visual" />
          </Reveal>
        </div>
      </section>

      {/* ---------------- STEPS ---------------- */}
      <section className="section section--paper-alt">
        <div className="container">
          <Reveal>
            <span className="eyebrow">The process</span>
          </Reveal>
          <Reveal delay={0.06}>
            <h2 className="headline" style={{ marginTop: 16, marginBottom: 56 }}>
              Four steps, start to decision.
            </h2>
          </Reveal>

          <RevealGroup className="steps">
            {admissionSteps.map((step) => (
              <RevealItem key={step.number} className="step">
                <div className="step__number">{step.number}</div>
                <div className="step__line" />
                <h3 className="step__title">{step.title}</h3>
                <p className="step__desc">{step.description}</p>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      {/* ---------------- DEADLINES ---------------- */}
      <section className="section" id="deadlines" style={{ scrollMarginTop: 90 }}>
        <div className="container deadlines-layout">
          <div>
            <Reveal>
              <span className="eyebrow">Key dates</span>
            </Reveal>
            <Reveal delay={0.06}>
              <h2 className="headline" style={{ marginTop: 16 }}>
                Deadlines for fall admission.
              </h2>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="lede" style={{ marginTop: 20 }}>
                Graduate and professional program deadlines vary by school — check each program page
                for specifics, or reach out to that school's admissions office directly.
              </p>
            </Reveal>
          </div>
          <RevealGroup className="deadlines-list">
            {deadlines.map((d) => (
              <RevealItem key={d.round} className="deadline-row">
                <div className="deadline-row__round">{d.round}</div>
                <div className="deadline-row__date">{d.date}</div>
                <div className="deadline-row__note">{d.note}</div>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      {/* ---------------- FAQ ---------------- */}
      <section className="section section--paper-alt">
        <div className="container" style={{ maxWidth: 860 }}>
          <Reveal>
            <span className="eyebrow">Good to know</span>
          </Reveal>
          <Reveal delay={0.06}>
            <h2 className="headline" style={{ marginTop: 16, marginBottom: 40 }}>
              Frequently asked questions.
            </h2>
          </Reveal>
          <Reveal delay={0.12}>
            <FaqAccordion items={admissionsFaq} />
          </Reveal>
        </div>
      </section>

      {/* ---------------- CTA ---------------- */}
      <section className="cta-banner-simple">
        <div className="container" style={{ textAlign: "center" }}>
          <Reveal>
            <h2 className="headline" style={{ color: "white", margin: "0 auto", maxWidth: 640 }}>
              Your application takes twenty minutes. Your practice starts in September.
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
        .admissions-hero__grid { display: grid; grid-template-columns: 1.2fr 1fr; gap: 48px; align-items: center; }
        .admissions-hero__visual-wrap { position: relative; aspect-ratio: 4/5; border-radius: var(--radius-lg); overflow: hidden; }

        .steps { display: grid; grid-template-columns: repeat(4, 1fr); gap: 0; }
        .step { position: relative; padding: 0 24px 0 0; }
        .step__number {
          font-family: var(--font-display); font-size: 2.2rem; color: var(--gold-600); margin-bottom: 20px;
        }
        .step__line { height: 2px; background: var(--line-strong); margin-bottom: 20px; position: relative; }
        .step__title { font-size: 1.1rem; margin-bottom: 10px; }
        .step__desc { font-size: 0.88rem; color: var(--muted); line-height: 1.6; }

        .deadlines-layout { display: grid; grid-template-columns: 0.9fr 1.1fr; gap: 56px; }
        .deadlines-list { display: flex; flex-direction: column; }
        .deadline-row {
          display: grid; grid-template-columns: 1fr auto; gap: 4px 20px; padding: 20px 0;
          border-bottom: 1px solid var(--line);
        }
        .deadline-row__round { font-family: var(--font-display); font-size: 1.1rem; color: var(--navy-900); }
        .deadline-row__date { font-weight: 600; color: var(--garnet-500); }
        .deadline-row__note { grid-column: 1 / -1; color: var(--muted); font-size: 0.86rem; }

        .cta-banner-simple { background: var(--navy-900); padding: 90px 0; }

        @media (max-width: 980px) {
          .admissions-hero__grid { grid-template-columns: 1fr; }
          .admissions-hero__visual-wrap { order: -1; }
          .steps { grid-template-columns: repeat(2, 1fr); row-gap: 36px; }
          .deadlines-layout { grid-template-columns: 1fr; }
        }
        @media (max-width: 560px) {
          .steps { grid-template-columns: 1fr; }
        }
      ` }} />
    </main>
  );
}
