import type { CSSProperties } from "react";

/**
 * Three puff arrangements so repeated clouds don't read as copies.
 * Each is drawn in currentColor; the parent .cloud sets color + blur.
 */
const shapes = [
  <g key="a">
    <ellipse cx="62" cy="58" rx="38" ry="26" />
    <ellipse cx="104" cy="44" rx="46" ry="34" />
    <ellipse cx="148" cy="59" rx="34" ry="23" />
    <rect x="26" y="58" width="156" height="28" rx="14" />
  </g>,
  <g key="b">
    <ellipse cx="54" cy="52" rx="32" ry="24" />
    <ellipse cx="92" cy="60" rx="40" ry="26" />
    <ellipse cx="134" cy="46" rx="44" ry="32" />
    <ellipse cx="170" cy="62" rx="28" ry="20" />
    <rect x="24" y="60" width="160" height="26" rx="13" />
  </g>,
  <g key="c">
    <ellipse cx="70" cy="46" rx="42" ry="31" />
    <ellipse cx="118" cy="58" rx="36" ry="25" />
    <ellipse cx="156" cy="50" rx="30" ry="22" />
    <rect x="30" y="58" width="150" height="27" rx="13.5" />
  </g>,
];

type Cloud = {
  /** Which puff arrangement to draw. */
  shape: number;
  /** Depth tier — drives opacity via the --cloud-* tokens. */
  depth: "far" | "mid" | "near";
  width: number;
  /** Vertical position, % of viewport height. */
  top: number;
  blur: number;
  /** Seconds for one full crossing. */
  duration: number;
  /** Negative, so clouds are mid-crossing on first paint. */
  delay: number;
  /** Where a cloud parks when motion is reduced, as a % of viewport width. */
  rest: number;
};

const clouds: Cloud[] = [
  { shape: 0, depth: "far", width: 170, top: 7, blur: 2, duration: 190, delay: -20, rest: 12 },
  { shape: 1, depth: "far", width: 140, top: 20, blur: 2, duration: 165, delay: -95, rest: 63 },
  { shape: 2, depth: "far", width: 195, top: 13, blur: 3, duration: 210, delay: -150, rest: 84 },
  { shape: 1, depth: "mid", width: 300, top: 30, blur: 5, duration: 125, delay: -15, rest: 5 },
  { shape: 2, depth: "mid", width: 260, top: 47, blur: 5, duration: 110, delay: -70, rest: 47 },
  { shape: 0, depth: "mid", width: 330, top: 38, blur: 6, duration: 140, delay: -110, rest: 74 },
  { shape: 2, depth: "near", width: 480, top: 62, blur: 9, duration: 78, delay: -10, rest: 20 },
  { shape: 0, depth: "near", width: 420, top: 80, blur: 8, duration: 68, delay: -44, rest: 66 },
  { shape: 1, depth: "near", width: 540, top: 71, blur: 11, duration: 92, delay: -75, rest: -6 },
];

/**
 * Animated sky: SVG clouds drifting right-to-left at three depths.
 * All motion is CSS (see globals.css) and pauses for
 * prefers-reduced-motion.
 */
export function SkyBackground() {
  return (
    <div className="sky" aria-hidden="true">
      <div className="sky-stars" />
      <div className="sky-sun" />
      {clouds.map((cloud, i) => (
        <div
          key={i}
          className="cloud"
          style={
            {
              "--cloud-w": `${cloud.width}px`,
              "--cloud-top": `${cloud.top}%`,
              "--cloud-blur": `${cloud.blur}px`,
              "--cloud-duration": `${cloud.duration}s`,
              "--cloud-delay": `${cloud.delay}s`,
              "--cloud-opacity": `var(--cloud-${cloud.depth})`,
              "--cloud-rest": `${cloud.rest}vw`,
            } as CSSProperties
          }
        >
          <svg viewBox="0 0 208 92" fill="currentColor">
            {shapes[cloud.shape]}
          </svg>
        </div>
      ))}
    </div>
  );
}
