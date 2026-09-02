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
  overview: string[];
  signs: string[];
  faqs: { q: string; a: string }[];
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
    overview: [
      "Seattle and the greater Puget Sound sit on a mix of clay soil, mature tree roots, and homes built anywhere from the 1920s to today, which means our plumbers see everything from cast-iron sewer lines choked with root intrusion to modern PEX repipes that still need a second opinion. Whatever decade your house was built in, our licensed plumbers know the local permitting requirements, the quirks of our regional water hardness, and the drainage challenges that come with a genuinely rainy climate.",
      "Every plumbing visit starts with a real diagnosis, not a guess. We inspect the affected fixture or line, explain what we find in plain language, and give you an upfront, flat-rate quote before any tool touches your pipes. If the fix turns out to be bigger than expected, you'll know before we start, not after we've already opened a wall.",
    ],
    signs: [
      "Water pressure that's dropped noticeably over the last few months",
      "Slow drains in more than one fixture at the same time",
      "A water heater older than 10 years, or one that's making noise",
      "Warm spots on the floor, or an unexplained spike in your water bill",
      "Gurgling toilets or sewer smells near floor drains",
      "Visible corrosion, rust-colored water, or pinhole leaks in exposed pipe",
    ],
    faqs: [
      { q: "How quickly can you get a plumber to my home?", a: "We offer same-day service throughout the Puget Sound area for most calls, and true 24/7 dispatch for emergencies like burst pipes or sewage backups." },
      { q: "Do you provide upfront pricing before starting work?", a: "Yes. You'll receive a flat-rate quote after we diagnose the issue and before any repair begins, so there are no hourly surprises." },
      { q: "Are your plumbers licensed and insured?", a: "Every plumber we send is licensed, bonded, and insured, and trained specifically on the plumbing systems common in older and newer Puget Sound homes." },
      { q: "Can you inspect my sewer line with a camera before I buy a home?", a: "Yes, we offer drain camera scoping so you can see the exact condition of a sewer line before it becomes an expensive surprise." },
      { q: "What happens if the repair turns out to be bigger than expected?", a: "We'll stop, explain what we found, and walk you through your options and pricing before continuing - you make the call." },
    ],
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
      { slug: "septic-tank-services", title: "Septic Tank Services", icon: "Sewer Line" },
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
    overview: [
      "Puget Sound winters rarely hit extreme lows, but the damp, mild cold means heating systems here run for months at a lower, steadier load than in harsher climates, which is exactly why furnaces, heat pumps, and boilers in our region tend to get neglected until they fail outright. We service every major heating system, from gas furnaces to radiant floor heat, with technicians trained on the specific equipment installed in Puget Sound homes.",
      "Because so many homes in our service area still run older gas or oil furnaces alongside newer heat pump systems, we don't push a one-size-fits-all replacement. We'll tell you honestly whether a repair, a tune-up, or a full replacement makes the most sense for your system's age, efficiency, and your budget.",
    ],
    signs: [
      "Uneven heating between rooms or floors",
      "Furnace or heat pump running constantly without reaching the set temperature",
      "A spike in your gas or electric bill with no other explanation",
      "Strange smells, banging, or rattling when the system starts",
      "A system older than 15 years that hasn't had a professional tune-up",
      "A thermostat that won't hold a consistent temperature",
    ],
    faqs: [
      { q: "How often should my furnace or heat pump be serviced?", a: "We recommend a professional tune-up once a year, ideally before the heating season starts, to catch small issues before they become costly repairs." },
      { q: "Do you repair both gas furnaces and heat pumps?", a: "Yes, our technicians are trained and certified on gas furnaces, heat pumps, boilers, and radiant heating systems." },
      { q: "Is it better to repair my furnace or replace it?", a: "It depends on the age, efficiency, and repair history of your system - we'll walk you through the real cost comparison so you can decide with full information." },
      { q: "Do you offer financing on furnace or heat pump replacement?", a: "Yes, we offer financing options for qualified customers on new system installations - ask your technician for current offers." },
      { q: "Can you install a smart thermostat?", a: "Yes, we install and configure smart thermostats compatible with most heating systems, and can walk you through using it the same day." },
    ],
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
    overview: [
      "Air conditioning used to be optional in Seattle - it isn't anymore. As Puget Sound summers bring longer stretches of 85-plus degree heat, homes that were never built with cooling in mind now need a real solution, and many don't have existing ductwork to run a traditional central AC system. We size and install cooling systems specifically for homes like these, including ductless mini-split systems that require no ductwork at all.",
      "Because so much of our service area has older housing stock without central air, we spend real time upfront figuring out which cooling approach fits your home's layout and budget, not just quoting the biggest system we can sell. That includes indoor air quality add-ons for homes affected by wildfire smoke season, which has become a bigger concern for Puget Sound homeowners in recent years.",
    ],
    signs: [
      "No cooling system at all, or window units that can't keep up",
      "AC running constantly but the home still feels warm",
      "Uneven cooling between floors or rooms",
      "Rising energy bills during summer months",
      "Poor indoor air quality, especially during wildfire smoke season",
      "An AC system older than 12-15 years",
    ],
    faqs: [
      { q: "Can you install AC in a home with no existing ductwork?", a: "Yes, ductless mini-split heat pumps are one of our most common installs for exactly this situation - no ductwork required." },
      { q: "How long does a typical AC installation take?", a: "Most single-system installations are completed in one day; larger or multi-zone ductless systems may take one to two days." },
      { q: "Do you service all AC brands?", a: "We install and repair most major residential AC and ductless mini-split brands." },
      { q: "What size AC system does my home need?", a: "We perform a load calculation based on your home's square footage, insulation, and layout rather than guessing off square footage alone." },
      { q: "Can a mini-split system also help with air quality?", a: "Yes, many ductless systems include built-in filtration, and we also offer standalone UV air sanitizers and filtration upgrades." },
    ],
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
    overview: [
      "A lot of Puget Sound housing stock predates modern electrical demand entirely - homes wired in the 1950s through 1970s were never designed for today's mix of EV chargers, home offices, and always-on electronics. Our licensed electricians regularly find outdated panels, aluminum wiring, and ungrounded outlets in homes that look perfectly normal on the surface, and we bring them up to current code safely.",
      "Electrical work isn't a place to cut corners, so every job, from a single outlet swap to a full panel upgrade, is performed by a licensed electrician, inspected against current code, and backed by our workmanship warranty. If a repair reveals a safety issue elsewhere in your system, we'll tell you plainly instead of quietly working around it.",
    ],
    signs: [
      "Breakers that trip repeatedly, or lights that flicker",
      "A panel more than 20-25 years old, or one with a Federal Pacific or Zinsco label",
      "Outlets that feel warm, buzz, or show scorch marks",
      "Not enough outlets or circuits for modern appliances and electronics",
      "Plans to add an EV charger, generator, or major appliance",
      "No GFCI or AFCI protection in kitchens, bathrooms, or bedrooms",
    ],
    faqs: [
      { q: "How do I know if my electrical panel needs to be replaced?", a: "Warning signs include frequent breaker trips, a panel over 20-25 years old, or certain older panel brands with known safety issues - we can inspect yours and tell you honestly whether it needs replacing." },
      { q: "Can you install an EV charger at my home?", a: "Yes, we install Level 2 EV chargers and can evaluate whether your existing panel has enough capacity or needs an upgrade first." },
      { q: "Do you offer whole-home surge protection?", a: "Yes, we install whole-home surge protection at the panel level to protect everything from major appliances to sensitive electronics." },
      { q: "Are your electricians licensed for residential work in Washington?", a: "Yes, every electrician we send is licensed, bonded, and insured for residential electrical work in Washington State." },
      { q: "Can you install a backup generator?", a: "Yes, we install whole-home automatic standby generators, sized to your home's actual power needs." },
    ],
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
