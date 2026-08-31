import { chromium } from "playwright";

const url = process.argv[2] ?? "http://localhost:4321/";
const out = process.argv[3] ?? "/tmp/screenshot.png";
const fullPage = process.argv[4] !== "viewport";

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
const errors = [];
page.on("console", (msg) => {
  if (msg.type() === "error") errors.push(msg.text());
});
page.on("pageerror", (err) => errors.push(String(err)));

await page.goto(url, { waitUntil: "networkidle" });
await page.waitForTimeout(500);

// Scroll incrementally so GSAP ScrollTrigger reveal animations actually fire
// (CDP full-page capture alone doesn't dispatch real scroll events).
const height = await page.evaluate(() => document.body.scrollHeight);
for (let y = 0; y < height; y += 400) {
  await page.evaluate((yy) => window.scrollTo(0, yy), y);
  await page.waitForTimeout(60);
}
await page.evaluate(() => window.scrollTo(0, 0));
await page.waitForTimeout(300);

await page.screenshot({ path: out, fullPage });
await browser.close();

console.log("Saved:", out);
if (errors.length) {
  console.log("Console errors:");
  errors.forEach((e) => console.log(" -", e));
} else {
  console.log("No console errors.");
}
