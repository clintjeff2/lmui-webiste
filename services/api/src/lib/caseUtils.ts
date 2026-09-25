export function snakeToCamel(str: string): string {
  return str.replace(/_([a-z0-9])/g, (_, c: string) => c.toUpperCase());
}

export function camelToSnake(str: string): string {
  return str.replace(/[A-Z]/g, (c) => `_${c.toLowerCase()}`);
}

/** DB row (snake_case columns) -> API shape (camelCase). */
export function toApiRow<T extends Record<string, unknown>>(
  row: T,
): Record<string, unknown> {
  const out: Record<string, unknown> = {};
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
export function parseJsonColumn<T = unknown>(value: unknown): T {
  return typeof value === "string" ? JSON.parse(value) : (value as T);
}

/** API payload (camelCase) -> DB row (snake_case columns). Skips undefined. */
export function toDbRow<T extends Record<string, unknown>>(
  obj: T,
): Record<string, unknown> {
  const out: Record<string, unknown> = {};
  for (const [key, value] of Object.entries(obj)) {
    if (value !== undefined) {
      out[camelToSnake(key)] = value;
    }
  }
  return out;
}
