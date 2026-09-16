import { useEffect, useMemo, useRef, useState } from "react";
import { ME, SECTIONS } from "../data/content";
import { scrollToId } from "../lib/scroll";

/** Cmd/Ctrl+K terminal-style jump list — go to a section or run a quick
    action without leaving the keyboard. Controlled by the parent so a nav
    button can open it too, not just the shortcut. */
export default function CommandPalette({ theme, onTheme, open, onOpenChange }) {
  const [query, setQuery] = useState("");
  const [index, setIndex] = useState(0);
  const inputRef = useRef(null);
  const returnFocusRef = useRef(null);

  const commands = useMemo(() => [
    ...SECTIONS.map((s) => ({
      id: "go-" + s.id,
      label: "Go to " + s.label,
      hint: s.code,
      run: () => scrollToId(s.id)
    })),
    {
      id: "theme",
      label: theme === "dark" ? "Switch to light theme" : "Switch to dark theme",
      hint: "ui",
      run: onTheme
    },
    { id: "cv", label: "Download CV", hint: "pdf", run: () => { window.location.href = ME.cv; } },
    { id: "email", label: "Email " + ME.name, hint: "mailto", run: () => { window.location.href = "mailto:" + ME.email; } },
    { id: "linkedin", label: "Open LinkedIn", hint: "->", run: () => window.open(ME.linkedin, "_blank", "noopener,noreferrer") },
    { id: "github", label: "Open GitHub", hint: "->", run: () => window.open(ME.github, "_blank", "noopener,noreferrer") },
    { id: "trailhead", label: "Open Trailblazer profile", hint: "->", run: () => window.open(ME.trailhead, "_blank", "noopener,noreferrer") }
  ], [theme, onTheme]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return commands;
    return commands.filter((c) => c.label.toLowerCase().includes(q));
  }, [commands, query]);

  useEffect(() => { setIndex(0); }, [query, open]);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key.toLowerCase() === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        onOpenChange(!open);
        return;
      }
      if (e.key === "Escape" && open) {
        e.preventDefault();
        onOpenChange(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onOpenChange]);

  useEffect(() => {
    if (open) {
      returnFocusRef.current = document.activeElement;
      setQuery("");
      const t = setTimeout(() => inputRef.current?.focus(), 10);
      return () => clearTimeout(t);
    }
    if (returnFocusRef.current instanceof HTMLElement) returnFocusRef.current.focus();
  }, [open]);

  const runAt = (i) => {
    const cmd = filtered[i];
    if (!cmd) return;
    onOpenChange(false);
    cmd.run();
  };

  const onKeyDown = (e) => {
    if (e.key === "ArrowDown") { e.preventDefault(); setIndex((i) => Math.min(i + 1, filtered.length - 1)); }
    else if (e.key === "ArrowUp") { e.preventDefault(); setIndex((i) => Math.max(i - 1, 0)); }
    else if (e.key === "Enter") { e.preventDefault(); runAt(index); }
  };

  if (!open) return null;

  return (
    <div className="cmdk-backdrop" onClick={() => onOpenChange(false)}>
      <div
        className="cmdk notch"
        role="dialog"
        aria-modal="true"
        aria-label="Command palette"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="notch-in">
          <div className="cmdk-input-row mono">
            <span aria-hidden="true">&gt;</span>
            <input
              ref={inputRef}
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={onKeyDown}
              placeholder="jump to a section, or run a command..."
              aria-label="Command"
              autoComplete="off"
              spellCheck="false"
            />
            <kbd className="mono">esc</kbd>
          </div>
          <ul className="cmdk-list" role="listbox">
            {filtered.length === 0 ? (
              <li className="cmdk-empty mono">No matches</li>
            ) : filtered.map((c, i) => (
              <li key={c.id}>
                <button
                  type="button"
                  className={"cmdk-item" + (i === index ? " is-active" : "")}
                  role="option"
                  aria-selected={i === index}
                  onMouseEnter={() => setIndex(i)}
                  onClick={() => runAt(i)}
                >
                  <span>{c.label}</span>
                  <span className="mono cmdk-hint">{c.hint}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
