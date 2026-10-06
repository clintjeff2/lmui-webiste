import { options as previousProgramData } from "./options";

export interface Fields {
  slug: string;
  name: string;
  schoolSlug: string;
  degreeLevel?: string;
  duration?: string;
  fieldImage?: string;
  summary: string;
  highlights: string[];
  outcomes: string[];
}

export const fields: Fields[] = [
  // {
  //   slug: "computer-ngineering",
  //   name: "Computer Engineering, HND, B-Tech, Master's",
  //   schoolSlug: "engineering",
  //   summary:
  //     "A rigorous foundation in algorithms, systems, and software engineering, with concentrations in AI, security, and distributed systems from junior year on.",
  //   highlights: [
  //     "Required systems-building capstone with an external partner organization",
  //     "Access to the Landmark Compute Cluster from sophomore year",
  //     "Concentrations in AI/ML, cybersecurity, and distributed systems",
  //   ],
  //   outcomes: ["96% placement within 6 months", "Median starting salary $98,500"],
  // },
  // {
  //   slug: "mechanical-engineering",
  //   name: "Mechanical Engineering, HND, B-Tech",
  //   schoolSlug: "engineering",
  //   summary:
  //     "Design, thermodynamics, and materials science grounded in a project sequence that culminates in a fully fabricated senior design build.",
  //   highlights: [
  //     "In-house rapid prototyping and machine shop, open 24/7 to seniors",
  //     "Formula SAE and robotics teams with dedicated faculty advisors",
  //     "Industry-sponsored capstone projects each spring",
  //   ],
  //   outcomes: ["93% placement within 6 months", "Median starting salary $91,200"],
  // },
  // {
  //   slug: "civil-engineering-construction",
  //   name: "Civil Engineering and Construction, HND, B-Tech",
  //   schoolSlug: "engineering",
  //   summary:
  //     "Design, construction, and materials science grounded in a project sequence that culminates in a fully fabricated senior design build.",
  //   highlights: [
  //     "In-house rapid prototyping and machine shop, open 24/7 to seniors",
  //     "Formula SAE and robotics teams with dedicated faculty advisors",
  //     "Industry-sponsored capstone projects each spring",
  //   ],
  //   outcomes: ["93% placement within 6 months", "Median starting salary $91,200"]
  // },
  // {
  //   slug: "networks-telecommunications",
  //   name: "Networks and Telecommunications, HND, B.Tech, Master's",
  //   schoolSlug: "engineering",
  //   summary:
  //     "Corporate finance, investments, and markets, taught with Bloomberg terminal access from the first course and a required trading-floor simulation.",
  //   highlights: [
  //     "Bloomberg terminal lab, 20 seats",
  //     "Sophomore-year eligibility for the student investment fund",
  //     "Direct pipeline partnerships with 14 regional financial firms",
  //   ],
  //   outcomes: ["91% placement within 6 months", "Median starting salary $78,000"],
  // },
  // {
  //   slug: "electrical-engineering",
  //   name: "Electrical Engineering, HND, B.Tech",
  //   schoolSlug: "engineering",
  //   summary:
  //     "Grounded in cognitive, social, and developmental research methods, with lab placements available from the second semester of freshman year.",
  //   highlights: [
  //     "Six active research labs open to undergraduates",
  //     "Optional clinical-track sequence for grad school preparation",
  //     "Community mental health practicum partnerships",
  //   ],
  //   outcomes: ["68% pursue graduate study within 2 years"],
  // },
  // {
  //   slug: "medical-laboratory-science",
  //   name: "Medical Laboratory Science, HND, B.Sc., M.Sc.",
  //   schoolSlug: "biomedical",
  //   summary:
  //     "Statistics, computation, and domain application, designed for students who want quantitative fluency paired with a social or natural science lens.",
  //   highlights: [
  //     "Cross-listed with Computer Science and Economics",
  //     "Capstone practicum with the university's own institutional data office",
  //     "Open to declaration as early as freshman spring",
  //   ],
  //   outcomes: ["90% placement or grad study within 6 months"],
  // },
  // {
  //   slug: "nursing",
  //   name: "Nursing, HND, B.Sc., M.Sc.",
  //   schoolSlug: "biomedical",
  //   summary:
  //     "Clinical rotations begin in the second year across the Landmark Health Partners hospital and clinic network, well ahead of the national norm.",
  //   highlights: [
  //     "1,400+ supervised clinical hours by graduation",
  //     "Simulation center with 18 high-fidelity patient mannequins",
  //     "94% first-time NCLEX pass rate over the last five years",
  //   ],
  //   outcomes: ["98% placement within 6 months", "94% first-time NCLEX pass rate"],
  // },
  // {
  //   slug: "pharmacy-technology",
  //   name: "Pharmacy Technology, HND, B.Sc., M.Sc.",
  //   schoolSlug: "biomedical",
  //   summary:
  //     "A patient-centered curriculum with clinical exposure beginning in the first semester, delivered in partnership with three metropolitan teaching hospitals.",
  //   highlights: [
  //     "First-semester clinical shadowing requirement",
  //     "Dedicated primary-care and underserved-community tracks",
  //     "98% residency match rate over the last five years",
  //   ],
  //   outcomes: ["98% residency match rate"],
  // },
  // {
  //   slug: "midwifery",
  //   name: "Midwifery, HND, B.Sc., M.Sc.",
  //   schoolSlug: "biomedical",
  //   summary:
  //     "Studio-based, with a required civic-partnership project each year developed directly alongside the metropolitan planning office.",
  //   highlights: [
  //     "Annual studio partnership with the city planning office",
  //     "Digital fabrication lab with full-scale CNC and robotic arms",
  //     "NAAB-accredited, professional licensure track",
  //   ],
  //   outcomes: ["89% employed in the field within 6 months"],
  // },
  // {
  //   slug: "finance",
  //   name: "Finance, HND, B.Sc, MBA, M.Sc.",
  //   schoolSlug: "business",
  //   summary:
  //     "Design thinking applied at the scale of streets, transit, and public space — three student proposals have been adopted into real city planning since 2022.",
  //   highlights: [
  //     "Direct studio partnership with metro transit authority",
  //     "Fieldwork embedded in three neighborhoods each year",
  //     "Portfolio-based capstone reviewed by practicing planners",
  //   ],
  //   outcomes: ["85% placement or grad study within 6 months"],
  // },
  // {
  //   slug: "management",
  //   name: "Management, HND, B.Sc, MBA, M.Sc.",
  //   schoolSlug: "business",
  //   summary:
  //     "Design thinking applied at the scale of streets, transit, and public space — three student proposals have been adopted into real city planning since 2022.",
  //   highlights: [
  //     "Direct studio partnership with metro transit authority",
  //     "Fieldwork embedded in three neighborhoods each year",
  //     "Portfolio-based capstone reviewed by practicing planners",
  //   ],
  //   outcomes: ["85% placement or grad study within 6 months"],
  // },
  // {
  //   slug: "law",
  //   name: "Law, HND",
  //   schoolSlug: "business",
  //   summary:
  //     "A legal clinic docket that includes real litigation, and a public policy lab that has briefed state legislators on more than 40 active bills since 2021.",
  //   highlights: [
  //     "Legal clinic with active state supreme court litigation",
  //     "Public policy lab briefing state legislators each session",
  //     "91% bar passage rate over the last five years",
  //   ],
  //   outcomes: ["91% bar passage rate", "88% employed within 10 months"],
  // },
  // {
  //   slug: "logistics-supply-chain",
  //   name: "Logistics and Supply Chain, HND, B.Sc., M.Sc.",
  //   schoolSlug: "business",
  //   summary:
  //     "Quantitative policy analysis paired with a required legislative or agency placement in the state capital during the second year.",
  //   highlights: [
  //     "Guaranteed second-year placement in a legislative or agency office",
  //     "Ranked #8 nationally among public policy clinics",
  //     "Small cohort model — 34 students per year",
  //   ],
  //   outcomes: ["92% placement within 6 months"],
  // },
  // {
  //   slug: "hospitality-catering-management",
  //   name: "Hospitality and Catering Management, HND, B.Sc., M.Sc.",
  //   schoolSlug: "business",
  //   summary:
  //     "Quantitative policy analysis paired with a required legislative or agency placement in the state capital during the second year.",
  //   highlights: [
  //     "Guaranteed second-year placement in a legislative or agency office",
  //     "Ranked #8 nationally among public policy clinics",
  //     "Small cohort model — 34 students per year",
  //   ],
  //   outcomes: ["92% placement within 6 months"],
  // },
  // {
  //   slug: "agriculture-food-science",
  //   name: "Agriculture and Food Science, HND, B.Sc., M.Sc.",
  //   schoolSlug: "engineering",
  //   summary:
  //     "Quantitative policy analysis paired with a required legislative or agency placement in the state capital during the second year.",
  //   highlights: [
  //     "Guaranteed second-year placement in a legislative or agency office",
  //     "Ranked #8 nationally among public policy clinics",
  //     "Small cohort model — 34 students per year",
  //   ],
  //   outcomes: ["92% placement within 6 months"],
  // },
];

