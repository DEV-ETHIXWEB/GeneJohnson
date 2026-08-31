export interface Offer {
  title: string;
  detail: string;
  code: string;
  icon: string;
}

export const offers: Offer[] = [
  { title: "$150 Off Drain Clearing", detail: "For new customers on any drain clearing service.", icon: "Drain Cleaning", code: "GJ-DRAIN150" },
  { title: "$500 Instant Rebate", detail: "On qualifying tankless water heater installations.", icon: "Tankless Water Heater", code: "GJ-TANKLESS500" },
  { title: "$500 Off Sewer or Waterline Replacement", detail: "On qualifying full-line replacement projects.", icon: "Sewer Line", code: "GJ-SEWER500" },
  { title: "Free Diagnostics With Repair", detail: "Diagnostic fee waived when you move forward with the repair.", icon: "Free Diagnostics", code: "GJ-FREEDIAG" },
  { title: "Buy 3, Get the 4th Free", detail: "On bathroom fixtures purchased and installed together.", icon: "Water Line", code: "GJ-BUY3GET1" },
  { title: "No Payments for 12 Months", detail: "On approved HVAC financing for qualifying installations.", icon: "Maintenance Plan", code: "GJ-NOPAY12" },
  { title: "5% Off for Heroes", detail: "Senior, military, and first responder discounts, every day.", icon: "Insured", code: "GJ-HEROES5" },
  { title: "We Fix It or You Don't Pay", detail: "Our standing guarantee on every completed repair.", icon: "Fixed Right Guarantee", code: "GJ-GUARANTEE" },
];
