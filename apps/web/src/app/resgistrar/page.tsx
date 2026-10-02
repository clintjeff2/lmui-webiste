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
                Registrar /Director of Human Resource
              </p>
            </Reveal>
            <Reveal delay={0.18}>
              <p className="lede registrar-hero__lede">
                Dear Esteemed Guests, Faculty, Staff, and Students,
              </p>
              <p className="lede registrar-hero__lede">
                It is with great pleasure that I welcome you to our esteemed institution. We are honored to have you join our community, where we strive for academic excellence and personal growth. Our dedicated faculty and staff are committed to providing an enriching educational experience that prepares our students for success in their chosen fields. At LANDMARK Metropolitan University Institute Institute, our programs are created in line with the requirements of the Ministry of Higher Education, but again, with an added advantage of a holistic appreciation based on what we have gathered from our partners both in Cameroon and abroad. This is done simply to make Landmark Metropolitan University Institute exceptional.
              </p>
              <p className="lede registrar-hero__lede">
                A famous Scholar, William James Durant (1885-1981) said something which has always been a driving force in my academics and career. " Education is the discovery of our own ignorance". If we will reflect on this and meditate on it, then we shall understand, what it takes to be educated. It is because of the driving force to eradicate our ignorance and build us up, that we are gathered here under the platform of LANDMARK Metropolitan University Institute Institute Buea. We look forward to an exciting year filled with learning opportunities, collaboration, and innovation at LANDMARK Metropolitan University Institute Institute Buea. Thank you for being a part of our journey towards knowledge and discovery. We assure you, that you are in the right place and the academic and administrative staff placed at your disposal are refined and excellent charged with the responsibility of bringing out the best in you.
              </p>
              <p className="lede registrar-hero__lede">
                Dear Students, leaving home to come to school is a step towards building a future that is bright and leading to a career. Many of you have abilities that have not been identified and some will be misguided by their peers away from their ambitions. There is a great challenge before you. I urge you to work with the staff of the institution, follow the orientations and always ask for assistance.
              </p>
              <p className="lede registrar-hero__lede">
                Warm regards.
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