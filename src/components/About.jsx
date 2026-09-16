import SectionHead from "./SectionHead";
import { TIMELINE } from "../data/content";

export default function About() {
  return (
    <section id="about" className="relative z-[2] border-t border-line py-[clamp(4rem,9vh,7rem)]" aria-labelledby="about-t">
      <div className="wrap">
        <SectionHead
          code="01"
          id="about-t"
          title="About"
          glyph="about"
          note="Eight years in, still most interested in the gap between what a stakeholder asks for and what they actually need."
        />

        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.35fr)_minmax(0,1fr)] lg:gap-16">
          <div className="max-w-[62ch] text-muted space-y-4">
            <p>
              I started in 2016 converting mockups into working front-end for a hotel booking platform, then spent two
              years on Vue portals and sportsbook sites at Bluefrog. In December 2018 I moved onto Salesforce at
              Accenture and never really left.
            </p>
            <p>
              Since then it has been <strong className="text-ink font-semibold">ISP buy flows</strong>, telco Omnistudio
              builds, a New Zealand energy provider, nonprofit orgs, and now contingent-workforce systems at CXC Global.
              Different industries, same shape of problem: someone describes a process, and it has to exist in an org by
              the end of the sprint without breaking the five things around it.
            </p>
            <blockquote className="border-l-[3px] border-alpine2 pl-4.5 my-6 text-ink text-[1.12rem] font-medium leading-snug">
              Apex and LWC when it needs code. Flow when it doesn't. The second one is usually the harder call to make.
            </blockquote>
            <p>
              I keep releases boring on purpose — Copado, GitHub pipelines, scratch orgs, clean version control — because
              a predictable deployment is the difference between a good feature and a bad Monday. I also do the
              unglamorous half: writing test classes that mean something, reviewing pull requests properly, and
              onboarding juniors so the knowledge doesn't sit with one person.
            </p>
            <p>
              Outside client work I use <strong className="text-ink font-semibold">GitHub Copilot in VS Code</strong>{" "}
              daily for generation, debugging and PR review, and I've compared models across task types to see where they
              actually help and where they cost more time than they save.
            </p>
          </div>

          <div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-line border border-line mb-6">
              {[["08", "Years building"], ["06+", "On Salesforce"], ["07", "Certifications"]].map(([n, l]) => (
                <div className="bg-bg px-3.5 py-4" key={l}>
                  <b className="block text-[clamp(1.9rem,4.4vw,2.6rem)] font-black leading-none" style={{ fontStretch: "72%" }}>
                    {n}
                  </b>
                  <span className="mono block text-muted mt-2">{l}</span>
                </div>
              ))}
            </div>

            <h3 className="mono text-muted mb-2.5">Track record</h3>
            <div className="border-t border-line">
              {TIMELINE.map((t) => (
                <div key={t.co} className="grid grid-cols-[5.6rem_1fr] sm:grid-cols-[7.5rem_1fr] gap-3 py-3.5 border-b border-line items-baseline">
                  <time className="mono lig text-muted">{t.yrs}</time>
                  <div>
                    <span className="font-bold" style={{ fontStretch: "88%" }}>
                      {t.co}
                      {t.now ? <span className="inline-block w-[7px] h-[7px] bg-signal ml-2 align-middle" aria-hidden="true" /> : null}
                    </span>
                    <span className="block text-muted text-[0.86rem]">{t.role}</span>
                  </div>
                </div>
              ))}
            </div>
            <p className="mono text-muted mt-4">BS Information Technology — Cebu Institute of Technology University, 2017</p>
          </div>
        </div>
      </div>
    </section>
  );
}
