export interface Testimonial {
  name: string;
  location: string;
  rating: number;
  text: string;
  service: string;
}

export const testimonials: Testimonial[] = [
  { name: "Karen S.", location: "Shoreline, WA", rating: 5, text: "Our water heater died on a Sunday night and they had someone out first thing Monday morning. Upfront pricing, no surprises, and the tech explained everything before starting.", service: "Water Heater Replacement" },
  { name: "Marcus T.", location: "Bellevue, WA", rating: 5, text: "Called for a slow drain and they found a much bigger sewer issue with a camera before it became a real emergency. Genuinely grateful they caught it early.", service: "Drain & Sewer" },
  { name: "Priya R.", location: "Everett, WA", rating: 5, text: "Panel upgrade for our new EV charger was done in a day, inspected and passed with no issues. Electrician walked us through exactly what he was doing.", service: "Electrical Panel Upgrade" },
  { name: "David L.", location: "West Seattle, WA", rating: 5, text: "First time getting AC installed in our 1920s house with no ductwork. The ductless mini-split system works better than we expected and installation was clean.", service: "Ductless AC Installation" },
  { name: "Jennifer W.", location: "Kirkland, WA", rating: 5, text: "Family owned and it shows - they treated our 100-year-old boiler system like it mattered, not just another job to rush through.", service: "Boiler Repair" },
  { name: "Tom H.", location: "Tacoma, WA", rating: 5, text: "Emergency call at 11pm for a burst pipe and someone actually picked up and walked me through shutting off the water. Truck arrived within the hour.", service: "Emergency Plumbing" },
];
