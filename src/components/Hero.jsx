import { useEffect, useState } from "react";
import { HUD, MARQUEE, ME } from "../data/content";
import { scrollToId } from "../lib/scroll";

/** JOHN and DESPI stack as one wordmark, each name said exactly once.
    A small ident tag above (not a repeat of the name) and a signal-green
    rule below frame it, with one clean chromatic echo on hover. */
function NameBlock() {
  return (
    <h1 className="hero-name">
      <span className="sr-only">John Despi</span>
      <span className="clip">
        {/* <span className="name-tag mono" aria-hidden="true">
          <i className="name-tag-dot" />Est. 2016 // Cebu, PH
        </span> */}
      </span>
      <span className="clip d1">
        <span className="name-word" data-text="John Despi" aria-hidden="true">John Despi</span>
      </span>
      {/* <span className="clip d2">
        <span className="name-word" data-text="Despi" aria-hidden="true">Despi</span>
      </span> */}
      <span className="name-bar" aria-hidden="true" />
    </h1>
  );
}

export default function Hero() {
  const [boot, setBoot] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setBoot(true), 40);
    return () => clearTimeout(t);
  }, []);

  return (
    <section
      id="home"
      className={`relative flex flex-col pt-[var(--nav-h)] min-h-[100svh] ${boot ? "boot" : ""}`}
      aria-label="Introduction"
    >
      <div className="field" aria-hidden="true">
        <div className="melt">
          <span className="m1" />
          <span className="m2" />
          <span className="m3" />
          <span className="m4" />
        </div>
      </div>
      <div className="hero-scrim" aria-hidden="true" />

      <div className="relative z-[2] flex-1 flex items-center py-[clamp(2rem,6vh,4rem)]">
        <div className="wrap">
          <p className="mono flex items-center gap-2.5 mb-4 opacity-90">
            <span className="inline-block w-2 h-2 bg-signal" aria-hidden="true" />
            Salesforce developer, Cebu — 8 years building
            <span className="caret" aria-hidden="true" />
          </p>

          <NameBlock />

          <div className="grid gap-8 items-end mt-[clamp(1.4rem,4vh,2.4rem)] lg:grid-cols-[minmax(0,1fr)_minmax(0,300px)] lg:gap-14">
            <div>
              <p className="max-w-[56ch] text-muted text-[1.02rem]">
                I build on the Salesforce Platform — <em className="not-italic text-ink">LWC, Apex, Flows, Omnistudio</em> —
                and I stay in the room for the parts around the code: the requirement nobody wrote down, the review,
                the deployment on a Friday afternoon.
              </p>
              <div className="flex flex-wrap gap-2.5 mt-7">
                <a className="btn btn-primary" href="#work" onClick={(e) => { e.preventDefault(); scrollToId("work"); }}>
                  See the work <small>03</small>
                </a>
                <a className="btn btn-ghost" href={ME.cv} download>
                  Download CV
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <path d="M12 3v13m0 0 5-5m-5 5-5-5M4 20h16" />
                  </svg>
                </a>
              </div>
            </div>

            <div className="hud">
              <dl>
                {HUD.map(([k, v]) => (
                  <div className="hud-row" key={k}>
                    <dt className="mono">{k}</dt>
                    <dd>{v}</dd>
                  </div>
                ))}
                <div className="hud-row">
                  <dt className="mono">Status</dt>
                  <dd className="inline-flex items-center gap-1.5 text-accent">
                    <span className="w-[7px] h-[7px] bg-signal" aria-hidden="true" />
                    Open to roles
                  </dd>
                </div>
              </dl>
              <div className="scan" aria-hidden="true" />
            </div>
          </div>
        </div>
      </div>

      <div className="ticker relative z-[2] border-y border-line" aria-hidden="true">
        <div className="ticker-track">
          <ul className="mono">{MARQUEE.map((m, i) => <li key={"a" + i}>{m}</li>)}</ul>
          <ul className="mono">{MARQUEE.map((m, i) => <li key={"b" + i}>{m}</li>)}</ul>
        </div>
      </div>
    </section>
  );
}
