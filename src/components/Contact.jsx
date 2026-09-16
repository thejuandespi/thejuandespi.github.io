import SectionHead from "./SectionHead";
import { ME } from "../data/content";

const LINKS = [
  { label: "Email", sub: ME.email, href: "mailto:" + ME.email },
  { label: "LinkedIn", sub: "linkedin.com/in/johndespi", href: ME.linkedin, external: true },
  { label: "GitHub", sub: "github.com/thejuandespi", href: ME.github, external: true },
  { label: "Trailblazer", sub: "salesforce.com/trailblazer/thejuandespi", href: ME.trailhead, external: true },
  { label: "Résumé", sub: "John-Despi-CV.pdf", href: ME.cv, download: true },
  { label: "Phone", sub: ME.phone, href: "tel:" + ME.phone.replace(/\s/g, "") }
];

export default function Contact() {
  return (
    <section id="contact" className="relative z-[2] border-t border-line py-[clamp(4rem,9vh,7rem)]" aria-labelledby="contact-t">
      <div className="wrap">
        <SectionHead
          code="04"
          id="contact-t"
          title="Get in touch"
          note="Senior Salesforce roles, contract builds, or a platform problem you're stuck on. Email is fastest — I reply within a day."
        />

        <div className="max-w-xl mx-auto">
          <div className="grid gap-px bg-line border border-line">
            {LINKS.map((l) => (
              <a
                key={l.label}
                className="bg-bg px-4.5 py-4 flex justify-between items-center gap-4 no-underline transition-colors hover:bg-bg3"
                href={l.href}
                download={l.download || undefined}
                target={l.external ? "_blank" : undefined}
                rel={l.external ? "noopener noreferrer" : undefined}
              >
                <span>
                  <b className="block text-[1.05rem] font-bold" style={{ fontStretch: "88%" }}>{l.label}</b>
                  <span className="block text-muted text-[0.86rem] mt-0.5">{l.sub}</span>
                </span>
                <span className="mono lig text-accent shrink-0" aria-hidden="true">-&gt;</span>
              </a>
            ))}
          </div>

          <div className="mt-6 border border-line p-4.5 flex gap-3 items-start">
            <span className="w-2.5 h-2.5 bg-signal shrink-0 mt-1.5" aria-hidden="true" />
            <p className="text-muted text-[0.92rem]">
              <b className="block text-ink font-bold mb-0.5">Working from Cebu, UTC+8</b>
              Comfortable overlapping with AU, NZ and Europe mornings; six of my last seven projects were remote with
              distributed teams.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
