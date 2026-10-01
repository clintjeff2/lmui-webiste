export interface AdmissionStep {
  number: string;
  title: string;
  description: string;
}

export const admissionSteps: AdmissionStep[] = [
  {
    number: "01",
    title: "Explore your option",
    description:
      "Browse all {{optionCount}} options across four schools. Most applicants shortlist two or three before starting an application.",
  },
  {
    number: "02",
    title: "Submit your application",
    description:
      "One application covers every undergraduate option. Graduate and professional options each have a dedicated supplement.",
  },
  {
    number: "03",
    title: "Financial aid & scholarships",
    description:
      "92% of first-year students receive some form of aid. The Bridge Scholars program covers full tuition for qualifying students.",
  },
  {
    number: "04",
    title: "Admission decision",
    description:
      "Early Decision applicants hear back by mid-December. Regular Decision applicants receive a decision by the end of March.",
  },
];

export interface Deadline {
  round: string;
  date: string;
  note: string;
}

export const deadlines: Deadline[] = [
  { round: "Early Decision", date: "November 1", note: "Binding — decisions released mid-December" },
  { round: "Early Action", date: "November 15", note: "Non-binding — decisions released mid-January" },
  { round: "Regular Decision", date: "January 15", note: "Decisions released by March 31" },
  { round: "Transfer Applicants", date: "March 1", note: "For fall admission" },
];

export interface FaqItem {
  question: string;
  answer: string;
}

// Kept empty so fallback doesn't hide API connection issues during testing
export const admissionsFaq: FaqItem[] = [];

export interface AdmissionsData {
  admissionSteps: AdmissionStep[];
  deadlines: Deadline[];
  admissionsFaq: FaqItem[];
}

const API_BASE = process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:4000";

function rowsOrFallback<T>(rows: unknown, fallback: T[]): T[] {
  return Array.isArray(rows) && rows.length > 0 ? (rows as T[]) : fallback;
}

function admissionsStepsWithOptionCount(steps: AdmissionStep[], optionCount: number): AdmissionStep[] {
  return steps.map((step) => ({
    ...step,
    description: step.description
      .replace(/\{\{optionCount\}\}/g, String(optionCount))
      .replace(/\b[\d,]+\+\s+options\b/gi, `${optionCount} options`)
      .replace(/\bone hundred and fifty plus options\b/gi, `${optionCount} options`),
  }));
}

export async function getAdmissionsData(optionCount: number | Promise<number>): Promise<AdmissionsData> {
  const resolvedOptionCount = await optionCount;
  try {
    const response = await fetch(`${API_BASE}/api/v1/admissions`, { cache: "no-store" });
    if (!response.ok) {
      console.warn(`[getAdmissionsData] Server responded with status ${response.status}`);
      return {
        admissionSteps: admissionsStepsWithOptionCount(admissionSteps, resolvedOptionCount),
        deadlines,
        admissionsFaq,
      };
    }

    const data: unknown = await response.json();
    if (typeof data !== "object" || data === null) {
      return {
        admissionSteps: admissionsStepsWithOptionCount(admissionSteps, resolvedOptionCount),
        deadlines,
        admissionsFaq,
      };
    }

    const admissions = data as Partial<AdmissionsData>;

    return {
      admissionSteps: admissionsStepsWithOptionCount(
        rowsOrFallback(admissions.admissionSteps, admissionSteps),
        resolvedOptionCount,
      ),
      deadlines: rowsOrFallback(admissions.deadlines, deadlines),
      admissionsFaq: rowsOrFallback(admissions.admissionsFaq, admissionsFaq),
    };
  } catch (error) {
    console.error("[getAdmissionsData] Fetch error connecting to API:", error);
    return {
      admissionSteps: admissionsStepsWithOptionCount(admissionSteps, resolvedOptionCount),
      deadlines,
      admissionsFaq,
    };
  }
}