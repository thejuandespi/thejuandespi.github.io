/* Small geometric sigil set — each glyph shares the same corner-bracket
   frame used by .hud::before/::after and .card .notch-in, so the icon
   system reads as the same notched-frame language as the rest of the UI,
   just scaled down. Stroke-only, sharp joins (no linecap/linejoin
   rounding) to match the hard-edged treatment everywhere else. */

const FRAME_TL = "M2 7 V2 H7";
const FRAME_BR = "M17 22 H22 V17";

const MARKS = {
  about: (
    <>
      <circle cx="12" cy="7.6" r="1.6" />
      <path d="M8 18 L12 10.8 L16 18" />
    </>
  ),
  skills: <path d="M12 6.5 L17 9.5 V14.5 L12 17.5 L7 14.5 V9.5 Z" />,
  work: (
    <>
      <path d="M10 9 V7 H14 V9" />
      <path d="M7 9 H15 L17 11 V17 H7 Z" />
    </>
  ),
  contact: <path d="M7 17 L17 7 M11 7 H17 V13" />,
  platform: <path d="M7 8 H17 M8.5 12 H15.5 M7 16 H17" />,
  tooling: <path d="M12 18 V8 M8 12 L12 8 L16 12" />,
  webstack: <path d="M10 8 L6 12 L10 16 M14 8 L18 12 L14 16" />,
  process: (
    <>
      <path d="M7 16 L12 8 L17 16" />
      <circle cx="7" cy="16" r="1.3" />
      <circle cx="12" cy="8" r="1.3" />
      <circle cx="17" cy="16" r="1.3" />
    </>
  ),
  seal: (
    <>
      <path d="M12 6 L18 12 L12 18 L6 12 Z" />
      <path d="M9.3 12.2 L11 14 L14.7 10" />
    </>
  ),
};

export default function Glyph({ name, size = 22, className }) {
  const mark = MARKS[name];
  if (!mark) return null;
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className={className}
      aria-hidden="true"
    >
      <path d={FRAME_TL} />
      <path d={FRAME_BR} />
      {mark}
    </svg>
  );
}
