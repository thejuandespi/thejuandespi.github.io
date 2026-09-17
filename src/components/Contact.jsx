import { useState } from "react";
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

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/** No backend behind this — it's a static site. Submitting builds a
    mailto: with the fields folded into subject/body and hands off to
    the visitor's own mail app, which is the one thing a static page can
    honestly promise. The status line says that plainly instead of
    pretending "message sent". */
export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [error, setError] = useState("");
  const [sent, setSent] = useState(false);
  const set = (k) => (e) => {
    setForm({ ...form, [k]: e.target.value });
    setSent(false);
  };

  const submit = (e) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setError("Fill in your name, email and message first.");
      setSent(false);
      return;
    }
    if (!EMAIL_RE.test(form.email.trim())) {
      setError("That email doesn't look right.");
      setSent(false);
      return;
    }
    setError("");
    const mailto =
      "mailto:" + ME.email +
      "?subject=" + encodeURIComponent("Portfolio enquiry from " + form.name) +
      "&body=" + encodeURIComponent(form.message + "\n\n— " + form.name + " (" + form.email + ")");
    window.location.href = mailto;
    setSent(true);
  };

  return (
    <section id="contact" className="relative z-[2] border-t border-line py-[clamp(4rem,9vh,7rem)]" aria-labelledby="contact-t">
      <div className="wrap">
        <SectionHead
          code="04"
          id="contact-t"
          title="Get in touch"
          note="Senior Salesforce roles, contract builds, or a platform problem you're stuck on. Email is fastest — I reply within a day."
        />

        <div className="grid gap-8 lg:grid-cols-[1.15fr_1fr] lg:gap-14 items-start">
          <div className="notch">
            <div className="notch-in p-[clamp(1.4rem,3vw,2.1rem)]">
              <span className="sec-code mono mb-6">
                <i aria-hidden="true" />Direct line
              </span>

              <form onSubmit={submit} noValidate>
                <div className="field-row">
                  <label className="mono" htmlFor="f-name"><span className="text-accent">01</span> Your name</label>
                  <input id="f-name" type="text" autoComplete="name" placeholder="Jane Cruz" value={form.name} onChange={set("name")} />
                </div>
                <div className="field-row">
                  <label className="mono" htmlFor="f-email"><span className="text-accent">02</span> Email</label>
                  <input id="f-email" type="email" autoComplete="email" placeholder="jane@company.com" value={form.email} onChange={set("email")} />
                </div>
                <div className="field-row">
                  <label className="mono" htmlFor="f-msg"><span className="text-accent">03</span> What do you need built?</label>
                  <textarea
                    id="f-msg"
                    placeholder="A quick brief — platform, timeline, the problem you're stuck on."
                    value={form.message}
                    onChange={set("message")}
                  />
                </div>

                <div className="flex flex-wrap items-center gap-4 mt-2">
                  <button className="btn btn-primary" type="submit">
                    Send message <small>-&gt;</small>
                  </button>
                  {error ? (
                    <span className="mono text-alert text-[0.76rem]" role="alert">{error}</span>
                  ) : sent ? (
                    <span className="mono text-accent text-[0.76rem] inline-flex items-center gap-1.5" role="status">
                      <span className="w-1.5 h-1.5 bg-signal shrink-0" aria-hidden="true" />
                      Opening your mail app — send it from there
                    </span>
                  ) : null}
                </div>
              </form>
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
