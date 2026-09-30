require("dotenv").config();

const base = {
  client: "mysql2",
  connection: {
    host: process.env.DB_HOST || "97.74.200.91",
    port: Number(process.env.DB_PORT) || 3306,
    user: process.env.DB_USER || "csmenorah",
    password: process.env.DB_PASSWORD || "9acIBm5xATIg7nIq",
    database: process.env.DB_NAME || "lmui_website",
  },
  migrations: {
    directory: "./src/migrations",
    tableName: "knex_migrations",
  },
  seeds: {
    directory: "./src/seeds",
  },
};

module.exports = {
  development: base,
  production: base,
};
