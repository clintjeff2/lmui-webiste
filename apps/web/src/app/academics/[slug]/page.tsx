import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Button } from "@/components/Button";
import { OptionCard } from "@/components/OptionCard";
import { Reveal, RevealGroup, RevealItem } from "@/components/Reveal";
import { VisualPanel } from "@/components/VisualPanel";
import { getFields, getFieldsBySchool, getFieldsBySlug } from "@/data/fields";
import { getOptionBySlug, getOptions, getOptionsBySchool } from "@/data/options";
import { getSchools } from "@/data/schools";
import { APPLY_URL } from "@/lib/site";

export async function generateStaticParams() {
  const [options, fields] = await Promise.all([getOptions(), getFields()]);
  return [...new Set([...options, ...fields].map((item) => item.slug))]
    .map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const [options, fields] = await Promise.all([getOptions(), getFields()]);
  const field = getFieldsBySlug(params.slug, fields);
  const item = field ?? getOptionBySlug(params.slug, options);
  return { title: item ? `${item.name} — Landmark Metropolitan University Institute` : "Option not found" };
}

export default async function OptionPage({ params }: { params: { slug: string } }) {
  const [options, fields, schools] = await Promise.all([
    getOptions(),
    getFields(),
    getSchools(),
  ]);
  const field = getFieldsBySlug(params.slug, fields);
  const option = field ? undefined : getOptionBySlug(params.slug, options);
  const item = option ?? field;
  if (!item) notFound();

  const schoolSlug = option?.fieldSlug ?? field?.schoolSlug;
  const school = schools.find((school) => school.slug === schoolSlug);
  const related = option
    ? getOptionsBySchool(option.fieldSlug, options).filter((relatedOption) => relatedOption.slug !== option.slug)
    : field
      ? (() => {
        const slugOptions = getOptionsBySchool(field.slug, options);
        if (slugOptions.length > 0) return slugOptions;

        const fieldName = field.name.split(",")[0].trim();
        const fieldOptions = getOptionsBySchool(fieldName, options);
        return fieldOptions.length > 0 ? fieldOptions : getOptionsBySchool(field.schoolSlug, options);
      })()
      : [];

  return (
    <main>
      <section className="option-hero">
        <VisualPanel pattern={school?.pattern ?? "grid"} tone="navy" className="option-hero__visual" monogram />
        <div className="container option-hero__content">
          <Reveal>
            <span className="eyebrow" style={{ color: "var(--gold-400)" }}>
              {school?.shortName ?? "Academics"}
            </span>
          </Reveal>
          <Reveal delay={0.06}>
            <h1 className="headline--display" style={{ color: "white", marginTop: 18, fontSize: "clamp(2.2rem, 4.6vw, 3.6rem)" }}>
              {item.name}
            </h1>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="lede" style={{ color: "rgba(255,255,255,0.76)", marginTop: 20 }}>
              {item.summary}
            </p>
          </Reveal>
          {option && (
            <Reveal delay={0.18}>
              <div style={{ display: "flex", gap: 28, marginTop: 28, flexWrap: "wrap" }}>
                <div className="option-hero__meta">
                  <span>Degree level</span>
                  <strong>{option.degreeLevel}</strong>
                </div>
                <div className="option-hero__meta">
                  <span>Duration</span>
                  <strong>{option.duration}</strong>
                </div>
              </div>
            </Reveal>
          )}
          <Reveal delay={0.24}>
            <div style={{ marginTop: 32 }}>
              <Button href={APPLY_URL} variant="gold">
                Apply to This {field ? "Field" : "Option"}
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container option-body">
          <Reveal>
            <div>
              <h2 className="headline" style={{ fontSize: "1.7rem", marginBottom: 24 }}>
                {field ? "Field highlights" : "Option highlights"}
              </h2>
              <ul className="option-list">
                {item.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="option-outcomes">
              <h3 style={{ fontSize: "1.1rem", marginBottom: 18 }}>Outcomes</h3>
              {item.outcomes.map((outcome) => (
                <div key={outcome} className="option-outcomes__item">
                  {outcome}
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
              <span className="eyebrow">{field ? "Field Options" : "Related options"}</span>
            </Reveal>
            <RevealGroup className="option-related-grid">
              {related.map((relatedOption) => (
                <RevealItem key={relatedOption.slug}>
                  <OptionCard option={relatedOption} school={school} />
                </RevealItem>
              ))}
            </RevealGroup>
          </div>
        </section>
      )}

      <style dangerouslySetInnerHTML={{ __html: `
        .option-hero { position: relative; overflow: hidden; min-height: 420px; display: flex; align-items: flex-end; }
        .option-hero__visual { position: absolute; inset: 0; }
        .option-hero__visual::after {
          content: ""; position: absolute; inset: 0;
          background: linear-gradient(180deg, rgba(8,19,42,0.5), rgba(8,19,42,0.94));
        }
        .option-hero__content { position: relative; z-index: 2; padding: 140px 0 64px; }
        .option-hero__meta { display: flex; flex-direction: column; gap: 4px; }
        .option-hero__meta span { font-size: 0.76rem; text-transform: uppercase; letter-spacing: 0.08em; color: rgba(255,255,255,0.5); }
        .option-hero__meta strong { color: white; font-family: var(--font-display); font-size: 1.1rem; }

        .option-body { display: grid; grid-template-columns: 1.4fr 1fr; gap: 56px; }
        .option-list { list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 16px; }
        .option-list li {
          position: relative; padding-left: 26px; color: var(--muted); font-size: 0.96rem; line-height: 1.6;
        }
        .option-list li::before {
          content: ""; position: absolute; left: 0; top: 9px; width: 8px; height: 8px; border-radius: 50%;
          background: var(--gold-500);
        }
        .option-outcomes { background: var(--paper-alt); border-radius: var(--radius-md); padding: 28px; }
        .option-outcomes__item {
          font-family: var(--font-display); color: var(--navy-900); font-size: 1.02rem; padding: 12px 0;
          border-top: 1px solid var(--line);
        }
        .option-outcomes__item:first-of-type { border-top: none; }

        .option-related-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; margin-top: 36px; }

        @media (max-width: 900px) {
          .option-body { grid-template-columns: 1fr; }
          .option-related-grid { grid-template-columns: 1fr; }
        }
      ` }} />
    </main>
  );
}
