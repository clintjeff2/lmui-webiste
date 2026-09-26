import Image from "next/image";
import logoImage from "../data/images/lmu-web-logo.png";

export function LogoMark({ size = 40, light = false }: { size?: number; light?: boolean }) {
  const ring = light ? "#EDD9A3" : "#C69B3C";
  const inner = light ? "#0F1F3D" : "#0F1F3D";
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <circle cx="24" cy="24" r="22.5" stroke={ring} strokeWidth="1.4" />
      <circle cx="24" cy="24" r="17.5" fill={inner} />
      <path
        d="M16 31V17.5L24 27L32 17.5V31"
        stroke={ring}
        strokeWidth="2.1"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <circle cx="24" cy="24" r="22.5" stroke={ring} strokeOpacity="0.35" strokeWidth="6" />
    </svg>
  );
}

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <span style={{ display: "inline-flex", alignItems: "center", gap: 12 }}>
      <Image
        src={logoImage}
        alt="Landmark Metropolitan University logo"
        width={80}
        height={80}
        priority
      />
      <span style={{ display: "flex", flexDirection: "column", lineHeight: 1.05 }}>
        <span
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 600,
            fontSize: "1.18rem",
            color: light ? "#fff" : "var(--navy-900)",
            letterSpacing: "-0.01em",
          }}
        >
          Landmark
        </span>
        <span
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: "0.62rem",
            fontWeight: 600,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: light ? "rgba(255,255,255,0.6)" : "var(--muted)",
          }}
        >
          Metropolitan University
        </span>
        <span
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: "0.62rem",
            fontWeight: 600,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: light ? "rgba(255,255,255,0.6)" : "var(--muted)",
          }}
        >
          Institute
      </span>
    </span>
  </span>
  );
}
