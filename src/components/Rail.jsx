import { useEffect, useState } from "react";

/** HH:MM:SS in Cebu (UTC+8, no DST) — a live read-out instead of static copy. */
function useCebuClock() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const fmt = new Intl.DateTimeFormat("en-GB", {
      timeZone: "Asia/Manila",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false
    });
    const tick = () => setTime(fmt.format(new Date()));
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return time;
}

/** Decorative status rail on the left edge of very wide screens. */
export default function Rail() {
  const time = useCebuClock();

  return (
    <div
      className="rail mono fixed left-3.5 inset-y-0 z-60 hidden 3xl:flex flex-col items-center justify-center gap-4 pointer-events-none"
      aria-hidden="true"
    >
      <span className="vt lig">Cebu -&gt; UTC+8</span>
      <span className="w-px h-[70px] bg-line2" />
      <span className="dot w-1.5 h-1.5 bg-signal" />
      <span className="vt lig tabular-nums">{time || "--:--:--"}</span>
      <span className="w-px h-[70px] bg-line2" />
      <span className="vt lig">portfolio :: v2 // {new Date().getFullYear()}</span>
    </div>
  );
}
