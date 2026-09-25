const bcrypt = require("bcryptjs");

exports.seed = async function (knex) {
  await knex("page_revisions").del();
  await knex("page_blocks").del();
  await knex("events").del();
  await knex("news_articles").del();
  await knex("faculty").del();
  await knex("programs").del();
  await knex("departments").del();
  await knex("site_settings").del();
  await knex("users").del();

  const passwordHash = await bcrypt.hash("ChangeMe123!", 10);
  const [adminId] = await knex("users").insert({
    email: "admin@landmark.cm",
    password_hash: passwordHash,
    full_name: "Landmark Admin",
    role: "admin",
  });

  await knex("departments").insert([
    {
      slug: "engineering",
      name: "School of Engineering",
      summary: "Engineering, computer science, and applied sciences.",
      body: "<p>The School of Engineering trains students across mechanical, electrical, civil, and computer engineering.</p>",
      status: "published",
    },
    {
      slug: "business",
      name: "School of Business",
      summary: "Business administration, finance, and management.",
      body: "<p>The School of Business offers undergraduate and graduate programs in management and finance.</p>",
      status: "published",
    },
    {
      slug: "arts-sciences",
      name: "College of Arts & Sciences",
      summary: "Humanities, natural sciences, and social sciences.",
      body: "<p>The College of Arts & Sciences is the university's largest academic division.</p>",
      status: "published",
    },
  ]);

  await knex("programs").insert([
    {
      slug: "computer-science-bs",
      name: "Computer Science, B.S.",
      degree_level: "undergraduate",
      department_slug: "engineering",
      summary: "A rigorous foundation in algorithms, systems, and software engineering.",
      body: "<p>Full program description goes here.</p>",
      status: "published",
    },
    {
      slug: "mba",
      name: "Master of Business Administration",
      degree_level: "graduate",
      department_slug: "business",
      summary: "A two-year MBA with concentrations in finance, strategy, and entrepreneurship.",
      body: "<p>Full program description goes here.</p>",
      status: "published",
    },
    {
      slug: "psychology-ba",
      name: "Psychology, B.A.",
      degree_level: "undergraduate",
      department_slug: "arts-sciences",
      summary: "Study of the mind, behavior, and mental processes.",
      body: "<p>Full program description goes here.</p>",
      status: "published",
    },
  ]);

  await knex("news_articles").insert([
    {
      slug: "new-engineering-building-opens",
      title: "New Engineering Building Opens Its Doors",
      summary: "A state-of-the-art facility for hands-on learning and research.",
      body: "<p>Full article body goes here.</p>",
      published_at: knex.fn.now(),
      status: "published",
    },
    {
      slug: "record-enrollment-fall",
      title: "Landmark Metropolitan Sees Record Fall Enrollment",
      summary: "The incoming class is the largest and most diverse in the university's history.",
      body: "<p>Full article body goes here.</p>",
      published_at: knex.fn.now(),
      status: "published",
    },
  ]);

  await knex("events").insert([
    {
      slug: "fall-open-house",
      title: "Fall Open House",
      summary: "Tour campus, meet faculty, and learn about admissions.",
      body: "<p>Full event details go here.</p>",
      start_at: knex.fn.now(),
      location: "Main Campus",
      status: "published",
    },
  ]);

  await knex("site_settings").insert({
    key: "primary_nav",
    value: JSON.stringify([
      { label: "About", href: "/about" },
      { label: "Academics", href: "/programs" },
      { label: "Admissions", href: "/admissions" },
      { label: "News", href: "/news" },
      { label: "Events", href: "/events" },
    ]),
  });

  const draftBlocks = [
    {
      page: "home",
      block_type: "hero",
      position: 0,
      config: JSON.stringify({
        heading: "Advancing the Frontier",
        subheading: "Landmark Metropolitan University Institute — discovery, access, and impact.",
        backgroundImageUrl: "",
        ctaLabel: "Apply Now",
        ctaHref: "/admissions",
      }),
      created_by: adminId,
    },
    {
      page: "home",
      block_type: "stat-strip",
      position: 1,
      config: JSON.stringify({
        heading: "",
        items: [
          { value: "12,000+", label: "Students Enrolled" },
          { value: "150+", label: "Degree Programs" },
          { value: "$200M", label: "Annual Research Funding" },
        ],
      }),
      created_by: adminId,
    },
    {
      page: "home",
      block_type: "program-spotlight",
      position: 2,
      config: JSON.stringify({
        heading: "Explore Our Programs",
        blurb: "A sample of what students study at Landmark Metropolitan.",
        programSlugs: "computer-science-bs,mba,psychology-ba",
      }),
      created_by: adminId,
    },
    {
      page: "home",
      block_type: "news-grid",
      position: 3,
      config: JSON.stringify({
        heading: "Latest News",
        sourceMode: "latest",
        limit: 3,
        manualSlugs: "",
      }),
      created_by: adminId,
    },
    {
      page: "home",
      block_type: "cta-banner",
      position: 4,
      config: JSON.stringify({
        heading: "Ready to Join Landmark Metropolitan?",
        body: "Applications for the next incoming class are open now.",
        ctaLabel: "Start Your Application",
        ctaHref: "/admissions",
        style: "primary",
      }),
      created_by: adminId,
    },
  ];

  await knex("page_blocks").insert(draftBlocks);

  const snapshot = draftBlocks.map((b, i) => ({
    blockType: b.block_type,
    position: i,
    config: JSON.parse(b.config),
  }));

  await knex("page_revisions").insert({
    page: "home",
    snapshot: JSON.stringify(snapshot),
    published_by: adminId,
  });

  console.log("Seed complete. Admin login: admin@landmark.cm / ChangeMe123!");
};
