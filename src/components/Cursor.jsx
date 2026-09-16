import { useEffect, useRef } from "react";

/** Reticle cursor for desktop pointer users — a dot that tracks the mouse
    exactly plus a ring that trails it, replacing the OS arrow so the
    HUD/targeting framing holds up right down to the pointer. Skipped on
    touch devices and under reduced motion, where the OS cursor stays. */
export default function Cursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduced) return;

    document.documentElement.classList.add("custom-cursor");

    let x = 0, y = 0, ringX = 0, ringY = 0, raf;

    const onMove = (e) => { x = e.clientX; y = e.clientY; };
    const onDown = () => ringRef.current?.classList.add("is-active");
    const onUp = () => ringRef.current?.classList.remove("is-active");

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

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);
    raf = requestAnimationFrame(tick);

    return () => {
      document.documentElement.classList.remove("custom-cursor");
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
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
