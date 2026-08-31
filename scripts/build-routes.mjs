// One-time generator: classifies every real URL from the live sitemap into a
// template + params row, written to src/data/routes.json. Running this again
// after editing raw-sitemap-urls.txt regenerates the table.
import { readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const raw = readFileSync(path.join(__dirname, "raw-sitemap-urls.txt"), "utf-8");
const urls = raw.split("\n").map((l) => l.trim()).filter(Boolean);

const CITIES = new Set([
  "medina", "south-hill", "south-tacoma", "haller-lake", "northgate",
  "central-district", "leschi", "mount-baker", "lake-forest-park",
  "university-district", "ravenna", "bitter-lake", "sand-point",
  "west-seattle", "puyallup", "tacoma", "everett", "mercer-island",
  "kirkland", "shoreline", "edmonds", "bellevue", "renton", "bothell",
  "mountlake-terrace", "mukilteo", "lynnwood", "eastmont", "seattle-wa",
  "downtown-bellevue",
]);

const VERTICAL_LABELS = {
  "air-conditioning": "Cooling",
  cooling: "Cooling",
  electrical: "Electrical",
  plumbing: "Plumbing",
  heating: "Heating",
};

function humanize(slug) {
  return slug
    .split("-")
    .map((w) => (w.length ? w[0].toUpperCase() + w.slice(1) : w))
    .join(" ");
}

const rows = [];

for (const url of urls) {
  if (url === "/") {
    rows.push({ url, template: "home", params: {} });
    continue;
  }

  const segs = url.split("/").filter(Boolean);

  if (segs.length === 1 && CITIES.has(segs[0])) {
    rows.push({
      url,
      template: "city-hub",
      params: { city: segs[0], cityName: humanize(segs[0]) },
    });
    continue;
  }

  if (segs[0] === "service-area") {
    if (segs.length === 1) {
      rows.push({ url, template: "service-area-index", params: {} });
      continue;
    }
    // service-area/<city>-<vertical>/  e.g. shoreline-plumbing, renton-heating-and-cooling
    const slug = segs[1];
    const match = [...CITIES].find((c) => slug.startsWith(c + "-"));
    const verticalSlug = match ? slug.slice(match.length + 1) : slug;
    rows.push({
      url,
      template: "service-area-combo",
      params: {
        slug,
        city: match ?? null,
        cityName: match ? humanize(match) : null,
        vertical: verticalSlug,
        verticalName: humanize(verticalSlug),
      },
    });
    continue;
  }

  if (CITIES.has(segs[0])) {
    const city = segs[0];
    if (segs.length === 2) {
      // handles both nested (kirkland/air-conditioning) and mukilteo's
      // hyphenated single-segment style (air-conditioning-repair)
      const service = segs[1];
      const verticalKey = Object.keys(VERTICAL_LABELS).find((v) =>
        service === v || service.startsWith(v + "-")
      );
      const suffix = verticalKey && service.length > verticalKey.length
        ? service.slice(verticalKey.length + 1)
        : null;
      rows.push({
        url,
        template: suffix ? "city-service-sub" : "city-service",
        params: {
          city,
          cityName: humanize(city),
          service: verticalKey ?? service,
          serviceName: VERTICAL_LABELS[verticalKey] ?? humanize(service),
          subservice: suffix,
          subserviceName: suffix ? humanize(suffix) : null,
        },
      });
      continue;
    }
    if (segs.length === 3) {
      const [, service, subservice] = segs;
      rows.push({
        url,
        template: "city-service-sub",
        params: {
          city,
          cityName: humanize(city),
          service,
          serviceName: VERTICAL_LABELS[service] ?? humanize(service),
          subservice,
          subserviceName: humanize(subservice),
        },
      });
      continue;
    }
  }

  if (segs[0] === "about-us") {
    rows.push({
      url,
      template: "about-page",
      params: { slug: segs.slice(1).join("/") || "index" },
    });
    continue;
  }

  if (segs[0] === "products") {
    rows.push({
      url,
      template: "product-page",
      params: { slug: segs[1] ?? null, brand: segs[1] ? humanize(segs[1]) : null },
    });
    continue;
  }

  // Everything else: standalone content page (service pillar, legal, utility)
  rows.push({
    url,
    template: "standalone",
    params: { slug: segs.join("/"), title: humanize(segs[segs.length - 1]) },
  });
}

writeFileSync(
  path.join(__dirname, "..", "src", "data", "routes.json"),
  JSON.stringify(rows, null, 2) + "\n"
);

console.log(`Wrote ${rows.length} routes to src/data/routes.json`);
const counts = rows.reduce((acc, r) => ((acc[r.template] = (acc[r.template] ?? 0) + 1), acc), {});
console.table(counts);
