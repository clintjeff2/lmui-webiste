exports.up = async function (knex) {
  if (!(await knex.schema.hasTable("fields"))) return;
  if (await knex.schema.hasColumn("fields", "field_image")) return;

  await knex.schema.alterTable("fields", (table) => {
    table.string("field_image", 1024).nullable();
  });
};

exports.down = async function (knex) {
  if (!(await knex.schema.hasTable("fields"))) return;
  if (!(await knex.schema.hasColumn("fields", "field_image"))) return;

  await knex.schema.alterTable("fields", (table) => {
    table.dropColumn("field_image");
  });
};
