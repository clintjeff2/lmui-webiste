exports.up = function (knex) {
  return knex.schema.createTable("faculty", (table) => {
    table.increments("id").primary();
    table.string("slug", 191).notNullable().unique();
    table.string("full_name", 255).notNullable();
    table.string("title", 255).notNullable().defaultTo("");
    table.string("department_slug", 191).nullable().index();
    table.longtext("bio").notNullable().defaultTo("");
    table.string("photo_url", 1024).nullable();
    table.string("email", 255).nullable();
    table.enu("status", ["draft", "published"]).notNullable().defaultTo("draft");
    table.timestamps(true, true);
    table.index(["status"]);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("faculty");
};
