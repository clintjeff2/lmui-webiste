import type { Metadata } from "next";
import Link from "next/link";
import { NewsCard } from "@/components/NewsCard";
import { Reveal, RevealGroup, RevealItem } from "@/components/Reveal";
import { VisualPanel } from "@/components/VisualPanel";
import { newsArticles } from "@/data/news";
import { formatDate } from "@/lib/format";

export const metadata: Metadata = {
  title: "News & Insights — Landmark Metropolitan University Institute",
  description: "What's happening across six campuses.",
};

const patterns = ["grid", "diagonal", "radial", "wave", "concentric"] as const;

export default function NewsPage() {
  const [featured, ...rest] = newsArticles;

  return (
    <main>
      <section className="section" style={{ paddingBottom: 48 }}>
        <div className="container">
          <Reveal>
            <span className="eyebrow">News &amp; Insights</span>
          </Reveal>
          <Reveal delay={0.06}>
            <h1 className="headline--display" style={{ marginTop: 20, maxWidth: 780 }}>
              What's happening across six campuses.
            </h1>
          </Reveal>
        </div>
      </section>

      <section className="section--tight">
        <div className="container">
          <Reveal>
            <Link href={`/news/${featured.slug}`} className="news-index-featured">
              <div className="news-index-featured__visual">
                <VisualPanel pattern="grid" tone="navy" monogram className="news-index-featured__panel" />
              </div>
              <div>
                <div className="news-index-featured__meta">
                  <span>{featured.category}</span>
                  <span>&middot;</span>
                  <span>{formatDate(featured.date)}</span>
                  <span>&middot;</span>
                  <span>{featured.readTime}</span>
                </div>
                <h2 className="news-index-featured__title">{featured.title}</h2>
                <p className="news-index-featured__dek">{featured.dek}</p>
                <span className="btn btn--ghost-link">
                  Read the story <span className="arrow">→</span>
                </span>
              </div>
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="section section--paper-alt">
        <div className="container">
          <RevealGroup className="news-index-grid">
            {rest.map((article, i) => (
              <RevealItem key={article.slug}>
                <NewsCard article={article} pattern={patterns[i % patterns.length]} />
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      <style dangerouslySetInnerHTML={{ __html: `
        .news-index-featured {
          display: grid; grid-template-columns: 1.1fr 1fr; gap: 40px; align-items: center;
        }
        .news-index-featured__visual { position: relative; aspect-ratio: 4/3; border-radius: var(--radius-lg); overflow: hidden; }
        .news-index-featured__panel { width: 100%; height: 100%; transition: transform 0.6s var(--ease-out); }
        .news-index-featured:hover .news-index-featured__panel { transform: scale(1.05); }
        .news-index-featured__meta {
          display: flex; gap: 8px; font-size: 0.78rem; text-transform: uppercase; letter-spacing: 0.06em;
          color: var(--garnet-500); font-weight: 600; margin-bottom: 14px;
        }
        .news-index-featured__title { font-size: clamp(1.5rem, 2.8vw, 2.1rem); margin-bottom: 16px; }
        .news-index-featured__dek { color: var(--muted); line-height: 1.65; margin-bottom: 22px; max-width: 480px; }

        .news-index-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 32px; }

        @media (max-width: 900px) {
          .news-index-featured { grid-template-columns: 1fr; }
          .news-index-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 560px) {
          .news-index-grid { grid-template-columns: 1fr; }
        }
      ` }} />
    </main>
  );
}
