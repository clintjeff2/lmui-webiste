// page_revisions is an append-only publish log. Each row is a full,
// self-contained snapshot of a page's block layout at the moment it went
// live. The public site always reads the *latest* row for a page. Rolling
// back is just "load an older snapshot back into the draft table."
exports.up = function (knex) {
  return knex.schema.createTable("page_revisions", (table) => {
    table.increments("id").primary();
    table.string("page", 64).notNullable().defaultTo("home");
    table.json("snapshot").notNullable();
    table
      .integer("published_by")
      .unsigned()
      .nullable()
      .references("id")
      .inTable("users")
      .onDelete("SET NULL");
    table.timestamp("published_at").notNullable().defaultTo(knex.fn.now());
    table.index(["page", "published_at"]);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("page_revisions");
};
