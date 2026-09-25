exports.up = function (knex) {
  return knex.schema.createTable("media", (table) => {
    table.increments("id").primary();
    table.string("url", 1024).notNullable();
    table.string("filename", 255).notNullable();
    table.string("mime_type", 127).notNullable();
    table.integer("size_bytes").unsigned().notNullable().defaultTo(0);
    table
      .integer("uploaded_by")
      .unsigned()
      .nullable()
      .references("id")
      .inTable("users")
      .onDelete("SET NULL");
    table.timestamps(true, true);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("media");
};
