import { z } from "zod";

/**
 * The homepage is built from an ordered list of these blocks. Everything an
 * editor can do to the landing page — reorder it, swap a section, change its
 * copy — happens by mutating rows that reference this registry. Adding a new
 * kind of section to the site means adding one entry here (schema + admin
 * form fields); it does not mean touching the database shape.
 */

export type FieldType =
  | "text"
  | "textarea"
  | "url"
  | "number"
  | "select"
  | "repeater";

export interface FieldSpec {
  name: string;
  label: string;
  type: FieldType;
  placeholder?: string;
  helpText?: string;
  options?: { value: string; label: string }[];
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

const heroSchema = z.object({
  heading: z.string().min(1),
  subheading: z.string().optional().default(""),
  backgroundImageUrl: z.string().optional().default(""),
  ctaLabel: z.string().optional().default(""),
  ctaHref: z.string().optional().default(""),
});
export type HeroConfig = z.infer<typeof heroSchema>;

const statStripSchema = z.object({
  heading: z.string().optional().default(""),
  items: z
    .array(z.object({ value: z.string().min(1), label: z.string().min(1) }))
    .min(1),
});
export type StatStripConfig = z.infer<typeof statStripSchema>;

const newsGridSchema = z.object({
  heading: z.string().min(1),
  sourceMode: z.enum(["latest", "manual"]).default("latest"),
  limit: z.number().int().min(1).max(12).default(3),
  manualSlugs: z.string().optional().default(""),
});
export type NewsGridConfig = z.infer<typeof newsGridSchema>;

const optionSpotlightSchema = z.object({
  heading: z.string().min(1),
  blurb: z.string().optional().default(""),
  optionSlugs: z.string().min(1),
});
export type OptionSpotlightConfig = z.infer<typeof optionSpotlightSchema>;

const quoteSchema = z.object({
  quoteText: z.string().min(1),
  attributionName: z.string().min(1),
  attributionRole: z.string().optional().default(""),
});
export type QuoteConfig = z.infer<typeof quoteSchema>;

const ctaBannerSchema = z.object({
  heading: z.string().min(1),
  body: z.string().optional().default(""),
  ctaLabel: z.string().min(1),
  ctaHref: z.string().min(1),
  style: z.enum(["primary", "secondary"]).default("primary"),
});
export type CtaBannerConfig = z.infer<typeof ctaBannerSchema>;

const videoFeatureSchema = z.object({
  heading: z.string().min(1),
  videoUrl: z.string().min(1),
  description: z.string().optional().default(""),
  thumbnailUrl: z.string().optional().default(""),
});
export type VideoFeatureConfig = z.infer<typeof videoFeatureSchema>;

const eventListSchema = z.object({
  heading: z.string().min(1),
  limit: z.number().int().min(1).max(12).default(4),
});
export type EventListConfig = z.infer<typeof eventListSchema>;

const testimonialCarouselSchema = z.object({
  heading: z.string().optional().default(""),
  items: z
    .array(
      z.object({
        quote: z.string().min(1),
        name: z.string().min(1),
        option: z.string().optional().default(""),
      }),
    )
    .min(1),
});
export type TestimonialCarouselConfig = z.infer<
  typeof testimonialCarouselSchema
>;

const imageFeatureSchema = z.object({
  heading: z.string().min(1),
  body: z.string().optional().default(""),
  imageUrl: z.string().min(1),
  imagePosition: z.enum(["left", "right"]).default("right"),
  ctaLabel: z.string().optional().default(""),
  ctaHref: z.string().optional().default(""),
});
export type ImageFeatureConfig = z.infer<typeof imageFeatureSchema>;

export const blockRegistry: Record<string, BlockTypeDef> = {
  hero: {
    key: "hero",
    label: "Hero",
    description:
      "Full-width lead banner: heading, subheading, background image, one call to action.",
    schema: heroSchema,
    fields: [
      { name: "heading", label: "Heading", type: "text" },
      { name: "subheading", label: "Subheading", type: "textarea" },
      {
        name: "backgroundImageUrl",
        label: "Background image URL",
        type: "url",
      },
      { name: "ctaLabel", label: "Button label", type: "text" },
      { name: "ctaHref", label: "Button link", type: "url" },
    ],
    defaultConfig: () => ({
      heading: "",
      subheading: "",
      backgroundImageUrl: "",
      ctaLabel: "",
      ctaHref: "",
    }),
  },
  "stat-strip": {
    key: "stat-strip",
    label: "Stat strip",
    description: "A row of large numbers with labels underneath.",
    schema: statStripSchema,
    fields: [
      { name: "heading", label: "Heading (optional)", type: "text" },
      {
        name: "items",
        label: "Stats",
        type: "repeater",
        fields: [
          { name: "value", label: "Value", type: "text", placeholder: "12,000+" },
          { name: "label", label: "Label", type: "text", placeholder: "Students enrolled" },
        ],
      },
    ],
    defaultConfig: () => ({
      heading: "",
      items: [{ value: "", label: "" }],
    }),
  },
  "news-grid": {
    key: "news-grid",
    label: "News grid",
    description: "Cards pulling from the news/article library.",
    schema: newsGridSchema,
    fields: [
      { name: "heading", label: "Heading", type: "text" },
      {
        name: "sourceMode",
        label: "Source",
        type: "select",
        options: [
          { value: "latest", label: "Latest published articles" },
          { value: "manual", label: "Choose specific articles" },
        ],
      },
      { name: "limit", label: "Number of articles", type: "number" },
      {
        name: "manualSlugs",
        label: "Article slugs (comma-separated, only used when source = manual)",
        type: "text",
      },
    ],
    defaultConfig: () => ({
      heading: "Latest News",
      sourceMode: "latest",
      limit: 3,
      manualSlugs: "",
    }),
  },
  "option-spotlight": {
    key: "option-spotlight",
    label: "Option spotlight",
    description: "Highlight a handful of academic options.",
    schema: optionSpotlightSchema,
    fields: [
      { name: "heading", label: "Heading", type: "text" },
      { name: "blurb", label: "Intro text", type: "textarea" },
      {
        name: "optionSlugs",
        label: "Option slugs (comma-separated)",
        type: "text",
      },
    ],
    defaultConfig: () => ({
      heading: "Explore Our Options",
      blurb: "",
      optionSlugs: "",
    }),
  },
  quote: {
    key: "quote",
    label: "Quote callout",
    description: "A pulled quote with attribution.",
    schema: quoteSchema,
    fields: [
      { name: "quoteText", label: "Quote", type: "textarea" },
      { name: "attributionName", label: "Name", type: "text" },
      { name: "attributionRole", label: "Title / role", type: "text" },
    ],
    defaultConfig: () => ({
      quoteText: "",
      attributionName: "",
      attributionRole: "",
    }),
  },
  "cta-banner": {
    key: "cta-banner",
    label: "Call-to-action banner",
    description: "Full-width band with a heading and one button.",
    schema: ctaBannerSchema,
    fields: [
      { name: "heading", label: "Heading", type: "text" },
      { name: "body", label: "Body text", type: "textarea" },
      { name: "ctaLabel", label: "Button label", type: "text" },
      { name: "ctaHref", label: "Button link", type: "url" },
      {
        name: "style",
        label: "Style",
        type: "select",
        options: [
          { value: "primary", label: "Primary (solid)" },
          { value: "secondary", label: "Secondary (outline)" },
        ],
      },
    ],
    defaultConfig: () => ({
      heading: "",
      body: "",
      ctaLabel: "Apply Now",
      ctaHref: "/admissions",
      style: "primary",
    }),
  },
  "video-feature": {
    key: "video-feature",
    label: "Video feature",
    description: "A video embed alongside a heading and description.",
    schema: videoFeatureSchema,
    fields: [
      { name: "heading", label: "Heading", type: "text" },
      { name: "videoUrl", label: "Video URL", type: "url" },
      { name: "thumbnailUrl", label: "Thumbnail image URL", type: "url" },
      { name: "description", label: "Description", type: "textarea" },
    ],
    defaultConfig: () => ({
      heading: "",
      videoUrl: "",
      thumbnailUrl: "",
      description: "",
    }),
  },
  "event-list": {
    key: "event-list",
    label: "Upcoming events",
    description: "List of the next upcoming events from the events calendar.",
    schema: eventListSchema,
    fields: [
      { name: "heading", label: "Heading", type: "text" },
      { name: "limit", label: "Number of events", type: "number" },
    ],
    defaultConfig: () => ({ heading: "Upcoming Events", limit: 4 }),
  },
  "testimonial-carousel": {
    key: "testimonial-carousel",
    label: "Testimonial carousel",
    description: "Rotating student/faculty quotes.",
    schema: testimonialCarouselSchema,
    fields: [
      { name: "heading", label: "Heading (optional)", type: "text" },
      {
        name: "items",
        label: "Testimonials",
        type: "repeater",
        fields: [
          { name: "quote", label: "Quote", type: "textarea" },
          { name: "name", label: "Name", type: "text" },
          { name: "option", label: "Option / class year", type: "text" },
        ],
      },
    ],
    defaultConfig: () => ({
      heading: "",
      items: [{ quote: "", name: "", option: "" }],
    }),
  },
  "image-feature": {
    key: "image-feature",
    label: "Image + text feature",
    description: "An image paired with a heading, body copy, and optional CTA.",
    schema: imageFeatureSchema,
    fields: [
      { name: "heading", label: "Heading", type: "text" },
      { name: "body", label: "Body text", type: "textarea" },
      { name: "imageUrl", label: "Image URL", type: "url" },
      {
        name: "imagePosition",
        label: "Image position",
        type: "select",
        options: [
          { value: "left", label: "Left" },
          { value: "right", label: "Right" },
        ],
      },
      { name: "ctaLabel", label: "Button label (optional)", type: "text" },
      { name: "ctaHref", label: "Button link (optional)", type: "url" },
    ],
    defaultConfig: () => ({
      heading: "",
      body: "",
      imageUrl: "",
      imagePosition: "right",
      ctaLabel: "",
      ctaHref: "",
    }),
  },
};

export const blockTypeKeys = Object.keys(blockRegistry);

export function getBlockTypeDef(key: string): BlockTypeDef | undefined {
  return blockRegistry[key];
}

export function validateBlockConfig(blockType: string, config: unknown) {
  const def = getBlockTypeDef(blockType);
  if (!def) {
    throw new Error(`Unknown block type: ${blockType}`);
  }
  return def.schema.parse(config);
}

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
