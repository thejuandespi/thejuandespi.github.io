import { SECTIONS } from "../data/content";
import { scrollToId } from "../lib/scroll";

/** Floating section nav pinned to the right edge on wide screens. */
export default function Dock({ active }) {
  return (
    <nav
      className="dock fixed right-4 top-1/2 -translate-y-1/2 z-70 hidden xl:flex flex-col items-end gap-2"
      aria-label="Jump to section"
    >
      {SECTIONS.map((s) => (
        <a
          key={s.id}
          href={"#" + s.id}
          aria-current={active === s.id ? "true" : undefined}
          onClick={(e) => {
            e.preventDefault();
            scrollToId(s.id);
          }}
        >
          <span className="lb">{s.label}</span>
          <span className="tk" aria-hidden="true" />
        </a>
      ))}
    </nav>
  );
}
