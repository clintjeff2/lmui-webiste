"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.blockTypeKeys = exports.blockRegistry = void 0;
exports.getBlockTypeDef = getBlockTypeDef;
exports.validateBlockConfig = validateBlockConfig;
const zod_1 = require("zod");
const heroSchema = zod_1.z.object({
    heading: zod_1.z.string().min(1),
    subheading: zod_1.z.string().optional().default(""),
    backgroundImageUrl: zod_1.z.string().optional().default(""),
    ctaLabel: zod_1.z.string().optional().default(""),
    ctaHref: zod_1.z.string().optional().default(""),
});
const statStripSchema = zod_1.z.object({
    heading: zod_1.z.string().optional().default(""),
    items: zod_1.z
        .array(zod_1.z.object({ value: zod_1.z.string().min(1), label: zod_1.z.string().min(1) }))
        .min(1),
});
const newsGridSchema = zod_1.z.object({
    heading: zod_1.z.string().min(1),
    sourceMode: zod_1.z.enum(["latest", "manual"]).default("latest"),
    limit: zod_1.z.number().int().min(1).max(12).default(3),
    manualSlugs: zod_1.z.string().optional().default(""),
});
const optionSpotlightSchema = zod_1.z.object({
    heading: zod_1.z.string().min(1),
    blurb: zod_1.z.string().optional().default(""),
    optionSlugs: zod_1.z.string().min(1),
});
const quoteSchema = zod_1.z.object({
    quoteText: zod_1.z.string().min(1),
    attributionName: zod_1.z.string().min(1),
    attributionRole: zod_1.z.string().optional().default(""),
});
const ctaBannerSchema = zod_1.z.object({
    heading: zod_1.z.string().min(1),
    body: zod_1.z.string().optional().default(""),
    ctaLabel: zod_1.z.string().min(1),
    ctaHref: zod_1.z.string().min(1),
    style: zod_1.z.enum(["primary", "secondary"]).default("primary"),
});
const videoFeatureSchema = zod_1.z.object({
    heading: zod_1.z.string().min(1),
    videoUrl: zod_1.z.string().min(1),
    description: zod_1.z.string().optional().default(""),
    thumbnailUrl: zod_1.z.string().optional().default(""),
});
const eventListSchema = zod_1.z.object({
    heading: zod_1.z.string().min(1),
    limit: zod_1.z.number().int().min(1).max(12).default(4),
});
const testimonialCarouselSchema = zod_1.z.object({
    heading: zod_1.z.string().optional().default(""),
    items: zod_1.z
        .array(zod_1.z.object({
        quote: zod_1.z.string().min(1),
        name: zod_1.z.string().min(1),
        option: zod_1.z.string().optional().default(""),
    }))
        .min(1),
});
const imageFeatureSchema = zod_1.z.object({
    heading: zod_1.z.string().min(1),
    body: zod_1.z.string().optional().default(""),
    imageUrl: zod_1.z.string().min(1),
    imagePosition: zod_1.z.enum(["left", "right"]).default("right"),
    ctaLabel: zod_1.z.string().optional().default(""),
    ctaHref: zod_1.z.string().optional().default(""),
});
exports.blockRegistry = {
    hero: {
        key: "hero",
        label: "Hero",
        description: "Full-width lead banner: heading, subheading, background image, one call to action.",
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
exports.blockTypeKeys = Object.keys(exports.blockRegistry);
function getBlockTypeDef(key) {
    return exports.blockRegistry[key];
}
function validateBlockConfig(blockType, config) {
    const def = getBlockTypeDef(blockType);
    if (!def) {
        throw new Error(`Unknown block type: ${blockType}`);
    }
    return def.schema.parse(config);
}
