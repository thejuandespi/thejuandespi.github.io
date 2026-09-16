import { useEffect, useState } from "react";
import { ME, SECTIONS } from "../data/content";

const CV = ME.cv;
import { scrollToId } from "../lib/scroll";
import { useScrollProgress } from "../hooks/useScrollProgress";

function Sun() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <circle cx="12" cy="12" r="4.2" />
      <path d="M12 2v2.6M12 19.4V22M2 12h2.6M19.4 12H22M4.9 4.9l1.9 1.9M17.2 17.2l1.9 1.9M19.1 4.9l-1.9 1.9M6.8 17.2l-1.9 1.9" />
    </svg>
  );
}
function Moon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <path d="M20 14.2A8.4 8.4 0 1 1 9.8 4a6.8 6.8 0 0 0 10.2 10.2Z" />
    </svg>
  );
}

const HAZARD_COUNT = 60;

export default function Nav({ active, theme, onTheme, onOpenPalette }) {
  const [open, setOpen] = useState(false);
  const pct = useScrollProgress();

  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const go = (e, id) => {
    e.preventDefault();
    setOpen(false);
    scrollToId(id);
  };

  return (
    <>
      <header className="nav fixed inset-x-0 top-0 z-[100] h-[var(--nav-h)] border-b border-line">
        <div className="wrap h-[var(--nav-h)] flex items-center gap-6">
          <a href="#home" onClick={(e) => go(e, "home")} className="flex items-center gap-2.5 mr-auto no-underline">
            <span className="brand-mark" aria-hidden="true">JD</span>
            <span className="text-[1.02rem] font-bold" style={{ fontStretch: "84%" }}>
              Despi <span className="text-muted font-medium">/ Salesforce</span>
            </span>
          </a>

          <nav className="hidden lg:flex items-center gap-0.5" aria-label="Sections">
            {SECTIONS.map((s) => (
              <a
                key={s.id}
                href={"#" + s.id}
                className="nav-link mono"
                aria-current={active === s.id ? "true" : undefined}
                onClick={(e) => go(e, s.id)}
              >
                <i aria-hidden="true">{s.code}</i>
                {s.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-1.5">
            {/* .btn sets display, so the responsive hide lives on a wrapper */}
            <span className="hidden sm:block">
              <a className="btn btn-ghost py-2 px-3.5 text-[0.82rem]" href={CV} download>
                CV
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path d="M12 3v13m0 0 5-5m-5 5-5-5M4 20h16" />
                </svg>
              </a>
            </span>
            <button
              type="button"
              className="icon-btn icon-btn-wide mono hidden sm:inline-flex"
              onClick={onOpenPalette}
              aria-label="Open command palette"
            >
              &gt;_ <kbd className="mono">&#8984;K</kbd>
            </button>
            <button
              className="icon-btn"
              onClick={onTheme}
              aria-pressed={theme === "light"}
              aria-label={theme === "dark" ? "Switch to light theme" : "Switch to dark theme"}
            >
              {theme === "dark" ? <Sun /> : <Moon />}
            </button>
            <button
              className="icon-btn lg:hidden"
              onClick={() => setOpen(!open)}
              aria-expanded={open}
              aria-controls="drawer"
              aria-label={open ? "Close menu" : "Open menu"}
            >
              {open ? (
                <svg width="16" height="16" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path d="M5 5l14 14M19 5L5 19" />
                </svg>
              ) : (
                <svg width="16" height="16" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path d="M3 7h18M3 12h18M3 17h18" />
                </svg>
              )}
            </button>
          </div>

          <div className="hazard-progress" aria-hidden="true">
            {Array.from({ length: HAZARD_COUNT }, (_, i) => (
              <span key={i} className={`hazard-seg${i < Math.round((pct / 100) * HAZARD_COUNT) ? " lit" : ""}`} />
            ))}
          </div>
        </div>
      </header>

      <div
        id="drawer"
        className={`fixed inset-x-0 top-[var(--nav-h)] z-[99] bg-bg2 border-b border-line pt-2 pb-4 ${open ? "block" : "hidden"}`}
      >
        <div className="wrap">
          {SECTIONS.map((s) => (
            <a
              key={s.id}
              href={"#" + s.id}
              onClick={(e) => go(e, s.id)}
              className="flex justify-between items-center py-3.5 border-b border-line last:border-b-0 no-underline text-[1.15rem] font-bold"
              style={{ fontStretch: "84%" }}
            >
              {s.label}
              <span className="mono text-muted">{s.code}</span>
            </a>
          ))}
          <a
            href={CV}
            download
            className="flex justify-between items-center py-3.5 no-underline text-[1.15rem] font-bold text-accent"
            style={{ fontStretch: "84%" }}
          >
            Download CV
            <span className="mono">PDF</span>
          </a>
        </div>
      </div>
    </>
  );
}
