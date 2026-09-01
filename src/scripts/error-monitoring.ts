// Client-side error monitoring - opt-in via PUBLIC_SENTRY_DSN (see .env.example).
// Nothing is imported or sent anywhere if that var is unset, so this costs
// zero bytes and does nothing until a real Sentry project is wired up.
const dsn = import.meta.env.PUBLIC_SENTRY_DSN;

if (dsn) {
  import("@sentry/browser").then(({ init, captureConsoleIntegration }) => {
    init({
      dsn,
      environment: import.meta.env.MODE,
      tracesSampleRate: 0,
      integrations: [captureConsoleIntegration({ levels: ["error"] })],
    });
  });
}
