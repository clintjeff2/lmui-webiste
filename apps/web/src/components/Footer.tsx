import Link from "next/link";
import type { School } from "@/data/schools";
import { getAboutData } from "@/data/about";
import { APPLY_URL } from "@/lib/site";
import { Logo } from "./Logo";

const columns = (schools: School[]) => [
  {
    title: "Academics",
    links: schools.slice(0, 5).map((s) => ({ label: s.shortName, href: `/academics#${s.slug}` })),
  },
  {
    title: "Admissions",
    links: [
      { label: "Undergraduate", href: "/admissions" },
      { label: "Graduate & Professional", href: "/admissions" },
      { label: "Financial Aid", href: "/admissions" },
      { label: "Visit Campus", href: "/about" },
    ],
  },
  {
    title: "About",
    links: [
      { label: "Our Mission", href: "/about" },
      { label: "Leadership", href: "/about" },
      { label: "News & Insights", href: "/news" },
      { label: "Campuses", href: "/about" },
    ],
  },
];

const socials = [
  { label: "Instagram", d: "M2 2H18V18H2V2ZM10 6.5A3.5 3.5 0 1 0 10 13.5A3.5 3.5 0 0 0 10 6.5ZM14.6 4.4H14.61" },
  { label: "LinkedIn", d: "M3 3H7V17H3V3ZM5 1C3.9 1 3 1.9 3 3M9 8H13V17H9V8ZM9 8C9 6 17 5 17 10V17" },
  { label: "X", d: "M2 2L18 18M18 2L2 18" },
];

export async function Footer({ schools }: { schools: School[] }) {
  const { campusCount } = await getAboutData();

  return (
    <footer className="section--navy" style={{ paddingTop: 72 }}>
      <div className="container">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.4fr repeat(3, 1fr)",
            gap: 40,
            paddingBottom: 56,
          }}
          className="footer-grid"
        >
          <div>
            <Logo light />
            <p style={{ color: "rgba(255,255,255,0.62)", fontSize: "0.92rem", maxWidth: 300, marginTop: 20, lineHeight: 1.6 }}>
              {campusCount} campuses across the city of Buea. Twenty Two plus years of training
              practitioners, not just graduates.
            </p>
            <div style={{ display: "flex", gap: 12, marginTop: 24 }}>
              {socials.map((s) => (
                <a
                  key={s.label}
                  href="#"
                  aria-label={s.label}
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: "50%",
                    border: "1px solid rgba(255,255,255,0.2)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
                    <path d={s.d} stroke="white" strokeWidth="1.3" strokeLinecap="round" />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {columns(schools).map((col) => (
            <div key={col.title}>
              <div
                style={{
                  fontSize: "0.76rem",
                  fontWeight: 600,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "var(--gold-400)",
                  marginBottom: 18,
                }}
              >
                {col.title}
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {col.links.map((l) => (
                  <Link key={l.label} href={l.href} style={{ color: "rgba(255,255,255,0.72)", fontSize: "0.9rem" }}>
                    {l.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div
          style={{
            borderTop: "1px solid rgba(255,255,255,0.12)",
            padding: "32px 0",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: 24,
            flexWrap: "wrap",
          }}
        >
          <p
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "1.3rem",
              color: "white",
              maxWidth: 460,
              lineHeight: 1.3,
            }}
          >
            The Pride of Africa. Training Productive Leaders.
          </p>
          <a href={APPLY_URL} target="_blank" rel="noopener noreferrer" className="btn btn--gold">
            Start Your Application
          </a>
        </div>

        <div
          style={{
            borderTop: "1px solid rgba(255,255,255,0.1)",
            padding: "24px 0 40px",
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 12,
            fontSize: "0.8rem",
            color: "rgba(255,255,255,0.45)",
          }}
        >
          <span>&copy; {new Date().getFullYear()} Landmark Metropolitan University Institute</span>
          <span>Accredited by the Ministry of Higher Education (MINISUP)</span>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @media (max-width: 860px) {
          .footer-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 560px) {
          .footer-grid { grid-template-columns: 1fr !important; }
        }
      ` }} />
    </footer>
  );
}
