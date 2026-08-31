import Fuse from "fuse.js";

interface ChatEntry {
  title: string;
  url: string;
  excerpt: string;
  keywords: string;
}

interface ChatMessage {
  role: "user" | "bot";
  html: string;
}

document.addEventListener("alpine:init", () => {
  // @ts-expect-error - Alpine attaches itself to window at runtime
  window.Alpine.data("gjChat", () => ({
    open: false,
    input: "",
    loading: false,
    fuse: null as Fuse<ChatEntry> | null,
    phoneDisplay: "",
    phoneHref: "",
    messages: [] as ChatMessage[],

    init() {
      const root = this.$root as HTMLElement;
      this.phoneDisplay = root.dataset.phoneDisplay ?? "";
      this.phoneHref = root.dataset.phoneHref ?? "";
      this.messages = [
        {
          role: "bot",
          html: `Hi! I can help you find the right service page, check our coverage area, or point you to an offer. For anything urgent, call <a href="${this.phoneHref}" class="font-semibold text-brand-red-600">${this.phoneDisplay}</a> directly.`,
        },
      ];

      fetch("/api/chat-index.json")
        .then((r) => r.json())
        .then((data: ChatEntry[]) => {
          this.fuse = new Fuse(data, {
            keys: [
              { name: "title", weight: 2 },
              { name: "keywords", weight: 1.5 },
              { name: "excerpt", weight: 1 },
            ],
            threshold: 0.4,
            ignoreLocation: true,
          });
        })
        .catch(() => {});
    },

    toggle() {
      this.open = !this.open;
    },

    scrollDown() {
      this.$nextTick(() => {
        const el = this.$refs.scrollArea as HTMLElement | undefined;
        if (el) el.scrollTop = el.scrollHeight;
      });
    },

    escapeHtml(s: string) {
      const div = document.createElement("div");
      div.textContent = s;
      return div.innerHTML;
    },

    intentReply(text: string): string | null {
      const t = text.toLowerCase();
      if (/(hour|open|24\s*\/?\s*7|available)/.test(t)) {
        return `We're available 24/7 for emergencies, and standard appointments run every day. Call <a href="${this.phoneHref}" class="font-semibold text-brand-red-600">${this.phoneDisplay}</a> any time.`;
      }
      if (/(emergency|urgent|burst|flood|no water|no heat|leak)/.test(t)) {
        return `That sounds urgent — please call us directly at <a href="${this.phoneHref}" class="font-semibold text-brand-red-600">${this.phoneDisplay}</a> rather than waiting on a chat reply. You can also see what counts as an emergency on our <a href="/emergency-plumbing/" class="font-semibold text-brand-red-600">Emergency Plumbing</a> page.`;
      }
      if (/(cost|price|pricing|how much|estimate|quote)/.test(t)) {
        return `Pricing depends on the job — we always give upfront pricing before any work starts, with a free in-home estimate for most projects. Check <a href="/coupons/" class="font-semibold text-brand-red-600">current coupons</a> or <a href="/schedule-now/" class="font-semibold text-brand-red-600">request service</a> to get a real number.`;
      }
      if (/(area|serve|city|location|zip|near me)/.test(t)) {
        return `We cover the greater Puget Sound area — Seattle, the Eastside, North Sound, and South Sound. See the full list on our <a href="/service-area/" class="font-semibold text-brand-red-600">Service Area</a> page.`;
      }
      return null;
    },

    ask(text: string) {
      const q = (text || "").trim();
      if (!q) return;
      this.messages.push({ role: "user", html: this.escapeHtml(q) });
      this.input = "";
      this.loading = true;
      this.scrollDown();

      setTimeout(() => {
        const direct = this.intentReply(q);
        if (direct) {
          this.messages.push({ role: "bot", html: direct });
        } else if (this.fuse) {
          const results = this.fuse.search(q).slice(0, 3);
          if (results.length) {
            const list = results
              .map(
                (r) =>
                  `<a href="${r.item.url}" class="block font-semibold text-brand-red-600 hover:text-brand-red-700">${this.escapeHtml(r.item.title)}</a><span class="text-ink-500">${this.escapeHtml(r.item.excerpt)}</span>`
              )
              .join('<div class="my-2 h-px bg-navy-900/10"></div>');
            this.messages.push({ role: "bot", html: `Here's what I found:<div class="mt-2 space-y-1">${list}</div>` });
          } else {
            this.messages.push({
              role: "bot",
              html: `I couldn't find an exact match on the site for that. Try rephrasing, browse our <a href="/plumbing/" class="font-semibold text-brand-red-600">services</a>, or call <a href="${this.phoneHref}" class="font-semibold text-brand-red-600">${this.phoneDisplay}</a> and we'll help directly.`,
            });
          }
        } else {
          this.messages.push({ role: "bot", html: "Search is still loading — try again in a second, or call us directly." });
        }
        this.loading = false;
        this.scrollDown();
      }, 350);
    },
  }));
});
