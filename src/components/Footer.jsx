import { ME } from "../data/content";
import Barcode from "./Barcode";

const ARROW_COUNT = 64;

export default function Footer() {
  return (
    <>
      <div className="halftone relative z-[2]" aria-hidden="true" />
      <div className="arrow-strip relative z-[2]" aria-hidden="true">
        {Array.from({ length: ARROW_COUNT }, (_, i) => (
          <span key={i}>&#8600;</span>
        ))}
      </div>
      <footer className="relative z-[2] border-t border-line bg-bg2 pt-6 pb-10">
        <div className="wrap flex flex-wrap gap-4 justify-between items-center text-muted">
          <span>
            <Barcode value="06161997" className="barcode" />
            <span className="mono footer-copy block mt-2">© {new Date().getFullYear()} John Despi — Cebu, Philippines</span>
          </span>
          <span className="mono flex gap-5">
            <a className="no-underline hover:text-accent" href={ME.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a className="no-underline hover:text-accent" href={ME.github} target="_blank" rel="noopener noreferrer">GitHub</a>
            <a className="no-underline hover:text-accent" href={"mailto:" + ME.email}>Email</a>
            {/* <a className="no-underline hover:text-accent" href={ME.cv} download>CV</a> */}
          </span>
        </div>
      </footer>
    </>
  );
}
