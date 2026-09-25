exports.up = function (knex) {
  return knex.schema.createTable("events", (table) => {
    table.increments("id").primary();
    table.string("slug", 191).notNullable().unique();
    table.string("title", 255).notNullable();
    table.text("summary").notNullable().defaultTo("");
    table.longtext("body").notNullable().defaultTo("");
    table.datetime("start_at").notNullable();
    table.datetime("end_at").nullable();
    table.string("location", 255).notNullable().defaultTo("");
    table.string("hero_image_url", 1024).nullable();
    table.enu("status", ["draft", "published"]).notNullable().defaultTo("draft");
    table.timestamps(true, true);
    table.index(["status", "start_at"]);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("events");
};
