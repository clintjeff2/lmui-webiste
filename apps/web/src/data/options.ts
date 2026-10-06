import type { Fields} from "./fields";

export interface Option {
  slug: string;
  name: string;
  fieldSlug: string;
  degreeLevel: string;
  duration: string;
  summary: string;
  highlights: string[];
  outcomes: string[];
  admissionRequirements: string[];
  registration?: string;
  tuitionFees?: string;
}

export const options: Option[] = [
  // {
  //   slug: "Data-Science",
  //   name: "Data Science",
  //   fieldSlug: "computer-engineering",
  //   degreeLevel: "Undergraduate",
  //   duration: "3 years BTech /1 year Top-up",
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
  //   slug: "mechanical-fabrication",
  //   name: "Mechanical Fabrication, HND, B.Tech",
  //   fieldSlug: "mechanical-engineering",
  //   degreeLevel: "Undergraduate",
  //   duration: "2 years HND /3 years BTech",
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
  //   slug: "mechanical-fabrication-btech",
  //   name: "Mechanical Fabrication",
  //   fieldSlug: "mechanical-engineering",
  //   degreeLevel: "Undergraduate",
  //   duration: "3 years BTech",
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
  //   slug: "logistics-transportation",
  //   name: "Logistics and Transportation",
  //   fieldSlug: "logistics-supply-chain",
  //   degreeLevel: "Undergraduate",
  //   duration: "3 years B.Sc. /2 years HND",
  //   summary:
  //     "A generalist MBA with concentrations in finance, strategy, and entrepreneurship, anchored by a semester-long consulting engagement with a real client.",
  //   highlights: [
  //     "Student-managed $4.2M investment fund",
  //     "Required live consulting practicum with a regional employer",
  //     "Dedicated entrepreneurship studio and seed-funding pitch day",
  //   ],
  //   outcomes: ["94% employed within 6 months", "Median starting salary $132,000"],
  // },
  // {
  //   slug: "logistics-transportation-masters",
  //   name: "Logistics and Supply Chain Management",
  //   fieldSlug: "logistics-supply-chain",
  //   degreeLevel: "Graduate",
  //   duration: "2 years MBA /2 years M.Sc.",
  //   summary:
  //     "A generalist MBA with concentrations in finance, strategy, and entrepreneurship, anchored by a semester-long consulting engagement with a real client.",
  //   highlights: [
  //     "Student-managed $4.2M investment fund",
  //     "Required live consulting practicum with a regional employer",
  //     "Dedicated entrepreneurship studio and seed-funding pitch day",
  //   ],
  //   outcomes: ["94% employed within 6 months", "Median starting salary $132,000"],
  // },
  // {
  //   slug: "port-shipping-management",
  //   name: "Port & Shipping Management",
  //   fieldSlug: "logistics-supply-chain",
  //   degreeLevel: "Undergraduate",
  //   duration: "3 years B.Sc. /2 years HND",
  //   summary:
  //     "A generalist MBA with concentrations in finance, strategy, and entrepreneurship, anchored by a semester-long consulting engagement with a real client.",
  //   highlights: [
  //     "Student-managed $4.2M investment fund",
  //     "Required live consulting practicum with a regional employer",
  //     "Dedicated entrepreneurship studio and seed-funding pitch day",
  //   ],
  //   outcomes: ["94% employed within 6 months", "Median starting salary $132,000"],
  // },
  // {
  //   slug: "human-resource-management",
  //   name: "Human Resource Management",
  //   fieldSlug: "management",
  //   degreeLevel: "Undergraduate",
  //   duration: "3 years B.Sc. /2 years HND",
  //   summary:
  //     "A generalist MBA with concentrations in finance, strategy, and entrepreneurship, anchored by a semester-long consulting engagement with a real client.",
  //   highlights: [
  //     "Student-managed $4.2M investment fund",
  //     "Required live consulting practicum with a regional employer",
  //     "Dedicated entrepreneurship studio and seed-funding pitch day",
  //   ],
  //   outcomes: ["94% employed within 6 months", "Median starting salary $132,000"],
  // },
  // {
  //   slug: "human-resource-management-master",
  //   name: "Human Resource Management",
  //   fieldSlug: "management",
  //   degreeLevel: "Graduate",
  //   duration: "2 years MBA /2 years M.Sc.",
  //   summary:
  //     "A generalist MBA with concentrations in finance, strategy, and entrepreneurship, anchored by a semester-long consulting engagement with a real client.",
  //   highlights: [
  //     "Student-managed $4.2M investment fund",
  //     "Required live consulting practicum with a regional employer",
  //     "Dedicated entrepreneurship studio and seed-funding pitch day",
  //   ],
  //   outcomes: ["94% employed within 6 months", "Median starting salary $132,000"],
  // },
  // {
  //   slug: "project-management",
  //   name: "Project Management",
  //   fieldSlug: "management",
  //   degreeLevel: "Undergraduate",
  //   duration: "3 years B.Sc. /2 years HND",
  //   summary:
  //     "A generalist MBA with concentrations in finance, strategy, and entrepreneurship, anchored by a semester-long consulting engagement with a real client.",
  //   highlights: [
  //     "Student-managed $4.2M investment fund",
  //     "Required live consulting practicum with a regional employer",
  //     "Dedicated entrepreneurship studio and seed-funding pitch day",
  //   ],
  //   outcomes: ["94% employed within 6 months", "Median starting salary $132,000"],
  // },
  // {
  //   slug: "project-management-master",
  //   name: "Project Management",
  //   fieldSlug: "management",
  //   degreeLevel: "Graduate",
  //   duration: "2 years MBA /2 years M.Sc.",
  //   summary:
  //     "A generalist MBA with concentrations in finance, strategy, and entrepreneurship, anchored by a semester-long consulting engagement with a real client.",
  //   highlights: [
  //     "Student-managed $4.2M investment fund",
  //     "Required live consulting practicum with a regional employer",
  //     "Dedicated entrepreneurship studio and seed-funding pitch day",
  //   ],
  //   outcomes: ["94% employed within 6 months", "Median starting salary $132,000"],
  // },
  // {
  //   slug: "education-management",
  //   name: "Education Management",
  //   fieldSlug: "education",
  //   degreeLevel: "HND",
  //   duration: "2 years HND",
  //   summary:
  //     "A generalist MBA with concentrations in finance, strategy, and entrepreneurship, anchored by a semester-long consulting engagement with a real client.",
  //   highlights: [
  //     "Student-managed $4.2M investment fund",
  //     "Required live consulting practicum with a regional employer",
  //     "Dedicated entrepreneurship studio and seed-funding pitch day",
  //   ],
  //   outcomes: ["94% employed within 6 months", "Median starting salary $132,000"],
  // },
  // {
  //   slug: "legal-affairs",
  //   name: "Legal Affairs",
  //   fieldSlug: "law",
  //   degreeLevel: "HND",
  //   duration: "2 years HND",
  //   summary:
  //     "A generalist MBA with concentrations in finance, strategy, and entrepreneurship, anchored by a semester-long consulting engagement with a real client.",
  //   highlights: [
  //     "Student-managed $4.2M investment fund",
  //     "Required live consulting practicum with a regional employer",
  //     "Dedicated entrepreneurship studio and seed-funding pitch day",
  //   ],
  //   outcomes: ["94% employed within 6 months", "Median starting salary $132,000"],
  // },
  // {
  //   slug: "home-economics",
  //   name: "Home Economics",
  //   fieldSlug: "hospitality-catering-management",
  //   degreeLevel: "Undergraduate",
  //   duration: "3 years B.Sc. /2 years HND",
  //   summary:
  //     "A generalist MBA with concentrations in finance, strategy, and entrepreneurship, anchored by a semester-long consulting engagement with a real client.",
  //   highlights: [
  //     "Student-managed $4.2M investment fund",
  //     "Required live consulting practicum with a regional employer",
  //     "Dedicated entrepreneurship studio and seed-funding pitch day",
  //   ],
  //   outcomes: ["94% employed within 6 months", "Median starting salary $132,000"],
  // },
  // {
  //   slug: "tourism-hotel-management",
  //   name: "Tourism and Hotel Management",
  //   fieldSlug: "hospitality-catering-management",
  //   degreeLevel: "Undergraduate",
  //   duration: "3 years B.Sc. /2 years HND",
  //   summary:
  //     "A generalist MBA with concentrations in finance, strategy, and entrepreneurship, anchored by a semester-long consulting engagement with a real client.",
  //   highlights: [
  //     "Student-managed $4.2M investment fund",
  //     "Required live consulting practicum with a regional employer",
  //     "Dedicated entrepreneurship studio and seed-funding pitch day",
  //   ],
  //   outcomes: ["94% employed within 6 months", "Median starting salary $132,000"],
  // },
  // {
  //   slug: "accountancy",
  //   name: "Accountancy",
  //   fieldSlug: "finance",
  //   degreeLevel: "Undergraduate",
  //   duration: "3 years B.Sc. /2 years HND",
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
  //   slug: "accountancy-masters",
  //   name: "Accountancy",
  //   fieldSlug: "finance",
  //   degreeLevel: "Graduate",
  //   duration: "2 years MBA /2 years M.Sc.",
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
  //   slug: "banking-finance",
  //   name: "Banking and Finance",
  //   fieldSlug: "finance",
  //   degreeLevel: "Undergraduate",
  //   duration: "3 years B.Sc. /2 years HND",
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
  //   slug: "banking-finance-masters",
  //   name: "Banking and Finance",
  //   fieldSlug: "finance",
  //   degreeLevel: "Graduate",
  //   duration: "2 years MBA /2 years M.Sc.",
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
  //   slug: "banking-finance-masters",
  //   name: "Banking and Finance",
  //   fieldSlug: "finance",
  //   degreeLevel: "Graduate",
  //   duration: "2 years MBA /2 years M.Sc.",
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
  //   slug: "software-engineering",
  //   name: "Software Engineering",
  //   fieldSlug: "computer-engineering",
  //   degreeLevel: "Undergraduate",
  //   duration: "3 years BTech /2 years HND",
  //   summary:
  //     "Grounded in cognitive, social, and developmental research methods, with lab placements available from the second semester of freshman year.",
  //   highlights: [
  //     "Six active research labs open to Undergraduates",
  //     "Optional clinical-track sequence for grad school preparation",
  //     "Community mental health practicum partnerships",
  //   ],
  //   outcomes: ["68% pursue graduate study within 2 years"],
  // },
  // {
  //   slug: "crop-production",
  //   name: "Crop Production",
  //   fieldSlug: "crop-production",
  //   degreeLevel: "Undergraduate",
  //   duration: "4 years B.Sc. /2 years HND",
  //   summary:
  //     "Grounded in cognitive, social, and developmental research methods, with lab placements available from the second semester of freshman year.",
  //   highlights: [
  //     "Six active research labs open to Undergraduates",
  //     "Optional clinical-track sequence for grad school preparation",
  //     "Community mental health practicum partnerships",
  //   ],
  //   outcomes: ["68% pursue graduate study within 2 years"],
  // },
  // {
  //   slug: "crop-production-master",
  //   name: "Crop Production",
  //   fieldSlug: "crop-production",
  //   degreeLevel: "Graduate",
  //   duration: "2 years M.Sc.",
  //   summary:
  //     "Grounded in cognitive, social, and developmental research methods, with lab placements available from the second semester of freshman year.",
  //   highlights: [
  //     "Six active research labs open to Undergraduates",
  //     "Optional clinical-track sequence for grad school preparation",
  //     "Community mental health practicum partnerships",
  //   ],
  //   outcomes: ["68% pursue graduate study within 2 years"],
  // },
  // {
  //   slug: "animal-production",
  //   name: "Animal Production",
  //   fieldSlug: "animal-husbandry",
  //   degreeLevel: "Undergradute",
  //   duration: "4 years B.Sc. /2 years HND",
  //   summary:
  //     "Grounded in cognitive, social, and developmental research methods, with lab placements available from the second semester of freshman year.",
  //   highlights: [
  //     "Six active research labs open to Undergraduates",
  //     "Optional clinical-track sequence for grad school preparation",
  //     "Community mental health practicum partnerships",
  //   ],
  //   outcomes: ["68% pursue graduate study within 2 years"],
  // },
  // {
  //   slug: "animal-production-masters",
  //   name: "Animal Production",
  //   fieldSlug: "animal-husbandry",
  //   degreeLevel: "Graduate",
  //   duration: "2 years M.Sc.",
  //   summary:
  //     "Grounded in cognitive, social, and developmental research methods, with lab placements available from the second semester of freshman year.",
  //   highlights: [
  //     "Six active research labs open to Undergraduates",
  //     "Optional clinical-track sequence for grad school preparation",
  //     "Community mental health practicum partnerships",
  //   ],
  //   outcomes: ["68% pursue graduate study within 2 years"],
  // },
  // {
  //   slug: "food-science-technology",
  //   name: "Food Science & Technology",
  //   fieldSlug: "food-science",
  //   degreeLevel: "Undergraduate",
  //   duration: "4 years B.Sc. /2 years HND",
  //   summary:
  //     "Grounded in cognitive, social, and developmental research methods, with lab placements available from the second semester of freshman year.",
  //   highlights: [
  //     "Six active research labs open to Undergraduates",
  //     "Optional clinical-track sequence for grad school preparation",
  //     "Community mental health practicum partnerships",
  //   ],
  //   outcomes: ["68% pursue graduate study within 2 years"],
  // },
  // {
  //   slug: "food-science-technology-masters",
  //   name: "Food Science & Technology",
  //   fieldSlug: "food-science",
  //   degreeLevel: "Graduate",
  //   duration: "2 yearsM.Sc.",
  //   summary:
  //     "Grounded in cognitive, social, and developmental research methods, with lab placements available from the second semester of freshman year.",
  //   highlights: [
  //     "Six active research labs open to Undergraduates",
  //     "Optional clinical-track sequence for grad school preparation",
  //     "Community mental health practicum partnerships",
  //   ],
  //   outcomes: ["68% pursue graduate study within 2 years"],
  // },
  // {
  //   slug: "agro-pastoral-entrepreneurship-masters",
  //   name: "Agro Pastoral Entrepreneuship",
  //   fieldSlug: "animal-husbandry",
  //   degreeLevel: "Graduate",
  //   duration: "2 yearsM.Sc.",
  //   summary:
  //     "Grounded in cognitive, social, and developmental research methods, with lab placements available from the second semester of freshman year.",
  //   highlights: [
  //     "Six active research labs open to Undergraduates",
  //     "Optional clinical-track sequence for grad school preparation",
  //     "Community mental health practicum partnerships",
  //   ],
  //   outcomes: ["68% pursue graduate study within 2 years"],
  // },
  // {
  //   slug: "agro-pastoral-entrepreneurship",
  //   name: "Agro Pastoral Entrepreneuship",
  //   fieldSlug: "animal-husbandry",
  //   degreeLevel: "Undergraduate",
  //   duration: "4  years B.Sc. /2 years HND",
  //   summary:
  //     "Grounded in cognitive, social, and developmental research methods, with lab placements available from the second semester of freshman year.",
  //   highlights: [
  //     "Six active research labs open to Undergraduates",
  //     "Optional clinical-track sequence for grad school preparation",
  //     "Community mental health practicum partnerships",
  //   ],
  //   outcomes: ["68% pursue graduate study within 2 years"],
  // },
  // {
  //   slug: "fisheries-aquaculture",
  //   name: "Fisheries & Aquaculture",
  //   fieldSlug: "animal-husbandry",
  //   degreeLevel: "Undergraduate",
  //   duration: "4  years B.Sc. /2 years HND",
  //   summary:
  //     "Grounded in cognitive, social, and developmental research methods, with lab placements available from the second semester of freshman year.",
  //   highlights: [
  //     "Six active research labs open to Undergraduates",
  //     "Optional clinical-track sequence for grad school preparation",
  //     "Community mental health practicum partnerships",
  //   ],
  //   outcomes: ["68% pursue graduate study within 2 years"],
  // },
  // {
  //   slug: "fisheries-aquaculture-masters",
  //   name: "Fisheries & Aquaculture",
  //   fieldSlug: "animal-husbandry",
  //   degreeLevel: "Graduate",
  //   duration: "2 years M.Sc.",
  //   summary:
  //     "Grounded in cognitive, social, and developmental research methods, with lab placements available from the second semester of freshman year.",
  //   highlights: [
  //     "Six active research labs open to Undergraduates",
  //     "Optional clinical-track sequence for grad school preparation",
  //     "Community mental health practicum partnerships",
  //   ],
  //   outcomes: ["68% pursue graduate study within 2 years"],
  // },
  // {
  //   slug: "agronomy",
  //   name: "Agronomy",
  //   fieldSlug: "animal-husbandry",
  //   degreeLevel: "Graduate",
  //   duration: "2 years M.Sc.",
  //   summary:
  //     "Grounded in cognitive, social, and developmental research methods, with lab placements available from the second semester of freshman year.",
  //   highlights: [
  //     "Six active research labs open to Undergraduates",
  //     "Optional clinical-track sequence for grad school preparation",
  //     "Community mental health practicum partnerships",
  //   ],
  //   outcomes: ["68% pursue graduate study within 2 years"],
  // },
  // {
  //   slug: "agronomy",
  //   name: "Agronomy",
  //   fieldSlug: "animal-husbandry",
  //   degreeLevel: "Undergraduate",
  //   duration: "4 years B.Sc. /2 years HND",
  //   summary:
  //     "Grounded in cognitive, social, and developmental research methods, with lab placements available from the second semester of freshman year.",
  //   highlights: [
  //     "Six active research labs open to Undergraduates",
  //     "Optional clinical-track sequence for grad school preparation",
  //     "Community mental health practicum partnerships",
  //   ],
  //   outcomes: ["68% pursue graduate study within 2 years"],
  // },
  // {
  //   slug: "ai-engineering",
  //   name: "AI Engineering",
  //   fieldSlug: "computer-engineering",
  //   degreeLevel: "Undergraduate",
  //   duration: "3 years BTech /1 year Top-up",
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
  //   slug: "telecommunication",
  //   name: "Telecommunication Engineering",
  //   fieldSlug: "networks-telecommunications",
  //   degreeLevel: "Undergraduate",
  //   duration: "3 years BTech /2 years HND",
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
  //   slug: "network-security",
  //   name: "Network & Security",
  //   fieldSlug: "networks-telecommunications",
  //   degreeLevel: "Undergraduate",
  //   duration: "3 years BTech /2 years HND",
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
  //   slug: "information-technology-security",
  //   name: "Information Technology Security",
  //   fieldSlug: "networks-telecommunications",
  //   degreeLevel: "Undergraduate",
  //   duration: "1 year top-up",
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
  //   slug: "cyber-security",
  //   name: "Cyber Security",
  //   fieldSlug: "networks-telecommunications",
  //   degreeLevel: "Graduate",
  //   duration: "2 years MTech",
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
  //   slug: "computer-graphics-webdesign",
  //   name: "Computer Graphics and Web Design",
  //   fieldSlug: "computer-engineering",
  //   degreeLevel: "Undergraduate",
  //   duration: "3 years BTech /2 years HND",
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
  //   slug: "database-management",
  //   name: "Database Management (Data Engineering)",
  //   fieldSlug: "computer-engineering",
  //   degreeLevel: "Undergraduate",
  //   duration: "3 years BTech /2 years HND",
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
  //   slug: "ecommerce-digital-marketing",
  //   name: "E-commerce and Digital Marketing",
  //   fieldSlug: "computer-engineering",
  //   degreeLevel: "Undergraduate",
  //   duration: "3 years BTech /2 years HND",
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
  //   slug: "digital-marketing",
  //   name: "Digital Marketing",
  //   fieldSlug: "marketing",
  //   degreeLevel: "Graduate",
  //   duration: "2 years MBA /2 years M.Sc.",
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
  //   slug: "marketing-trade-sales",
  //   name: "Marketing, Trade and Sales",
  //   fieldSlug: "marketing",
  //   degreeLevel: "Undergraduate",
  //   duration: "3 years B.Sc. /2 years HND",
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
  //   slug: "marketing-trade-sales-masters",
  //   name: "Marketing, Trade and Sales",
  //   fieldSlug: "marketing",
  //   degreeLevel: "Graduate",
  //   duration: "2 years MBA /2 years M.Sc.",
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
  //   slug: "electrical-power-systems",
  //   name: "Electrical Power Systems",
  //   fieldSlug: "electrical-engineering",
  //   degreeLevel: "Undergraduate",
  //   duration: "2 years HND",
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
  //   slug: "electrical-power-systems-btech",
  //   name: "Electrical Power Systems",
  //   fieldSlug: "electrical-engineering",
  //   degreeLevel: "Undergraduate",
  //   duration: "3 years BTech",
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
  //   slug: "electrical-electronics",
  //   name: "Electrical Electronics",
  //   fieldSlug: "electrical-engineering",
  //   degreeLevel: "Undergraduate",
  //   duration: "3 years BTech /2 years HND",
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
  //   slug: "computer-hardware-maintenance",
  //   name: "Computer Hardware Maintenance",
  //   fieldSlug: "electrical-engineering",
  //   degreeLevel: "HND",
  //   duration: "2 years HND",
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
  //   slug: "civil-engineering",
  //   name: "Civil Engineering",
  //   fieldSlug: "civil-engineering-construction",
  //   degreeLevel: "Undergraduate",
  //   duration: "3 years BTech /2 years HND",
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
  //   slug: "urban-planning",
  //   name: "Urban Planning",
  //   fieldSlug: "civil-engineering-construction",
  //   degreeLevel: "Undergraduate",
  //   duration: "3 years BTech /2 years HND",
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
  //   slug: "machine-learning",
  //   name: "Machine Learning",
  //   fieldSlug: "computer-engineering",
  //   degreeLevel: "Graduate",
  //   duration: "2 years MTech",
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
  //   slug: "application-development",
  //   name: " Software Engineering (Application Development)",
  //   fieldSlug: "computer-engineering",
  //   degreeLevel: "Graduate",
  //   duration: "2 years MTech",
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
  //   slug: "it-project-management",
  //   name: "IT Project Management",
  //   fieldSlug: "computer-engineering",
  //   degreeLevel: "Graduate",
  //   duration: "2 years MTech",
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
  //   slug: "digital-transformation",
  //   name: "Digital Transformation",
  //   fieldSlug: "computer-engineering",
  //   degreeLevel: "Graduate",
  //   duration: "2 years MTech",
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
  //   slug: "data-sciences",
  //   name: "Data Science",
  //   fieldSlug: "computer-engineering",
  //   degreeLevel: "Graduate",
  //   duration: "2 years MTech",
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
  //   slug: "nursing-practice",
  //   name: "Nursing Practice",
  //   fieldSlug: "nursing",
  //   degreeLevel: "Undergraduate",
  //   duration: "3 years B.Sc. /2 years HND",
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
  //   slug: "nursing-practice-masters",
  //   name: "Nursing Practice",
  //   fieldSlug: "nursing",
  //   degreeLevel: "Graduate",
  //   duration: "2 years M.Sc.",
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
  //   slug: "medical-laboratory-science",
  //   name: "Medical Laboratory Science",
  //   fieldSlug: "medical-laboratory-science",
  //   degreeLevel: "Undergraduate",
  //   duration: "3 years B.Sc. /2 years HND",
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
  //   slug: "medical-laboratory-science-masters",
  //   name: "Medical Laboratory Science",
  //   fieldSlug: "medical-laboratory-science",
  //   degreeLevel: "Graduate",
  //   duration: "2 years M.Sc.",
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
  //   slug: "pharmacy-technology",
  //   name: "Pharmacy Technology",
  //   fieldSlug: "pharmacy-technology",
  //   degreeLevel: "Undergraduate",
  //   duration: "3 years B.Sc. /2 years HND",
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
  //   slug: "pharmacology",
  //   name: "Pharmacology",
  //   fieldSlug: "pharmacy-technology",
  //   degreeLevel: "Graduate",
  //   duration: "2 years M.Sc.",
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
  //   slug: "physiotherapy",
  //   name: "Physiotherapy",
  //   fieldSlug: "physiotherapy",
  //   degreeLevel: "Undergraduate",
  //   duration: "3 years B.Sc. /2 years HND",
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
  //   slug: "physiotherapy-masters",
  //   name: "Physiotherapy",
  //   fieldSlug: "physiotherapy",
  //   degreeLevel: "Graduate",
  //   duration: "2 years M.Sc.",
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
  //   slug: "medical-image-technology",
  //   name: "Medical Image technology",
  //   fieldSlug: "radiography-medical-technology",
  //   degreeLevel: "Undergraduate",
  //   duration: "3 years B.Sc. /2 years HND",
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
  //   slug: "medical-image-technology-masters",
  //   name: "Medical Image technology",
  //   fieldSlug: "radiography-medical-technology",
  //   degreeLevel: "Graduate",
  //   duration: "2 years M.Sc.",
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
  //   slug: "nutrition-dietetics",
  //   name: "Nutrition and Dietetics",
  //   fieldSlug: "public-health",
  //   degreeLevel: "Undergraduate",
  //   duration: "3 years B.Sc. /2 years HND",
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
  //   slug: "nutrition-dietetics-masters",
  //   name: "Nutrition and Dietetics",
  //   fieldSlug: "public-health",
  //   degreeLevel: "Graduate",
  //   duration: "2 years M.Sc.",
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
  //   slug: "midwifery",
  //   name: "Midwifery",
  //   fieldSlug: "midwifery",
  //   degreeLevel: "Undergraduate",
  //   duration: "3 years B.Sc. /2 years HND",
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
  //   slug: "midwifery-master",
  //   name: "Midwifery",
  //   fieldSlug: "midwifery",
  //   degreeLevel: "Graduate",
  //   duration: "2 years M.Sc.",
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
  //   slug: "reproductive-health",
  //   name: "Reproductive Health",
  //   fieldSlug: "public-health",
  //   degreeLevel: "Graduate",
  //   duration: "2 years M.Sc.",
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
  //   slug: "nursing-education",
  //   name: "Nursing Education",
  //   fieldSlug: "nursing",
  //   degreeLevel: "Graduate",
  //   duration: "2 years M.Sc.",
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
  //   slug: "public-health-health-system",
  //   name: "Public Health & Health System",
  //   fieldSlug: "public-health",
  //   degreeLevel: "Graduate",
  //   duration: "2 years M.Sc.",
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
  //   slug: "public-health-health-system-management",
  //   name: "Public Health & Health System Management",
  //   fieldSlug: "public-health",
  //   degreeLevel: "Graduate",
  //   duration: "2 years M.Sc.",
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
  //   slug: "public-health-biostatistics",
  //   name: "Public Health & Biostatistics",
  //   fieldSlug: "public-health",
  //   degreeLevel: "Graduate",
  //   duration: "2 years M.Sc.",
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
  //   slug: "public-health-occupation-environmental-health",
  //   name: "Public Health, Occupation & Environmental Health",
  //   fieldSlug: "public-health",
  //   degreeLevel: "Graduate",
  //   duration: "2 years M.Sc.",
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
  //   slug: "ultrasonography-image-science",
  //   name: "Ultrasonography & Image Science",
  //   fieldSlug: "radiography-medical-technology",
  //   degreeLevel: "Graduate",
  //   duration: "2 years M.Sc.",
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
  //   slug: "medical-parasitology-microbiology",
  //   name: "Medical Parasitology & Microbiology",
  //   fieldSlug: "medical-laboratory-science",
  //   degreeLevel: "Graduate",
  //   duration: "2 years M.Sc.",
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
  //   slug: "anesthesia-intensive-care",
  //   name: "Anesthesia and Intensive Care",
  //   fieldSlug: "nursing",
  //   degreeLevel: "Graduate",
  //   duration: "2 years M.Sc.",
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
  //   slug: "mental-health",
  //   name: "Mental Health",
  //   fieldSlug: "psychiatry",
  //   degreeLevel: "Graduate",
  //   duration: "2 years M.Sc.",
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
  //   slug: "nursing-informatics",
  //   name: "Nursing Informatic",
  //   fieldSlug: "nursing",
  //   degreeLevel: "Graduate",
  //   duration: "2 years M.Sc.",
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
  //   slug: "geriatric-nursing",
  //   name: "Geriatric Nursing",
  //   fieldSlug: "nursing",
  //   degreeLevel: "Graduate",
  //   duration: "2 years M.Sc.",
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
  //   slug: "pediatric-nursing",
  //   name: "Pediatric Nursing",
  //   fieldSlug: "nursing",
  //   degreeLevel: "Graduate",
  //   duration: "2 years M.Sc.",
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
  //   slug: "medico-surgical-nursing",
  //   name: "Medico Surgical Nursing",
  //   fieldSlug: "nursing",
  //   degreeLevel: "Graduate",
  //   duration: "2 years M.Sc.",
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
  //   slug: "chemical-pathology",
  //   name: "Chemical Pathology",
  //   fieldSlug: "medical-laboratory-science",
  //   degreeLevel: "Graduate",
  //   duration: "2 years M.Sc.",
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
  //   slug: "haematology-blood-transfusion",
  //   name: "Chemical Pathology",
  //   fieldSlug: "medical-laboratory-science",
  //   degreeLevel: "Graduate",
  //   duration: "2 years M.Sc.",
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
  //   slug: "infectious-diseases",
  //   name: "Infectious Diseases",
  //   fieldSlug: "medical-laboratory-science",
  //   degreeLevel: "Graduate",
  //   duration: "2 years M.Sc.",
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

function mapApiOption(value: unknown): Option | null {
  if (typeof value !== "object" || value === null) return null;

  const row = value as Record<string, unknown>;
  const degreeLevel = typeof row.degreeLevel === "string"
    ? row.degreeLevel.toLocaleLowerCase()
    : "";
  const degreeLevels: Record<string, Option["degreeLevel"]> = {
    undergraduate: "Undergraduate",
    graduate: "Graduate",
    doctoral: "Doctoral",
    certificate: "Certificate",
    hnd: "HND",
  };

  if (
    typeof row.slug !== "string" ||
    typeof row.name !== "string" ||
    typeof row.fieldSlug !== "string" ||
    typeof row.duration !== "string" ||
    typeof row.summary !== "string" ||
    !degreeLevels[degreeLevel]
  ) {
    return null;
  }

  return {
    slug: row.slug,
    name: row.name,
    fieldSlug: row.fieldSlug,
    degreeLevel: degreeLevels[degreeLevel],
    duration: row.duration,
    summary: row.summary,
    registration: typeof row.registration === "string" ? row.registration : undefined,
    tuitionFees: typeof row.tuitionFees === "string" ? row.tuitionFees : undefined,
    highlights: Array.isArray(row.highlights)
      ? row.highlights.filter((item): item is string => typeof item === "string")
      : [],
    outcomes: Array.isArray(row.outcomes)
      ? row.outcomes.filter((item): item is string => typeof item === "string")
      : [],
    admissionRequirements: Array.isArray(row.admissionRequirements)
      ? row.admissionRequirements.filter((item): item is string => typeof item === "string")
      : [],
  };
}

export async function getOptions(): Promise<Option[]> {
  try {
    const response = await fetch(`${API_BASE}/api/v1/options`, { cache: "no-store" });
    if (!response.ok) return options;

    const data: unknown = await response.json();
    if (!Array.isArray(data) || data.length === 0) return options;

    const loadedOptions = data
      .map(mapApiOption)
      .filter((option): option is Option => option !== null);
    return loadedOptions.length > 0 ? loadedOptions : options;
  } catch {
    return options;
  }
}

export function getOptionBySlug(
  slug: string,
  source: Option[] = options,
): Option | undefined {
  return source.find((option) => option.slug === slug);
}

export function getOptionsBySchool(fieldSlug: string, source: Option[] = options): Option[] {
  const normalize = (value: string) => value.trim().toLocaleLowerCase().replace(/[^a-z0-9]/g, "");
  const normalizedFieldSlug = normalize(fieldSlug);
  return source.filter((option) => normalize(option.fieldSlug) === normalizedFieldSlug);
}

export async function getUniqueOptionCount(): Promise<number> {
  const loadedOptions = await getOptions();
  const uniqueSlugs = new Set(
    loadedOptions
      .map((option) => option.slug.trim().toLocaleLowerCase())
      .filter(Boolean),
  );

  return uniqueSlugs.size;
}

export async function getUniqueOptionCountBySchool(
  schoolSlug: string,
  fieldsSource?: Fields[],
): Promise<number> {
  const loadedOptions = await getOptions();
  const loadedFields: Fields[] = fieldsSource ?? await import("./fields").then(({ getFields }) => getFields());
  const normalize = (value: string) => value.trim().toLocaleLowerCase().replace(/[^a-z0-9]/g, "");
  const normalizedSchoolSlug = normalize(schoolSlug);
  const schoolFields = loadedFields.filter((field) => normalize(field.schoolSlug) === normalizedSchoolSlug);
  const fieldReferences = new Set([
    normalizedSchoolSlug,
    ...schoolFields.flatMap((field) => [field.slug, field.name.split(",")[0]]).map(normalize),
  ]);
  const schoolOptions = loadedOptions.filter((option) => fieldReferences.has(normalize(option.fieldSlug)));
  const uniqueSlugs = new Set(
    schoolOptions
      .map((option) => option.slug.trim().toLocaleLowerCase())
      .filter(Boolean),
  );

  return uniqueSlugs.size;
}