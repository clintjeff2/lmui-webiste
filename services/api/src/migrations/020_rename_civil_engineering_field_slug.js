const oldSlug = "Civil Engineering";
const newSlug = "civil-engineering-construction";

exports.up = async function (knex) {
  const hasOldSlug = await knex("fields").where({ slug: oldSlug }).first("id");
  const hasNewSlug = await knex("fields").where({ slug: newSlug }).first("id");

  if (hasOldSlug && !hasNewSlug) {
    await knex("fields").where({ id: hasOldSlug.id }).update({ slug: newSlug });
  }
};

exports.down = async function (knex) {
  const hasOldSlug = await knex("fields").where({ slug: oldSlug }).first("id");
  const hasNewSlug = await knex("fields").where({ slug: newSlug }).first("id");

  if (hasNewSlug && !hasOldSlug) {
    await knex("fields").where({ id: hasNewSlug.id }).update({ slug: oldSlug });
  }
};
