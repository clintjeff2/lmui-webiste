const { createServer } = require("node:http");
const next = require("next");

const app = next({ dev: false });
const handle = app.getRequestHandler();
const port = Number(process.env.PORT) || 3000;

app.prepare().then(() => {
  createServer((req, res) => handle(req, res)).listen(port);
});
