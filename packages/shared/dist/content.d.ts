import { z } from "zod";
export interface Program {
    id: number;
    slug: string;
    name: string;
    degreeLevel: "undergraduate" | "graduate" | "doctoral" | "certificate";
    departmentSlug: string | null;
    schoolSlug: string | null;
    duration: string;
    summary: string;
    body: string;
    highlights: string[];
    outcomes: string[];
    heroImageUrl: string | null;
    status: "draft" | "published";
    updatedAt: string;
    createdAt: string;
}
export declare const programInputSchema: z.ZodObject<{
    slug: z.ZodString;
    name: z.ZodString;
    degreeLevel: z.ZodEnum<["undergraduate", "graduate", "doctoral", "certificate"]>;
    departmentSlug: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    schoolSlug: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    duration: z.ZodDefault<z.ZodOptional<z.ZodString>>;
    summary: z.ZodDefault<z.ZodOptional<z.ZodString>>;
    body: z.ZodDefault<z.ZodOptional<z.ZodString>>;
    highlights: z.ZodDefault<z.ZodOptional<z.ZodArray<z.ZodString, "many">>>;
    outcomes: z.ZodDefault<z.ZodOptional<z.ZodArray<z.ZodString, "many">>>;
    heroImageUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    status: z.ZodDefault<z.ZodOptional<z.ZodEnum<["draft", "published"]>>>;
}, "strip", z.ZodTypeAny, {
    status: "draft" | "published";
    body: string;
    name: string;
    slug: string;
    degreeLevel: "undergraduate" | "graduate" | "doctoral" | "certificate";
    duration: string;
    summary: string;
    highlights: string[];
    outcomes: string[];
    departmentSlug?: string | null | undefined;
    schoolSlug?: string | null | undefined;
    heroImageUrl?: string | null | undefined;
}, {
    name: string;
    slug: string;
    degreeLevel: "undergraduate" | "graduate" | "doctoral" | "certificate";
    status?: "draft" | "published" | undefined;
    body?: string | undefined;
    departmentSlug?: string | null | undefined;
    schoolSlug?: string | null | undefined;
    duration?: string | undefined;
    summary?: string | undefined;
    highlights?: string[] | undefined;
    outcomes?: string[] | undefined;
    heroImageUrl?: string | null | undefined;
}>;
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
export declare const departmentInputSchema: z.ZodObject<{
    slug: z.ZodString;
    name: z.ZodString;
    summary: z.ZodDefault<z.ZodOptional<z.ZodString>>;
    body: z.ZodDefault<z.ZodOptional<z.ZodString>>;
    heroImageUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    status: z.ZodDefault<z.ZodOptional<z.ZodEnum<["draft", "published"]>>>;
}, "strip", z.ZodTypeAny, {
    status: "draft" | "published";
    body: string;
    name: string;
    slug: string;
    summary: string;
    heroImageUrl?: string | null | undefined;
}, {
    name: string;
    slug: string;
    status?: "draft" | "published" | undefined;
    body?: string | undefined;
    summary?: string | undefined;
    heroImageUrl?: string | null | undefined;
}>;
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
export declare const facultyInputSchema: z.ZodObject<{
    slug: z.ZodString;
    fullName: z.ZodString;
    title: z.ZodDefault<z.ZodOptional<z.ZodString>>;
    departmentSlug: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    bio: z.ZodDefault<z.ZodOptional<z.ZodString>>;
    photoUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    email: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    status: z.ZodDefault<z.ZodOptional<z.ZodEnum<["draft", "published"]>>>;
}, "strip", z.ZodTypeAny, {
    status: "draft" | "published";
    slug: string;
    fullName: string;
    title: string;
    bio: string;
    departmentSlug?: string | null | undefined;
    photoUrl?: string | null | undefined;
    email?: string | null | undefined;
}, {
    slug: string;
    fullName: string;
    status?: "draft" | "published" | undefined;
    departmentSlug?: string | null | undefined;
    title?: string | undefined;
    bio?: string | undefined;
    photoUrl?: string | null | undefined;
    email?: string | null | undefined;
}>;
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
export declare const newsArticleInputSchema: z.ZodObject<{
    slug: z.ZodString;
    title: z.ZodString;
    summary: z.ZodDefault<z.ZodOptional<z.ZodString>>;
    body: z.ZodDefault<z.ZodOptional<z.ZodString>>;
    heroImageUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    publishedAt: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    status: z.ZodDefault<z.ZodOptional<z.ZodEnum<["draft", "published"]>>>;
}, "strip", z.ZodTypeAny, {
    status: "draft" | "published";
    body: string;
    slug: string;
    summary: string;
    title: string;
    heroImageUrl?: string | null | undefined;
    publishedAt?: string | null | undefined;
}, {
    slug: string;
    title: string;
    status?: "draft" | "published" | undefined;
    body?: string | undefined;
    summary?: string | undefined;
    heroImageUrl?: string | null | undefined;
    publishedAt?: string | null | undefined;
}>;
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
export declare const eventInputSchema: z.ZodObject<{
    slug: z.ZodString;
    title: z.ZodString;
    summary: z.ZodDefault<z.ZodOptional<z.ZodString>>;
    body: z.ZodDefault<z.ZodOptional<z.ZodString>>;
    startAt: z.ZodString;
    endAt: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    location: z.ZodDefault<z.ZodOptional<z.ZodString>>;
    heroImageUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    status: z.ZodDefault<z.ZodOptional<z.ZodEnum<["draft", "published"]>>>;
}, "strip", z.ZodTypeAny, {
    status: "draft" | "published";
    body: string;
    slug: string;
    summary: string;
    title: string;
    startAt: string;
    location: string;
    heroImageUrl?: string | null | undefined;
    endAt?: string | null | undefined;
}, {
    slug: string;
    title: string;
    startAt: string;
    status?: "draft" | "published" | undefined;
    body?: string | undefined;
    summary?: string | undefined;
    heroImageUrl?: string | null | undefined;
    endAt?: string | null | undefined;
    location?: string | undefined;
}>;
export interface SiteUser {
    id: number;
    email: string;
    fullName: string;
    role: "admin" | "editor";
    createdAt: string;
}
