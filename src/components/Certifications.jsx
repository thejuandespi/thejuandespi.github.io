import { CERTS } from "../data/content";

/** Deliberately has no nav entry — it's a feature block inside the page
    flow rather than a destination. */
export default function Certifications() {
  return (
    <section id="certs" className="relative z-[2] border-t border-line py-[clamp(4rem,9vh,7rem)]" aria-labelledby="certs-t">
      <div className="wrap">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,340px)_minmax(0,1fr)] lg:gap-16 items-start">
          {/* left: the headline number */}
          <div className="lg:sticky lg:top-[calc(var(--nav-h)+2rem)]">
            <span className="mono text-accent block mb-3">Credentials</span>
            <div className="flex items-end gap-4">
              <b
                className="block text-[clamp(5rem,16vw,9rem)] font-black leading-[0.78] text-ink"
                style={{ fontStretch: "66%" }}
              >
                07
              </b>
              <span className="mono text-muted pb-3 leading-relaxed">
                certifications
                <br />
                held
              </span>
            </div>
            <div className="hazard mt-5" aria-hidden="true" />
            <h2 id="certs-t" className="text-[clamp(1.5rem,3.4vw,2rem)] uppercase mt-5" style={{ fontStretch: "76%" }}>
              Certified on the platform
            </h2>
            <p className="text-muted text-[0.95rem] mt-2.5 max-w-[38ch]">
              Six Salesforce credentials plus Vlocity, kept current across developer, admin and industry-cloud tracks.
              Verifiable on Trailhead.
            </p>
          </div>

          {/* right: the cards */}
          <ul className="grid gap-3 sm:grid-cols-2 list-none p-0 m-0">
            {CERTS.map((c) => (
              <li key={c.ref} className="notch card">
                <div className="notch-in px-5 py-4.5 flex flex-col gap-2">
                  <div className="mono flex justify-between gap-3">
                    <span className="text-accent">{c.ref}</span>
                    <span className="text-muted">{c.issuer}</span>
                  </div>
                  <b className="text-[1.05rem] font-bold leading-tight" style={{ fontStretch: "86%" }}>
                    {c.name}
                  </b>
                  <span className="text-muted text-[0.84rem]">{c.note}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
