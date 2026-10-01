export interface Testimonial {
  quote: string;
  name: string;
  detail: string;
  image: string;
}

export const testimonials: Testimonial[] = [
  // {
  //   quote:
  //     "I came in thinking I'd spend four years reading about how things get built. By sophomore year I had a badge for the machine shop and a project with my name on a patent filing.",
  //   name: "Amara Ibekwe",
  //   detail: "Mechanical Engineering, Class of 2026",
  //   image: "https://landmark.cm/static/media/amara-ibekwe-1e48a25f.png",
  // },
  // {
  //   quote:
  //     "The student investment fund is real money, real consequences. Nothing in a classroom prepared me for defending a position to alumni portfolio managers who've done this for thirty years.",
  //   name: "Diego Salamanca",
  //   detail: "MBA, Class of 2025",
  //   image: "https://landmark.cm/static/media/diego-salamanca-1e48a25f.png",
  // },
  // {
  //   quote:
  //     "My studio's transit proposal is getting built. Not graded — built. That's the difference between a design degree here and everywhere else I looked.",
  //   name: "Priya Natarajan",
  //   detail: "Urban Design, Class of 2026",
  //   image: "https://landmark.cm/static/media/priya-natarajan-1e48a25f.png",
  // },
  // {
  //   quote:
  //     "I was the first in my family to go to college, and the Bridge Scholars program didn't just cover tuition — it paired me with a faculty mentor who still checks in every semester.",
  //   name: "Jamal Thornton",
  //   detail: "Data Science, Class of 2025",
  //   image: "https://landmark.cm/static/media/jamal-thornton-1e48a25f.png",
  // },
  // {
  //   quote:
  //     "Arguing in front of the state supreme court as a third-year was terrifying and exactly the point. The clinic doesn't simulate practice. It is practice.",
  //   name: "Sofia Markarian",
  //   detail: "J.D. Candidate, Class of 2026",
  //   image: "https://landmark.cm/static/media/ernest-markarian-1e48a25f.png",
  // },
  // {
  //   quote:
  //     "Arguing in front of the state supreme court as a third-year was terrifying and exactly the point. The clinic doesn't simulate practice. It is practice.",
  //   name: "Sony Mudeka",
  //   detail: "J.D. Candidate, Class of 2026",
  //   image: "https://landmark.cm/static/media/sony-mudeka-1e48a25f.png",
  // },
  // {
  //   quote:
  //     "Arguing in front of the state supreme court as a third-year was terrifying and exactly the point. The clinic doesn't simulate practice. It is practice.",
  //   name: "Hellen Cynthia Mudeka",
  //   detail: "J.D. Candidate, Class of 2026",
  //   image: "https://landmark.cm/static/media/hellen-cynthia-mudeka-1e48a25f.png",
  // },
];

const API_BASE = process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:4000";

export async function getTestimonials(): Promise<Testimonial[]> {
  try {
    const response = await fetch(`${API_BASE}/api/v1/testimonials`, { cache: "no-store" });
    if (!response.ok) return testimonials;

    const data: unknown = await response.json();
    return Array.isArray(data) && data.length > 0 ? data as Testimonial[] : testimonials;
  } catch {
    return testimonials;
  }
}
