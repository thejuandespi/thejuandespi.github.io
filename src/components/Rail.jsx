import { useEffect, useState } from "react";

/** True once #home has scrolled fully out of the viewport. */
function useHeroCleared() {
  const [cleared, setCleared] = useState(false);

  useEffect(() => {
    const hero = document.getElementById("home");
    if (!hero) return;
    const io = new IntersectionObserver(
      ([entry]) => setCleared(!entry.isIntersecting),
      { threshold: 0 }
    );
    io.observe(hero);
    return () => io.disconnect();
  }, []);

  return cleared;
}

/** Decorative status rail on the left edge of very wide screens. Stays hidden
    over the hero so it doesn't compete with the name block, then fades in
    once the hero has scrolled out of view. */
export default function Rail() {
  const pastHero = useHeroCleared();

  return (
    <div
      className={`rail mono fixed left-3.5 inset-y-0 z-60 hidden 3xl:flex flex-col items-center justify-center gap-4 pointer-events-none transition-opacity duration-700 ease-out ${
        pastHero ? "opacity-100" : "opacity-0"
      }`}
      aria-hidden="true"
    >
      <span className="vt lig">Cebu -&gt; UTC+8</span>
      <span className="w-px h-[70px] bg-line2" />
      <span className="dot w-1.5 h-1.5 bg-signal" />
      <span className="w-px h-[70px] bg-line2" />
      <span className="vt lig">portfolio :: v2 // 2026</span>
    </div>
  );
}
