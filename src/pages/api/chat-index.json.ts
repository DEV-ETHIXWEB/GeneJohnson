import type { APIRoute } from "astro";
import { getCollection } from "astro:content";
import { servicePages } from "../../data/service-pages";
import { verticals } from "../../data/services";
import { locations } from "../../data/locations";
import { site } from "../../data/site";

export const prerender = true;

export interface ChatEntry {
  title: string;
  url: string;
  excerpt: string;
  keywords: string;
}

export const GET: APIRoute = async () => {
  const entries: ChatEntry[] = [];

  entries.push({
    title: "Home",
    url: "/",
    excerpt: `${site.name} — family owned and operated since ${site.since}, serving the greater Puget Sound area.`,
    keywords: "home about gene johnson family owned since 1976",
  });

  for (const v of verticals) {
    entries.push({
      title: `${v.title} Services`,
      url: `/${v.slug}/`,
      excerpt: v.intro,
      keywords: `${v.title} ${v.subservices.map((s) => s.title).join(" ")}`,
    });
  }

  for (const p of servicePages) {
    entries.push({
      title: p.title,
      url: `/${p.slug}/`,
      excerpt: p.tagline + " " + p.intro,
      keywords: `${p.title} ${p.vertical} ${p.faqs.map((f) => f.q).join(" ")}`,
    });
  }

  for (const l of locations) {
    entries.push({
      title: `Service in ${l.name}, WA`,
      url: `/${l.slug}/`,
      excerpt: `Heating, cooling, plumbing, and electrical service in ${l.name}, ${l.county}.`,
      keywords: `${l.name} ${l.county} ${l.region} service area location city`,
    });
  }

  const posts = await getCollection("blog");
  for (const post of posts) {
    entries.push({
      title: post.data.title,
      url: `/video-blog/${post.id}/`,
      excerpt: post.data.description,
      keywords: `${post.data.vertical} ${post.data.tags.join(" ")} blog article`,
    });
  }

  const companyPages = [
    { title: "About Us", url: "/about-us/", excerpt: `Family owned and operated since ${site.since}.`, keywords: "about company history family owned" },
    { title: "Careers", url: "/about-us/careers/", excerpt: "Join the Gene Johnson team — apprenticeships, licensed trade positions, and office roles.", keywords: "careers jobs hiring apprenticeship employment" },
    { title: "Financing", url: "/about-us/financing/", excerpt: "Flexible financing including no payments for 12 months on qualifying HVAC installs.", keywords: "financing payment plan no payments 12 months cost" },
    { title: "Reviews", url: "/reviews/", excerpt: "2,400+ five-star reviews from Puget Sound homeowners.", keywords: "reviews testimonials ratings stars feedback" },
    { title: "Coupons & Offers", url: "/coupons/", excerpt: "Current coupons and discounts on plumbing, heating, cooling, and electrical service.", keywords: "coupons discounts offers deals savings promo code" },
    { title: "Contact", url: "/contact/", excerpt: `Call ${site.phoneDisplay}, available 24/7, or request service online.`, keywords: "contact phone number email address call" },
    { title: "Schedule Service", url: "/schedule-now/", excerpt: "Book a service appointment online.", keywords: "schedule book appointment request service online" },
    { title: "Service Area", url: "/service-area/", excerpt: "Serving Seattle, the Eastside, North Sound, and South Sound.", keywords: "service area coverage cities locations where" },
    { title: "Emergency Plumbing", url: "/emergency-plumbing/", excerpt: "24/7 emergency plumbing dispatch across the Puget Sound area.", keywords: "emergency urgent 24/7 burst pipe flooding no water" },
  ];
  entries.push(...companyPages);

  return new Response(JSON.stringify(entries), {
    headers: { "Content-Type": "application/json" },
  });
};
