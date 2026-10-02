import type { Metadata } from "next";
import { Reveal } from "@/components/Reveal";
import WebImageLinks from "@/data/images/image_objects";

export const metadata: Metadata = {
  title: "The Vice Chancellor — Landmark Metropolitan University Institute",
  description:
    "Meet Prof. Vincen P. K. Titanji, Vice Chancellor and Rector of Landmark Metropolitan University Institute.",
};

export default function ViceChancellorPage() {
  return (
    <main>
      <section className="section vice-chancellor-hero">
        <div className="container vice-chancellor-hero__layout">
          <div className="vice-chancellor-hero__copy">
            <Reveal>
              <span className="eyebrow">Office of the Vice Chancellor</span>
            </Reveal>
            <Reveal delay={0.06}>
              <h1 className="headline--display vice-chancellor-hero__name">
                Prof. Vincen P. K. Titanji
              </h1>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="vice-chancellor-hero__title">Vice Chancellor /Rector</p>
            </Reveal>
            <Reveal delay={0.18}>
              <p className="lede vice-chancellor-hero__lede">
                Prof. Titanji is part of Landmark Metropolitan University Institute’s board
                management, serving as Vice Chancellor and Rector.
              </p>
            </Reveal>
          </div>
          <Reveal delay={0.12} className="vice-chancellor-hero__portrait">
            <img src={WebImageLinks.vc} alt="Prof. Vincen P. K. Titanji" />
            <div className="vice-chancellor-hero__caption">
              <span>Prof. Vincen P. K. Titanji</span>
              <span>Vice Chancellor /Rector</span>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section section--navy vice-chancellor-role">
        <div className="container vice-chancellor-role__content">
          <Reveal>
            <span className="eyebrow">University leadership</span>
          </Reveal>
          <Reveal delay={0.06}>
            <h2 className="headline vice-chancellor-role__heading">
              Leadership in service of Landmark’s academic community.
            </h2>
          </Reveal>
          <Reveal delay={0.12}>
            <p>
              The Vice Chancellor and Rector is a member of the university’s board management.
              This profile recognizes Prof. Titanji in that leadership role.
            </p>
          </Reveal>
        </div>
      </section>

      <style dangerouslySetInnerHTML={{ __html: `
        .vice-chancellor-hero { padding-bottom: clamp(72px, 9vw, 128px); }
        .vice-chancellor-hero__layout {
          display: grid; grid-template-columns: minmax(0, 1fr) minmax(300px, 0.72fr);
          align-items: center; gap: clamp(40px, 8vw, 112px);
        }
        .vice-chancellor-hero__copy { max-width: 680px; }
        .vice-chancellor-hero__name { margin-top: 22px; }
        .vice-chancellor-hero__title {
          margin-top: 20px; color: var(--garnet-500); font-weight: 600; font-size: 1rem;
        }
        .vice-chancellor-hero__lede { margin-top: 28px; max-width: 600px; }
        .vice-chancellor-hero__portrait {
          position: relative; aspect-ratio: 4 / 5; max-height: 620px; overflow: hidden;
          border-radius: var(--radius-md); background: var(--navy-800);
        }
        .vice-chancellor-hero__portrait img {
          width: 100%; height: 100%; object-fit: cover; object-position: center top;
        }
        .vice-chancellor-hero__caption {
          position: absolute; inset: auto 0 0; display: flex; flex-direction: column; gap: 3px;
          padding: 36px 24px 22px; color: white;
          background: linear-gradient(180deg, transparent, rgba(8,19,42,0.88));
        }
        .vice-chancellor-hero__caption span:first-child {
          font-family: var(--font-display); font-size: 1.35rem;
        }
        .vice-chancellor-hero__caption span:last-child {
          color: rgba(255,255,255,0.75); font-size: 0.82rem;
        }
        .vice-chancellor-role__content { max-width: 850px; }
        .vice-chancellor-role__heading { margin-top: 18px; margin-bottom: 24px; }
        .vice-chancellor-role__content p { max-width: 660px; color: rgba(255,255,255,0.72); line-height: 1.7; }
        @media (max-width: 760px) {
          .vice-chancellor-hero__layout { grid-template-columns: minmax(0, 1fr); gap: 36px; }
          .vice-chancellor-hero__portrait { width: min(100%, 460px); }
        }
      ` }} />
    </main>
  );
}