/** Decorative status rail on the left edge of very wide screens. */
export default function Rail() {
  return (
    <div
      className="rail mono fixed left-3.5 inset-y-0 z-60 hidden 3xl:flex flex-col items-center justify-center gap-4 pointer-events-none"
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
