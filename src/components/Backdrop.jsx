import { useEffect } from "react";

const PARALLAX_PX = 34;

/** Nudges --mx/--my toward the cursor position (in px of drift, -PARALLAX_PX..PARALLAX_PX),
    smoothed with a lerp so the gradient trails the mouse instead of snapping to it. */
function useGradientParallax() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const root = document.documentElement;
    let targetX = 0, targetY = 0;
    let curX = 0, curY = 0;
    let raf = null;

    const onMove = (e) => {
      targetX = (e.clientX / window.innerWidth - 0.5) * 2 * PARALLAX_PX;
      targetY = (e.clientY / window.innerHeight - 0.5) * 2 * PARALLAX_PX;
    };

    const tick = () => {
      curX += (targetX - curX) * 0.06;
      curY += (targetY - curY) * 0.06;
      root.style.setProperty("--mx", curX.toFixed(2));
      root.style.setProperty("--my", curY.toFixed(2));
      raf = requestAnimationFrame(tick);
    };

    window.addEventListener("mousemove", onMove);
    raf = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);
}

/** Page-wide heat-map wash plus the film grain sheet. */
export default function Backdrop() {
  useGradientParallax();

  return (
    <>
      <div className="ambient" aria-hidden="true">
        <div className="melt">
          <span className="a1" />
          <span className="a2" />
          <span className="a3" />
        </div>
      </div>
      <div className="grain" aria-hidden="true" />
    </>
  );
}
