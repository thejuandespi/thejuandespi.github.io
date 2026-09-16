import { useState } from "react";
import SectionHead from "./SectionHead";
import { ME } from "../data/content";

const LINKS = [
  { label: "Email", sub: ME.email, href: "mailto:" + ME.email },
  { label: "LinkedIn", sub: "linkedin.com/in/johndespi", href: ME.linkedin, external: true },
  { label: "GitHub", sub: "github.com/thejuandespi", href: ME.github, external: true },
  // { label: "Résumé", sub: "John-Despi-CV.pdf", href: ME.cv, download: true },
  { label: "Phone", sub: ME.phone, href: "tel:" + ME.phone.replace(/\s/g, "") }
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState(null);
  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const send = () => {
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setStatus({ ok: false, text: "Fill in your name, email and message first." });
      return;
    }
    setStatus({ ok: true });
  };

  const mailto =
    "mailto:" + ME.email +
    "?subject=" + encodeURIComponent("Portfolio enquiry from " + form.name) +
    "&body=" + encodeURIComponent(form.message + "\n\n— " + form.name + " (" + form.email + ")");

  return (
    <section id="contact" className="relative z-[2] border-t border-line py-[clamp(4rem,9vh,7rem)]" aria-labelledby="contact-t">
      <div className="wrap">
        <SectionHead
          code="04"
          id="contact-t"
          title="Get in touch"
          note="Senior Salesforce roles, contract builds, or a platform problem you're stuck on. Email is fastest — I reply within a day."
        />

        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-start">
          <div className="notch">
            <div className="notch-in p-[clamp(1.3rem,3vw,2rem)]">
              {[
                { id: "f-name", label: "Your name", key: "name", type: "text", autoComplete: "name" },
                { id: "f-email", label: "Email", key: "email", type: "email", autoComplete: "email" }
              ].map((f) => (
                <div className="field-row grid gap-1.5 mb-4" key={f.id}>
                  <label className="mono text-muted" htmlFor={f.id}>{f.label}</label>
                  <input id={f.id} type={f.type} autoComplete={f.autoComplete} value={form[f.key]} onChange={set(f.key)} />
                </div>
              ))}
              <div className="field-row grid gap-1.5 mb-4">
                <label className="mono text-muted" htmlFor="f-msg">What do you need built?</label>
                <textarea id="f-msg" value={form.message} onChange={set("message")} />
              </div>
              <button className="btn btn-primary" onClick={send}>Send message</button>

              {status ? (
                <p className="mt-3.5 px-3.5 py-3 border border-line2 bg-panel text-[0.9rem]" role="status">
                  {status.ok ? (
                    <>
                      This form has no backend yet — wire it to Formspree, Netlify Forms or your own endpoint. In the
                      meantime, <a className="text-accent" href={mailto}>open it in your mail app</a>.
                    </>
                  ) : (
                    status.text
                  )}
                </p>
              ) : null}
            </div>
          </div>

          <div>
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
      </div>
    </section>
  );
}
