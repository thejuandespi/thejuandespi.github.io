import SectionHead from "./SectionHead";
import { PROJECTS } from "../data/content";

export default function Work() {
  return (
    <section id="work" className="relative z-[2] border-t border-line py-[clamp(4rem,9vh,7rem)]" aria-labelledby="work-t">
      <div className="wrap">
        <SectionHead
          code="03"
          id="work-t"
          title="Selected work"
          glyph="work"
          note="Six builds that show the range — managed packages, integrations, portals, and one pre-Salesforce web app."
        />

        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {PROJECTS.map((p) => (
            <article className="notch card" key={p.ref}>
              <div className="notch-in px-6 pt-6 pb-5 flex flex-col gap-3.5">
                <div className="mono flex justify-between gap-4 items-baseline relative z-[1]">
                  <span className="text-accent">{p.ref}</span>
                  <span className="text-muted">{p.yr}</span>
                </div>
                <div>
                  <h3 className="text-[1.32rem] leading-tight" style={{ fontStretch: "84%" }}>
                    {p.title}
                  </h3>
                  <p className="text-muted text-[0.88rem] mt-1">{p.client}</p>
                </div>
                <p className="text-muted text-[0.94rem]">{p.desc}</p>
                <div className="flex flex-wrap gap-1.5 mt-auto pt-1.5">
                  {p.stack.map((t) => (
                    <span className="tag" key={t}>{t}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        <p className="flex items-start gap-2.5 text-muted text-[0.86rem] mt-6">
          <b className="mono text-alert shrink-0" aria-hidden="true">NDA</b>
          All of this lives in client orgs under agreement, so there's nothing public to link. Happy to walk through the
          architecture, trade-offs and code structure on a call.
        </p>
      </div>
    </section>
  );
}
