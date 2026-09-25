export function Marquee({ items }: { items: string[] }) {
  const doubled = [...items, ...items];
  return (
    <div style={{ overflow: "hidden", position: "relative" }} className="marquee-mask">
      <div
        style={{
          display: "flex",
          width: "max-content",
          animation: "marquee 32s linear infinite",
        }}
      >
        {doubled.map((item, i) => (
          <span
            key={i}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 14,
              padding: "0 40px",
              fontFamily: "var(--font-display)",
              fontStyle: "italic",
              fontSize: "1.15rem",
              color: "rgba(255,255,255,0.55)",
              whiteSpace: "nowrap",
            }}
          >
            {item}
            <span style={{ color: "var(--gold-500)" }}>&#10022;</span>
          </span>
        ))}
      </div>
      <style dangerouslySetInnerHTML={{ __html: `
        .marquee-mask {
          -webkit-mask-image: linear-gradient(90deg, transparent, black 8%, black 92%, transparent);
          mask-image: linear-gradient(90deg, transparent, black 8%, black 92%, transparent);
        }
      ` }} />
    </div>
  );
}
