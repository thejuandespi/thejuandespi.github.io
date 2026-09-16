export default function SectionHead({ code, title, id, note }) {
  return (
    <div className="flex flex-wrap items-start gap-5 mb-10">
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
