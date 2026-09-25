exports.up = function (knex) {
  return knex.schema.createTable("programs", (table) => {
    table.increments("id").primary();
    table.string("slug", 191).notNullable().unique();
    table.string("name", 255).notNullable();
    table
      .enu("degree_level", ["undergraduate", "graduate", "certificate"])
      .notNullable()
      .defaultTo("undergraduate");
    table.string("department_slug", 191).nullable().index();
    table.text("summary").notNullable().defaultTo("");
    table.longtext("body").notNullable().defaultTo("");
    table.string("hero_image_url", 1024).nullable();
    table.enu("status", ["draft", "published"]).notNullable().defaultTo("draft");
    table.timestamps(true, true);
    table.index(["status"]);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("programs");
};
