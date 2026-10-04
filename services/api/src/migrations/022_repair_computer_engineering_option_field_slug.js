const canonicalSlug = "computer-engineering";
const existingSlug = "computer-ngineering";

exports.up = async function (knex) {
  const canonicalField = await knex("fields")
    .where({ slug: canonicalSlug })
    .first("id");
  const existingField = await knex("fields")
    .where({ slug: existingSlug })
    .first("id");

  if (!canonicalField && existingField) {
    await knex("options")
      .where({ fieldSlug: canonicalSlug })
      .update({ fieldSlug: existingSlug });
  }
};

exports.down = async function (knex) {
  const canonicalField = await knex("fields")
    .where({ slug: canonicalSlug })
    .first("id");
  const existingField = await knex("fields")
    .where({ slug: existingSlug })
    .first("id");

  if (!canonicalField && existingField) {
    await knex("options")
      .where({ fieldSlug: existingSlug })
      .update({ fieldSlug: canonicalSlug });
  }
};
