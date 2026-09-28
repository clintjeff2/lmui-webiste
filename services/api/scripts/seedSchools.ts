import { schools } from "../../../apps/web/src/data/schools";
import { db } from "../src/db";

async function seedSchools() {
  const rows = schools.map((school) => ({
    schools_name: school.name,
    schools_short_name: school.tagline,
    school_slug: school.slug,
    school_route: school.route,
    school_tag_line: school.tagline,
    schools_description: JSON.stringify({
      description: Array.isArray(school.description) ? school.description : [school.description],
    }),
    schools_stat: JSON.stringify(school.stat),
    school_pattern: school.pattern,
  }));

  await db("landmark_schools")
    .insert(rows)
    .onConflict("schools_short_name")
    .merge();

  console.log(`Upserted ${rows.length} schools into landmark_schools.`);
}

seedSchools()
  .catch((error) => {
    console.error("Failed to seed landmark_schools:", error.code || error.message);
    process.exitCode = 1;
  })
  .finally(() => db.destroy());