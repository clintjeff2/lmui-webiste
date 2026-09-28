import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Button } from "@/components/Button";
import { ProgramCard } from "@/components/ProgramCard";
import { Reveal, RevealGroup, RevealItem } from "@/components/Reveal";
import { VisualPanel } from "@/components/VisualPanel";
import { getProgramBySlug, getProgramsBySchool, programs } from "@/data/programs";
import { getSchools } from "@/data/schools";
import { APPLY_URL } from "@/lib/site";

export function generateStaticParams() {
  return programs.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const program = getProgramBySlug(params.slug);
  return { title: program ? `${program.name} — Landmark Metropolitan University Institute` : "Program not found" };
}

export default async function ProgramPage({ params }: { params: { slug: string } }) {
  const program = getProgramBySlug(params.slug);
  if (!program) notFound();
  const schools = await getSchools();
  const school = schools.find((item) => item.slug === program.schoolSlug);
  const related = getProgramsBySchool(program.schoolSlug).filter((p) => p.slug !== program.slug).slice(0, 3);

  return (
    <main>
      <section className="program-hero">
        <VisualPanel pattern={school?.pattern ?? "grid"} tone="navy" className="program-hero__visual" monogram />
        <div className="container program-hero__content">
          <Reveal>
            <span className="eyebrow" style={{ color: "var(--gold-400)" }}>
              {school?.shortName ?? "Academics"}
            </span>
          </Reveal>
          <Reveal delay={0.06}>
            <h1 className="headline--display" style={{ color: "white", marginTop: 18, fontSize: "clamp(2.2rem, 4.6vw, 3.6rem)" }}>
              {program.name}
            </h1>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="lede" style={{ color: "rgba(255,255,255,0.76)", marginTop: 20 }}>
              {program.summary}
            </p>
          </Reveal>
          <Reveal delay={0.18}>
            <div style={{ display: "flex", gap: 28, marginTop: 28, flexWrap: "wrap" }}>
              <div className="program-hero__meta">
                <span>Degree level</span>
                <strong>{program.degreeLevel}</strong>
              </div>
              <div className="program-hero__meta">
                <span>Duration</span>
                <strong>{program.duration}</strong>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.24}>
            <div style={{ marginTop: 32 }}>
              <Button href={APPLY_URL} variant="gold">
                Apply to This Program
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container program-body">
          <Reveal>
            <div>
              <h2 className="headline" style={{ fontSize: "1.7rem", marginBottom: 24 }}>
                Program highlights
              </h2>
              <ul className="program-list">
                {program.highlights.map((h) => (
                  <li key={h}>{h}</li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="program-outcomes">
              <h3 style={{ fontSize: "1.1rem", marginBottom: 18 }}>Outcomes</h3>
              {program.outcomes.map((o) => (
                <div key={o} className="program-outcomes__item">
                  {o}
                </div>
              ))}
              {school && (
                <a href={`/academics#${school.slug}`} className="btn btn--ghost-link" style={{ marginTop: 20 }}>
                  More from {school.shortName} <span className="arrow">→</span>
                </a>
              )}
            </div>
          </Reveal>
        </div>
      </section>

      {related.length > 0 && (
        <section className="section section--paper-alt">
          <div className="container">
            <Reveal>
              <span className="eyebrow">Related programs</span>
            </Reveal>
            <RevealGroup className="program-related-grid">
              {related.map((p) => (
                <RevealItem key={p.slug}>
                  <ProgramCard program={p} school={school} />
                </RevealItem>
              ))}
            </RevealGroup>
          </div>
        </section>
      )}

      <style dangerouslySetInnerHTML={{ __html: `
        .program-hero { position: relative; overflow: hidden; min-height: 420px; display: flex; align-items: flex-end; }
        .program-hero__visual { position: absolute; inset: 0; }
        .program-hero__visual::after {
          content: ""; position: absolute; inset: 0;
          background: linear-gradient(180deg, rgba(8,19,42,0.5), rgba(8,19,42,0.94));
        }
        .program-hero__content { position: relative; z-index: 2; padding: 140px 0 64px; }
        .program-hero__meta { display: flex; flex-direction: column; gap: 4px; }
        .program-hero__meta span { font-size: 0.76rem; text-transform: uppercase; letter-spacing: 0.08em; color: rgba(255,255,255,0.5); }
        .program-hero__meta strong { color: white; font-family: var(--font-display); font-size: 1.1rem; }

        .program-body { display: grid; grid-template-columns: 1.4fr 1fr; gap: 56px; }
        .program-list { list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 16px; }
        .program-list li {
          position: relative; padding-left: 26px; color: var(--muted); font-size: 0.96rem; line-height: 1.6;
        }
        .program-list li::before {
          content: ""; position: absolute; left: 0; top: 9px; width: 8px; height: 8px; border-radius: 50%;
          background: var(--gold-500);
        }
        .program-outcomes { background: var(--paper-alt); border-radius: var(--radius-md); padding: 28px; }
        .program-outcomes__item {
          font-family: var(--font-display); color: var(--navy-900); font-size: 1.02rem; padding: 12px 0;
          border-top: 1px solid var(--line);
        }
        .program-outcomes__item:first-of-type { border-top: none; }

        .program-related-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; margin-top: 36px; }

        @media (max-width: 900px) {
          .program-body { grid-template-columns: 1fr; }
          .program-related-grid { grid-template-columns: 1fr; }
        }
      ` }} />
    </main>
  );
}
