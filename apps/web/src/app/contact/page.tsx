import type { Metadata } from "next";
import { Reveal, RevealGroup, RevealItem } from "@/components/Reveal";
import { CONTACT_EMAIL, CONTACT_PHONES } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact — Landmark Metropolitan University Institute",
  description:
    "Find Landmark Metropolitan University Institute at its Buea and Bamenda campuses in Cameroon.",
};

const campuses = [
  {
    label: "Campus A",
    name: "Molyko Campus",
    address: "Molyko, opposite Unics Plc, above UB Junction, Buea, South West Region, Cameroon",
    postalAddress: "P.O. Box 318",
    map: "https://maps.google.com/maps?q=Landmark+Metropolitan+University+Institute+Molyko+Buea+Cameroon&output=embed",
    directions:
      "https://www.google.com/maps/search/?api=1&query=Landmark+Metropolitan+University+Institute+Molyko+Buea+Cameroon",
  },
  {
    label: "Campus B",
    name: "Malingo Campus",
    address: "Malingo to wards Mile 18, Buea, South West Region, Cameroon",
    postalAddress: "P.O. Box 318",
    map: "https://maps.google.com/maps?q=Landmark+Metropolitan+University+Institute+Commercial+Avenue+Bamenda+Cameroon&output=embed",
    directions:
      "https://www.google.com/maps/search/?api=1&query=Landmark+Metropolitan+University+Institute+Commercial+Avenue+Bamenda+Cameroon",
  },
];

export default function ContactPage() {
  return (
    <main>
      <section className="section contact-hero">
        <div className="container contact-hero__content">
          <Reveal>
            <span className="eyebrow">Contact Landmark</span>
          </Reveal>
          <Reveal delay={0.06}>
            <h1 className="headline--display contact-hero__heading">
              Find us in Buea.
            </h1>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="lede contact-hero__lede">
              Visit one of Landmark Metropolitan University Institute’s campuses in Cameroon.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section section--paper-alt contact-locations">
        <div className="container">
          <Reveal>
            <span className="eyebrow">Contact info</span>
          </Reveal>
          <Reveal delay={0.06}>
            <h2 className="headline contact-locations__heading">Get in touch.</h2>
          </Reveal>
          <RevealGroup className="contact-details-grid">
            <RevealItem className="contact-detail">
              <span className="contact-campus__label">Phone Support</span>
              <div className="contact-detail__links">
                {CONTACT_PHONES.map((phone) => (
                  <a key={phone.href} href={phone.href}>{phone.type}: {phone.display}</a>
                ))}
              </div>
            </RevealItem>
            <RevealItem className="contact-detail">
              <span className="contact-campus__label">Email Address</span>
              <div className="contact-detail__links">
                <a href={CONTACT_EMAIL.href}>{CONTACT_EMAIL.display}</a>
              </div>
            </RevealItem>
          </RevealGroup>
          <div className="contact-campus-heading">
            <Reveal>
              <span className="eyebrow">Our campuses</span>
            </Reveal>
            <Reveal delay={0.06}>
              <h2 className="headline">Plan your visit.</h2>
            </Reveal>
          </div>
          <RevealGroup className="contact-campus-grid">
            {campuses.map((campus) => (
              <RevealItem key={campus.label} className="contact-campus">
                <span className="contact-campus__label">{campus.label}</span>
                <h3>{campus.name}</h3>
                <address>
                  <span>{campus.address}</span>
                  {campus.postalAddress && <span>{campus.postalAddress}</span>}
                </address>
                <iframe
                  className="contact-campus__map"
                  src={campus.map}
                  title={`${campus.name} Google Map`}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
                <a href={campus.directions} target="_blank" rel="noopener noreferrer">
                  Get directions <span aria-hidden="true">→</span>
                </a>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      <section className="section section--navy contact-note">
        <div className="container contact-note__content">
          <Reveal>
            <span className="eyebrow">Landmark Metropolitan University Institute</span>
          </Reveal>
          <Reveal delay={0.06}>
            <p>
              The Buea campus is located in Molyko, opposite Unics Plc above UB Junction and Malingo towards Mile 18.
            </p>
          </Reveal>
        </div>
      </section>

      <style dangerouslySetInnerHTML={{ __html: `
        .contact-hero { padding-bottom: clamp(56px, 8vw, 104px); }
        .contact-hero__content { max-width: 920px; }
        .contact-hero__heading { margin-top: 20px; }
        .contact-hero__lede { max-width: 650px; margin-top: 24px; }
        .contact-locations__heading { margin-top: 16px; margin-bottom: 28px; }
        .contact-details-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 24px; }
        .contact-detail {
          min-width: 0; padding: 24px 28px; border: 1px solid var(--line-strong);
          border-top: 3px solid var(--gold-500); border-radius: var(--radius-sm); background: var(--paper);
        }
        .contact-detail__links { display: flex; flex-direction: column; gap: 8px; margin-top: 12px; }
        .contact-detail__links a { color: var(--navy-700); font-size: 1rem; font-weight: 600; overflow-wrap: anywhere; }
        .contact-detail__links a:hover { color: var(--garnet-600); }
        .contact-campus-heading { margin-top: 56px; margin-bottom: 32px; }
        .contact-campus-heading .headline { margin-top: 16px; }
        .contact-campus-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 24px; }
        .contact-campus {
          min-width: 0; padding: 28px; border: 1px solid var(--line-strong);
          border-top: 3px solid var(--gold-500); border-radius: var(--radius-sm); background: var(--paper);
        }
        .contact-campus__label {
          color: var(--garnet-500); font-size: 0.76rem; font-weight: 600;
          text-transform: uppercase; letter-spacing: 0.08em;
        }
        .contact-campus h3 { margin-top: 12px; font-size: 1.55rem; }
        .contact-campus address {
          display: flex; flex-direction: column; gap: 5px; min-height: 58px;
          margin-top: 16px; color: var(--muted); font-size: 0.95rem; font-style: normal;
        }
        .contact-campus__map {
          display: block; width: 100%; height: 260px; margin-top: 18px;
          border: 0; border-radius: var(--radius-sm); background: var(--paper-deep);
        }
        .contact-campus a {
          display: inline-flex; align-items: center; gap: 8px; margin-top: 22px;
          color: var(--navy-700); font-size: 0.9rem; font-weight: 600;
        }
        .contact-campus a span { color: var(--garnet-500); }
        .contact-campus a:hover { color: var(--garnet-600); }
        .contact-note__content { max-width: 820px; }
        .contact-note__content p {
          max-width: 680px; margin-top: 18px; color: rgba(255,255,255,0.76); line-height: 1.7;
        }
        @media (max-width: 680px) {
          .contact-details-grid { grid-template-columns: minmax(0, 1fr); }
          .contact-campus-grid { grid-template-columns: minmax(0, 1fr); }
        }
      ` }} />
    </main>
  );
}