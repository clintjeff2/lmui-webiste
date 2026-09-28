import { z } from "zod";
/**
 * The homepage is built from an ordered list of these blocks. Everything an
 * editor can do to the landing page — reorder it, swap a section, change its
 * copy — happens by mutating rows that reference this registry. Adding a new
 * kind of section to the site means adding one entry here (schema + admin
 * form fields); it does not mean touching the database shape.
 */
export type FieldType = "text" | "textarea" | "url" | "number" | "select" | "repeater";
export interface FieldSpec {
    name: string;
    label: string;
    type: FieldType;
    placeholder?: string;
    helpText?: string;
    options?: {
        value: string;
        label: string;
    }[];
    /** only for type: 'repeater' */
    fields?: FieldSpec[];
}
export interface BlockTypeDef<T = any> {
    key: string;
    label: string;
    description: string;
    schema: z.ZodType<T>;
    fields: FieldSpec[];
    defaultConfig: () => T;
}
declare const heroSchema: z.ZodObject<{
    heading: z.ZodString;
    subheading: z.ZodDefault<z.ZodOptional<z.ZodString>>;
    backgroundImageUrl: z.ZodDefault<z.ZodOptional<z.ZodString>>;
    ctaLabel: z.ZodDefault<z.ZodOptional<z.ZodString>>;
    ctaHref: z.ZodDefault<z.ZodOptional<z.ZodString>>;
}, "strip", z.ZodTypeAny, {
    heading: string;
    subheading: string;
    backgroundImageUrl: string;
    ctaLabel: string;
    ctaHref: string;
}, {
    heading: string;
    subheading?: string | undefined;
    backgroundImageUrl?: string | undefined;
    ctaLabel?: string | undefined;
    ctaHref?: string | undefined;
}>;
export type HeroConfig = z.infer<typeof heroSchema>;
declare const statStripSchema: z.ZodObject<{
    heading: z.ZodDefault<z.ZodOptional<z.ZodString>>;
    items: z.ZodArray<z.ZodObject<{
        value: z.ZodString;
        label: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        value: string;
        label: string;
    }, {
        value: string;
        label: string;
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    heading: string;
    items: {
        value: string;
        label: string;
    }[];
}, {
    items: {
        value: string;
        label: string;
    }[];
    heading?: string | undefined;
}>;
export type StatStripConfig = z.infer<typeof statStripSchema>;
declare const newsGridSchema: z.ZodObject<{
    heading: z.ZodString;
    sourceMode: z.ZodDefault<z.ZodEnum<["latest", "manual"]>>;
    limit: z.ZodDefault<z.ZodNumber>;
    manualSlugs: z.ZodDefault<z.ZodOptional<z.ZodString>>;
}, "strip", z.ZodTypeAny, {
    heading: string;
    sourceMode: "latest" | "manual";
    limit: number;
    manualSlugs: string;
}, {
    heading: string;
    sourceMode?: "latest" | "manual" | undefined;
    limit?: number | undefined;
    manualSlugs?: string | undefined;
}>;
export type NewsGridConfig = z.infer<typeof newsGridSchema>;
declare const programSpotlightSchema: z.ZodObject<{
    heading: z.ZodString;
    blurb: z.ZodDefault<z.ZodOptional<z.ZodString>>;
    programSlugs: z.ZodString;
}, "strip", z.ZodTypeAny, {
    heading: string;
    blurb: string;
    programSlugs: string;
}, {
    heading: string;
    programSlugs: string;
    blurb?: string | undefined;
}>;
export type ProgramSpotlightConfig = z.infer<typeof programSpotlightSchema>;
declare const quoteSchema: z.ZodObject<{
    quoteText: z.ZodString;
    attributionName: z.ZodString;
    attributionRole: z.ZodDefault<z.ZodOptional<z.ZodString>>;
}, "strip", z.ZodTypeAny, {
    quoteText: string;
    attributionName: string;
    attributionRole: string;
}, {
    quoteText: string;
    attributionName: string;
    attributionRole?: string | undefined;
}>;
export type QuoteConfig = z.infer<typeof quoteSchema>;
declare const ctaBannerSchema: z.ZodObject<{
    heading: z.ZodString;
    body: z.ZodDefault<z.ZodOptional<z.ZodString>>;
    ctaLabel: z.ZodString;
    ctaHref: z.ZodString;
    style: z.ZodDefault<z.ZodEnum<["primary", "secondary"]>>;
}, "strip", z.ZodTypeAny, {
    heading: string;
    ctaLabel: string;
    ctaHref: string;
    body: string;
    style: "primary" | "secondary";
}, {
    heading: string;
    ctaLabel: string;
    ctaHref: string;
    body?: string | undefined;
    style?: "primary" | "secondary" | undefined;
}>;
export type CtaBannerConfig = z.infer<typeof ctaBannerSchema>;
declare const videoFeatureSchema: z.ZodObject<{
    heading: z.ZodString;
    videoUrl: z.ZodString;
    description: z.ZodDefault<z.ZodOptional<z.ZodString>>;
    thumbnailUrl: z.ZodDefault<z.ZodOptional<z.ZodString>>;
}, "strip", z.ZodTypeAny, {
    heading: string;
    videoUrl: string;
    description: string;
    thumbnailUrl: string;
}, {
    heading: string;
    videoUrl: string;
    description?: string | undefined;
    thumbnailUrl?: string | undefined;
}>;
export type VideoFeatureConfig = z.infer<typeof videoFeatureSchema>;
declare const eventListSchema: z.ZodObject<{
    heading: z.ZodString;
    limit: z.ZodDefault<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    heading: string;
    limit: number;
}, {
    heading: string;
    limit?: number | undefined;
}>;
export type EventListConfig = z.infer<typeof eventListSchema>;
declare const testimonialCarouselSchema: z.ZodObject<{
    heading: z.ZodDefault<z.ZodOptional<z.ZodString>>;
    items: z.ZodArray<z.ZodObject<{
        quote: z.ZodString;
        name: z.ZodString;
        program: z.ZodDefault<z.ZodOptional<z.ZodString>>;
    }, "strip", z.ZodTypeAny, {
        quote: string;
        name: string;
        program: string;
    }, {
        quote: string;
        name: string;
        program?: string | undefined;
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    heading: string;
    items: {
        quote: string;
        name: string;
        program: string;
    }[];
}, {
    items: {
        quote: string;
        name: string;
        program?: string | undefined;
    }[];
    heading?: string | undefined;
}>;
export type TestimonialCarouselConfig = z.infer<typeof testimonialCarouselSchema>;
declare const imageFeatureSchema: z.ZodObject<{
    heading: z.ZodString;
    body: z.ZodDefault<z.ZodOptional<z.ZodString>>;
    imageUrl: z.ZodString;
    imagePosition: z.ZodDefault<z.ZodEnum<["left", "right"]>>;
    ctaLabel: z.ZodDefault<z.ZodOptional<z.ZodString>>;
    ctaHref: z.ZodDefault<z.ZodOptional<z.ZodString>>;
}, "strip", z.ZodTypeAny, {
    heading: string;
    ctaLabel: string;
    ctaHref: string;
    body: string;
    imageUrl: string;
    imagePosition: "left" | "right";
}, {
    heading: string;
    imageUrl: string;
    ctaLabel?: string | undefined;
    ctaHref?: string | undefined;
    body?: string | undefined;
    imagePosition?: "left" | "right" | undefined;
}>;
export type ImageFeatureConfig = z.infer<typeof imageFeatureSchema>;
export declare const blockRegistry: Record<string, BlockTypeDef>;
export declare const blockTypeKeys: string[];
export declare function getBlockTypeDef(key: string): BlockTypeDef | undefined;
export declare function validateBlockConfig(blockType: string, config: unknown): any;
/**
 * A row in the DRAFT working set for a page (the `page_blocks` table).
 * There is no per-row status: the whole draft is either "not yet published"
 * or has been copied wholesale into an immutable `page_revisions` snapshot
 * by a publish action. See services/api/src/routes/pageBlocks.ts.
 */
export interface PageBlock {
    id: number;
    page: string;
    blockType: string;
    position: number;
    config: Record<string, unknown>;
    updatedAt: string;
    createdAt: string;
}
export interface PageRevisionSummary {
    id: number;
    page: string;
    publishedAt: string;
    publishedByName: string | null;
}
export {};
