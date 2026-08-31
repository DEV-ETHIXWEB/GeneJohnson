export interface Brand {
  slug: string;
  name: string;
  category: string;
  description: string;
  highlights: string[];
}

export const brands: Brand[] = [
  {
    slug: "mitsubishi",
    name: "Mitsubishi Electric",
    category: "Ductless & Mini-Split Heat Pumps",
    description:
      "Mitsubishi Electric is one of the most established names in ductless mini-split technology, and the brand we install most often for homes without existing ductwork. Their cold-climate heat pump line performs reliably well below freezing, making it a strong fit for Puget Sound winters as well as summer cooling.",
    highlights: ["Industry-leading ductless heat pump efficiency", "Cold-climate performance rated well below freezing", "Whisper-quiet indoor and outdoor units", "Multi-zone systems from a single outdoor unit"],
  },
  {
    slug: "american-standard",
    name: "American Standard",
    category: "Furnaces, Air Conditioners & Heat Pumps",
    description:
      "American Standard has manufactured heating and cooling equipment in the U.S. for over a century, known for durable build quality and straightforward serviceability. We install their furnace, AC, and heat pump lines for homeowners who want a proven, widely-supported system.",
    highlights: ["Decades-long manufacturer track record", "Wide range of efficiency tiers to fit different budgets", "Strong parts availability for long-term serviceability", "Comprehensive manufacturer warranties on qualifying installs"],
  },
  {
    slug: "bosch",
    name: "Bosch",
    category: "Tankless Water Heaters & Heat Pump Water Heaters",
    description:
      "Bosch is a leading name in tankless and heat pump water heating technology, with a compact footprint that suits the smaller mechanical spaces common in Puget Sound homes. We install and service their residential water heating lineup as part of our tankless water heater offerings.",
    highlights: ["Compact tankless units for tight mechanical spaces", "High energy-factor ratings for lower operating costs", "Heat pump water heater options for maximum efficiency", "Reliable European engineering with strong parts support"],
  },
  {
    slug: "daikin",
    name: "Daikin",
    category: "Heat Pumps & Ductless Systems",
    description:
      "Daikin is one of the largest HVAC manufacturers in the world, with a heat pump and ductless lineup that spans budget-conscious to high-efficiency premium systems. We install their equipment for homeowners who want flexibility across a wide range of price points.",
    highlights: ["Broad lineup from entry-level to premium efficiency", "Strong ductless and ducted heat pump options", "Advanced humidity and airflow control on select models", "Global manufacturer scale with dependable parts supply"],
  },
];

export const brandBySlug = new Map(brands.map((b) => [b.slug, b]));
