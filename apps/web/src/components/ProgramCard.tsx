import Link from "next/link";
import type { Program } from "@/data/programs";
import type { School } from "@/data/schools";
import { VisualPanel } from "./VisualPanel";

export function ProgramCard({ program, school }: { program: Program; school?: School }) {
  return (
    <Link href={`/academics/${program.slug}`} className="program-card">
      <div className="program-card__visual">
        <VisualPanel pattern={school?.pattern ?? "grid"} tone="navy" className="program-card__panel" />
      </div>
      <div className="program-card__body">
        <div className="program-card__meta">
          <span className="program-card__badge">{program.degreeLevel}</span>
          <span>{program.duration}</span>
        </div>
        <h3 className="program-card__title">{program.name}</h3>
        <p className="program-card__summary">{program.summary}</p>
        <span className="btn btn--ghost-link btn--sm program-card__cta">
          View program <span className="arrow">→</span>
        </span>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .program-card {
          display: block;
          background: var(--white);
          border: 1px solid var(--line);
          border-radius: var(--radius-md);
          overflow: hidden;
          transition: transform 0.4s var(--ease-out), box-shadow 0.4s var(--ease-out), border-color 0.4s;
        }
        .program-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 26px 50px -22px rgba(8,19,42,0.28);
          border-color: transparent;
        }
        .program-card__visual { position: relative; aspect-ratio: 16/9; overflow: hidden; }
        .program-card__panel { transition: transform 0.6s var(--ease-out); }
        .program-card:hover .program-card__panel { transform: scale(1.08); }
        .program-card__body { padding: 22px; }
        .program-card__meta {
          display: flex; justify-content: space-between; align-items: center;
          font-size: 0.76rem; color: var(--muted); text-transform: uppercase; letter-spacing: 0.06em; margin-bottom: 12px;
        }
        .program-card__badge {
          background: var(--paper-alt); color: var(--garnet-500); padding: 4px 10px; border-radius: 999px; font-weight: 600;
        }
        .program-card__title { font-size: 1.12rem; margin-bottom: 10px; }
        .program-card__summary {
          font-size: 0.88rem; color: var(--muted); line-height: 1.55;
          display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical; overflow: hidden;
          margin-bottom: 16px;
        }
      ` }} />
    </Link>
  );
}
