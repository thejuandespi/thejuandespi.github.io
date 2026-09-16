import SectionHead from "./SectionHead";
import { CLUSTERS } from "../data/content";

export default function Skills() {
  return (
    <section id="skills" className="relative z-[2] border-t border-line py-[clamp(4rem,9vh,7rem)]" aria-labelledby="skills-t">
      <div className="wrap">
        <SectionHead
          code="02"
          id="skills-t"
          title="Skills"
          note="Highlighted tags are what I reach for first; the rest I've shipped with and can pick straight back up."
        />

        {CLUSTERS.map((c, i) => (
          <div
            key={c.title}
            className={`grid gap-4 py-6 border-t border-line md:grid-cols-[12rem_1fr] md:gap-6 ${
              i === CLUSTERS.length - 1 ? "border-b" : ""
            }`}
          >
            <h3 className="text-base font-bold" style={{ fontStretch: "86%" }}>
              {c.title}
              <span className="block text-muted font-normal text-[0.84rem] mt-1" style={{ fontStretch: "100%" }}>
                {c.note}
              </span>
            </h3>
            <div className="flex flex-wrap gap-1.5 content-start">
              {c.items.map(([name, core]) => (
                <span className={`chip ${core ? "chip-core" : ""}`} key={name}>
                  {name}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
