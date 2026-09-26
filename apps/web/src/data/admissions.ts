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
      "Browse all 150+ programs across four schools. Most applicants" +
        " shortlist two or three before starting an application.",
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
      "92% of first-year students receive some form of aid. " +
        "The Bridge Scholars program covers full tuition for qualifying students.",
  },
  {
    number: "04",
    title: "Admission decision",
    description:
      "Early Decision applicants hear back by mid-December. Regular Decision" +
        " applicants receive a decision by the end of March.",
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
    question: "Is LMUI fully accredited?",
    answer:
      'Yes. The institute is authorized and fully accredited by the Cameroon' +
        ' Ministry of Higher Education (MINESUP).',
  },
  {
    question: "Which university mentors LMUI?",
    answer:
      'Its national degree programs (BSc, BTech, MBA, MSc, MTech) arementored by the University of'+
        'Buea (UB) through a formal Memorandum of Understanding. It also' +
        ' holds international partnership understandings, including' +
        ' connections with institutions like the University of Toronto in Canada.',
  },
  {
    question: "What certifications can I earn?",
    answer:
      "Higher National Diploma (HND). They also offer straight Bachelor's degrees, Top-Up programs, and Master’s degrees.",
  },
  {
    question: "Does LMUI offer international professional certifications?",
    answer:
      "Yes. The institute serves as a training and examination facility for" +
        " global professional' bodies and tech companies, including ACCA, AMBA, ABE, CISCO, Oracle, Google, and AWS",
  },
  {
    question: "What are the main fields of study?",
    answer:
      "The institution operates across several specialized schools," +
        " including the School of Engineering and +Technology, School of Business and Management Sciences, and School of Medical and Biomedical Sciences",
  },
  {
    question: "Where is LMUI located?",
    answer:
      "The main campuses are located in Buea (Molyko) in the South West" +
        " Region of Cameroon. Campus A is situated opposite Unics Plc above the UB Junction.",
  },
  {
    question: "Can I study online?",
    answer:
      "Yes. LMUI offers a robust e-learning platform and onsite instruction. It hosts a large digital student demographic, accommodating over 1,000 online students from more than 20 different countries",
  },
];
