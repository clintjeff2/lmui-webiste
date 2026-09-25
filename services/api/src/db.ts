import knexLib, { Knex } from "knex";

// eslint-disable-next-line @typescript-eslint/no-var-requires
const knexConfig = require("../knexfile");

const env = process.env.NODE_ENV || "development";
const config = knexConfig[env];

export const db: Knex = knexLib(config);
