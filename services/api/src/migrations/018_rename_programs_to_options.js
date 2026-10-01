function parseJson(value) {
  return typeof value === "string" ? JSON.parse(value) : value;
}

function transformConfig(config, forward) {
  if (typeof config !== "object" || config === null || Array.isArray(config)) {
    return config;
  }

  const oldKey = forward ? "programSlugs" : "optionSlugs";
  const newKey = forward ? "optionSlugs" : "programSlugs";
  const transformed = { ...config };
  if (Object.prototype.hasOwnProperty.call(transformed, oldKey)) {
    transformed[newKey] = transformed[oldKey];
    delete transformed[oldKey];
  }
  if (
    transformed.heading ===
    (forward ? "Explore Our Programs" : "Explore Our Options")
  ) {
    transformed.heading = forward
      ? "Explore Our Options"
      : "Explore Our Programs";
  }
  if (Array.isArray(transformed.items)) {
    const fromKey = forward ? "program" : "option";
    const toKey = forward ? "option" : "program";
    transformed.items = transformed.items.map((item) => {
      if (typeof item !== "object" || item === null || Array.isArray(item))
        return item;
      const transformedItem = { ...item };
      if (Object.prototype.hasOwnProperty.call(transformedItem, fromKey)) {
        transformedItem[toKey] = transformedItem[fromKey];
        delete transformedItem[fromKey];
      }
      return transformedItem;
    });
  }
  return transformed;
}

function transformBlock(block, forward) {
  if (typeof block !== "object" || block === null || Array.isArray(block))
    return block;

  const fromType = forward ? "program-spotlight" : "option-spotlight";
  const toType = forward ? "option-spotlight" : "program-spotlight";
  const transformed = { ...block };
  if (transformed.blockType === fromType) transformed.blockType = toType;
  if (transformed.block_type === fromType) transformed.block_type = toType;
  if (transformed.config)
    transformed.config = transformConfig(transformed.config, forward);
  return transformed;
}

async function migrateBlockContent(knex, forward) {
  if (await knex.schema.hasTable("page_blocks")) {
    const rows = await knex("page_blocks").select("id", "block_type", "config");
    for (const row of rows) {
      const config = transformConfig(parseJson(row.config), forward);
      const blockType =
        row.block_type === (forward ? "program-spotlight" : "option-spotlight")
          ? forward
            ? "option-spotlight"
            : "program-spotlight"
          : row.block_type;
      await knex("page_blocks")
        .where({ id: row.id })
        .update({
          block_type: blockType,
          config: JSON.stringify(config),
        });
    }
  }

  if (await knex.schema.hasTable("page_revisions")) {
    const rows = await knex("page_revisions").select("id", "snapshot");
    for (const row of rows) {
      const snapshot = parseJson(row.snapshot);
      if (Array.isArray(snapshot)) {
        await knex("page_revisions")
          .where({ id: row.id })
          .update({
            snapshot: JSON.stringify(
              snapshot.map((block) => transformBlock(block, forward)),
            ),
          });
      }
    }
  }
}

async function migratePrimaryNavigation(knex, forward) {
  if (!(await knex.schema.hasTable("site_settings"))) return;

  const setting = await knex("site_settings")
    .where({ key: "primary_nav" })
    .first("value");
  const navigation = setting ? parseJson(setting.value) : null;
  if (!Array.isArray(navigation)) return;

  const fromPath = forward ? "/programs" : "/academics";
  const toPath = forward ? "/academics" : "/programs";
  const updatedNavigation = navigation.map((item) => {
    if (typeof item !== "object" || item === null || Array.isArray(item))
      return item;
    return item.href === fromPath ? { ...item, href: toPath } : item;
  });

  await knex("site_settings")
    .where({ key: "primary_nav" })
    .update({ value: JSON.stringify(updatedNavigation) });
}

exports.up = async function (knex) {
  const hasPrograms = await knex.schema.hasTable("programs");
  const hasOptions = await knex.schema.hasTable("options");
  if (hasPrograms && !hasOptions) {
    await knex.schema.renameTable("programs", "options");
  } else if (!hasOptions) {
    throw new Error("Neither programs nor options table exists");
  }

  await migrateBlockContent(knex, true);
  await migratePrimaryNavigation(knex, true);
  if (await knex.schema.hasTable("hero_stats")) {
    await knex("hero_stats")
      .where({ label: "Degree programs" })
      .update({ label: "Degree options" });
  }
};

exports.down = async function (knex) {
  const hasPrograms = await knex.schema.hasTable("programs");
  const hasOptions = await knex.schema.hasTable("options");
  if (hasOptions && !hasPrograms) {
    await knex.schema.renameTable("options", "programs");
  }

  await migrateBlockContent(knex, false);
  await migratePrimaryNavigation(knex, false);
  if (await knex.schema.hasTable("hero_stats")) {
    await knex("hero_stats")
      .where({ label: "Degree options" })
      .update({ label: "Degree programs" });
  }
};
