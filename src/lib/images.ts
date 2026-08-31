import type { ImageMetadata } from "astro";

const modules = import.meta.glob<{ default: ImageMetadata }>(
  "/src/assets/images/**/*.{webp,jpg,jpeg,png}",
  { eager: true }
);

const byKey = new Map<string, ImageMetadata>();
for (const [path, mod] of Object.entries(modules)) {
  const key = path.split("/").pop()!.replace(/\.(webp|jpg|jpeg|png)$/i, "");
  byKey.set(key, mod.default);
}

export function getImage(key: string): ImageMetadata {
  const img = byKey.get(key);
  if (!img) throw new Error(`Unknown image key: ${key}`);
  return img;
}
