import Link from "next/link";
import Image from "next/image";
import type { School } from "@/data/schools";

export function SchoolCard({ school }: { school: School }) {
  return (
    <Link href={school.route} className="school-card">
      <Image
        src={school.logo}
        alt={school.name}
        fill
        sizes="(max-width: 768px) 85vw, 320px"
        className="school-card__image"
      />
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
          width: min(320px, calc(100vw - 48px));
          aspect-ratio: 320 / 380;
          border-radius: var(--radius-lg);
          background: var(--navy-900);
          overflow: hidden;
          flex: 0 0 min(320px, calc(100vw - 48px));
          scroll-snap-align: start;
        }
        .school-card__image {
          border-radius: var(--radius-lg);
          object-fit: cover;
          object-position: center top;
        }
        .school-card__overlay {
          position: absolute; inset: 0;
          background: linear-gradient(180deg, rgba(8,19,42,0) 30%, rgba(8,19,42,0.86) 100%);
        }
        .school-card__content {
          position: absolute; left: 0; right: 0; bottom: 0; height: auto; min-height: 58%; padding: 28px; color: white;
          display: flex; flex-direction: column; justify-content: flex-end;
          background: rgba(8,19,42,0.45); backdrop-filter: blur(8px);
        }
        .school-card__stat {
          font-size: 0.78rem; color: rgba(255,255,255,0.7); margin-bottom: 10px; letter-spacing: 0.02em;
        }
        .school-card__stat strong { color: var(--gold-400); font-family: var(--font-display); font-size: 1rem; }
        .school-card__title { color: var(--gold-400); font-size: 1.5rem; margin-bottom: 8px; }
        .school-card__tagline { color: rgba(255,255,255,0.72); font-size: 0.9rem; max-width: 240px; line-height: 1.4; }
        .school-card__arrow {
          position: absolute; top: 24px; right: 24px; width: 40px; height: 40px; border-radius: 50%;
          background: rgba(255,255,255,0.14); backdrop-filter: blur(6px);
          display: flex; align-items: center; justify-content: center; color: white;
          transition: background 0.3s, transform 0.3s;
        }
        .school-card:hover .school-card__arrow { background: var(--gold-500); color: var(--navy-900); transform: rotate(45deg); }
        @media (max-width: 480px) {
          .school-card__content { padding: 18px; }
          .school-card__title { font-size: 1.25rem; }
          .school-card__tagline { overflow-wrap: anywhere; }
          .school-card__arrow { top: 16px; right: 16px; width: 36px; height: 36px; }
        }
      ` }} />
    </Link>
  );
}
