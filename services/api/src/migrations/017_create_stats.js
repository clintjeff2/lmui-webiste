const heroStats = [
  { value: 14200, suffix: "+", label: "Students enrolled" },
  { value: 150, suffix: "+", label: "Degree programs" },
  { value: 80, suffix: "%", label: "Employed within 6 months" },
  { value: 20, prefix: "XAF", suffix: "M", label: "Annual Scholarship Fund" },
];

const secondaryStats = [
  { value: 40, value_source: "static", label: "Countries represented" },
  {
    value: 32,
    value_source: "static",
    suffix: ":1",
    label: "Student-faculty ratio",
  },
  { value: null, value_source: "campus_count", label: "Buea City campuses" },
  {
    value: 2005,
    value_source: "years_since_founded",
    label: "Years of history",
  },
];

exports.up = async function (knex) {
  await knex.schema.createTable("hero_stats", (table) => {
    table.increments("id").primary();
    table.integer("value").notNullable();
    table.string("prefix", 32).nullable();
    table.string("suffix", 32).nullable();
    table.string("label", 255).notNullable();
    table.integer("position").notNullable().unique();
    table.timestamps(true, true);
  });

  await knex.schema.createTable("secondary_stats", (table) => {
    table.increments("id").primary();
    table.integer("value").nullable();
    table.string("value_source", 32).notNullable().defaultTo("static");
    table.string("prefix", 32).nullable();
    table.string("suffix", 32).nullable();
    table.string("label", 255).notNullable();
    table.integer("position").notNullable().unique();
    table.timestamps(true, true);
  });

  await knex("hero_stats").insert(
    heroStats.map((stat, position) => ({ ...stat, position })),
  );
  await knex("secondary_stats").insert(
    secondaryStats.map((stat, position) => ({ ...stat, position })),
  );
};

exports.down = async function (knex) {
  await knex.schema.dropTableIfExists("secondary_stats");
  await knex.schema.dropTableIfExists("hero_stats");
};
