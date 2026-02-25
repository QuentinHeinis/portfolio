import * as prismic from "@prismicio/client";
import { defineEventHandler, setHeader } from "h3";

type UrlEntry = {
  loc: string;
  lastmod?: string;
  priority?: string;
};

const SITE_URL = "https://www.heinis.dev";

const escapeXml = (value: string) =>
  value
    .trim() // enlève retours ligne autour
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");

const toIsoDate = (value?: string | null) => {
  if (!value) return undefined;
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return undefined;
  return date.toISOString();
};

export default defineEventHandler(async (event) => {
  const client = prismic.createClient("mmi-food"); // ton repo Prismic

  // ⚡ Routes statiques
  const pages: UrlEntry[] = [
    { loc: `${SITE_URL}/`, priority: "1.00" },
    { loc: `${SITE_URL}/projets`, priority: "0.80" },
    { loc: `${SITE_URL}/contact`, priority: "0.80" },
    { loc: `${SITE_URL}/mentions-legales`, priority: "0.50" },
  ];

  // ⚡ Singles (accueil, contact, etc.)
  const singleTypes = ["accueil", "contact", "mentions_legales", "projets"]; 
  const singles = await Promise.allSettled(
    singleTypes.map((type) => client.getSingle(type))
  );

  singles.forEach((result, index) => {
    if (result.status === "fulfilled") {
      const lastmod = toIsoDate(result.value.last_publication_date);
      if (lastmod) {
        pages[index].lastmod = lastmod;
      }
    }
  });

  // ⚡ Projets dynamiques
  const projectsResponse = await client.getAllByType("project", {
    orderings: [{ field: "my.project.ordre_liste", direction: "asc" }],
  });

  for (const project of projectsResponse) {
    if (!project.uid) continue;

    pages.push({
      loc: `${SITE_URL}/projets/${project.uid}`.trim(),
      lastmod: toIsoDate(project.last_publication_date),
      priority: "0.64",
    });
  }

  // ⚡ Sécurité : supprime URLs vides
  const cleanPages = pages.filter(
    (entry) => entry.loc && entry.loc.trim().length > 0
  );

  // ⚡ Génération XML propre
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${cleanPages
  .map((entry) => {
    const lines = [
      "  <url>",
      `    <loc>${escapeXml(entry.loc)}</loc>`,
    ];
    if (entry.lastmod) lines.push(`    <lastmod>${entry.lastmod}</lastmod>`);
    if (entry.priority) lines.push(`    <priority>${entry.priority}</priority>`);
    lines.push("  </url>");
    return lines.join("\n");
  })
  .join("\n")}
</urlset>`;

  setHeader(event, "Content-Type", "application/xml; charset=utf-8");
  setHeader(event, "Cache-Control", "public, max-age=0, s-maxage=3600");

  return xml;
});