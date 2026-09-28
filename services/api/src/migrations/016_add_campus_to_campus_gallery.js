exports.up = async function (knex) {
  await knex.schema.alterTable("campus_gallery", (table) => {
    table.string("campus", 45).nullable();
  });
};

exports.down = async function (knex) {
  await knex.schema.alterTable("campus_gallery", (table) => {
    table.dropColumn("campus");
  });
};
