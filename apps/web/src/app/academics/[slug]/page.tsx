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

function normalizeDegreeLevel(value: string): string {
  return value.trim().toLocaleLowerCase().replace(/[^a-z0-9]/g, "");
}

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
  const optionData = field ? undefined : getOptionBySlug(params.slug, options);
  const optionField = optionData
    ? getFieldsBySlug(optionData.fieldSlug, fields) ?? fields.find((candidate) => {
      const normalize = (value: string) => value.toLowerCase().replace(/[^a-z0-9]/g, "");
      return normalize(candidate.name.split(",")[0].trim()) === normalize(optionData.fieldSlug);
    })
    : undefined;
  const schoolSlug = optionField?.schoolSlug ?? field?.schoolSlug;
  const option = optionData
    ? { ...optionData, schoolSlug: optionField?.schoolSlug }
    : undefined;
  const item = option ?? field;
  if (!item) notFound();

  const school = schools.find((school) => school.slug === schoolSlug);
  const related = option
    ? option.fieldSlug
      ? getOptionsBySchool(option.fieldSlug, options).filter((relatedOption) => relatedOption.slug !== option.slug)
      : []
    : field
      ? (() => {
        const slugOptions = getOptionsBySchool(field.slug, options);
        if (slugOptions.length > 0) return slugOptions;

        const fieldName = field.name.split(",")[0].trim();
        const fieldOptions = getOptionsBySchool(fieldName, options);
        return fieldOptions.length > 0 ? fieldOptions : getOptionsBySchool(field.schoolSlug, options);
      })()
      : [];
  const relatedGroups = [
    {
      title: "HND Options",
      options: related.filter((relatedOption) => normalizeDegreeLevel(relatedOption.degreeLevel) === "hnd"),
    },
    {
      title: "Undergraduate Options",
      options: related.filter((relatedOption) =>
        ["undergraduate", "undergradute", "certificate"].includes(normalizeDegreeLevel(relatedOption.degreeLevel)),
      ),
    },
    {
      title: "Graduate Options",
      options: related.filter((relatedOption) =>
        ["graduate", "doctoral"].includes(normalizeDegreeLevel(relatedOption.degreeLevel)),
      ),
    },
  ].filter((group) => group.options.length > 0);

  return (
    <main>
      <section className="option-hero">
        <VisualPanel pattern={school?.pattern ?? "grid"} tone="navy" className="option-hero__visual" monogram />
        <div className="container option-hero__content">
          <Reveal>
            <span className="eyebrow" style={{ color: "var(--gold-400)" }}>
              {school?.shortName ?? "Landmark Metropolitan University Institute"}
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
                {(item.highlights ?? []).map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
            </div>

            {option && (<div>
              <h2 className="headline" style={{ fontSize: "1.2rem", marginBottom: 24, marginTop: 48 }}>
                Admission Requirements
              </h2>
              <ul className="option-list">
                {(option.admissionRequirements ?? []).map((adminReg) => (
                  <li key={adminReg}>{adminReg}</li>
                ))}
              </ul>
            </div>)}
            {schoolSlug === "engineering" && (
              <div className="option-outcomes" style={{ marginTop:20 }}>
                <h3 style={{ fontSize: "1.25rem", marginBottom: 18 }}>Note</h3>
                <p style={{ fontSize: "1rem", lineHeight: 1.6, color: "var(--muted)" }}>
                  Admission into any 3 years Bachelor of Technology programs in the School of Science Engineering &amp; Technology require you to have passed <b>Mathematics</b> and <b>Physics</b> at the Advance level or Baccalaureate or its equivalent.
                </p>
              </div>
            )}
          </Reveal>
          <Reveal delay={0.1}>
            {option && (option.registration || option.tuitionFees) && (<div>
              <h2 className="headline" style={{ fontSize: "1.7rem", marginBottom: 24 }}>
                Registration and Tuition Fees
              </h2>
              <ul className="option-list" style={{ fontSize: "1.7rem", marginBottom: 24 }}>
                {option.registration && <li>Registration Fee: {option.registration}</li>}
                {option.tuitionFees && <li>Tuition Fees: {option.tuitionFees}</li>}
              </ul>
            </div>)}
            <div className="option-outcomes">
              <h3 style={{ fontSize: "1.1rem", marginBottom: 18 }}>Outcomes</h3>
              {(item.outcomes ?? []).map((outcome) => (
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

      {relatedGroups.length > 0 && (
        <section className="section section--paper-alt">
          <div className="container">
            <Reveal>
              <span className="eyebrow">{field ? "Field Options" : "Related Options"}</span>
            </Reveal>
            {relatedGroups.map((group) => (
              <div className="option-related-group" key={group.title}>
                <Reveal>
                  <h2 className="headline option-related-group__title" style={{ fontSize: "2rem", marginTop: 35, marginBottom: 25 }}>{group.title}</h2>
                </Reveal>
                <RevealGroup className="option-related-grid">
                  {group.options.map((relatedOption) => (
                    <RevealItem key={relatedOption.slug}>
                      <OptionCard option={relatedOption} school={school} />
                    </RevealItem>
                  ))}
                </RevealGroup>
              </div>
            ))}
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

        .option-related-group + .option-related-group { margin-top: 48px; }
        .option-related-group__title { font-size: 1.5rem; margin-bottom: 20px; }
        .option-related-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; }

        @media (max-width: 900px) {
          .option-body { grid-template-columns: 1fr; }
          .option-related-grid { grid-template-columns: 1fr; }
        }
      ` }} />
    </main>
  );
}
