export interface SubService {
  slug: string;
  title: string;
  icon: string;
}

export interface Vertical {
  slug: "plumbing" | "heating" | "cooling" | "electrical";
  title: string;
  icon: string;
  tagline: string;
  intro: string;
  color: "red" | "navy";
  subservices: SubService[];
}

export const verticals: Vertical[] = [
  {
    slug: "plumbing",
    title: "Plumbing",
    icon: "Plumbing",
    tagline: "Leaks, drains, water heaters, and everything in between.",
    intro:
      "From a 2 a.m. burst pipe to a full repipe, our licensed plumbers have been keeping Puget Sound homes dry since 1976. Upfront pricing, same-day availability, and a fix-it-right guarantee on every job.",
    color: "red",
    subservices: [
      { slug: "emergency-plumbing", title: "Emergency Plumbing", icon: "Emergency Plumbing" },
      { slug: "water-heaters", title: "Water Heaters", icon: "Water Heater" },
      { slug: "tankless-water-heaters", title: "Tankless Water Heaters", icon: "Tankless Water Heater" },
      { slug: "drains", title: "Drain Cleaning", icon: "Drain Cleaning" },
      { slug: "hydrojetting", title: "Hydro Jetting", icon: "Hydro Jetting" },
      { slug: "drain-camera-scoping", title: "Drain Camera Scoping", icon: "Sewer Camera" },
      { slug: "sewer-line-repair-replacement", title: "Sewer Line Repair & Replacement", icon: "Sewer Repair" },
      { slug: "trenchless-sewer-line-repair-replacement", title: "Trenchless Sewer Repair", icon: "Trenchless Sewer Repair" },
      { slug: "french-drains", title: "French Drains", icon: "Sewer Line" },
      { slug: "repiping", title: "Whole-Home Repiping", icon: "Pipe Repair" },
      { slug: "slab-leak-repair", title: "Slab Leak Repair", icon: "Leak Detection" },
      { slug: "water-leak-detection", title: "Water Leak Detection", icon: "Leak Detection" },
      { slug: "burst-pipe-repair", title: "Burst Pipe Repair", icon: "Pipe Repair" },
      { slug: "toilet-repair-installation", title: "Toilet Repair & Installation", icon: "Toilet" },
      { slug: "faucets-fixtures-sinks", title: "Faucets, Fixtures & Sinks", icon: "Water Line" },
      { slug: "showers-tubs", title: "Showers & Tubs", icon: "Drain Cleaning-1" },
      { slug: "garbage-disposals", title: "Garbage Disposals", icon: "Garbage Disposal" },
      { slug: "gas-line-repair-installation", title: "Gas Line Repair & Installation", icon: "Pipe Repair" },
      { slug: "water-line-installation", title: "Water Line Installation", icon: "Water Line" },
      { slug: "water-filtration-systems", title: "Water Filtration Systems", icon: "Water Filtration" },
      { slug: "water-softeners", title: "Water Softeners", icon: "Water Filtration" },
      { slug: "sump-pumps", title: "Sump Pumps", icon: "Sump Pump" },
      { slug: "city-sewer-hookup", title: "City Sewer Hookup", icon: "Sewer Replacement" },
      { slug: "wet-yards", title: "Wet Yard Solutions", icon: "Drain & Sewer" },
    ],
  },
  {
    slug: "heating",
    title: "Heating",
    icon: "Heating",
    tagline: "Furnaces, boilers, heat pumps, and radiant systems.",
    intro:
      "Pacific Northwest winters are damp, not brutal - which is exactly why so many heating systems here get neglected until they fail. We install, repair, and maintain every major heating system so yours doesn't.",
    color: "navy",
    subservices: [
      { slug: "furnace-installation-and-replacement", title: "Furnace Installation & Replacement", icon: "Heating Installation" },
      { slug: "furnace-repair-and-maintenance", title: "Furnace Repair & Maintenance", icon: "Heating Repair" },
      { slug: "heater-installation-and-replacement", title: "Heater Installation & Replacement", icon: "Heating Installation" },
      { slug: "heater-repair-and-maintenance", title: "Heater Repair & Maintenance", icon: "Heating Maintenance" },
      { slug: "boiler-installation-repair", title: "Boiler Installation & Repair", icon: "Boiler" },
      { slug: "heat-pump-services", title: "Heat Pump Services", icon: "Heat Pump" },
      { slug: "radiant-heating-services", title: "Radiant Heating", icon: "Radiant Hating" },
      { slug: "thermostats", title: "Smart Thermostats", icon: "Thermostat" },
    ],
  },
  {
    slug: "cooling",
    title: "Cooling",
    icon: "AC",
    tagline: "AC installation, repair, ductless systems, and air quality.",
    intro:
      "As Seattle summers get hotter, a working AC system has gone from a luxury to a necessity. We size, install, and service cooling systems built for Pacific Northwest homes - including homes with no existing ductwork.",
    color: "red",
    subservices: [
      { slug: "cooling/ac-installation", title: "AC Installation", icon: "AC Installation" },
      { slug: "cooling/ac-maintenance", title: "AC Maintenance", icon: "AC Maintenance" },
      { slug: "cooling/air-conditioning-repair", title: "AC Repair", icon: "AC Repair" },
      { slug: "cooling/ductless-mini-split-heat-pumps", title: "Ductless Mini-Split Heat Pumps", icon: "Ductless Mini-Split" },
      { slug: "air-quality", title: "Indoor Air Quality", icon: "AC" },
      { slug: "uv-air-sanitizers", title: "UV Air Sanitizers", icon: "AC" },
    ],
  },
  {
    slug: "electrical",
    title: "Electrical",
    icon: "Electrical",
    tagline: "Panels, wiring, EV chargers, generators, and safety devices.",
    intro:
      "Older Puget Sound homes were never wired for modern life. Our licensed electricians modernize, protect, and future-proof your home's electrical system - from a single outlet to a full panel upgrade.",
    color: "navy",
    subservices: [
      { slug: "emergency-electrical", title: "Emergency Electrical", icon: "Emergency Electrical" },
      { slug: "electrical-installations-upgrades-repairs", title: "Installations, Upgrades & Repairs", icon: "Electrical" },
      { slug: "electrical-wiring-rewiring", title: "Wiring & Rewiring", icon: "Rewiring" },
      { slug: "panel-replacements-upgrades", title: "Panel Replacements & Upgrades", icon: "Electrical Panel" },
      { slug: "electrical-safety-inspections", title: "Electrical Safety Inspections", icon: "Electrical Inspection" },
      { slug: "electrical-safety-devices", title: "Electrical Safety Devices", icon: "Surge Protection" },
      { slug: "surge-protection", title: "Whole-Home Surge Protection", icon: "Surge Protection" },
      { slug: "switches-outlets-dimmers", title: "Switches, Outlets & Dimmers", icon: "Switch" },
      { slug: "interior-specialty-lighting", title: "Interior & Specialty Lighting", icon: "Lighting" },
      { slug: "electric-vehicle-chargers", title: "EV Chargers", icon: "EV Charger" },
      { slug: "whole-home-automatic-standby-generators", title: "Standby Generators", icon: "Generator" },
    ],
  },
];

export const verticalBySlug = new Map(verticals.map((v) => [v.slug, v]));

export function findSubservice(slug: string) {
  for (const v of verticals) {
    const sub = v.subservices.find((s) => s.slug === slug || s.slug.endsWith("/" + slug));
    if (sub) return { vertical: v, sub };
  }
  return null;
}
