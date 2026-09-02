// Google Analytics 4 - opt-in via PUBLIC_GA_MEASUREMENT_ID (see .env.example).
// window.dataLayer is always initialized (the standard GTM/GA data layer -
// cheap, and lets form-tracking.ts queue events safely even before this is
// configured), but the actual gtag.js script tag only loads, and gtag()
// only fires, once a real measurement ID is set. Nothing is fetched or sent
// anywhere until then. Window.dataLayer/gtag are typed in src/env.d.ts.
window.dataLayer = window.dataLayer || [];

const measurementId = import.meta.env.PUBLIC_GA_MEASUREMENT_ID;

if (measurementId) {
  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
  document.head.appendChild(script);

  window.gtag = function gtag(...args: unknown[]) {
    window.dataLayer.push(args);
  };
  window.gtag("js", new Date());
  window.gtag("config", measurementId);
}
