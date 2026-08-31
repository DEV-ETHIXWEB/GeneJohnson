import { site } from "../data/site";

export function localBusinessSchema(opts?: { areaServed?: string[] }) {
  return {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    name: site.name,
    url: site.url,
    telephone: site.phoneDisplay,
    foundingDate: String(site.since),
    address: {
      "@type": "PostalAddress",
      streetAddress: site.hq.streetAddress,
      addressLocality: site.hq.city,
      addressRegion: site.hq.state,
      postalCode: site.hq.zip,
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: site.hq.lat,
      longitude: site.hq.lng,
    },
    areaServed: opts?.areaServed?.map((a) => ({ "@type": "City", name: a })) ?? undefined,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: site.aggregateRating.ratingValue,
      reviewCount: site.aggregateRating.reviewCount,
    },
    sameAs: Object.values(site.social),
  };
}

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function serviceSchema(opts: { name: string; description: string; url: string; areaServed?: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: opts.name,
    name: opts.name,
    description: opts.description,
    url: opts.url,
    areaServed: opts.areaServed ?? "Puget Sound, WA",
    provider: {
      "@type": "HomeAndConstructionBusiness",
      name: site.name,
      telephone: site.phoneDisplay,
      url: site.url,
    },
  };
}

export function faqSchema(faqs: { q: string; a: string }[]) {
  if (!faqs.length) return null;
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}
