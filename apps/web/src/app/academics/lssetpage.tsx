import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/Button";
import { ProgramCard } from "@/components/ProgramCard";
import { Reveal, RevealGroup, RevealItem } from "@/components/Reveal";
import { getProgramsBySchool, programs } from "@/data/programs";
import { getSchools } from "@/data/schools";
import { APPLY_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "LSSET — Landmark Metropolitan University Institute",
  description: "Five programs, 40+ options, every one built around real practice.",
};

export default async function LSSETPage() {
  const schools = await getSchools();
  const engineeringSchools = schools.filter((school) => school.slug === "engineering");

  return (
    <main>
      <section className="section" style={{ paddingBottom: 60 }}>
        <div className="container">
          <Reveal>
            <span className="eyebrow">Landmark School of Science Engineering and Technology</span>
          </Reveal>
          <Reveal delay={0.06}>
            <h1 className="headline--display" style={{ marginTop: 20, maxWidth: 820 }}>
              40+ options. Five programs. One standard for what counts as learning.
            </h1>
          </Reveal>
          <Reveal delay={0.14}>
            <p className="lede" style={{ marginTop: 24 }}>
              Every program below carries a real practicum requirement — a client, a docket, a lab, a
              build. Jump to a school, or apply now.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="academics-jump">
              {engineeringSchools.map((s) => (
                <a key={s.slug} href={`#${s.slug}`} className="academics-jump__chip">
                  {s.shortName}
                </a>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {engineeringSchools.map((school, idx) => {
        const schoolPrograms = getProgramsBySchool(school.slug);
        return (
          <section
            key={school.slug}
            id={school.slug}
            className={`section academics-school ${idx % 2 === 1 ? "section--paper-alt" : ""}`}
          >
            <div className="container">
              <div className="academics-school__head">
                <div>
                  <Reveal>
                    <span className="eyebrow">{school.stat.value} &middot; {school.stat.label}</span>
                  </Reveal>
                  <Reveal delay={0.06}>
                    <h2 className="headline" style={{ marginTop: 16, maxWidth: 640 }}>
                      {school.name}
                    </h2>
                  </Reveal>
                  <Reveal delay={0.1}>
                    {Array.isArray(school.description) ? (
                      school.description.map((paragraph, paragraphIndex) => (
                        <p
                          key={paragraphIndex}
                          className="lede"
                          style={{ marginTop: paragraphIndex === 0 ? 16 : 12 }}
                        >
                          {paragraph}
                        </p>
                      ))
                    ) : (
                      <p className="lede" style={{ marginTop: 16 }}>
                        {school.description}
                      </p>
                    )}
                  </Reveal>
                </div>
                <Reveal delay={0.14}>
                  <a href={APPLY_URL} target="_blank" rel="noopener noreferrer" className="btn btn--outline-dark">
                    Apply to {school.shortName}
                  </a>
                </Reveal>
              </div>

              <RevealGroup className="academics-grid">
                {schoolPrograms.map((program) => (
                  <RevealItem key={program.slug}>
                    <ProgramCard program={program} school={school} />
                  </RevealItem>
                ))}
              </RevealGroup>
            </div>
          </section>
        );
      })}

      <section className="cta-banner-simple">
        <div className="container" style={{ textAlign: "center" }}>
          <Reveal>
            <h2 className="headline" style={{ color: "white", margin: "0 auto" }}>
              {programs.length}+ programs. One application.
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
        .academics-jump { display: flex; gap: 10px; flex-wrap: wrap; margin-top: 32px; }
        .academics-jump__chip {
          padding: 9px 18px; border-radius: 999px; border: 1px solid var(--line-strong);
          font-size: 0.84rem; color: var(--navy-900); transition: background 0.3s, color 0.3s, border-color 0.3s;
        }
        .academics-jump__chip:hover { background: var(--navy-900); color: white; border-color: var(--navy-900); }

        .academics-school { scroll-margin-top: 90px; }
        .academics-school__head {
          display: flex; justify-content: space-between; align-items: flex-end; gap: 32px;
          margin-bottom: 44px; flex-wrap: wrap;
        }
        .academics-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; }

        .cta-banner-simple { background: var(--navy-900); padding: 90px 0; }

        @media (max-width: 980px) {
          .academics-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 640px) {
          .academics-grid { grid-template-columns: 1fr; }
        }
      ` }} />
    </main>
  );
}
