exports.up = async function (knex) {
  await knex.schema.alterTable("about_staff", (table) => {
    table.string("staff_grade", 100).nullable();
  });
};

exports.down = async function (knex) {
  await knex.schema.alterTable("about_staff", (table) => {
    table.dropColumn("staff_grade");
  });
};
