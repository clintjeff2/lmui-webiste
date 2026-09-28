exports.up = async function (knex) {
  await knex.schema.alterTable("about_lmui_history", (table) => {
    table.string("history_discription", 800).notNullable().alter();
  });
};

exports.down = async function (knex) {
  await knex.schema.alterTable("about_lmui_history", (table) => {
    table.string("history_discription", 45).notNullable().alter();
  });
};
