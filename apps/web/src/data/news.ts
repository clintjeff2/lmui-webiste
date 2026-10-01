export interface NewsArticle {
  slug: string;
  title: string;
  dek: string;
  category: string;
  date: string;
  readTime: string;
  featured?: boolean;
  body: string[];
  image: string;
}

export const newsArticles: NewsArticle[] = [
  // {
  //   slug: "new-engineering-building-opens",
  //   title: "The Whitfield Engineering Commons opens its doors",
  //   dek: "A 210,000-square-foot home for hands-on fabrication, robotics, and cross-disciplinary research, four years in the making.",
  //   category: "Campus",
  //   date: "2026-09-2",
  //   readTime: "4 min read",
  //   featured: true,
  //   image: "https://landmark.cm/static/media/landmark-buea-academic-staff-4.9c740f84.jpg",
  //   body: [
  //     "After four years of construction, the Whitfield Engineering Commons officially opened this month — a 210,000-square-foot facility built around a simple idea: engineering is learned by making things, not just modeling them.",
  //     "The building houses a 24-hour student machine shop, a robotics arena visible from the main atrium, and twelve project labs shared across mechanical, electrical, and civil engineering. Every floor was designed with glass-walled labs facing public circulation, so the work in progress is visible to anyone walking through.",
  //     "\"We didn't want another building where research happens behind closed doors,\" said Dean Alvaro Reyes at the ribbon-cutting. \"Students should be able to see what a research career actually looks like before they've declared a major.\"",
  //     "The Commons also houses the university's new Additive Manufacturing Center, with six industrial-grade 3D printers available to any enrolled student, and a rooftop testing platform for the aerospace and drone research groups.",
  //   ],
  // },
  // {
  //   slug: "record-enrollment-fall",
  //   title: "Landmark welcomes its largest, most diverse incoming class",
  //   dek: "14,200 students are now enrolled across six metropolitan campuses — a 9% increase from last year, with first-generation enrollment up 22%.",
  //   category: "Admissions",
  //   date: "2026-08-24",
  //   readTime: "3 min read",
  //   image: "https://landmark.cm/static/media/landmark-campus-1e48a25f.png",
  //   body: [
  //     "This fall's incoming class is the largest in university history: just over 3,100 new undergraduates joined the six-campus system, alongside a record number of graduate and professional students.",
  //     "First-generation college student enrollment rose 22% year over year, following the expansion of the Landmark Bridge Scholars program, which now covers full tuition and a living stipend for qualifying students from the metropolitan region.",
  //     "\"Every year we ask the same question: who is this university actually serving?\" said Vice Provost for Enrollment Dana Whitcombe. \"This class is the clearest answer we've had yet.\"",
  //   ],
  // },
  // {
  //   slug: "student-fund-outperforms",
  //   title: "Student-managed investment fund outperforms benchmark for third year running",
  //   dek: "The Landmark Student Investment Fund, run entirely by MBA and undergraduate finance students, posted a 14.2% return against a 9.8% benchmark.",
  //   category: "Business",
  //   date: "2026-08-11",
  //   readTime: "3 min read",
  //   image: "https://landmark.cm/static/media/student-investment-fund-1e48a25f.png",
  //   body: [
  //     "The $4.2 million Landmark Student Investment Fund closed its fiscal year with a 14.2% return, outperforming its S&P 500 benchmark for the third consecutive year — a result the School of Business says is no accident.",
  //     "The fund is managed entirely by a rotating team of 22 MBA and undergraduate finance students, who present quarterly to a board of alumni portfolio managers and must defend every position with the same rigor expected on a professional trading desk.",
  //     "\"There's no simulation here — this is real capital, and the students know it,\" said faculty advisor Priya Chandrasekaran. \"That changes how seriously they take the research.\"",
  //   ],
  // },
  // {
  //   slug: "urban-design-adopted",
  //   title: "Student transit proposal adopted into the metro region's 2027 plan",
  //   dek: "A student-led redesign of the Fairmount transit corridor, developed in partnership with the metropolitan planning office, has been formally adopted.",
  //   category: "Design",
  //   date: "2026-07-29",
  //   readTime: "5 min read",
  //   image: "https://landmark.cm/static/media/urban-design-student-proposal-1e48a25f.png",
  //   body: [
  //     "A proposal developed by fourth-year Urban Design students to redesign the Fairmount transit corridor has been formally adopted into the metropolitan region's 2027 infrastructure plan — the third student proposal from the School of Design & Architecture to reach that stage since 2022.",
  //     "The project began as a studio assignment in partnership with the city's planning office, which has embedded a staff liaison inside the design studio for the past three years. Students conducted their own ridership surveys, held two community input sessions, and presented final proposals directly to the regional transit board.",
  //     "\"These aren't hypothetical studio exercises anymore,\" said studio lead Marcus Feld. \"Students are watching decisions they influenced get built.\"",
  //   ],
  // },
  // {
  //   slug: "clinic-supreme-court",
  //   title: "Law clinic argues before the state supreme court",
  //   dek: "Third-year law students, supervised by clinical faculty, presented oral arguments in a housing rights case with implications for tenants statewide.",
  //   category: "Law & Policy",
  //   date: "2026-07-14",
  //   readTime: "4 min read",
  //   image: "https://landmark.cm/static/media/law-clinic-supreme-court-1e48a25f.png",
  //   body: [
  //     "Two third-year students from the Landmark Legal Clinic argued before the state supreme court this month in a housing rights case that could affect tenant protections statewide — believed to be the first time students from the clinic have argued at that level.",
  //     "The case, which began as an eviction dispute the clinic took on two years ago, worked its way up through the appellate courts as the clinic's supervising attorneys guided students through every stage of the litigation.",
  //     "\"They didn't get a watered-down version of the case,\" said clinic director Renata Osei. \"They built the record, they wrote the briefs, and they stood up and argued it.\"",
  //   ],
  // },
  // {
  //   slug: "research-funding-milestone",
  //   title: "Annual research funding crosses $340 million for the first time",
  //   dek: "Federal and private research awards grew 11% year over year, led by new grants in clean energy storage and public health infectious disease modeling.",
  //   category: "Research",
  //   date: "2026-06-30",
  //   readTime: "3 min read",
  //   image: "https://landmark.cm/static/media/research-funding-milestone-1e48a25f.png",
  //   body: [
  //     "Landmark's annual research funding surpassed $340 million for the first time this fiscal year, an 11% increase driven largely by new federal awards in clean energy storage, infectious disease modeling, and materials science.",
  //     "The growth reflects a deliberate five-year push by the Office of the Vice Provost for Research to grow interdisciplinary centers rather than single-department labs — three of the five largest grants awarded this year span two or more schools.",
  //     "\"The best research questions don't respect department boundaries,\" said Vice Provost for Research Dr. Iman Farouk. \"We've built the funding infrastructure to match that.\"",
  //   ],
  // },
];

const API_BASE = process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:4000";

export async function getArticleBySlug(slug: string): Promise<NewsArticle | undefined> {
  return (await getNewsArticles(6)).find((article) => article.slug === slug);
}

export async function getNewsArticles(campusCount: number): Promise<NewsArticle[]> {
  let articles = newsArticles;

  try {
    const response = await fetch(`${API_BASE}/api/v1/news`, { cache: "no-store" });
    if (response.ok) {
      const data: unknown = await response.json();
      if (Array.isArray(data) && data.length > 0) articles = data as NewsArticle[];
    }
  } catch {
    articles = newsArticles;
  }

  return articles.map((article, index) => ({
    ...article,
    featured: article.featured ?? index === 0,
    dek: article.dek.replace("six metropolitan campuses", `${campusCount} metropolitan campuses`),
    body: article.body.map((paragraph) =>
      paragraph.replace("six-campus system", `${campusCount}-campus system`),
    ),
  }));
}
