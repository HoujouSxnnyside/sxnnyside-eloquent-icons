// Minimal Bun dev server for the SEI icon demo, serving htmx-driven
// HTML fragments.
//
// Nothing about the icon set is generated or checked in. /cards reads
// icons/outline or icons/filled straight off disk on every request and
// returns real <svg> markup as an HTML fragment — add, remove, or edit
// an icon and just reload, no build step.
//
// Run with:  bun demo/server.ts

import { readdir, readFile } from "fs/promises";
import { join } from "path";

const ROOT = join(import.meta.dir, "..");
const DEMO = import.meta.dir;
const PORT = Number(process.env.PORT) || 4173;

async function readIconFolder(folder: string): Promise<Array<[string, string]>> {
  const dir = join(ROOT, "icons", folder);
  const files = (await readdir(dir)).filter((f) => f.endsWith(".svg")).sort();
  return Promise.all(
    files.map(async (file) => {
      const raw = (await readFile(join(dir, file), "utf8")).trim();
      const inner = raw.replace(/^<svg[^>]*>/, "").replace(/<\/svg>\s*$/, "").trim();
      return [file.slice(0, -4), inner] as [string, string];
    })
  );
}

function escapeAttr(s: string): string {
  return s.replace(/&/g, "&amp;").replace(/"/g, "&quot;");
}

function cardHtml(style: string, name: string, inner: string): string {
  const attrs =
    style === "outline"
      ? 'fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"'
      : 'fill="currentColor"';
  return (
    `<button type="button" class="card" data-name="${escapeAttr(name)}" data-style="${style}">` +
    `<svg class="icon" viewBox="0 0 24 24" ${attrs}>${inner}</svg>` +
    `<span class="label">${name}</span>` +
    `</button>`
  );
}

async function renderCards(style: string, query: string): Promise<string> {
  const style2 = style === "filled" ? "filled" : "outline";
  const entries = await readIconFolder(style2);
  const q = query.trim().toLowerCase();
  const filtered = q ? entries.filter(([name]) => name.includes(q)) : entries;

  const cardsHtml = filtered.map(([name, inner]) => cardHtml(style2, name, inner)).join("");
  const empty = filtered.length === 0 ? '<p class="empty-state">No icons match your search.</p>' : "";
  const countOob = `<strong id="visibleCount" hx-swap-oob="true">${filtered.length}</strong>`;

  return cardsHtml + empty + countOob;
}

Bun.serve({
  port: PORT,
  async fetch(req) {
    const url = new URL(req.url);

    if (url.pathname === "/cards") {
      const style = url.searchParams.get("style") || "outline";
      const q = url.searchParams.get("q") || "";
      const html = await renderCards(style, q);
      return new Response(html, { headers: { "Content-Type": "text/html; charset=utf-8" } });
    }

    if (url.pathname === "/" || url.pathname === "/index.html") {
      return new Response(Bun.file(join(DEMO, "index.html")));
    }

    return new Response("Not found", { status: 404 });
  },
});

console.log(`SEI icon demo → http://localhost:${PORT}`);
