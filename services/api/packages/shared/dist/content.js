"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.eventInputSchema = exports.newsArticleInputSchema = exports.facultyInputSchema = exports.departmentInputSchema = exports.optionInputSchema = void 0;
const zod_1 = require("zod");
/**
 * Shapes for the fixed-structure content types. Unlike homepage blocks,
 * these never change shape from the admin UI — only their rows change.
 * Interior pages (Options, News, Events, Departments, Faculty) render a
 * hard-coded React template per type and just pour these rows into it.
 *
 * Each type has a read interface (what the API returns) and an *_InputSchema
 * (what the API accepts on create/update) so the admin app and the API can
 * share one source of truth for validation.
 */
const statusEnum = zod_1.z.enum(["draft", "published"]);
exports.optionInputSchema = zod_1.z.object({
    slug: zod_1.z.string().min(1),
    name: zod_1.z.string().min(1),
    degreeLevel: zod_1.z.enum(["undergraduate", "graduate", "doctoral", "certificate"]),
    departmentSlug: zod_1.z.string().nullable().optional(),
    schoolSlug: zod_1.z.string().nullable().optional(),
    duration: zod_1.z.string().optional().default(""),
    summary: zod_1.z.string().optional().default(""),
    body: zod_1.z.string().optional().default(""),
    highlights: zod_1.z.array(zod_1.z.string()).optional().default([]),
    outcomes: zod_1.z.array(zod_1.z.string()).optional().default([]),
    heroImageUrl: zod_1.z.string().nullable().optional(),
    status: statusEnum.optional().default("draft"),
});
exports.departmentInputSchema = zod_1.z.object({
    slug: zod_1.z.string().min(1),
    name: zod_1.z.string().min(1),
    summary: zod_1.z.string().optional().default(""),
    body: zod_1.z.string().optional().default(""),
    heroImageUrl: zod_1.z.string().nullable().optional(),
    status: statusEnum.optional().default("draft"),
});
exports.facultyInputSchema = zod_1.z.object({
    slug: zod_1.z.string().min(1),
    fullName: zod_1.z.string().min(1),
    title: zod_1.z.string().optional().default(""),
    departmentSlug: zod_1.z.string().nullable().optional(),
    bio: zod_1.z.string().optional().default(""),
    photoUrl: zod_1.z.string().nullable().optional(),
    email: zod_1.z.string().nullable().optional(),
    status: statusEnum.optional().default("draft"),
});
exports.newsArticleInputSchema = zod_1.z.object({
    slug: zod_1.z.string().min(1),
    title: zod_1.z.string().min(1),
    summary: zod_1.z.string().optional().default(""),
    body: zod_1.z.string().optional().default(""),
    heroImageUrl: zod_1.z.string().nullable().optional(),
    publishedAt: zod_1.z.string().nullable().optional(),
    status: statusEnum.optional().default("draft"),
});
exports.eventInputSchema = zod_1.z.object({
    slug: zod_1.z.string().min(1),
    title: zod_1.z.string().min(1),
    summary: zod_1.z.string().optional().default(""),
    body: zod_1.z.string().optional().default(""),
    startAt: zod_1.z.string().min(1),
    endAt: zod_1.z.string().nullable().optional(),
    location: zod_1.z.string().optional().default(""),
    heroImageUrl: zod_1.z.string().nullable().optional(),
    status: statusEnum.optional().default("draft"),
});
