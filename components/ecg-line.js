// A heartbeat trace that resolves into a smooth data curve: bedside signal becoming insight.
// It references the founder's research on machine learning for ECG-based triage.
const ECG_PATH =
  "M0 100 H240 C250 100 255 90 262 90 C269 90 274 100 284 100 H300 L308 108 L318 34 L328 126 L338 100 H360 " +
  "C372 100 378 82 392 82 C406 82 412 100 424 100 H520 C530 100 535 90 542 90 C549 90 554 100 564 100 H580 " +
  "L588 108 L598 34 L608 126 L618 100 H640 C652 100 658 82 672 82 C686 82 692 100 704 100 " +
  "C760 100 790 60 850 60 C910 60 930 120 990 120 C1050 120 1070 70 1130 70 C1190 70 1210 105 1270 105 " +
  "C1330 105 1370 80 1440 80";

const NODES = [
  [850, 60],
  [990, 120],
  [1130, 70],
  [1270, 105],
];

export default function EcgLine({ className = "", id = "ecg", delay = 300, pulse = true }) {
  const gradientId = `${id}-stroke`;
  return (
    <svg
      viewBox="0 0 1440 160"
      className={className}
      aria-hidden="true"
      focusable="false"
      preserveAspectRatio="xMidYMid meet"
    >
      <defs>
        <linearGradient id={gradientId} x1="0" y1="0" x2="1440" y2="0" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#605cf0" stopOpacity="0.15" />
          <stop offset="0.35" stopColor="#605cf0" />
          <stop offset="0.75" stopColor="#88cdf6" />
          <stop offset="1" stopColor="#88cdf6" stopOpacity="0.4" />
        </linearGradient>
      </defs>
      <path
        d={ECG_PATH}
        fill="none"
        stroke={`url(#${gradientId})`}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        pathLength="1"
        className="ecg-draw"
        style={{ "--d": `${delay}ms` }}
      />
      {NODES.map(([cx, cy], i) => (
        <g key={cx} className="rise-in" style={{ "--d": `${delay + 1700 + i * 160}ms` }}>
          <circle cx={cx} cy={cy} r="11" fill="#88cdf6" opacity="0.25" />
          <circle cx={cx} cy={cy} r="5" fill="#605cf0" stroke="#f7faf8" strokeWidth="2" />
        </g>
      ))}
      {pulse && (
        <circle r="4.5" fill="#605cf0" opacity="0">
          <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.05;0.9;1" dur="6s" begin={`${(delay + 2600) / 1000}s`} repeatCount="indefinite" />
          <animateMotion dur="6s" begin={`${(delay + 2600) / 1000}s`} repeatCount="indefinite" path={ECG_PATH} />
        </circle>
      )}
    </svg>
  );
}
