import { Button } from "@/components/Button";
import { FaqAccordion } from "@/components/FaqAccordion";
import { Marquee } from "@/components/Marquee";
import { NewsCard } from "@/components/NewsCard";
import { Reveal, RevealGroup, RevealItem } from "@/components/Reveal";
import { SchoolCard } from "@/components/SchoolCard";
import { StatStrip } from "@/components/StatStrip";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { VisualPanel } from "@/components/VisualPanel";
import { getAboutData } from "@/data/about";
import { admissionsFaq } from "@/data/admissions";
import { getNewsArticles } from "@/data/news";
import { getSchools } from "@/data/schools";
import { getSecondaryStats, heroStats } from "@/data/stats";
import { getTestimonials } from "@/data/testimonials";
import { formatDate } from "@/lib/format";
import { APPLY_URL } from "@/lib/site";
import Image from "next/image";
import Link from "next/link";

const recognitions = [
  "University of Buea",
  "Landmark Technologies",
  "University of Toronto",
  "Best Engineering College in Buea",
];

export default async function HomePage() {
  const [{ pillars: homePillars, leadership, campusCount }, schools, homeTestimonials] = await Promise.all([
    getAboutData(),
    getSchools(),
    getTestimonials(),
  ]);
  const president = leadership.find((leader) => {
    const title = leader.title.toLowerCase();
    return title.includes("president") && !title.includes("vice president");
  });
  const newsArticles = await getNewsArticles(campusCount);
  const featured = newsArticles.find((a) => a.featured) ?? newsArticles[0];
  const rest = newsArticles.filter((a) => a.slug !== featured.slug).slice(0, 3);
  const homeSecondaryStats = getSecondaryStats(campusCount);

  return (
    <main>
      {/* ---------------- HERO ---------------- */}
      <section className="hero">
        <div className="hero__blobs" aria-hidden="true">
          <div className="hero-blob hero-blob--gold" />
          <div className="hero-blob hero-blob--garnet" />
        </div>
        <div className="container hero__content">
          <Reveal>
            <span className="eyebrow" style={{ color: "var(--gold-400)" }}>
              Landmark Metropolitan University Institute
            </span>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="headline--display" style={{ color: "white", marginTop: 22, maxWidth: 920 }}>
              Where practice <em style={{ color: "var(--gold-400)", fontStyle: "italic" }}>is</em> the
              curriculum.
            </h1>
          </Reveal>
          <Reveal delay={0.18}>
            <p className="lede" style={{ color: "rgba(255,255,255,0.76)", marginTop: 26 }}>
              Four schools. One hundred and fifty plus programs. Every one of them built around a real client,
              a real docket, real capital — not a simulation of professional life, the thing itself.
            </p>
          </Reveal>
          <Reveal delay={0.28}>
            <div style={{ display: "flex", gap: 16, marginTop: 40, flexWrap: "wrap" }}>
              <Button href={APPLY_URL} variant="gold">
                Apply Now
              </Button>
              <Button href="/academics" variant="outline-light">
                Explore Academics
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      <div className="container hero-stat-wrap">
        <Reveal delay={0.15}>
          <div className="hero-stat-card">
            <StatStrip stats={heroStats} />
          </div>
        </Reveal>
      </div>

      {/* ---------------- MARQUEE ---------------- */}
      <div style={{ background: "var(--navy-900)", padding: "26px 0 80px" }}>
        <Marquee items={recognitions} />
      </div>

      {/* ---------------- PRESIDENTIAL PULL QUOTE ---------------- */}
      <section className="section--navy">
        <div className={`container quote-section${president?.image ? "" : " quote-section--text-only"}`}>
          <div className="quote-section__content">
            <Reveal>
              <svg width="56" height="42" viewBox="0 0 42 32" fill="none" style={{ marginBottom: 24 }}>
                <path
                  d="M0 32V19.4C0 8.2 6.3 1.4 17.5 0L19 5.4C11.6 7.2 8.4 11.6 8.4 17.6H17.5V32H0ZM24.532V19.4C24.5 8.2 30.8 1.4 42 0L43.5 5.4C36.1 7.2 32.9 11.6 32.9 17.6H42V32H24.5Z"
                  fill="var(--gold-500)"
                />
              </svg>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="quote-section__text">
                We stopped asking students to imagine what practice feels like, and started building
                curricula where they simply practice — supervised, accountable, and years ahead of
                schedule.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="quote-section__attr">
                <div>
                  <div style={{ color: "white", fontWeight: 600 }}>
                    {president?.name ?? "Prof. Simon Legah"}
                  </div>
                  <div style={{ color: "rgba(255,255,255,0.55)", fontSize: "0.86rem" }}>
                    {president?.title ?? "President"}, Landmark Metropolitan University Institute
                  </div>
                </div>
                <div className="quote-section__stats">
                  <StatStrip stats={homeSecondaryStats} dark />
                </div>
              </div>
            </Reveal>
          </div>
          {president?.image && (
            <Reveal delay={0.18} className="quote-section__portrait">
              <Image
                src={president.image}
                alt={president.name}
                fill
                sizes="(max-width: 980px) 100vw, 38vw"
                className="quote-section__image"
              />
            </Reveal>
          )}
        </div>
      </section>

      {/* ---------------- WHY LANDMARK ---------------- */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <div>
              <Reveal>
                <span className="eyebrow">Why Landmark</span>
              </Reveal>
              <Reveal delay={0.06}>
                <h2 className="headline" style={{ marginTop: 16 }}>
                  A different theory of what a university is for.
                </h2>
              </Reveal>
            </div>
            <Reveal delay={0.1}>
              <p className="lede">
                Most universities teach you about a field. We build every program around actually
                practicing it — under supervision, with real stakes, before you graduate.
              </p>
            </Reveal>
          </div>

          <RevealGroup className="pillars-grid">
            {homePillars.map((pillar, i) => (
              <RevealItem key={pillar.title} className="pillar-card">
                <span className="pillar-card__num">0{i + 1}</span>
                <h3 className="pillar-card__title">{pillar.title}</h3>
                <p className="pillar-card__desc">{pillar.description}</p>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      {/* ---------------- SCHOOLS ---------------- */}
      <section className="section section--paper-alt">
        <div className="container">
          <div className="section-head">
            <div>
              <Reveal>
                <span className="eyebrow">Academics</span>
              </Reveal>
              <Reveal delay={0.06}>
                <h2 className="headline" style={{ marginTop: 16 }}>
                  Four schools. One standard.
                </h2>
              </Reveal>
            </div>
            <Reveal delay={0.1}>
              <Link href="/academics" className="btn btn--outline-dark">
                View all 150+ programs
              </Link>
            </Reveal>
          </div>
        </div>
        <div className="schools-scroll container">
          {schools.map((school) => (
            <SchoolCard key={school.slug} school={school} />
          ))}
        </div>
      </section>

      {/* ---------------- TESTIMONIALS ---------------- */}
      <section className="section">
        <TestimonialsSection items={homeTestimonials} />
      </section>

      {/* ---------------- NEWS ---------------- */}
      <section className="section section--paper-alt">
        <div className="container">
          <div className="section-head">
            <div>
              <Reveal>
                <span className="eyebrow">News &amp; Insights</span>
              </Reveal>
              <Reveal delay={0.06}>
                <h2 className="headline" style={{ marginTop: 16 }}>
                  What's happening across our campuses.
                </h2>
              </Reveal>
            </div>
            <Reveal delay={0.1}>
              <Link href="/news" className="btn btn--outline-dark">
                All news &amp; insights
              </Link>
            </Reveal>
          </div>

          <div className="news-layout">
            <Reveal className="news-featured">
              <Link href={`/news/${featured.slug}`} className="news-featured__link">
                <div className="news-featured__visual">
                  {featured.image && (
                    <Image
                      src={featured.image}
                      alt=""
                      fill
                      sizes="(max-width: 980px) 100vw, 55vw"
                      style={{ objectFit: "cover" }}
                    />
                  )}
                  <VisualPanel pattern="grid" tone="navy" className="news-featured__panel" monogram />
                </div>
                <div className="news-featured__meta">
                  <span>{featured.category}</span>
                  <span>&middot;</span>
                  <span>{formatDate(featured.date)}</span>
                </div>
                <h3 className="news-featured__title">{featured.title}</h3>
                <p className="news-featured__dek">{featured.dek}</p>
              </Link>
            </Reveal>

            <RevealGroup className="news-list">
              {rest.map((article, i) => (
                <RevealItem key={article.slug}>
                  <NewsCard article={article} pattern={(["diagonal", "radial", "wave"] as const)[i % 3]} />
                </RevealItem>
              ))}
            </RevealGroup>
          </div>
        </div>
      </section>

      {/* ---------------- ADMISSIONS FAQ TEASER ---------------- */}
      <section className="section">
        <div className="container faq-layout">
          <div>
            <Reveal>
              <span className="eyebrow">Admissions</span>
            </Reveal>
            <Reveal delay={0.06}>
              <h2 className="headline" style={{ marginTop: 16 }}>
                Questions worth answering up front.
              </h2>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="lede" style={{ marginTop: 20, marginBottom: 32 }}>
                Need-blind admission. Aid that meets 100% of demonstrated need. Test-optional for every
                first-year applicant.
              </p>
              <Button href="/admissions" variant="outline-dark">
                Explore Admissions
              </Button>
            </Reveal>
          </div>
          <Reveal delay={0.16}>
            <FaqAccordion items={admissionsFaq.slice(0, 3)} />
          </Reveal>
        </div>
      </section>

      {/* ---------------- FINAL CTA ---------------- */}
      <section className="cta-banner">
        <div className="cta-banner__pattern" aria-hidden="true">
          <VisualPanel pattern="radial" tone="garnet" className="cta-banner__visual" />
        </div>
        <div className="container cta-banner__content">
          <Reveal>
            <h2 className="headline--display" style={{ color: "white", maxWidth: 780 }}>
              Your practice starts before graduation. Start your application before the deadline.
            </h2>
          </Reveal>
          <Reveal delay={0.12}>
            <div style={{ display: "flex", gap: 16, marginTop: 36, flexWrap: "wrap" }}>
              <Button href={APPLY_URL} variant="gold">
                Apply Now
              </Button>
              <Button href="/admissions" variant="outline-light">
                See Deadlines
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      <style dangerouslySetInnerHTML={{ __html: `
        .hero {
          position: relative;
          overflow: hidden;
          background: linear-gradient(160deg, var(--navy-700) 0%, var(--navy-900) 55%, #060f22 100%);
          padding-top: clamp(64px, 10vw, 108px);
          padding-bottom: 140px;
        }
        .hero__blobs { position: absolute; inset: 0; overflow: hidden; }
        .hero-blob {
          position: absolute;
          width: 46vw; height: 46vw; max-width: 620px; max-height: 620px;
          border-radius: 50%;
          filter: blur(90px);
          opacity: 0.35;
          animation: drift 16s ease-in-out infinite;
        }
        .hero-blob--gold { background: var(--gold-500); top: -14%; right: -8%; }
        .hero-blob--garnet { background: var(--garnet-500); bottom: -18%; left: -10%; animation-delay: -8s; }
        .hero__content { position: relative; z-index: 2; }

        .hero-stat-wrap { margin-top: -96px; position: relative; z-index: 3; }
        .hero-stat-card {
          background: var(--white);
          border-radius: var(--radius-lg);
          box-shadow: 0 40px 80px -30px rgba(8,19,42,0.35);
          padding: clamp(28px, 4vw, 48px);
        }

        .pillars-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 28px; }
        .pillar-card {
          background: var(--white); border: 1px solid var(--line); border-radius: var(--radius-md);
          padding: 32px 28px; transition: transform 0.4s var(--ease-out), box-shadow 0.4s var(--ease-out);
        }
        .pillar-card:hover { transform: translateY(-6px); box-shadow: 0 24px 48px -24px rgba(8,19,42,0.25); }
        .pillar-card__num {
          font-family: var(--font-display); font-size: 0.95rem; color: var(--gold-600); font-weight: 600;
        }
        .pillar-card__title { font-size: 1.4rem; margin: 14px 0 12px; }
        .pillar-card__desc { color: var(--muted); font-size: 0.92rem; line-height: 1.6; }

        .schools-scroll {
          display: flex; gap: 20px; overflow-x: auto; padding-bottom: 8px; padding-top: 8px;
          scroll-snap-type: x mandatory; scrollbar-width: none;
        }
        .schools-scroll::-webkit-scrollbar { display: none; }

        .quote-section {
          display: grid; grid-template-columns: minmax(0, 1.5fr) minmax(260px, 0.75fr);
          align-items: center; gap: clamp(32px, 6vw, 80px); padding: 72px 0; text-align: left;
        }
        .quote-section--text-only { grid-template-columns: minmax(0, 1fr); }
        .quote-section__content { min-width: 0; }
        .quote-section__portrait {
          position: relative; width: 100%; aspect-ratio: 4 / 5; max-height: 560px;
          overflow: hidden; border-radius: var(--radius-sm); background: var(--navy-800);
        }
        .quote-section__image { object-fit: cover; object-position: center 20%; }
        .quote-section__text {
          font-family: var(--font-display); font-size: clamp(1.6rem, 3.4vw, 2.6rem);
          color: white; max-width: 920px; line-height: 1.28; font-weight: 500;
        }
        .quote-section__attr {
          display: flex; justify-content: space-between; align-items: flex-end; gap: 40px;
          margin-top: 44px; padding-top: 32px; border-top: 1px solid rgba(255,255,255,0.14); flex-wrap: wrap;
        }
        .quote-section__stats { flex: 1; max-width: 620px; }

        .testimonials-layout { display: grid; grid-template-columns: 1.3fr 1fr; gap: 56px; align-items: stretch; }
        .testimonials-visual { position: relative; border-radius: var(--radius-lg); overflow: hidden; min-height: 360px; }

        .news-layout { display: grid; grid-template-columns: 1.15fr 1fr; gap: 44px; }
        .news-featured__link { display: block; }
        .news-featured__visual { position: relative; aspect-ratio: 16/10; border-radius: var(--radius-md); overflow: hidden; margin-bottom: 20px; }
        .news-featured__panel { transition: transform 0.6s var(--ease-out); }
        .news-featured__link:hover .news-featured__panel { transform: scale(1.05); }
        .news-featured__meta {
          display: flex; gap: 8px; font-size: 0.78rem; text-transform: uppercase; letter-spacing: 0.06em;
          color: var(--garnet-500); font-weight: 600; margin-bottom: 12px;
        }
        .news-featured__title { font-size: clamp(1.4rem, 2.2vw, 1.85rem); margin-bottom: 12px; }
        .news-featured__dek { color: var(--muted); max-width: 480px; line-height: 1.6; }
        .news-list { display: flex; flex-direction: column; gap: 32px; }

        .faq-layout { display: grid; grid-template-columns: 0.9fr 1.1fr; gap: 60px; }

        .cta-banner { position: relative; overflow: hidden; padding: clamp(80px, 12vw, 140px) 0; }
        .cta-banner__pattern { position: absolute; inset: 0; }
        .cta-banner__visual { width: 100%; height: 100%; }
        .cta-banner__content { position: relative; z-index: 2; }

        @media (max-width: 980px) {
          .pillars-grid { grid-template-columns: 1fr; }
          .quote-section { grid-template-columns: minmax(0, 1fr); gap: 36px; }
          .quote-section__portrait { max-width: 520px; aspect-ratio: 4 / 3; margin-inline: auto; }
          .quote-section__stats { flex: 1 1 100%; max-width: none; }
          .testimonials-layout { grid-template-columns: 1fr; }
          .testimonials-visual { min-height: 240px; order: -1; }
          .news-layout { grid-template-columns: 1fr; }
          .faq-layout { grid-template-columns: 1fr; }
        }
      ` }} />
    </main>
  );
}
