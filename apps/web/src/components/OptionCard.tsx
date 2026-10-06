import Link from "next/link";
import type { Fields } from "@/data/fields";
import type { Option } from "@/data/options";
import type { School } from "@/data/schools";
import { VisualPanel } from "./VisualPanel";

export function OptionCard({ option, school }: { option: Fields | Option; school?: School }) {
  const image = "heroImageUrl" in option
    ? option.heroImageUrl
    : "fieldImage" in option
      ? option.fieldImage
      : undefined;

  return (
    <Link href={`/academics/${option.slug}`} className="option-card">
      <div className="option-card__visual">
        <VisualPanel
          pattern={school?.pattern ?? "grid"}
          tone="navy"
          className="option-card__panel"
          image={image || school?.logo}
          patternOpacity={0.3}
        />
      </div>
      <div className="option-card__body">
        <div className="option-card__meta">
          <span className="option-card__badge">{option.degreeLevel}</span>
          <span>{option.duration}</span>
        </div>
        <h3 className="option-card__title">{option.name}</h3>
        <p className="option-card__summary">{option.summary}</p>
        <span className="btn btn--ghost-link btn--sm option-card__cta">
          View option <span className="arrow">→</span>
        </span>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .option-card {
          display: block;
          background: var(--white);
          border: 1px solid var(--line);
          border-radius: var(--radius-md);
          overflow: hidden;
          transition: transform 0.4s var(--ease-out), box-shadow 0.4s var(--ease-out), border-color 0.4s;
        }
        .option-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 26px 50px -22px rgba(8,19,42,0.28);
          border-color: transparent;
        }
        .option-card__visual { position: relative; aspect-ratio: 16/9; overflow: hidden; }
        .option-card__panel { transition: transform 0.6s var(--ease-out); }
        .option-card:hover .option-card__panel { transform: scale(1.08); }
        .option-card__body { padding: 22px; }
        .option-card__meta {
          display: flex; justify-content: space-between; align-items: center;
          font-size: 0.76rem; color: var(--muted); text-transform: uppercase; letter-spacing: 0.06em; margin-bottom: 12px;
        }
        .option-card__badge {
          background: var(--paper-alt); color: var(--garnet-500); padding: 4px 10px; border-radius: 999px; font-weight: 600;
        }
        .option-card__title { font-size: 1.12rem; margin-bottom: 10px; }
        .option-card__summary {
          font-size: 0.88rem; color: var(--muted); line-height: 1.55;
          display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical; overflow: hidden;
          margin-bottom: 16px;
        }
      ` }} />
    </Link>
  );
}