const API_BASE = process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:4000";
const fallbackFields: Fields[] = previousProgramData.length > 0
  ? previousProgramData.map(({ fieldSlug, ...option }) => ({
    ...option,
    schoolSlug: fieldSlug,
  }))
  : fields;

function sortFields(items: Fields[]): Fields[] {
  return [...items].sort((left, right) =>
    left.name.localeCompare(right.name, undefined, { sensitivity: "base" }),
  );
}

function mapApiField(value: unknown): Fields | null {
  if (typeof value !== "object" || value === null) return null;

  const row = value as Record<string, unknown>;
  const degreeLevel = typeof row.degreeLevel === "string"
    ? row.degreeLevel.toLocaleLowerCase()
    : "";
  const degreeLevels: Record<string, NonNullable<Fields["degreeLevel"]>> = {
    undergraduate: "Undergraduate",
    graduate: "Graduate",
    doctoral: "Doctoral",
    certificate: "Certificate",
  };

  if (
    typeof row.slug !== "string" ||
    typeof row.name !== "string" ||
    typeof row.schoolSlug !== "string" ||
    typeof row.summary !== "string" ||
    (degreeLevel !== "" && !degreeLevels[degreeLevel])
  ) {
    return null;
  }

  return {
    slug: row.slug,
    name: row.name,
    schoolSlug: row.schoolSlug,
    degreeLevel: degreeLevels[degreeLevel],
    duration: typeof row.duration === "string" ? row.duration : undefined,
    fieldImage: typeof row.fieldImage === "string" ? row.fieldImage : undefined,
    summary: row.summary,
    highlights: Array.isArray(row.highlights)
      ? row.highlights.filter((item): item is string => typeof item === "string")
      : [],
    outcomes: Array.isArray(row.outcomes)
      ? row.outcomes.filter((item): item is string => typeof item === "string")
      : [],
  };
}

