exports.up = function (knex) {
  return knex.schema.createTable("news_articles", (table) => {
    table.increments("id").primary();
    table.string("slug", 191).notNullable().unique();
    table.string("title", 255).notNullable();
    table.text("summary").notNullable().defaultTo("");
    table.longtext("body").notNullable().defaultTo("");
    table.string("hero_image_url", 1024).nullable();
    table.datetime("published_at").nullable();
    table.enu("status", ["draft", "published"]).notNullable().defaultTo("draft");
    table.timestamps(true, true);
    table.index(["status", "published_at"]);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("news_articles");
};
