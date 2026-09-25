import { z } from "zod";

/**
 * Shapes for the fixed-structure content types. Unlike homepage blocks,
 * these never change shape from the admin UI — only their rows change.
 * Interior pages (Programs, News, Events, Departments, Faculty) render a
 * hard-coded React template per type and just pour these rows into it.
 *
 * Each type has a read interface (what the API returns) and an *_InputSchema
 * (what the API accepts on create/update) so the admin app and the API can
 * share one source of truth for validation.
 */

const statusEnum = z.enum(["draft", "published"]);

export interface Program {
  id: number;
  slug: string;
  name: string;
  degreeLevel: "undergraduate" | "graduate" | "certificate";
  departmentSlug: string | null;
  summary: string;
  body: string;
  heroImageUrl: string | null;
  status: "draft" | "published";
  updatedAt: string;
  createdAt: string;
}

export const programInputSchema = z.object({
  slug: z.string().min(1),
  name: z.string().min(1),
  degreeLevel: z.enum(["undergraduate", "graduate", "certificate"]),
  departmentSlug: z.string().nullable().optional(),
  summary: z.string().optional().default(""),
  body: z.string().optional().default(""),
  heroImageUrl: z.string().nullable().optional(),
  status: statusEnum.optional().default("draft"),
});

export interface Department {
  id: number;
  slug: string;
  name: string;
  summary: string;
  body: string;
  heroImageUrl: string | null;
  status: "draft" | "published";
  updatedAt: string;
  createdAt: string;
}

export const departmentInputSchema = z.object({
  slug: z.string().min(1),
  name: z.string().min(1),
  summary: z.string().optional().default(""),
  body: z.string().optional().default(""),
  heroImageUrl: z.string().nullable().optional(),
  status: statusEnum.optional().default("draft"),
});

export interface FacultyMember {
  id: number;
  slug: string;
  fullName: string;
  title: string;
  departmentSlug: string | null;
  bio: string;
  photoUrl: string | null;
  email: string | null;
  status: "draft" | "published";
  updatedAt: string;
  createdAt: string;
}

export const facultyInputSchema = z.object({
  slug: z.string().min(1),
  fullName: z.string().min(1),
  title: z.string().optional().default(""),
  departmentSlug: z.string().nullable().optional(),
  bio: z.string().optional().default(""),
  photoUrl: z.string().nullable().optional(),
  email: z.string().nullable().optional(),
  status: statusEnum.optional().default("draft"),
});

export interface NewsArticle {
  id: number;
  slug: string;
  title: string;
  summary: string;
  body: string;
  heroImageUrl: string | null;
  publishedAt: string | null;
  status: "draft" | "published";
  updatedAt: string;
  createdAt: string;
}

export const newsArticleInputSchema = z.object({
  slug: z.string().min(1),
  title: z.string().min(1),
  summary: z.string().optional().default(""),
  body: z.string().optional().default(""),
  heroImageUrl: z.string().nullable().optional(),
  publishedAt: z.string().nullable().optional(),
  status: statusEnum.optional().default("draft"),
});

export interface EventItem {
  id: number;
  slug: string;
  title: string;
  summary: string;
  body: string;
  startAt: string;
  endAt: string | null;
  location: string;
  heroImageUrl: string | null;
  status: "draft" | "published";
  updatedAt: string;
  createdAt: string;
}

export const eventInputSchema = z.object({
  slug: z.string().min(1),
  title: z.string().min(1),
  summary: z.string().optional().default(""),
  body: z.string().optional().default(""),
  startAt: z.string().min(1),
  endAt: z.string().nullable().optional(),
  location: z.string().optional().default(""),
  heroImageUrl: z.string().nullable().optional(),
  status: statusEnum.optional().default("draft"),
});

export interface SiteUser {
  id: number;
  email: string;
  fullName: string;
  role: "admin" | "editor";
  createdAt: string;
}
