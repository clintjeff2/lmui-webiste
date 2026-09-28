import "dotenv/config";
// Must be imported before any router is created: it patches Express to
// forward rejected promises from async route handlers to the error
// middleware below, instead of them becoming silent unhandled rejections.
import "express-async-errors";
import cookieParser from "cookie-parser";
import cors from "cors";
import express from "express";
import {
  departmentInputSchema,
  eventInputSchema,
  facultyInputSchema,
  newsArticleInputSchema,
  programInputSchema,
} from "@lmui/shared";
import { makeContentRouter } from "./lib/contentRouter";
import { uploadsDir } from "./routes/media";
import admissionsRouter from "./routes/admissions";
import aboutRouter from "./routes/about";
import authRouter from "./routes/auth";
import mediaRouter from "./routes/media";
import pageBlocksRouter from "./routes/pageBlocks";
import schoolsRouter from "./routes/schools";
import siteSettingsRouter from "./routes/siteSettings";

const app = express();

const corsOrigins = (process.env.CORS_ORIGINS || "").split(",").map((s) => s.trim()).filter(Boolean);

app.use(cors({ origin: corsOrigins, credentials: true }));
app.use(express.json({ limit: "2mb" }));
app.use(cookieParser());
app.use("/uploads", express.static(uploadsDir));

app.get("/health", (_req, res) => res.json({ ok: true }));

app.use("/api/v1/auth", authRouter);
app.use("/api/v1/about", aboutRouter);
app.use("/api/v1/admissions", admissionsRouter);
app.use("/api/v1/media", mediaRouter);
app.use("/api/v1/settings", siteSettingsRouter);
app.use("/api/v1/pages", pageBlocksRouter);
app.use("/api/v1/schools", schoolsRouter);

app.use(
  "/api/v1/programs",
  makeContentRouter({
    table: "programs",
    schema: programInputSchema,
    filterableColumns: ["department_slug", "degree_level"],
  }),
);
app.use(
  "/api/v1/departments",
  makeContentRouter({ table: "departments", schema: departmentInputSchema }),
);
app.use(
  "/api/v1/faculty",
  makeContentRouter({
    table: "faculty",
    schema: facultyInputSchema,
    filterableColumns: ["department_slug"],
  }),
);
app.use(
  "/api/v1/news",
  makeContentRouter({ table: "news_articles", schema: newsArticleInputSchema }),
);
app.use("/api/v1/events", makeContentRouter({ table: "events", schema: eventInputSchema }));

app.use((err: any, _req: express.Request, res: express.Response, _next: express.NextFunction) => {
  console.error(err);
  res.status(500).json({ error: "Internal server error" });
});

const port = Number(process.env.PORT) || 4000;
app.listen(port, () => {
  console.log(`API listening on http://localhost:${port}`);
});
