// Lightweight stroke icon set (24px grid, 1.6px stroke). All icons inherit `currentColor`.

function Svg({ children, className = "h-6 w-6", strokeWidth = 1.6, ...rest }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      className={className}
      {...rest}
    >
      {children}
    </svg>
  );
}

export const ArrowRight = (p) => (
  <Svg {...p}>
    <path d="M5 12h14" />
    <path d="m13 6 6 6-6 6" />
  </Svg>
);

export const ArrowUpRight = (p) => (
  <Svg {...p}>
    <path d="M7 17 17 7" />
    <path d="M8 7h9v9" />
  </Svg>
);

export const Check = (p) => (
  <Svg {...p}>
    <path d="m5 12.5 4.2 4.2L19 7" />
  </Svg>
);

export const Plus = (p) => (
  <Svg {...p}>
    <path d="M12 5v14" />
    <path d="M5 12h14" />
  </Svg>
);

export const ChevronDown = (p) => (
  <Svg {...p}>
    <path d="m6 9 6 6 6-6" />
  </Svg>
);

export const Menu = (p) => (
  <Svg {...p}>
    <path d="M4 7h16" />
    <path d="M4 12h16" />
    <path d="M4 17h10" />
  </Svg>
);

export const Close = (p) => (
  <Svg {...p}>
    <path d="M6 6l12 12" />
    <path d="M18 6 6 18" />
  </Svg>
);

export const Mail = (p) => (
  <Svg {...p}>
    <rect x="3" y="5" width="18" height="14" rx="2.5" />
    <path d="m4 7 8 6 8-6" />
  </Svg>
);

export const Calendar = (p) => (
  <Svg {...p}>
    <rect x="3.5" y="5" width="17" height="15" rx="2.5" />
    <path d="M3.5 10h17" />
    <path d="M8 3v4" />
    <path d="M16 3v4" />
  </Svg>
);

export const Shield = (p) => (
  <Svg {...p}>
    <path d="M12 3 4.5 6v5.5c0 4.6 3.1 8.2 7.5 9.5 4.4-1.3 7.5-4.9 7.5-9.5V6L12 3Z" />
    <path d="m8.8 12.2 2.3 2.3 4.3-4.6" />
  </Svg>
);

export const Spark = (p) => (
  <Svg {...p}>
    <path d="M12 3v3" />
    <path d="M12 18v3" />
    <path d="M3 12h3" />
    <path d="M18 12h3" />
    <path d="m5.6 5.6 2.1 2.1" />
    <path d="m16.3 16.3 2.1 2.1" />
    <path d="m5.6 18.4 2.1-2.1" />
    <path d="m16.3 7.7 2.1-2.1" />
    <circle cx="12" cy="12" r="3" />
  </Svg>
);

export const Chart = (p) => (
  <Svg {...p}>
    <path d="M4 20V4" />
    <path d="M4 20h16" />
    <path d="m7.5 15 3.5-4 3 2.5 4.5-6" />
    <circle cx="18.5" cy="7.5" r="1" />
  </Svg>
);

export const Users = (p) => (
  <Svg {...p}>
    <circle cx="9" cy="8" r="3.2" />
    <path d="M3.5 19.5c.6-3.1 2.8-5 5.5-5s4.9 1.9 5.5 5" />
    <path d="M15.5 5.2a3 3 0 0 1 0 5.6" />
    <path d="M17 14.6c2 .5 3.2 2.2 3.6 4.9" />
  </Svg>
);

export const Compass = (p) => (
  <Svg {...p}>
    <circle cx="12" cy="12" r="8.5" />
    <path d="m15.5 8.5-2 5-5 2 2-5 5-2Z" />
  </Svg>
);

export const Book = (p) => (
  <Svg {...p}>
    <path d="M12 6.5C10.3 5 7.8 4.5 4 4.5v13c3.8 0 6.3.5 8 2 1.7-1.5 4.2-2 8-2v-13c-3.8 0-6.3.5-8 2Z" />
    <path d="M12 6.5v13" />
  </Svg>
);

export const Mic = (p) => (
  <Svg {...p}>
    <rect x="9" y="3" width="6" height="11" rx="3" />
    <path d="M5.5 11a6.5 6.5 0 0 0 13 0" />
    <path d="M12 17.5V21" />
    <path d="M9 21h6" />
  </Svg>
);

