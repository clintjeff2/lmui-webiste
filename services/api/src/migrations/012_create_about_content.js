exports.up = async function (knex) {
  await knex.schema.createTable("about_pillars", (table) => {
    table.increments("id").primary();
    table.string("title", 255).notNullable();
    table.text("description").notNullable();
    table.integer("position").notNullable().defaultTo(0).index();
  });

  await knex.schema.createTable("about_leadership", (table) => {
    table.increments("id").primary();
    table.string("name", 255).notNullable();
    table.string("title", 255).notNullable();
    table.text("bio").notNullable();
    table.integer("position").notNullable().defaultTo(0).index();
  });

  await knex.schema.createTable("about_milestones", (table) => {
    table.increments("id").primary();
    table.string("year", 4).notNullable();
    table.text("description").notNullable();
    table.integer("position").notNullable().defaultTo(0).index();
  });

  await knex.schema.createTable("about_campus_gallery", (table) => {
    table.increments("id").primary();
    table.string("label", 255).notNullable();
    table.enu("size", ["lg", "md", "sm"]).notNullable();
    table
      .enu("pattern", ["grid", "diagonal", "radial", "wave", "concentric"])
      .notNullable();
    table.integer("position").notNullable().defaultTo(0).index();
  });
};

exports.down = async function (knex) {
  await knex.schema.dropTableIfExists("about_campus_gallery");
  await knex.schema.dropTableIfExists("about_milestones");
  await knex.schema.dropTableIfExists("about_leadership");
  await knex.schema.dropTableIfExists("about_pillars");
};
