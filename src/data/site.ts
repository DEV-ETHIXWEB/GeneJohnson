export const site = {
  name: "Gene Johnson Heating, Cooling, Plumbing & Electrical",
  shortName: "Gene Johnson",
  since: 1976,
  phoneDisplay: "206.792.7495",
  phoneHref: "tel:+12067927495",
  domain: "genejohnsonplumbing.com",
  url: "https://www.genejohnsonplumbing.com",
  email: "info@genejohnsonplumbing.com",
  licenses: [
    { label: "Plumbing License #", value: "GENEJJP760DO" },
    { label: "Construction License #", value: "GENEJJP767C2" },
    { label: "Electrical License #", value: "GENEJJP750MP" },
  ],
  locationsList: [
    "10011 Greenwood Ave N, Seattle, WA 98133",
    "18815 139th Ave NE STE B, Woodinville, WA 98072",
    "7501 2nd Avenue South, Seattle, WA 98108",
  ],
  hq: {
    streetAddress: "10011 Greenwood Ave N",
    city: "Seattle",
    state: "WA",
    zip: "98133",
    lat: 47.7085,
    lng: -122.3553,
  },
  social: {
    facebook: "https://www.facebook.com/genejohnsonplumbing",
    instagram: "https://www.instagram.com/genejohnsonplumbing",
    twitter: "https://twitter.com/genejohnsonplbg",
  },
  aggregateRating: {
    ratingValue: "4.8",
    reviewCount: "2400",
  },
} as const;

// Build-time only - set PUBLIC_FORM_ENDPOINT in .env before deploying (see
// .env.example). Falls back to a non-functional placeholder so it's obvious
// in the rendered HTML if the real endpoint was never configured.
export const formEndpoint = import.meta.env.PUBLIC_FORM_ENDPOINT ?? "https://formspree.io/f/your-form-id";

