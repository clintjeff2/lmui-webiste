import Link from "next/link";
import type { NewsArticle } from "@/data/news";
import { formatDate } from "@/lib/format";
import { VisualPanel } from "./VisualPanel";

export function NewsCard({ article, pattern = "grid" }: { article: NewsArticle; pattern?: "grid" | "diagonal" | "radial" | "wave" | "concentric" }) {
  return (
    <Link href={`/news/${article.slug}`} className="news-card">
      <div className="news-card__visual">
        <VisualPanel pattern={pattern} tone="paper" className="news-card__panel" />
      </div>
      <div className="news-card__body">
        <div className="news-card__meta">
          <span>{article.category}</span>
          <span>&middot;</span>
          <span>{formatDate(article.date)}</span>
        </div>
        <h3 className="news-card__title">{article.title}</h3>
        <p className="news-card__dek">{article.dek}</p>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .news-card { display: block; }
        .news-card__visual { position: relative; aspect-ratio: 4/3; border-radius: var(--radius-sm); overflow: hidden; margin-bottom: 16px; }
        .news-card__panel { transition: transform 0.6s var(--ease-out); }
        .news-card:hover .news-card__panel { transform: scale(1.08); }
        .news-card__meta {
          display: flex; gap: 8px; font-size: 0.76rem; text-transform: uppercase; letter-spacing: 0.06em;
          color: var(--garnet-500); font-weight: 600; margin-bottom: 10px;
        }
        .news-card__title { font-size: 1.12rem; margin-bottom: 8px; transition: color 0.3s; }
        .news-card:hover .news-card__title { color: var(--garnet-500); }
        .news-card__dek { font-size: 0.88rem; color: var(--muted); line-height: 1.55; }
      ` }} />
    </Link>
  );
}
