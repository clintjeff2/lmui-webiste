// page_blocks is the DRAFT / working set for a given page's block layout.
// Admins add/remove/reorder/edit rows here freely; none of it is public
// until a row is copied into page_revisions by a publish action.
exports.up = function (knex) {
  return knex.schema.createTable("page_blocks", (table) => {
    table.increments("id").primary();
    table.string("page", 64).notNullable().defaultTo("home");
    table.string("block_type", 64).notNullable();
    table.integer("position").notNullable().defaultTo(0);
    table.json("config").notNullable();
    table
      .integer("created_by")
      .unsigned()
      .nullable()
      .references("id")
      .inTable("users")
      .onDelete("SET NULL");
    table.timestamps(true, true);
    table.index(["page", "position"]);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("page_blocks");
};
