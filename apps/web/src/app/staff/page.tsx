import type { Metadata } from "next";
import { Reveal, RevealGroup, RevealItem } from "@/components/Reveal";
import { VisualPanel } from "@/components/VisualPanel";
import { getStaffData } from "@/data/about";

export const metadata: Metadata = {
  title: "Staff — Landmark Metropolitan University Institute",
  description: "Meet the staff of Landmark Metropolitan University Institute.",
};

export default async function StaffPage() {
  const staffMembers = await getStaffData();

  return (
    <main>
      <section className="section staff-hero">
        <div className="container staff-hero__content">
          <Reveal>
            <span className="eyebrow">Our people</span>
          </Reveal>
          <Reveal delay={0.06}>
            <h1 className="headline--display staff-hero__heading">Meet the staff of Landmark.</h1>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="lede staff-hero__lede">
              The people serving the university across its academic and administrative teams.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section section--paper-alt staff-directory">
        <div className="container">
          <Reveal>
            <span className="eyebrow">Management</span>
          </Reveal>
          <Reveal delay={0.06}>
            <h2 className="headline staff-directory__heading">University staff</h2>
          </Reveal>

          {staffMembers.length > 0 ? (
            <RevealGroup className="staff-grid">
              {staffMembers.map((member, index) => (
                <RevealItem
                  key={`${member.staff_name}-${index}`}
                  className="staff-card"
                >
                  <div className="staff-card__visual">
                    {member.staff_image ? (
                      <img
                        className="staff-card__image"
                        src={member.staff_image}
                        alt={`Portrait of ${member.staff_name}`}
                        loading="lazy"
                      />
                    ) : (
                      <VisualPanel pattern="grid" tone="navy" />
                    )}
                  </div>
                  <h3 className="staff-card__name">{member.staff_name}</h3>
                  <div className="staff-card__title">{member.staff_title}</div>
                  {member.staff_grade && <div className="staff-card__grade">{/*member.staff_grade*/}</div>}
                  {member.staff_bio.trim() && <p className="staff-card__bio">{member.staff_bio}</p>}
                </RevealItem>
              ))}
            </RevealGroup>
          ) : (
            <p className="staff-directory__empty">
              Staff profiles are currently unavailable.
            </p>
          )}
        </div>
      </section>

      <style dangerouslySetInnerHTML={{ __html: `
        .staff-hero { padding-bottom: clamp(56px, 8vw, 104px); }
        .staff-hero__content { max-width: 900px; }
        .staff-hero__heading { margin-top: 20px; }
        .staff-hero__lede { max-width: 650px; margin-top: 24px; }
        .staff-directory__heading { margin-top: 16px; margin-bottom: 40px; }
        .staff-grid { display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 28px 24px; }
        .staff-card { min-width: 0; }
        .staff-card__visual {
          position: relative; aspect-ratio: 4 / 5; overflow: hidden;
          border-radius: var(--radius-md); margin-bottom: 16px; background: var(--navy-800);
        }
        .staff-card__image { display: block; width: 100%; height: 100%; object-fit: cover; object-position: center top; }
        .staff-card__name { font-size: 1rem; margin-bottom: 4px; }
        .staff-card__title { color: var(--garnet-500); font-size: 0.82rem; font-weight: 600; }
        .staff-card__grade { color: var(--muted-warm); font-size: 0.76rem; margin-top: 5px; }
        .staff-card__bio { color: var(--muted); font-size: 0.86rem; line-height: 1.55; margin-top: 10px; }
        .staff-directory__empty { color: var(--muted); }
        @media (max-width: 980px) {
          .staff-grid { grid-template-columns: repeat(3, minmax(0, 1fr)); }
        }
        @media (max-width: 700px) {
          .staff-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 24px 16px; }
        }
        @media (max-width: 460px) {
          .staff-grid { grid-template-columns: minmax(0, 1fr); }
        }
      ` }} />
    </main>
  );
}