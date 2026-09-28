exports.up = async function (knex) {
  await knex.schema.alterTable("about_staff", (table) => {
    table.string("staff_title", 255).notNullable().alter();
  });
};

exports.down = async function (knex) {
  await knex.schema.alterTable("about_staff", (table) => {
    table.string("staff_title", 45).notNullable().alter();
  });
};
