import type { Metadata } from "next";
import { Reveal } from "@/components/Reveal";
import WebImageLinks from "@/data/images/image_objects";

export const metadata: Metadata = {
  title: "The Registrar — Landmark Metropolitan University Institute",
  description:
    "Meet Dr. Ruth MUGRI, Registrar and Director of Human Resources at Landmark Metropolitan University Institute.",
};

export default function RegistrarPage() {
  return (
    <main>
      <section className="section registrar-hero">
        <div className="container registrar-hero__layout">
          <div className="registrar-hero__copy">
            <Reveal>
              <span className="eyebrow">Office of the Registrar</span>
            </Reveal>
            <Reveal delay={0.06}>
              <h1 className="headline--display registrar-hero__name">Dr. Ruth MUGRI</h1>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="registrar-hero__title">
                Registrar &amp; Director of Human Resources
              </p>
            </Reveal>
            <Reveal delay={0.18}>
              <p className="lede registrar-hero__lede">
                Dr. Ruth MUGRI is listed in Landmark Metropolitan University Institute’s board
                management as Registrar and Director of Human Resources.
              </p>
            </Reveal>
          </div>
          <Reveal delay={0.12} className="registrar-hero__portrait">
            <img src={WebImageLinks.registrar} alt="Dr. Ruth MUGRI" />
            <div className="registrar-hero__caption">
              <span>Dr. Ruth MUGRI</span>
              <span>Registrar &amp; Director of Human Resources</span>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section section--navy registrar-role">
        <div className="container registrar-role__content">
          <Reveal>
            <span className="eyebrow">University leadership</span>
          </Reveal>
          <Reveal delay={0.06}>
            <h2 className="headline registrar-role__heading">
              Registrar and Director of Human Resources.
            </h2>
          </Reveal>
          <Reveal delay={0.12}>
            <p>
              The university’s leadership listing identifies Dr. MUGRI in both roles within
              Landmark’s board management.
            </p>
          </Reveal>
        </div>
      </section>

      <style dangerouslySetInnerHTML={{ __html: `
        .registrar-hero { padding-bottom: clamp(72px, 9vw, 128px); }
        .registrar-hero__layout {
          display: grid; grid-template-columns: minmax(0, 1fr) minmax(300px, 0.72fr);
          align-items: center; gap: clamp(40px, 8vw, 112px);
        }
        .registrar-hero__copy { max-width: 680px; }
        .registrar-hero__name { margin-top: 22px; }
        .registrar-hero__title {
          margin-top: 20px; color: var(--garnet-500); font-weight: 600; font-size: 1rem;
        }
        .registrar-hero__lede { margin-top: 28px; max-width: 600px; }
        .registrar-hero__portrait {
          position: relative; aspect-ratio: 4 / 5; max-height: 620px; overflow: hidden;
          border-radius: var(--radius-md); background: var(--navy-800);
        }
        .registrar-hero__portrait img {
          width: 100%; height: 100%; object-fit: cover; object-position: center top;
        }
        .registrar-hero__caption {
          position: absolute; inset: auto 0 0; display: flex; flex-direction: column; gap: 3px;
          padding: 36px 24px 22px; color: white;
          background: linear-gradient(180deg, transparent, rgba(8,19,42,0.88));
        }
        .registrar-hero__caption span:first-child {
          font-family: var(--font-display); font-size: 1.35rem;
        }
        .registrar-hero__caption span:last-child {
          color: rgba(255,255,255,0.75); font-size: 0.82rem;
        }
        .registrar-role__content { max-width: 850px; }
        .registrar-role__heading { margin-top: 18px; margin-bottom: 24px; }
        .registrar-role__content p { max-width: 660px; color: rgba(255,255,255,0.72); line-height: 1.7; }
        @media (max-width: 760px) {
          .registrar-hero__layout { grid-template-columns: minmax(0, 1fr); gap: 36px; }
          .registrar-hero__portrait { width: min(100%, 460px); }
        }
      ` }} />
    </main>
  );
}