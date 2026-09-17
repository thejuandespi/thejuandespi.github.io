/** Code 39 bar widths per character: 9 elements (5 bars, 4 spaces), "1" = wide. */
const CODE39 = {
  0: "000110100", 1: "100100001", 2: "001100001", 3: "101100000",
  4: "000110001", 5: "100110000", 6: "001110000", 7: "000100101",
  8: "100100100", 9: "001100100",
  A: "100001001", B: "001001001", C: "101001000", D: "000011001",
  E: "100011000", F: "001011000", G: "000001101", H: "100001100",
  I: "001001100", J: "000011100", K: "100000011", L: "001000011",
  M: "101000010", N: "000010011", O: "100010010", P: "001010010",
  Q: "000000111", R: "100000110", S: "001000110", T: "000010110",
  U: "110000001", V: "011000001", W: "111000000", X: "010010001",
  Y: "110010000", Z: "011010000",
  "-": "010000101", ".": "110000100", " ": "011000100", "*": "010010100",
};

const NARROW = 2;
const WIDE = NARROW * 2.5;
const GAP = NARROW;

function encodeCode39(text) {
  const chars = `*${text.toUpperCase()}*`;
  const bars = [];
  let x = 0;

  for (const ch of chars) {
    const pattern = CODE39[ch];
    if (!pattern) continue;
    for (let i = 0; i < pattern.length; i++) {
      const w = pattern[i] === "1" ? WIDE : NARROW;
      if (i % 2 === 0) bars.push({ x, w });
      x += w;
    }
    x += GAP;
  }

  return { bars, width: x - GAP };
}

/** Renders `value` as a scannable Code 39 barcode. */
export default function Barcode({ value, height = 20, className = "" }) {
  const { bars, width } = encodeCode39(value);

  return (
    <svg
      className={className}
      viewBox={`0 0 ${width} ${height}`}
      height={height}
      aria-hidden="true"
    >
      {bars.map((bar, i) => (
        <rect key={i} x={bar.x} y={0} width={bar.w} height={height} fill="currentColor" />
      ))}
    </svg>
  );
}