export async function getFields(): Promise<Fields[]> {
  try {
    const response = await fetch(`${API_BASE}/api/v1/fields`, { cache: "no-store" });
    if (!response.ok) return sortFields(fallbackFields);

    const data: unknown = await response.json();
    if (!Array.isArray(data) || data.length === 0) return sortFields(fallbackFields);

    const loadedFields = data
      .map(mapApiField)
      .filter((field): field is Fields => field !== null);
    return sortFields(loadedFields.length > 0 ? loadedFields : fallbackFields);
  } catch {
    return sortFields(fallbackFields);
  }
}

export function getFieldsBySlug(
  slug: string,
  source: Fields[] = fields,
): Fields | undefined {
  return source.find((field) => field.slug === slug);
}

export function getFieldsBySchool(schoolSlug: string, source: Fields[] = fields): Fields[] {
  return sortFields(source.filter((field) => field.schoolSlug === schoolSlug));
}

export async function getUniqueFieldCount(): Promise<number> {
  const loadedFields = await getFields();
  const uniqueNames = new Set(
    loadedFields
      .map((field) => field.name.trim().toLocaleLowerCase())
      .filter(Boolean),
  );
  return uniqueNames.size;
}

export async function getUniqueFieldCountBySchool(schoolSlug: string): Promise<number> {
  const loadedFields = await getFields();
  const schoolFields = getFieldsBySchool(schoolSlug, loadedFields);
  const uniqueNames = new Set(
    schoolFields
      .map((field) => field.name.trim().toLocaleLowerCase())
      .filter(Boolean),
  );

  return uniqueNames.size;
}