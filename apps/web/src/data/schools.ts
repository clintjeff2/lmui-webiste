export interface School {
  slug: string;
  name: string;
  shortName: string;
  route: string;
  tagline: string;
  description: string | string[];
  stat: { value: string; label: string };
  pattern: "grid" | "diagonal" | "radial" | "wave" | "concentric";
}

export const schools: School[] = [
  {
    slug: "engineering",
    name: "School of Science, Engineering & Technology",
    shortName: "School of Science, Engineering & Technology",
    tagline: "LSSET",
    route: "/academics/lsset",
    description: [
      "The school of engineering is an academic division within the university that focuses on providing education and conducting research in various fields of engineering. It offers undergraduate and graduate programs in disciplines such as civil engineering, mechanical engineering, electrical engineering, chemical engineering, and computer engineering, among others.",
      "The school of engineering typically emphasizes a hands-on and practical approach to learning, combining theoretical knowledge with real-world applications. Students are exposed to a wide range of technical subjects that help them understand the fundamental principles and concepts of engineering.",
      "In addition to classroom instruction, the school of engineering often provides students with opportunities for experiential learning through labs, research projects, internships, and co-op programs. These practical experiences help students develop problem-solving skills and gain valuable industry experience.",
      "Beyond academics, the school of engineering often fosters a collaborative and supportive community. It offers various student organizations, clubs, and societies that allow students to network, engage in extracurricular activities, and explore their interests.",
      "Overall, the school of engineering provides a comprehensive educational experience that equips students with the skills, knowledge, and practical experiences necessary to pursue successful careers in the field of engineering.",
  ],
    stat: { value: "", label: "Highlights forward-thinking creation and problem-solving." },
    pattern: "grid",
  },
  {
    slug: "business",
    name: "School of Business & Social Sciences",
    shortName: "School of Business & Social Sciences",
    tagline: "LSBSS",
    route: "/academics/lsbss",
    description: [
      "At Landmark Metropolitan University, our School of Business is more than just an institution – it's a vibrant community of innovative minds, passionate learners, and future leaders. With a dynamic learning environment and unparalleled opportunities for growth, we're proud to offer a one-of-a-kind experience for our students. Innovative Curriculum: Our cutting-edge curriculum is designed to provide students with a strong foundation in business fundamentals while encouraging critical thinking and creativity. We offer a variety of specializations tailored to meet the demands of the ever-evolving business world, ensuring our graduates are well-prepared for the challenges of tomorrow.",
      "Expert Faculty: Our faculty comprises seasoned professionals and industry experts who bring their real-world experiences into the classroom. Through their guidance and mentorship, students gain invaluable insights into the intricacies of the business landscape and learn from the best in their respective fields.",
      "Vibrant Student Life: At the heart of our School of Business lies an energetic student community that fosters personal and professional growth. With numerous clubs, organizations, and networking events, students have ample opportunities to connect with like-minded peers, collaborate on projects, and create lasting relationships. This vibrant atmosphere not only enriches the overall educational experience but also equips students with essential skills for success in their careers.",
      "Experience the unique blend of academic excellence, experiential learning, and a dynamic student community at Landmark Metropolitan University's School of Business.",
    ],
    stat: { value: "",label: "Data-Driven. Human-Centered. Future-Focused." },
    pattern: "diagonal",
  },
  {
    slug: "biomedical",
    name: "School of Medical and Biomedical Sciences",
    shortName: "School of Medical and Biomedical Sciences",
    tagline: "LSMBS",
    route: "/academics/lsmbs",
    description: [
      "The School of Medical and Biomedical Sciences is an esteemed school that offers a range of academic programs and courses focused on Medical and Biomedical Sciences. It aims to provide students with a solid foundation in the medical field, equipping them with the necessary knowledge and skills to pursue careers in healthcare and scientific research.",
      "The school offers a diverse range of programs, including undergraduate and postgraduate degrees, diplomas, and certificate courses. These programs cover various disciplines such as nursing, medical laboratory sciences, pharmacy technology, midwifery. The curriculum is designed to blend theoretical knowledge with practical applications, incorporating laboratory work, clinical rotations, and research projects.",
      "The faculty members of the School of Medical and Biomedical Sciences are accomplished professionals with expertise in their respective fields. They bring a wealth of experience and knowledge to the classroom, ensuring that students receive a comprehensive education. The school also collaborates with healthcare institutions and research centers to provide students with opportunities for hands-on learning experiences and exposure to real-world medical practices.",
      "Beyond academics, the school emphasizes the importance of ethical practice, patient care, and interprofessional collaboration. It strives to instill in students a sense of compassion, professionalism, and the ability to work effectively in interdisciplinary healthcare teams.",
    "The School of Medical and Biomedical Sciences is committed to producing highly skilled and knowledgeable healthcare professionals who can address the evolving challenges of the medical field. It aims to promote innovation, research, and critical thinking among its students to contribute to advancements in healthcare and medical science.",
    ],
    stat: { value: "", label: "Innovating Bio-Medicine. Transforming Human Lives." },
    pattern: "radial",
  },
  {
    slug: "agriculture",
    name: "School of Agriculture and Food Sciences",
    shortName: "School of Agriculture and Food Sciences",
    tagline: "LSAFS",
    route: "/academics/lsafs",
    description: [
      "The School of Agriculture is an academic institution that focuses on providing education and training in the field of agriculture. Its primary goal is to equip students with the knowledge and skills necessary for a successful career in various aspects of agriculture, including crop production, animal husbandry, agricultural management, agribusiness, and sustainable farming practices.",
      "The school offers a diverse range of programs and courses, catering to both undergraduate and postgraduate students. These programs cover disciplines such as agronomy, animal science, agricultural economics, horticulture, soil science, agricultural engineering, and agricultural extension.",
      "The curriculum of the School of Agriculture combines theoretical knowledge with practical hands-on experiences. Students have the opportunity to engage in fieldwork, laboratory work, farm management, and internships, giving them exposure to real-world agricultural practices. The faculty comprises experienced professionals and experts in the agricultural field, who bring their wisdom and industry connections to the classroom, ensuring a well-rounded education.",
      "In addition to academic pursuits, the school places emphasis on research and innovation in agriculture. It encourages students to undertake research projects that address key challenges and explore emerging trends in the agricultural sector. The school also collaborates with agricultural organizations, farming communities, and government agencies to facilitate practical research and contribute to the development of the agricultural industry.",
      "The School of Agriculture is dedicated to promoting sustainable and environmentally friendly practices within the agricultural sector. It emphasizes the importance of resource management, conservation, and the adoption of climate-smart techniques. Students are encouraged to develop a holistic understanding of agriculture, considering economic, social, and environmental aspects to ensure a balanced and sustainable approach.",
      "Overall, the School of Agriculture prepares students for diverse careers in the agricultural industry, be it as farmers, researchers, extension workers, or agribusiness professionals. It equips them with the knowledge, practical skills, and problem-solving abilities required to contribute to the global food security and sustainable agriculture goals.",
    ],
    stat: { value: "", label: "Rooted in Science. Growing the Future" },
    pattern: "wave",
  }
];

export function getSchoolBySlug(slug: string): School | undefined {
  return schools.find((s) => s.slug === slug);
}

const API_BASE = process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:4000";

export async function getSchools(): Promise<School[]> {
  try {
    const response = await fetch(`${API_BASE}/api/v1/schools`, { cache: "no-store" });
    if (!response.ok) return schools;

    const data: unknown = await response.json();
    return Array.isArray(data) && data.length > 0 ? data as School[] : schools;
  } catch {
    return schools;
  }
}
