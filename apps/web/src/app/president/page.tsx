import type { Metadata } from "next";
import { Reveal, RevealGroup, RevealItem } from "@/components/Reveal";
import WebImageLinks from "@/data/images/image_objects";

export const metadata: Metadata = {
  title: "The President — Landmark Metropolitan University Institute",
  description:
    "Meet Prof. Simon LEGAH, Founder, President and Chancellor of Landmark Metropolitan University Institute.",
};

const milestones = [
  {
    year: "2005",
    title: "A professional education foundation",
    description:
      "Legacy International College of Arts and Sciences (LICAS) began Landmark's story, offering professional training including ACCA, ABE and practical bookkeeping.",
  },
  {
    year: "2013",
    title: "A new institutional chapter",
    description:
      "LICAS became Landmark Higher Institute and expanded into Cameroon's national HND and HPD programs.",
  },
  {
    year: "2019",
    title: "A wider campus community",
    description:
      "Landmark expanded its campuses to Toronto, Canada, and New York, USA, following strong student results in Cameroon.",
  },
];

export default function PresidentPage() {
  return (
    <main>
      <section className="section president-hero">
        <div className="container president-hero__layout">
          <div className="president-hero__copy">
            <Reveal>
              <span className="eyebrow">Office of the President</span>
            </Reveal>
            <Reveal delay={0.06}>
              <h1 className="headline--display president-hero__name">Prof. Simon LEGAH</h1>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="president-hero__title">Founder, President &amp; Chancellor</p>
            </Reveal>
            <Reveal delay={0.18}>
              <p className="lede president-hero__lede">
                Landmark grew from a professional training college into a university institute
                with programs in Cameroon and campuses beyond its borders. Its foundation in
                practical education continues to shape the institution.
              </p>
            </Reveal>
          </div>
          <Reveal delay={0.12} className="president-hero__portrait">
            <img src={WebImageLinks.president} alt="Prof. Simon LEGAH" />
            <div className="president-hero__caption">
              <span>Prof. Simon LEGAH</span>
              <span>Founder, President &amp; Chancellor</span>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section section--navy president-history">
        <div className="container">
          <Reveal>
            <span className="eyebrow">The institution’s journey</span>
          </Reveal>
          <Reveal delay={0.06}>
            <h2 className="headline president-history__heading">
              From professional training to a global campus community.
            </h2>
          </Reveal>
          <RevealGroup className="president-timeline">
            {milestones.map((milestone) => (
              <RevealItem key={milestone.year} className="president-timeline__item">
                <div className="president-timeline__year">{milestone.year}</div>
                <div>
                  <h3>{milestone.title}</h3>
                  <p>{milestone.description}</p>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      <style dangerouslySetInnerHTML={{ __html: `
        .president-hero { padding-bottom: clamp(72px, 9vw, 128px); }
        .president-hero__layout {
          display: grid; grid-template-columns: minmax(0, 1fr) minmax(300px, 0.72fr);
          align-items: center; gap: clamp(40px, 8vw, 112px);
        }
        .president-hero__copy { max-width: 680px; }
        .president-hero__name { margin-top: 22px; }
        .president-hero__title {
          margin-top: 20px; color: var(--garnet-500); font-weight: 600; font-size: 1rem;
        }
        .president-hero__lede { margin-top: 28px; max-width: 600px; }
        .president-hero__portrait {
          position: relative; aspect-ratio: 4 / 5; max-height: 620px; overflow: hidden;
          border-radius: var(--radius-md); background: var(--navy-800);
        }
        .president-hero__portrait img { width: 100%; height: 100%; object-fit: cover; object-position: center top; }
        .president-hero__caption {
          position: absolute; inset: auto 0 0; display: flex; flex-direction: column; gap: 3px;
          padding: 36px 24px 22px; color: white;
          background: linear-gradient(180deg, transparent, rgba(8,19,42,0.88));
        }
        .president-hero__caption span:first-child { font-family: var(--font-display); font-size: 1.35rem; }
        .president-hero__caption span:last-child { color: rgba(255,255,255,0.75); font-size: 0.82rem; }
        .president-history__heading { margin-top: 18px; margin-bottom: 48px; }
        .president-timeline { max-width: 850px; }
        .president-timeline__item {
          display: grid; grid-template-columns: 100px minmax(0, 1fr); gap: 24px;
          padding: 24px 0; border-top: 1px solid rgba(255,255,255,0.14);
        }
        .president-timeline__item:last-child { border-bottom: 1px solid rgba(255,255,255,0.14); }
        .president-timeline__year { color: var(--gold-400); font-family: var(--font-display); font-size: 1.35rem; }
        .president-timeline__item h3 { color: white; font-size: 1.2rem; }
        .president-timeline__item p { margin-top: 9px; max-width: 660px; color: rgba(255,255,255,0.72); line-height: 1.7; }
        @media (max-width: 760px) {
          .president-hero__layout { grid-template-columns: minmax(0, 1fr); gap: 36px; }
          .president-hero__portrait { width: min(100%, 460px); }
        }
        @media (max-width: 520px) {
          .president-timeline__item { grid-template-columns: 64px minmax(0, 1fr); gap: 16px; }
          .president-timeline__item h3 { font-size: 1.08rem; }
        }
      ` }} />
    </main>
  );
}