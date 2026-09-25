import Link from "next/link";
import type { School } from "@/data/schools";
import { VisualPanel } from "./VisualPanel";

export function SchoolCard({ school }: { school: School }) {
  return (
    <Link href={`/academics#${school.slug}`} className="school-card">
      <VisualPanel pattern={school.pattern} tone="navy" monogram className="school-card__visual" />
      <div className="school-card__overlay" />
      <div className="school-card__content">
        <div className="school-card__stat">
          <strong>{school.stat.value}</strong> {school.stat.label}
        </div>
        <h3 className="school-card__title">{school.shortName}</h3>
        <p className="school-card__tagline">{school.tagline}</p>
        <span className="school-card__arrow">
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <path d="M4 14L14 4M14 4H6M14 4V12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .school-card {
          position: relative;
          display: block;
          min-width: 300px;
          height: 380px;
          border-radius: var(--radius-lg);
          overflow: hidden;
          flex: 0 0 auto;
          scroll-snap-align: start;
        }
        .school-card__visual { position: absolute; inset: 0; transition: transform 0.7s var(--ease-out); }
        .school-card:hover .school-card__visual { transform: scale(1.06); }
        .school-card__overlay {
          position: absolute; inset: 0;
          background: linear-gradient(180deg, rgba(8,19,42,0) 30%, rgba(8,19,42,0.86) 100%);
        }
        .school-card__content { position: absolute; left: 0; right: 0; bottom: 0; padding: 28px; color: white; }
        .school-card__stat {
          font-size: 0.78rem; color: rgba(255,255,255,0.7); margin-bottom: 10px; letter-spacing: 0.02em;
        }
        .school-card__stat strong { color: var(--gold-400); font-family: var(--font-display); font-size: 1rem; }
        .school-card__title { color: white; font-size: 1.5rem; margin-bottom: 8px; }
        .school-card__tagline { color: rgba(255,255,255,0.72); font-size: 0.9rem; max-width: 240px; line-height: 1.4; }
        .school-card__arrow {
          position: absolute; top: 24px; right: 24px; width: 40px; height: 40px; border-radius: 50%;
          background: rgba(255,255,255,0.14); backdrop-filter: blur(6px);
          display: flex; align-items: center; justify-content: center; color: white;
          transition: background 0.3s, transform 0.3s;
        }
        .school-card:hover .school-card__arrow { background: var(--gold-500); color: var(--navy-900); transform: rotate(45deg); }
      ` }} />
    </Link>
  );
}
