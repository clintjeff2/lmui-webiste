import type { Metadata } from "next";
import { Reveal } from "@/components/Reveal";
import { getAcademicCalendar } from "@/data/academic-calenda";

export const metadata: Metadata = {
  title: "Academic Calendar 2026–2027 — Landmark Metropolitan University Institute",
  description: "Important dates and academic events for the 2026–2027 academic year at Landmark Metropolitan University Institute.",
};

export default async function AcademicCalendarPage() {
  const events = await getAcademicCalendar();

  return (
    <main>
      <section className="section calendar-hero">
        <div className="container calendar-hero__content">
          <Reveal>
            <span className="eyebrow">Academic year 2026–2027</span>
          </Reveal>
          <Reveal delay={0.06}>
            <h1 className="headline--display calendar-hero__heading">Academic Calendar</h1>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="lede calendar-hero__lede">
              Key dates, academic activities, and milestones throughout the year.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section section--paper-alt calendar-section">
        <div className="container">
          <Reveal>
            <span className="eyebrow">2026–2027 schedule</span>
          </Reveal>
          <Reveal delay={0.06}>
            <h2 className="headline calendar-section__heading">Dates and events</h2>
          </Reveal>
          {events.length > 0 ? (
            <div className="calendar-table-wrap">
              <table className="calendar-table">
                <thead>
                  <tr>
                    <th scope="col">S/N</th>
                    <th scope="col">Dates</th>
                    <th scope="col">Events</th>
                  </tr>
                </thead>
                <tbody>
                  {events.map((event) => (
                    <tr key={event.serial_number}>
                      <td>{event.serial_number}</td>
                      <td>{event.dates}</td>
                      <td>{event.events}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <p className="calendar-empty" role="status">
              The academic calendar is currently unavailable.
            </p>
          )}
        </div>
      </section>

      <style dangerouslySetInnerHTML={{ __html: `
        .calendar-hero { padding-bottom: clamp(56px, 8vw, 104px); }
        .calendar-hero__content { max-width: 920px; }
        .calendar-hero__heading { margin-top: 20px; }
        .calendar-hero__lede { max-width: 650px; margin-top: 24px; }
        .calendar-section__heading { margin-top: 16px; margin-bottom: 32px; }
        .calendar-table-wrap {
          overflow-x: auto; border: 1px solid var(--line-strong);
          border-radius: var(--radius-sm); background: var(--paper);
        }
        .calendar-table { width: 100%; border-collapse: collapse; text-align: left; }
        .calendar-table th, .calendar-table td {
          padding: 16px 18px; border-bottom: 1px solid var(--line);
          vertical-align: top; line-height: 1.55;
        }
        .calendar-table th {
          background: var(--navy-900); color: white; font-size: 0.8rem;
          font-weight: 600; text-transform: uppercase; letter-spacing: 0.06em;
        }
        .calendar-table th:first-child, .calendar-table td:first-child { width: 78px; text-align: center; }
        .calendar-table th:nth-child(2), .calendar-table td:nth-child(2) { width: 260px; }
        .calendar-table td:first-child { color: var(--garnet-500); font-weight: 600; }
        .calendar-table td:nth-child(2) { color: var(--navy-700); font-weight: 600; }
        .calendar-table tbody tr:last-child td { border-bottom: 0; }
        .calendar-table tbody tr:hover { background: var(--paper-alt); }
        .calendar-empty { color: var(--muted); }
        @media (max-width: 640px) {
          .calendar-table { min-width: 680px; }
          .calendar-table th, .calendar-table td { padding: 13px 14px; }
        }
      ` }} />
    </main>
  );
}