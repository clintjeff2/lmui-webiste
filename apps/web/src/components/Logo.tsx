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
      <svg
        width="190"
        height="62"
        viewBox="0 0 190 62"
        role="img"
        aria-label="Landmark Metropolitan University Institute"
        style={{ display: "block", overflow: "visible" }}
      >
        <text
          x="0"
          y="22"
          textLength="190"
          lengthAdjust="spacingAndGlyphs"
          fill={light ? "#fff" : "var(--navy-900)"}
          fontFamily="var(--font-display)"
          fontSize="22"
          fontWeight="700"
        >
          Landmark
        </text>
        <text
          x="0"
          y="43"
          textLength="190"
          lengthAdjust="spacingAndGlyphs"
          fill={light ? "rgba(255,255,255,0.6)" : "var(--muted)"}
          fontFamily="var(--font-display)"
          fontSize="18"
          fontWeight="600"
        >
          Metropolitan
        </text>
        <text
          x="0"
          y="61"
          textLength="190"
          lengthAdjust="spacingAndGlyphs"
          fill={light ? "rgba(255,255,255,0.6)" : "var(--muted)"}
          fontFamily="var(--font-display)"
          fontSize="16"
          fontWeight="600"
        >
          University Institute
        </text>
      </svg>
  </span>
  );
}
