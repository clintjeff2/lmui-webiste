export interface Program {
  slug: string;
  name: string;
  schoolSlug: string;
  degreeLevel: "Undergraduate" | "Graduate" | "Doctoral" | "Certificate";
  duration: string;
  summary: string;
  highlights: string[];
  outcomes: string[];
}

export const programs: Program[] = [
  {
    slug: "Data-Science-bs",
    name: "Data Science, B-Tech",
    schoolSlug: "engineering",
    degreeLevel: "Undergraduate",
    duration: "3 years / 1 year Top-up",
    summary:
      "A rigorous foundation in algorithms, systems, and software engineering, with concentrations in AI, security, and distributed systems from junior year on.",
    highlights: [
      "Required systems-building capstone with an external partner organization",
      "Access to the Landmark Compute Cluster from sophomore year",
      "Concentrations in AI/ML, cybersecurity, and distributed systems",
    ],
    outcomes: ["96% placement within 6 months", "Median starting salary $98,500"],
  },
  {
    slug: "mechanical-engineering-bs",
    name: "Mechanical Engineering, B.S.",
    schoolSlug: "engineering",
    degreeLevel: "Undergraduate",
    duration: "2 years HND + 1 years Top-up",
    summary:
      "Design, thermodynamics, and materials science grounded in a project sequence that culminates in a fully fabricated senior design build.",
    highlights: [
      "In-house rapid prototyping and machine shop, open 24/7 to seniors",
      "Formula SAE and robotics teams with dedicated faculty advisors",
      "Industry-sponsored capstone projects each spring",
    ],
    outcomes: ["93% placement within 6 months", "Median starting salary $91,200"],
  },
  {
    slug: "mba",
    name: "Master of Business Administration",
    schoolSlug: "business",
    degreeLevel: "Graduate",
    duration: "2 years",
    summary:
      "A generalist MBA with concentrations in finance, strategy, and entrepreneurship, anchored by a semester-long consulting engagement with a real client.",
    highlights: [
      "Student-managed $4.2M investment fund",
      "Required live consulting practicum with a regional employer",
      "Dedicated entrepreneurship studio and seed-funding pitch day",
    ],
    outcomes: ["94% employed within 6 months", "Median starting salary $132,000"],
  },
  {
    slug: "finance-bba",
    name: "Finance, B.B.A.",
    schoolSlug: "business",
    degreeLevel: "Undergraduate",
    duration: "4 years",
    summary:
      "Corporate finance, investments, and markets, taught with Bloomberg terminal access from the first course and a required trading-floor simulation.",
    highlights: [
      "Bloomberg terminal lab, 20 seats",
      "Sophomore-year eligibility for the student investment fund",
      "Direct pipeline partnerships with 14 regional financial firms",
    ],
    outcomes: ["91% placement within 6 months", "Median starting salary $78,000"],
  },
  {
    slug: "psychology-ba",
    name: "Psychology, B.A.",
    schoolSlug: "arts-sciences",
    degreeLevel: "Undergraduate",
    duration: "4 years",
    summary:
      "Grounded in cognitive, social, and developmental research methods, with lab placements available from the second semester of freshman year.",
    highlights: [
      "Six active research labs open to undergraduates",
      "Optional clinical-track sequence for grad school preparation",
      "Community mental health practicum partnerships",
    ],
    outcomes: ["68% pursue graduate study within 2 years"],
  },
  {
    slug: "data-science-ba",
    name: "Data Science, B.A.",
    schoolSlug: "arts-sciences",
    degreeLevel: "Undergraduate",
    duration: "4 years",
    summary:
      "Statistics, computation, and domain application, designed for students who want quantitative fluency paired with a social or natural science lens.",
    highlights: [
      "Cross-listed with Computer Science and Economics",
      "Capstone practicum with the university's own institutional data office",
      "Open to declaration as early as freshman spring",
    ],
    outcomes: ["90% placement or grad study within 6 months"],
  },
  {
    slug: "nursing-bsn",
    name: "Nursing, B.S.N.",
    schoolSlug: "biomedical",
    degreeLevel: "Undergraduate",
    duration: "4 years",
    summary:
      "Clinical rotations begin in the second year across the Landmark Health Partners hospital and clinic network, well ahead of the national norm.",
    highlights: [
      "1,400+ supervised clinical hours by graduation",
      "Simulation center with 18 high-fidelity patient mannequins",
      "94% first-time NCLEX pass rate over the last five years",
    ],
    outcomes: ["98% placement within 6 months", "94% first-time NCLEX pass rate"],
  },
  {
    slug: "md-program",
    name: "Doctor of Medicine (M.D.)",
    schoolSlug: "biomedical",
    degreeLevel: "Doctoral",
    duration: "4 years",
    summary:
      "A patient-centered curriculum with clinical exposure beginning in the first semester, delivered in partnership with three metropolitan teaching hospitals.",
    highlights: [
      "First-semester clinical shadowing requirement",
      "Dedicated primary-care and underserved-community tracks",
      "98% residency match rate over the last five years",
    ],
    outcomes: ["98% residency match rate"],
  },
  {
    slug: "architecture-march",
    name: "Master of Architecture",
    schoolSlug: "design-architecture",
    degreeLevel: "Graduate",
    duration: "3 years",
    summary:
      "Studio-based, with a required civic-partnership project each year developed directly alongside the metropolitan planning office.",
    highlights: [
      "Annual studio partnership with the city planning office",
      "Digital fabrication lab with full-scale CNC and robotic arms",
      "NAAB-accredited, professional licensure track",
    ],
    outcomes: ["89% employed in the field within 6 months"],
  },
  {
    slug: "urban-design-ba",
    name: "Urban Design, B.A.",
    schoolSlug: "design-architecture",
    degreeLevel: "Undergraduate",
    duration: "4 years",
    summary:
      "Design thinking applied at the scale of streets, transit, and public space — three student proposals have been adopted into real city planning since 2022.",
    highlights: [
      "Direct studio partnership with metro transit authority",
      "Fieldwork embedded in three neighborhoods each year",
      "Portfolio-based capstone reviewed by practicing planners",
    ],
    outcomes: ["85% placement or grad study within 6 months"],
  },
  {
    slug: "jd-program",
    name: "Juris Doctor (J.D.)",
    schoolSlug: "law-policy",
    degreeLevel: "Doctoral",
    duration: "3 years",
    summary:
      "A legal clinic docket that includes real litigation, and a public policy lab that has briefed state legislators on more than 40 active bills since 2021.",
    highlights: [
      "Legal clinic with active state supreme court litigation",
      "Public policy lab briefing state legislators each session",
      "91% bar passage rate over the last five years",
    ],
    outcomes: ["91% bar passage rate", "88% employed within 10 months"],
  },
  {
    slug: "public-policy-mpp",
    name: "Master of Public Policy",
    schoolSlug: "law-policy",
    degreeLevel: "Graduate",
    duration: "2 years",
    summary:
      "Quantitative policy analysis paired with a required legislative or agency placement in the state capital during the second year.",
    highlights: [
      "Guaranteed second-year placement in a legislative or agency office",
      "Ranked #8 nationally among public policy clinics",
      "Small cohort model — 34 students per year",
    ],
    outcomes: ["92% placement within 6 months"],
  },
];

export function getProgramBySlug(slug: string): Program | undefined {
  return programs.find((p) => p.slug === slug);
}

export function getProgramsBySchool(schoolSlug: string): Program[] {
  return programs.filter((p) => p.schoolSlug === schoolSlug);
}
