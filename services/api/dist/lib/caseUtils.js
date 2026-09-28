"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.snakeToCamel = snakeToCamel;
exports.camelToSnake = camelToSnake;
exports.toApiRow = toApiRow;
exports.parseJsonColumn = parseJsonColumn;
exports.toDbRow = toDbRow;
function snakeToCamel(str) {
    return str.replace(/_([a-z0-9])/g, (_, c) => c.toUpperCase());
}
function camelToSnake(str) {
    return str.replace(/[A-Z]/g, (c) => `_${c.toLowerCase()}`);
}
/** DB row (snake_case columns) -> API shape (camelCase). */
function toApiRow(row) {
    const out = {};
    for (const [key, value] of Object.entries(row)) {
        out[snakeToCamel(key)] = value;
    }
    return out;
}
/**
 * mysql2 auto-parses MySQL JSON columns into JS values already; only a raw
 * string (e.g. from a driver that doesn't do this) needs JSON.parse. Every
 * read of a JSON column in this codebase should go through this instead of
 * a bare JSON.parse, which throws on an already-parsed object.
 */
function parseJsonColumn(value) {
    return typeof value === "string" ? JSON.parse(value) : value;
}
/** API payload (camelCase) -> DB row (snake_case columns). Skips undefined. */
function toDbRow(obj) {
    const out = {};
    for (const [key, value] of Object.entries(obj)) {
        if (value !== undefined) {
            out[camelToSnake(key)] = value;
        }
    }
    return out;
}
