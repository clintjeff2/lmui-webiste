"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
// Must be imported before any router is created: it patches Express to
// forward rejected promises from async route handlers to the error
// middleware below, instead of them becoming silent unhandled rejections.
require("express-async-errors");
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const shared_1 = require("@lmui/shared");
const contentRouter_1 = require("./lib/contentRouter");
const media_1 = require("./routes/media");
const admissions_1 = __importDefault(require("./routes/admissions"));
const about_1 = __importDefault(require("./routes/about"));
const academicCalendar_1 = __importDefault(require("./routes/academicCalendar"));
const auth_1 = __importDefault(require("./routes/auth"));
const fields_1 = __importDefault(require("./routes/fields"));
const media_2 = __importDefault(require("./routes/media"));
const news_1 = __importDefault(require("./routes/news"));
const pageBlocks_1 = __importDefault(require("./routes/pageBlocks"));
const options_1 = __importDefault(require("./routes/options"));
const schools_1 = __importDefault(require("./routes/schools"));
const stats_1 = __importDefault(require("./routes/stats"));
const siteSettings_1 = __importDefault(require("./routes/siteSettings"));
const testimonials_1 = __importDefault(require("./routes/testimonials"));
const app = (0, express_1.default)();
const corsOrigins = (process.env.CORS_ORIGINS || "").split(",").map((s) => s.trim()).filter(Boolean);
app.use((0, cors_1.default)({ origin: corsOrigins, credentials: true }));
app.use(express_1.default.json({ limit: "2mb" }));
app.use((0, cookie_parser_1.default)());
app.use("/uploads", express_1.default.static(media_1.uploadsDir));
app.get("/health", (_req, res) => res.json({ ok: true }));
app.use("/api/v1/auth", auth_1.default);
app.use("/api/v1/about", about_1.default);
app.use("/api/v1/academic-calendar", academicCalendar_1.default);
app.use("/api/v1/fields", fields_1.default);
app.use("/api/v1/admissions", admissions_1.default);
app.use("/api/v1/media", media_2.default);
app.use("/api/v1/settings", siteSettings_1.default);
app.use("/api/v1/pages", pageBlocks_1.default);
app.use("/api/v1/schools", schools_1.default);
app.use("/api/v1/stats", stats_1.default);
app.use("/api/v1/testimonials", testimonials_1.default);
app.use("/api/v1/news", news_1.default);
const optionsContentRouter = (0, contentRouter_1.makeContentRouter)({
    table: "options",
    schema: shared_1.optionInputSchema,
    filterableColumns: ["department_slug", "degree_level"],
});
app.use("/api/v1/options", options_1.default);
app.use("/api/v1/options", optionsContentRouter);
app.use("/api/v1/programs", options_1.default);
app.use("/api/v1/programs", optionsContentRouter);
app.use("/api/v1/departments", (0, contentRouter_1.makeContentRouter)({ table: "departments", schema: shared_1.departmentInputSchema }));
app.use("/api/v1/faculty", (0, contentRouter_1.makeContentRouter)({
    table: "faculty",
    schema: shared_1.facultyInputSchema,
    filterableColumns: ["department_slug"],
}));
app.use("/api/v1/news", (0, contentRouter_1.makeContentRouter)({ table: "news_articles", schema: shared_1.newsArticleInputSchema }));
app.use("/api/v1/events", (0, contentRouter_1.makeContentRouter)({ table: "events", schema: shared_1.eventInputSchema }));
app.use((err, _req, res, _next) => {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
});
const port = Number(process.env.PORT) || 4000;
app.listen(port, () => {
    console.log(`API listening on http://localhost:${port}`);
});
