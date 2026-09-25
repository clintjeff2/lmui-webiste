type Pattern = "grid" | "diagonal" | "radial" | "wave" | "concentric";
type Tone = "navy" | "garnet" | "gold" | "paper";

const gradients: Record<Tone, string> = {
  navy: "linear-gradient(135deg, #16305c 0%, #0a1730 65%, #08132a 100%)",
  garnet: "linear-gradient(135deg, #832a3d 0%, #4c1826 70%, #2c0e17 100%)",
  gold: "linear-gradient(135deg, #ddbc6a 0%, #a87f2a 60%, #6e5015 100%)",
  paper: "linear-gradient(135deg, #f2ecdd 0%, #e2d3ab 70%, #cbb87e 100%)",
};

function Pattern({ pattern, id }: { pattern: Pattern; id: string }) {
  switch (pattern) {
    case "grid":
      return (
        <pattern id={id} width="34" height="34" patternUnits="userSpaceOnUse">
          <path d="M34 0H0V34" fill="none" stroke="currentColor" strokeWidth="0.75" />
        </pattern>
      );
    case "diagonal":
      return (
        <pattern id={id} width="26" height="26" patternUnits="userSpaceOnUse" patternTransform="rotate(35)">
          <line x1="0" y1="0" x2="0" y2="26" stroke="currentColor" strokeWidth="1.2" />
        </pattern>
      );
    case "radial":
      return (
        <pattern id={id} width="60" height="60" patternUnits="userSpaceOnUse">
          <circle cx="30" cy="30" r="1.6" fill="currentColor" />
          <circle cx="0" cy="0" r="1.6" fill="currentColor" />
          <circle cx="60" cy="0" r="1.6" fill="currentColor" />
          <circle cx="0" cy="60" r="1.6" fill="currentColor" />
          <circle cx="60" cy="60" r="1.6" fill="currentColor" />
        </pattern>
      );
    case "wave":
      return (
        <pattern id={id} width="80" height="28" patternUnits="userSpaceOnUse">
          <path
            d="M0 14C10 4 20 24 40 14C60 4 70 24 80 14"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.2"
          />
        </pattern>
      );
    case "concentric":
    default:
      return (
        <pattern id={id} width="70" height="70" patternUnits="userSpaceOnUse">
          <circle cx="35" cy="35" r="8" fill="none" stroke="currentColor" strokeWidth="1" />
          <circle cx="35" cy="35" r="18" fill="none" stroke="currentColor" strokeWidth="1" />
          <circle cx="35" cy="35" r="28" fill="none" stroke="currentColor" strokeWidth="1" />
        </pattern>
      );
  }
}

/**
 * Stands in for photography across the site: a brand-toned gradient with a
 * procedural SVG motif keyed to context (engineering = grid, medicine =
 * radial, design = wave, ...). Zero network dependency, renders instantly,
 * and reads as deliberate art direction rather than a placeholder.
 */
export function VisualPanel({
  pattern = "grid",
  tone = "navy",
  className,
  monogram,
}: {
  pattern?: Pattern;
  tone?: Tone;
  className?: string;
  monogram?: boolean;
}) {
  const id = `vp-${pattern}-${tone}`;
  const patternColor = tone === "paper" ? "#7a6a45" : "rgba(255,255,255,0.9)";

  return (
    // Always fills its parent edge-to-edge: every call site sizes a
    // `position: relative` wrapper (aspect-ratio, explicit height, or
    // `inset: 0` of its own) and this just paints into it. Keeping
    // position/inset off the className and in this fixed inline style
    // means no consumer stylesheet can accidentally fail to size it —
    // an earlier version left `position` to the className, which inline
    // style always wins over, and every "cover the parent" usage
    // silently collapsed to 0 height as a result.
    <div
      className={className}
      style={{
        position: "absolute",
        inset: 0,
        overflow: "hidden",
        background: gradients[tone],
      }}
    >
      <svg width="100%" height="100%" style={{ position: "absolute", inset: 0, color: patternColor, opacity: 0.5 }}>
        <defs>
          <Pattern pattern={pattern} id={id} />
        </defs>
        <rect width="100%" height="100%" fill={`url(#${id})`} />
      </svg>
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            tone === "paper"
              ? "radial-gradient(circle at 30% 20%, rgba(255,255,255,0.5), transparent 60%)"
              : "radial-gradient(circle at 25% 15%, rgba(255,255,255,0.16), transparent 55%)",
        }}
      />
      {monogram && (
        <svg
          viewBox="0 0 48 48"
          style={{
            position: "absolute",
            right: "6%",
            bottom: "6%",
            width: "34%",
            height: "34%",
            opacity: 0.16,
          }}
        >
          <circle cx="24" cy="24" r="22" stroke="white" strokeWidth="1.2" fill="none" />
          <path
            d="M16 31V17.5L24 27L32 17.5V31"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
        </svg>
      )}
    </div>
  );
}
