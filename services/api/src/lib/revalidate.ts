/**
 * Called right after a homepage publish so the public Next.js site picks up
 * the new layout immediately via on-demand ISR, instead of waiting for the
 * time-based revalidation window. Failure here is logged, not thrown — a
 * publish must still succeed even if the web app is temporarily unreachable;
 * the site's own time-based revalidate() interval is the fallback.
 */
export async function triggerRevalidate(page: string): Promise<void> {
  const url = process.env.WEB_REVALIDATE_URL;
  const secret = process.env.REVALIDATE_SECRET;
  if (!url || !secret) return;

  const path = page === "home" ? "/" : `/${page}`;

  try {
    const res = await fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "x-revalidate-secret": secret,
      },
      body: JSON.stringify({ path }),
    });
    if (!res.ok) {
      console.error(`[revalidate] web app responded ${res.status} for ${path}`);
    }
  } catch (err) {
    console.error("[revalidate] failed to reach web app:", err);
  }
}
