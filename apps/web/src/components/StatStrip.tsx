import type { Stat } from "@/data/stats";
import { Counter } from "./Counter";

export function StatStrip({ stats, dark = false }: { stats: Stat[]; dark?: boolean }) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(${stats.length}, 1fr)`,
        gap: 8,
      }}
      className="stat-strip-grid"
    >
      {stats.map((stat) => (
        <div key={stat.label} style={{ textAlign: "left" }}>
          <div
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(1.7rem, 2.6vw, 2.5rem)",
              fontWeight: 600,
              color: dark ? "var(--gold-400)" : "var(--navy-900)",
            }}
          >
            <Counter value={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
          </div>
          <div
            style={{
              fontSize: "0.84rem",
              color: dark ? "rgba(255,255,255,0.65)" : "var(--muted)",
              marginTop: 4,
            }}
          >
            {stat.label}
          </div>
        </div>
      ))}
      <style dangerouslySetInnerHTML={{ __html: `
        @media (max-width: 760px) {
          .stat-strip-grid { grid-template-columns: repeat(2, 1fr) !important; row-gap: 28px !important; }
        }
      ` }} />
    </div>
  );
}
