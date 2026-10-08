import type { Metadata } from "next";
import { Reveal, RevealGroup, RevealItem } from "@/components/Reveal";
import WebImageLinks from "@/data/images/image_objects";
import { getAboutData } from "@/data/about";

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

export default async function PresidentPage() {
  const {
    milestones: aboutMilestones,
    } = await getAboutData();
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
                Performance in every field of human endeavour is a function of preparation. No one can ever arrive at a future that he or she cannot see and no one arrives at a future that he or she is not prepared for. It is true, a country without youths is a dead country. What will we say the country is turning into when our youths are a consuming population rather than a productive one? What will we say when the old are planning for the future and the youths are moving unaware of their contributions to the future? In the book of Joel 2:28, “And it shall come to pass afterwards that I will pour out my spirit on all flesh; your sons and daughters shall prophesy, your old men shall dream dreams, your young men shall see visions”.
              </p>
              <p className="lede president-hero__lede">
                The young shall see visions! Now, I ask the youths, what is your vision? Where do you see yourself in the world? Where do you want to see the world in the future to come? You are the change; you are the future. The old dream dreams, the dreams they have for the youths are unquestionable. Are the youths seeing this?
              </p>
              <p className="lede president-hero__lede">
                No one will be remembered for what he has but what he adds. Approach life with a contributor’s mentality and you will make the most of it. Commitment to a life of contribution is what makes men and women exploited. You shall be sought after for every task you put your mind to because you can deliver. That is the first step to building a legacy, contribution to the future and making a name for yourself.
              </p>
              <p className="lede president-hero__lede">
                I believe purposelessness is the bane of today’s youths. They are blank to the future, aiming at nothing, going for everything that comes their way. Without a well-defined purpose, life is meaningless. Every true vision is about value addition and not just possession. You must endeavour to possess and sustain a contributory mentality; it is risky to live a loose and carefree life. Your future lies in the early discovery of your purpose.
              </p>
              <p className="lede president-hero__lede">
                At LANDMARK Metropolitan University Institute, we train future leaders. We build youths with not only an entrepreneurial mindset but a moral one at that. This is what Africa solely needs.
              </p>
              <p className="lede president-hero__lede">
                We are a leading world-Class University raising a new generation of leaders that will champion innovative development in a rapidly changing world. Since 2005, we have graduated hundreds of Chattered Accountants, Chattered Marketers, Entrepreneurs, Managers, DEVOPs Engineers, Business Leaders, Digital Experts, experts in Engineering, Technology, Logistics, Shipping, and Education, just to name a few. Business mentors are key – that is why when it comes to students’ training, we are choosy. We want to give each of you the time and guidance you deserve. Our dedicated teaching and management team and corporate partners also serve as mentors in your journey to become a global professional in your field.
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
          <RevealGroup className="timeline">
            {aboutMilestones.map((m) => (
              <RevealItem key={m.year} className="timeline-row">
                <div className="timeline-row__year">{m.year}</div>
                <div className="timeline-row__desc">
                  {m.description.split(/\n\s*\n/).map((paragraph, index) => (
                    <p key={`${m.year}-${index}`}>{paragraph}</p>
                  ))}
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      <style dangerouslySetInnerHTML={{ __html: `
        .president-hero { padding-bottom: clamp(72px, 9vw, 128px); }
        .president-hero .container { max-width: 1480px; }
        .president-hero__layout {
          display: grid; grid-template-columns: minmax(0, 1fr) minmax(340px, 1fr);
          align-items: stretch; gap: clamp(40px, 6vw, 88px);
        }
        .president-hero__copy { max-width: none; }
        .president-hero__name { margin-top: 22px; }
        .president-hero__title {
          margin-top: 20px; color: var(--garnet-500); font-weight: 600; font-size: 1rem;
        }
        .president-hero__lede { margin-top: 28px; max-width: 760px; text-align: justify; }
        .president-hero__portrait {
          position: relative; min-height: 100%; overflow: hidden;
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
        .timeline { max-width: 760px; }
        .timeline-row {
          display: grid; grid-template-columns: 100px 1fr; gap: 24px; padding: 22px 0;
          border-top: 1px solid rgba(255,255,255,0.12);
        }
        .timeline-row:last-child { border-bottom: 1px solid rgba(255,255,255,0.12); }
        .timeline-row__year { font-family: var(--font-display); color: var(--gold-400); font-size: 1.2rem; }
        .timeline-row__desc { color: rgba(255,255,255,0.78); line-height: 1.6; text-align: justify; }
        .timeline-row__desc p + p { margin-top: 12px; }
        @media (max-width: 760px) {
          .president-hero__layout { grid-template-columns: minmax(0, 1fr); gap: 36px; }
          .president-hero__portrait {
            justify-self: center; width: min(100%, 460px); aspect-ratio: 4 / 5; min-height: 0;
          }
        }
        @media (max-width: 520px) {
          .president-timeline__item { grid-template-columns: 64px minmax(0, 1fr); gap: 16px; }
          .president-timeline__item h3 { font-size: 1.08rem; }
        }
      ` }} />
    </main>
  );
}