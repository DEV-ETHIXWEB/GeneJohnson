// Fires a dataLayer event (and a GA4 generate_lead event, once configured -
// see analytics.ts) whenever a form marked data-track-form is submitted.
// Never blocks or delays the real submission: this only reads form data and
// pushes an event, it does not call preventDefault(), so forms keep working
// exactly the same (POST to Formspree) whether or not analytics is wired up.
// Window.dataLayer/gtag are typed in src/env.d.ts.
window.dataLayer = window.dataLayer || [];

document.addEventListener("submit", (event) => {
  const form = event.target as HTMLFormElement;
  if (!(form instanceof HTMLFormElement) || !form.dataset.trackForm) return;

  const formName = form.dataset.trackForm;
  const data = new FormData(form);
  const services = data.getAll("services").map(String);
  const otherText = data.get("service_other");

  const payload = {
    event: "form_submit",
    form_name: formName,
    services,
    has_other: services.includes("Other"),
    other_detail: typeof otherText === "string" && otherText.trim() ? otherText.trim() : undefined,
    page_path: window.location.pathname,
  };

  window.dataLayer.push(payload);
  window.gtag?.("event", "generate_lead", {
    form_name: formName,
    services: services.join(", "),
  });
});
