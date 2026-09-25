// Small key/value store for global, rarely-structural site data: primary
// nav, footer links, contact info, social links. Edited via the admin UI,
// read by the Next.js layout on every page.
exports.up = function (knex) {
  return knex.schema.createTable("site_settings", (table) => {
    table.increments("id").primary();
    table.string("key", 191).notNullable().unique();
    table.json("value").notNullable();
    table.timestamps(true, true);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("site_settings");
};