export const Hospital = (p) => (
  <Svg {...p}>
    <path d="M4 21V7.5L12 3l8 4.5V21" />
    <path d="M3 21h18" />
    <path d="M12 8v5" />
    <path d="M9.5 10.5h5" />
    <path d="M10 21v-4h4v4" />
  </Svg>
);

export const Graduation = (p) => (
  <Svg {...p}>
    <path d="m2.5 9 9.5-4.5L21.5 9 12 13.5 2.5 9Z" />
    <path d="M6.5 11v4.5c1.3 1.4 3.2 2.2 5.5 2.2s4.2-.8 5.5-2.2V11" />
    <path d="M21.5 9v5" />
  </Svg>
);

export const Stethoscope = (p) => (
  <Svg {...p}>
    <path d="M6 3.5H5a1 1 0 0 0-1 1V9a5 5 0 0 0 10 0V4.5a1 1 0 0 0-1-1h-1" />
    <path d="M9 14v1.5a5 5 0 0 0 10 0V13" />
    <circle cx="19" cy="11" r="2" />
  </Svg>
);

export const Cpu = (p) => (
  <Svg {...p}>
    <rect x="6" y="6" width="12" height="12" rx="2" />
    <rect x="9.5" y="9.5" width="5" height="5" rx="1" />
    <path d="M9 3v3M15 3v3M9 18v3M15 18v3M3 9h3M3 15h3M18 9h3M18 15h3" />
  </Svg>
);

export const HeartPulse = (p) => (
  <Svg {...p}>
    <path d="M20.2 5.6a5 5 0 0 0-7.1 0L12 6.7l-1.1-1.1a5 5 0 1 0-7.1 7.1L12 21l8.2-8.3a5 5 0 0 0 0-7.1Z" />
    <path d="M3.5 12h4l1.5-3 3 6 1.5-3h7" />
  </Svg>
);

export const Scale = (p) => (
  <Svg {...p}>
    <path d="M12 4v16" />
    <path d="M7 20h10" />
    <path d="M4 7h16" />
    <path d="m7 7-3 6a3 3 0 0 0 6 0L7 7Z" />
    <path d="m17 7-3 6a3 3 0 0 0 6 0l-3-6Z" />
  </Svg>
);

export const Layers = (p) => (
  <Svg {...p}>
    <path d="m12 3 9 5-9 5-9-5 9-5Z" />
    <path d="m3 13 9 5 9-5" />
  </Svg>
);

export const Target = (p) => (
  <Svg {...p}>
    <circle cx="12" cy="12" r="8.5" />
    <circle cx="12" cy="12" r="4.5" />
    <circle cx="12" cy="12" r="0.8" fill="currentColor" />
  </Svg>
);

export const Quote = (p) => (
  <svg viewBox="0 0 48 48" aria-hidden="true" focusable="false" className={p.className} fill="currentColor">
    <path d="M10 34.5c-2.8-2.6-4.2-5.7-4.2-9.5 0-6.6 4.3-12.4 12.1-16.6l1.7 2.7c-4.6 3-7 6.3-7.4 9.8 3.8.3 6.6 3.1 6.6 6.9 0 4.1-3.2 7.2-7.4 7.2-.5 0-1-.1-1.4-.5Zm20.6 0c-2.8-2.6-4.2-5.7-4.2-9.5 0-6.6 4.3-12.4 12.1-16.6l1.7 2.7c-4.6 3-7 6.3-7.4 9.8 3.8.3 6.6 3.1 6.6 6.9 0 4.1-3.2 7.2-7.4 7.2-.5 0-1-.1-1.4-.5Z" />
  </svg>
);

export const LinkedIn = (p) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" className={p.className} fill="currentColor">
    <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z" />
  </svg>
);

const serviceIcons = {
  shield: Shield,
  spark: Spark,
  chart: Chart,
  users: Users,
  compass: Compass,
  book: Book,
  mic: Mic,
  cpu: Cpu,
};

export function ServiceIcon({ name, ...props }) {
  const Icon = serviceIcons[name] ?? Spark;
  return <Icon {...props} />;
}
