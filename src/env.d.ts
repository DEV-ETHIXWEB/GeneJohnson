/// <reference types="astro/client" />

// Shared window augmentations for analytics.ts and form-tracking.ts - kept
// in one ambient file rather than duplicated `declare global` blocks in
// each script, which TypeScript rejects as conflicting augmentations.
interface Window {
  dataLayer: unknown[];
  gtag?: (...args: unknown[]) => void;
}
