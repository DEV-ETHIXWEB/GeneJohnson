import type { ImageMetadata } from "astro";
import manifest from "../data/icons-3d-manifest.json";

export interface Icon3d {
  category: string;
  file: string;
  label: string;
  concept: string;
  src: ImageMetadata;
}

const modules = import.meta.glob<{ default: ImageMetadata }>("/src/assets/icons-3d/**/*.png", { eager: true });

const entries: Icon3d[] = (manifest as { category: string; file: string; label: string; concept: string }[]).map((m) => {
  const mod = modules[`/src/assets/icons-3d/${m.category}/${m.file}`];
  if (!mod) throw new Error(`Missing 3d icon asset: ${m.category}/${m.file}`);
  return { ...m, src: mod.default };
});

export function getIcons3d(categories: string[]): Icon3d[] {
  return entries.filter((e) => categories.includes(e.category));
}

export function getIcon3d(category: string, label: string): Icon3d {
  const found = entries.find((e) => e.category === category && e.label === label);
  if (!found) throw new Error(`Unknown 3d icon: ${category}/${label}`);
  return found;
}

// Astro's image service crops (rather than letterboxes) when asked to resize
// to a width/height that doesn't match the source aspect ratio. These icons
// are hand-drawn and rarely square, so callers must request dimensions along
// this ratio - passing a bare square size here would silently crop the icon.
export function fitDims(icon: Icon3d, maxSize: number): { width: number; height: number } {
  const { width, height } = icon.src;
  const scale = maxSize / Math.max(width, height);
  return { width: Math.round(width * scale), height: Math.round(height * scale) };
}
