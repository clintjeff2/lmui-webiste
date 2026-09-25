import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { NewsCard } from "@/components/NewsCard";
import { Reveal, RevealGroup, RevealItem } from "@/components/Reveal";
import { VisualPanel } from "@/components/VisualPanel";
import { getArticleBySlug, newsArticles } from "@/data/news";
import { formatDate } from "@/lib/format";

export function generateStaticParams() {
  return newsArticles.map((a) => ({ slug: a.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const article = getArticleBySlug(params.slug);
  return { title: article ? `${article.title} — Landmark Metropolitan University Institute` : "Article not found" };
}

export default function NewsArticlePage({ params }: { params: { slug: string } }) {
  const article = getArticleBySlug(params.slug);
  if (!article) notFound();
  const related = newsArticles.filter((a) => a.slug !== article.slug).slice(0, 3);

  return (
    <main>
      <section className="section" style={{ paddingBottom: 0 }}>
        <div className="container" style={{ maxWidth: 780 }}>
          <Reveal>
            <div className="article-meta">
              <span>{article.category}</span>
              <span>&middot;</span>
              <span>{formatDate(article.date)}</span>
              <span>&middot;</span>
              <span>{article.readTime}</span>
            </div>
          </Reveal>
          <Reveal delay={0.06}>
            <h1 className="headline--display" style={{ marginTop: 18, fontSize: "clamp(2rem, 4.4vw, 3rem)" }}>
              {article.title}
            </h1>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="lede" style={{ marginTop: 20, maxWidth: 640 }}>
              {article.dek}
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section--tight">
        <div className="container">
          <Reveal delay={0.1}>
            <div className="article-visual">
              <VisualPanel pattern="grid" tone="navy" monogram className="article-visual__panel" />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container" style={{ maxWidth: 720 }}>
          <RevealGroup className="article-body">
            {article.body.map((p, i) => (
              <RevealItem key={i}>
                <p>{p}</p>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      {related.length > 0 && (
        <section className="section section--paper-alt">
          <div className="container">
            <Reveal>
              <span className="eyebrow">More news &amp; insights</span>
            </Reveal>
            <RevealGroup className="article-related-grid">
              {related.map((a) => (
                <RevealItem key={a.slug}>
                  <NewsCard article={a} />
                </RevealItem>
              ))}
            </RevealGroup>
          </div>
        </section>
      )}

      <style dangerouslySetInnerHTML={{ __html: `
        .article-meta {
          display: flex; gap: 8px; font-size: 0.8rem; text-transform: uppercase; letter-spacing: 0.06em;
          color: var(--garnet-500); font-weight: 600;
        }
        .article-visual { position: relative; aspect-ratio: 21/9; border-radius: var(--radius-lg); overflow: hidden; }
        .article-visual__panel { width: 100%; height: 100%; }
        .article-body { display: flex; flex-direction: column; gap: 22px; }
        .article-body p { font-size: 1.05rem; line-height: 1.8; color: var(--ink); }
        .article-related-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 32px; margin-top: 36px; }

        @media (max-width: 700px) {
          .article-related-grid { grid-template-columns: 1fr; }
        }
      ` }} />
    </main>
  );
}
