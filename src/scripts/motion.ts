import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

gsap.registerPlugin(ScrollTrigger);

let lenis: Lenis | null = null;
let rafId: number | null = null;
let observers: IntersectionObserver[] = [];

const reducedMotion = () => window.matchMedia("(prefers-reduced-motion: reduce)").matches;

function initLenis() {
  if (reducedMotion()) return;

  lenis = new Lenis({
    duration: 1.1,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smoothWheel: true,
  });

  lenis.on("scroll", ScrollTrigger.update);

  function raf(time: number) {
    lenis?.raf(time);
    rafId = requestAnimationFrame(raf);
  }
  rafId = requestAnimationFrame(raf);
}

function destroyLenis() {
  if (rafId) cancelAnimationFrame(rafId);
  lenis?.destroy();
  lenis = null;
}

// Content reveal uses IntersectionObserver rather than GSAP ScrollTrigger's
// scroll-position math: it fires as soon as an element is laid out within
// the viewport (or a generous rootMargin), even with no real scroll event -
// which matters because it keeps content from staying hidden for a crawler
// or any renderer that doesn't dispatch native scroll events. ScrollTrigger
// is reserved below for purely decorative, already-visible effects
// (parallax, pinning) where nothing is gated on scroll for it to be seen.
function revealOnScroll() {
  const items = document.querySelectorAll<HTMLElement>("[data-animate]");
  if (!items.length) return;

  if (reducedMotion()) {
    items.forEach((el) => el.style.opacity = "1");
    return;
  }

  const io = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const el = entry.target as HTMLElement;
        const delay = Number(el.dataset.delay ?? 0);
        gsap.fromTo(el, { opacity: 0, y: 32 }, { opacity: 1, y: 0, duration: 0.9, delay, ease: "power3.out" });
        obs.unobserve(el);
      });
    },
    { rootMargin: "0px 0px -10% 0px", threshold: 0.01 }
  );
  items.forEach((el) => io.observe(el));
  observers.push(io);
}

function staggerGroups() {
  const groups = document.querySelectorAll<HTMLElement>("[data-animate-group]");
  if (!groups.length) return;

  if (reducedMotion()) {
    document.querySelectorAll<HTMLElement>("[data-animate-item]").forEach((el) => (el.style.opacity = "1"));
    return;
  }

  const io = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const group = entry.target as HTMLElement;
        const children = group.querySelectorAll<HTMLElement>("[data-animate-item]");
        gsap.fromTo(
          children,
          { opacity: 0, y: 24 },
          { opacity: 1, y: 0, duration: 0.7, stagger: 0.08, ease: "power3.out" }
        );
        obs.unobserve(group);
      });
    },
    { rootMargin: "0px 0px -10% 0px", threshold: 0.01 }
  );
  groups.forEach((el) => io.observe(el));
  observers.push(io);
}

// Counters render their real target value as static text (see components) -
// this only animates the displayed number up from 0 as a visual flourish,
// so the correct figure is always present even if JS never runs.
function countUp() {
  const counters = document.querySelectorAll<HTMLElement>("[data-count-to]");
  if (!counters.length || reducedMotion()) return;

  const io = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const el = entry.target as HTMLElement;
        const target = Number(el.dataset.countTo ?? el.textContent ?? 0);
        const obj = { val: 0 };
        gsap.to(obj, {
          val: target,
          duration: 1.6,
          ease: "power2.out",
          onUpdate: () => (el.textContent = Math.floor(obj.val).toLocaleString()),
        });
        obs.unobserve(el);
      });
    },
    { threshold: 0.5 }
  );
  counters.forEach((el) => io.observe(el));
  observers.push(io);
}

// Decorative only - nothing here gates content visibility, so it's fine if
// it never fires for a renderer that doesn't dispatch scroll events.
function heroParallax() {
  const heroes = gsap.utils.toArray<HTMLElement>("[data-parallax]");
  heroes.forEach((el) => {
    const speed = Number(el.dataset.parallax ?? 0.3);
    gsap.to(el, {
      yPercent: speed * 100,
      ease: "none",
      scrollTrigger: {
        trigger: el.parentElement ?? el,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });
  });
}

function heroIntro() {
  const heroTitle = document.querySelector<HTMLElement>("[data-hero-title]");
  if (heroTitle) {
    const words = heroTitle.querySelectorAll<HTMLElement>("[data-word]");
    if (words.length && !reducedMotion()) {
      gsap.fromTo(
        words,
        { opacity: 0, y: 40, rotateX: -40 },
        { opacity: 1, y: 0, rotateX: 0, duration: 0.9, stagger: 0.06, ease: "power4.out", delay: 0.1 }
      );
    }
  }

  const rest = document.querySelectorAll<HTMLElement>("[data-hero-fade]");
  if (rest.length && !reducedMotion()) {
    gsap.fromTo(
      rest,
      { opacity: 0, y: 24 },
      { opacity: 1, y: 0, duration: 0.8, stagger: 0.1, delay: 0.4, ease: "power3.out" }
    );
  }
}

function magneticButtons() {
  if (reducedMotion()) return;
  const buttons = document.querySelectorAll<HTMLElement>("[data-magnetic]");
  buttons.forEach((btn) => {
    const strength = 18;
    function move(e: MouseEvent) {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      gsap.to(btn, { x: (x / rect.width) * strength, y: (y / rect.height) * strength, duration: 0.3, ease: "power2.out" });
    }
    function reset() {
      gsap.to(btn, { x: 0, y: 0, duration: 0.4, ease: "elastic.out(1, 0.4)" });
    }
    btn.addEventListener("mousemove", move);
    btn.addEventListener("mouseleave", reset);
  });
}

function marquee() {
  const tracks = document.querySelectorAll<HTMLElement>("[data-marquee-track]");
  tracks.forEach((track) => {
    if (track.dataset.marqueeInit) return;
    track.dataset.marqueeInit = "1";
    track.innerHTML += track.innerHTML;
  });
}

function cleanup() {
  destroyLenis();
  ScrollTrigger.getAll().forEach((t) => t.kill());
  observers.forEach((o) => o.disconnect());
  observers = [];
}

export function initMotion() {
  cleanup();
  initLenis();
  marquee();
  heroIntro();
  heroParallax();
  revealOnScroll();
  staggerGroups();
  countUp();
  magneticButtons();
  ScrollTrigger.refresh();
}

document.addEventListener("astro:page-load", initMotion);
document.addEventListener("astro:before-swap", cleanup);
