export const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/** Smooth-scrolls to a section and moves focus there for keyboard users. */
export function scrollToId(id) {
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({
    behavior: prefersReducedMotion() ? "auto" : "smooth",
    block: "start"
  });
  el.setAttribute("tabindex", "-1");
  el.focus({ preventScroll: true });
  try {
    history.replaceState(null, "", "#" + id);
  } catch {
    /* ignore: blocked in sandboxed frames */
  }
}
