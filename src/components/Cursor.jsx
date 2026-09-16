import { useEffect, useRef } from "react";

/** Reticle cursor for desktop pointer users — a dot that tracks the mouse
    exactly plus a ring that trails it, replacing the OS arrow so the
    HUD/targeting framing holds up right down to the pointer. Skipped on
    touch devices and under reduced motion, where the OS cursor stays.

    Doesn't trust matchMedia("(pointer: fine)") to tell touch from mouse —
    iPadOS reports that as true for plain touch with no mouse attached, so
    it used to switch this on, get one synthetic tap-to-mouse event, and
    then never hear from a real mousemove again, leaving the reticle
    parked wherever that tap happened to land. Pointer Events report the
    real device per-event, so we just wait for one that says "mouse". */
export default function Cursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let active = false;
    let x = 0, y = 0, ringX = 0, ringY = 0, raf;

    const tick = () => {
      ringX += (x - ringX) * 0.22;
      ringY += (y - ringY) * 0.22;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`;
      }
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%)`;
      }
      raf = requestAnimationFrame(tick);
    };

    const activate = () => {
      if (active) return;
      active = true;
      document.documentElement.classList.add("custom-cursor");
      raf = requestAnimationFrame(tick);
    };

    const onMove = (e) => {
      if (e.pointerType !== "mouse") return;
      x = e.clientX; y = e.clientY;
      activate();
    };
    const onDown = (e) => { if (e.pointerType === "mouse") ringRef.current?.classList.add("is-active"); };
    const onUp = (e) => { if (e.pointerType === "mouse") ringRef.current?.classList.remove("is-active"); };

    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerdown", onDown);
    window.addEventListener("pointerup", onUp);

    return () => {
      document.documentElement.classList.remove("custom-cursor");
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerdown", onDown);
      window.removeEventListener("pointerup", onUp);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div aria-hidden="true">
      <span ref={dotRef} className="cursor-dot" />
      <span ref={ringRef} className="cursor-ring" />
    </div>
  );
}
