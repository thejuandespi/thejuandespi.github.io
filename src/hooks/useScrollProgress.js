import { useEffect, useState } from "react";

/** 0–100 reading progress, used for the hairline under the nav. */
export function useScrollProgress() {
  const [pct, setPct] = useState(0);

  useEffect(() => {
    let raf = null;
    const measure = () => {
      raf = null;
      const h = document.documentElement.scrollHeight - window.innerHeight;
      setPct(h > 0 ? Math.min(100, (window.scrollY / h) * 100) : 0);
    };
    const onScroll = () => {
      if (raf == null) raf = requestAnimationFrame(measure);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    measure();
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (raf != null) cancelAnimationFrame(raf);
    };
  }, []);

  return pct;
}
