import Glyph from "./Glyphs";

export default function SectionHead({ code, title, id, note, glyph }) {
  return (
    <div className="flex flex-wrap items-start gap-4 mb-10">
      {glyph ? <Glyph name={glyph} size={30} className="text-accent shrink-0 mt-0.5" /> : null}
      <span className="sec-code mono pt-2 min-w-12">
        <i aria-hidden="true" />{code}
      </span>
      <div className="flex-1 basis-88">
        <h2
          id={id}
          className="text-[clamp(2rem,5.4vw,3.4rem)] uppercase leading-[0.92]"
          style={{ fontStretch: "76%" }}
        >
          {title}
        </h2>
        {note ? <p className="text-muted max-w-[46ch] mt-2.5 text-[0.95rem]">{note}</p> : null}
      </div>
    </div>
  );
}
