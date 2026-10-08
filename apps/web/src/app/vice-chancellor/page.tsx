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
                In order to enhance quality training ahead of the 2023/2024 academic year, the President and founder of the Landmark Group of Companies, installs seasoned top management staff with a world of experience in higher education. These management and teaching staff who have been commissioned into their respective offices, have joined the highly qualified faculty staff on Landmark Vice Chancellor to enhance the vision of the university.
              </p>
              <p className="lede vice-chancellor-hero__lede">
                Amongst the newly installed staff, there is Professor emeritus Vincent P.K. TITANJI, former Vice Chancellor of the University of Buea, who now serves as the Vice Chancellor of Vice Chancellor. It is worth noting that Professor emeritus Vincent P.K. TITANJI is a seasoned university administrator with over forty years of experience in higher education, both home and abroad. His world of experience is hoped to contribute in sustaining the global impact, which Landmark University has had in over forty-five nations across the globe.
              </p>
              <p className="lede vice-chancellor-hero__lede">
                There is also Dr. NDEH NINGO, former Director of ENSET Douala and pioneer Director of College of Technology (COT) of the University of Buea who was appointed the Deputy Vice Chancellor in charge of Research and Cooperation. Apart from his rich experience in university management he is equally a celebrated engineering lecturer whose teaching expertise is going to boost the engineering school of the said university globally.
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
              
            </p>
          </Reveal>
        </div>
      </section>

      <style dangerouslySetInnerHTML={{ __html: `
        .vice-chancellor-hero { padding-bottom: clamp(72px, 9vw, 128px); }
        .vice-chancellor-hero .container { max-width: 1480px; }
        .vice-chancellor-hero__layout {
          display: grid; grid-template-columns: minmax(0, 1fr) minmax(340px, 1fr);
          align-items: stretch; gap: clamp(40px, 6vw, 88px);
        }
        .vice-chancellor-hero__copy { max-width: none; }
        .vice-chancellor-hero__name { margin-top: 22px; }
        .vice-chancellor-hero__title {
          margin-top: 20px; color: var(--garnet-500); font-weight: 600; font-size: 1rem;
        }
        .vice-chancellor-hero__lede { margin-top: 28px; max-width: 760px; text-align: justify; }
        .vice-chancellor-hero__portrait {
          position: relative; min-height: 100%; overflow: hidden;
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
          .vice-chancellor-hero__portrait {
            justify-self: center; width: min(100%, 460px); aspect-ratio: 4 / 5; min-height: 0;
          }
        }
      ` }} />
    </main>
  );
}