export interface AdmissionStep {
  number: string;
  title: string;
  description: string;
}

export const admissionSteps: AdmissionStep[] = [
  {
    number: "01",
    title: "Explore your program",
    description:
      "Browse all 150+ programs across six schools. Most applicants shortlist two or three before starting an application.",
  },
  {
    number: "02",
    title: "Submit your application",
    description:
      "One application covers every undergraduate program. Graduate and professional programs each have a dedicated supplement.",
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

export const admissionsFaq: FaqItem[] = [
  {
    question: "Is Landmark need-blind in admissions?",
    answer:
      "Yes, for all domestic first-year applicants. Admission decisions are made without regard to a family's ability to pay, and financial aid is guaranteed to meet 100% of demonstrated need.",
  },
  {
    question: "Do I need to submit standardized test scores?",
    answer:
      "Landmark is test-optional for first-year applicants. If you choose to submit scores, we'll consider them as one factor among many; if you don't, your application is evaluated with equal weight on the remaining components.",
  },
  {
    question: "Can I apply to more than one program?",
    answer:
      "Undergraduate applicants apply to the university as a whole and declare a major by the end of sophomore year, so one application covers exploration across most programs. Graduate and professional programs require separate, program-specific applications.",
  },
  {
    question: "What financial aid is available?",
    answer:
      "92% of first-year students receive some combination of need-based grants, merit scholarships, or work-study. The Bridge Scholars program additionally covers full tuition and a living stipend for qualifying students from the metropolitan region.",
  },
  {
    question: "How does the transfer application process work?",
    answer:
      "Transfer applicants submit college transcripts alongside the standard application components. Most transfer credit evaluations are completed within two weeks of a completed application, so you'll know how your credits apply before committing.",
  },
];
